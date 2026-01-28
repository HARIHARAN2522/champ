# OpenMetadata


## Overview
OpenMetadata is a unified platform for discovery, observability, and governance powered by a central metadata repository, in-depth lineage, and seamless team collaboration. It is one of the fastest-growing open-source projects with a vibrant community and adoption by a diverse set of companies in a variety of industry verticals. Based on Open Metadata Standards and APIs, supporting connectors to a wide range of data services, OpenMetadata enables end-to-end metadata management, giving you the freedom to unlock the value of your data assets.

## Minimum Hardware Requirements
OpenMetadata requires either MySQL or PostgreSQL as Backend Database and ElasticSearch or OpenSearch as Search Engine.

We recommend the following for the Production Grade OpenMetadata Installation -

### MySQL or PostgreSQL as Database
Our minimum specs recommendation for MySQL / PostgreSQL as database deployment is

4 vCPUs
16 GiB Memory
100 GiB Storage
These settings apply as well when using managed instances, such as AWS RDS or GCP CloudSQL or Azure Flexible Servers.

### Software Requirements
OpenMetadata currently supports -

- MySQL version 8.0.0 or higher
- PostgreSQL version 12.0 or higher
### ElasticSearch or OpenSearch as Search Instance
Our minimum specs recommendation for ElasticSearch / OpenSearch deployment is

- 2 vCPUs
- 8 GiB Memory
- 100 GiB Storage (per node)
- Master / Worker Nodes with at least 1 Master and 2 Worker Nodes

### Software Requirements
OpenMetadata currently supports -

- ElasticSearch version 8.X till 8.11.4
- OpenSearch version 2.19
These settings apply as well when using managed instances, such as AWS OpenSearch Service or Elastic Cloud on GCP, AWS, Azure.

### Apache Airflow as Ingestion Instance
Our minimum specs recommendation for Apache Airflow is

- 4 vCPU
- 16 GiB Memory
- 100 GiB Storage for Airflow Dags and Logs

### Software Requirements
OpenMetadata currently supports -

- Airflow version 2.10.5 till 3.1.5

## Architecture
OpenMetadata Unlock the value of data assets with an end-to-end metadata platform that includes data discovery, governance, data quality, observability, and people collaboration.

OpenMetadata depends on following components to build a metadata platform:

- JsonSchemas for defining Metadata Schemas
- Dropwizard/Jetty for REST APIs
- MySQL 8.x to store Metadata
- ElasticSearch 7.x to index Metadata and power search

<img 
  src="/images/openmetadata-arch.png" 
  alt="OpenMetadata-Arch" 
  style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }} 
/>