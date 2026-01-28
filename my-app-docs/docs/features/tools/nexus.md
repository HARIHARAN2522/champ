# Nexus

## AWS EKS Kubernetes High Availability IQ Reference Architecture
This reference architecture describes how to deploy a high-availability (HA) Sonatype IQ Server cluster on Amazon Elastic Kubernetes Service (EKS). It’s designed for production-grade Kubernetes environments that demand fault tolerance, scalability, and consistent performance under sustained workloads.

By following this architecture, organizations can achieve the following:

- Continuous availability through multi-instance clustering and automatic failover
- Enterprise-scale performance to support large portfolios with high scan frequency
- Resilience and fault tolerance across multiple availability zones
- Centralized data integrity with shared database and coordinated object storage

This document outlines the recommended deployment topology and technical specifications for each infrastructure layer, along with links to Terraform resources for automated provisioning.
<img 
  src="/images/nexus-arch.png" 
  alt="Loki Architecture" 
  style={{ width: '70%', height: 'auto', display: 'block', margin: '0 auto' }} 
/>

### Infrastructure Specifications
The associated Terraform for this reference architecture will deploy infrastructure that meets the following specifications for each layer:

### Compute Layer (Amazon EKS)
- 3 Sonatype IQ Server pods (HPA: 2-5 replicas max)
- CPU: 4 cores request / 6 cores limit per pod (adjusted for node capacity)
- Memory: 16Gi request / 24Gi limit per pod (adjusted for node capacity)
- Java Heap: -Xms24g -Xmx24g with G1GC
- Managed Kubernetes control plane (version 1.30)
- Auto-scaling node groups (3 nodes minimum, 2-5 max)
- Node Instance Type: m5d.2xlarge (8 vCPU, 32GB RAM per node)
- Horizontal Pod Autoscaler based on CPU (70%) / Memory (80%) utilization
- Pod anti-affinity for distribution across nodes/AZs
- Rolling update deployment strategy
- Health Checks: Port 8070 /ping (ALB), Port 8071 /healthcheck (Kubernetes)

### Database Layer (Amazon Aurora PostgreSQL)
- Aurora PostgreSQL 15.8 (Managed Cluster)
- Instance Class: db.r6g.4xlarge (16 vCPU, 128GB RAM per instance)
- Cluster: 2+ instances (1 writer + 1+ readers)
- Multi-AZ deployment with automatic failover (~30 seconds)
- Continuous backups with 7-day retention
- Encryption at rest and in transit enabled
- Kubernetes secrets integration for credentials

### Storage Layer (Amazon EFS)
- Elastic File System with CSI driver integration
- General Purpose performance mode
- Provisioned throughput: 100 MiB/s
- StorageClass: efs-storageclass
- PersistentVolumeClaim: nexus-iq-pvc (ReadWriteMany)
- Access Points with POSIX permissions (UID/GID: 1000:1000)
- Cross-AZ mount targets for availability
- Shared /sonatype-work directory for clustering
- Encryption at rest and in transit

### Logging Architecture (Fluentd)
- Fluentd sidecars in each IQ Server pod
- Fluentd aggregator (DaemonSet) for centralized collection
- CloudWatch Logs integration with IRSA authentication
- Unified log group: /eks/nexus-iq-ha/nexus-iq-server
- Log streams: application/, request/, audit/, policy-violation/, stderr/, fluentd/

### Network & Security
- VPC with public, private, and database subnets across multiple AZs
- AWS Load Balancer Controller for native Kubernetes ingress
- Security Groups following least-privilege principle
- NAT Gateways for outbound internet access from private subnets
- Kubernetes RBAC for service account permissions
- Pod security contexts for non-root execution (UID/GID: 1000)
- IRSA (IAM Roles for Service Accounts) for CloudWatch access

### Limitations
- The architecture does not include disaster recovery across regions (multi-region failover).
- High-volume scan throughput may require tuning of database connections, thread pools, and queue sizes based on workload.