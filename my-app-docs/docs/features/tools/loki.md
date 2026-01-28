# Loki
## Overview
Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus. Loki differs from Prometheus by focusing on logs instead of metrics, and collecting logs via push, instead of pull.

Loki is designed to be very cost effective and highly scalable. Unlike other logging systems, Loki does not index the contents of the logs, but only indexes metadata about your logs as a set of labels for each log stream.

A log stream is a set of logs which share the same labels. Labels help Loki to find a log stream within your data store, so having a quality set of labels is key to efficient query execution.

Log data is then compressed and stored in chunks in an object store such as Amazon Simple Storage Service (S3) or Google Cloud Storage (GCS), or even, for development or proof of concept, on the filesystem. A small index and highly compressed chunks simplify the operation and significantly lower the cost of Loki.

<img 
  src="/images/loki-arch.png" 
  alt="Loki Architecture" 
  style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }} 
/>

## Loki features
- **Scalability** - Loki is designed for scalability, and can scale from as small as running on a Raspberry Pi to ingesting petabytes a day. In its most common deployment, “simple scalable mode”, Loki decouples requests into separate read and write paths, so that you can independently scale them, which leads to flexible large-scale installations that can quickly adapt to meet your workload at any given time. If needed, each of the Loki components can also be run as microservices designed to run natively within Kubernetes.

- **Multi-tenancy** - Loki allows multiple tenants to share a single Loki instance. With multi-tenancy, the data and requests of each tenant is completely isolated from the others. Multi-tenancy is configured by assigning a tenant ID in the agent.

- **Third-party integrations** - Several third-party agents (clients) have support for Loki, via plugins. This lets you keep your existing observability setup while also shipping logs to Loki.

- **Efficient storage** - Loki stores log data in highly compressed chunks. Similarly, the Loki index, because it indexes only the set of labels, is significantly smaller than other log aggregation tools. By leveraging object storage as the only data storage mechanism, Loki inherits the reliability and stability of the underlying object store. It also capitalizes on both the cost efficiency and operational simplicity of object storage over other storage mechanisms like locally attached solid state drives (SSD) and hard disk drives (HDD).
The compressed chunks, smaller index, and use of low-cost object storage, make Loki less expensive to operate.

- **LogQL, the Loki query language** - LogQL is the query language for Loki. Users who are already familiar with the Prometheus query language, PromQL, will find LogQL familiar and flexible for generating queries against the logs. The language also facilitates the generation of metrics from log data, a powerful feature that goes well beyond log aggregation.

- **Alerting** - Loki includes a component called the ruler, which can continually evaluate queries against your logs, and perform an action based on the result. This allows you to monitor your logs for anomalies or events. Loki integrates with Prometheus Alertmanager, or the alert manager within Grafana.

- **Grafana integration** - Loki integrates with Grafana, Mimir, and Tempo, providing a complete observability stack, and seamless correlation between logs, metrics and traces.

## Loki architecture
Grafana Loki has a microservices-based architecture and is designed to run as a horizontally scalable, distributed system. The system has multiple components that can run separately and in parallel. The Grafana Loki design compiles the code for all components into a single binary or Docker image. The -target command-line flag controls which component(s) that binary will behave as.

To get started easily, run Grafana Loki in “single binary” mode with all components running simultaneously in one process, or in “simple scalable deployment” mode, which groups components into read, write, and backend parts.

Grafana Loki is designed to easily redeploy a cluster under a different mode as your needs change, with no configuration changes or minimal configuration changes.

<img 
  src="/images/loki-arch1.png" 
  alt="Loki Architecture" 
  style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }} 
/>

## Storage
Loki stores all data in a single object storage backend, such as Amazon Simple Storage Service (S3), Google Cloud Storage (GCS), Azure Blob Storage, among others. This mode uses an adapter called index shipper (or short shipper) to store index (TSDB or BoltDB) files the same way we store chunk files in object storage. This mode of operation became generally available with Loki 2.0 and is fast, cost-effective, and simple. It is where all current and future development lies.

Prior to 2.0, Loki had different storage backends for indexes and chunks. For more information, refer to Legacy storage.

### Data format
Grafana Loki has two main file types: index and chunks.

- The index is a table of contents of where to find logs for a specific set of labels.
- The chunk is a container for log entries for a specific set of labels.