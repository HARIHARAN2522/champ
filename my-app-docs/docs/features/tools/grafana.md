# Grafana
Grafana Cloud is a highly available, performant, and scalable observability platform for your applications and infrastructure. It provides a centralized view over all of your observability data, whether the data lives in Grafana Cloud Metrics services or in your own bare-metal and cloud environments. With native support for many popular data sources such as Prometheus, Elasticsearch, and Amazon CloudWatch, all you have to do to begin creating dashboards and querying metrics data is to configure data sources in Grafana Cloud.

## Grafana dashboards overview
Have you ever wondered what a dashboard is? In the observability world, this term is frequently used, but what exactly does it mean? The concept is borrowed from automobiles, where a dashboard gives drivers access to the controls necessary to operate a vehicle. Similarly, digital dashboards help us comprehend and manage systems. This topic explains how Grafana dashboards function, enabling you to create your own with greater ease.

The following image illustrates a sample Grafana dashboard:
<img 
  src="/images/grafana-dashboard.png" 
  alt="Grafana Dashboard" 
  style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }} 
/>
A Grafana dashboard consists of panels displaying data in beautiful graphs, charts, and other visualizations. These panels are created using components that transform raw data from a data source into visualizations. The process involves passing data through three gates: a plugin, a query, and an optional transformation.

## Architecture overview
This page provides an overview of the architecture of the Graphite proxy services and how they interact with the other GEM services.
<img 
  src="/images/grafana-arch.png" 
  alt="Grafana Architecture" 
  style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }} 
/>

### API
The Graphite proxy in GEM exposes the same write and read endpoints as Grafana Cloud Graphite. All endpoints have a /graphite/ prefix.

If using access policies, write endpoints require the metrics:write scope and read endpoints require the metrics:read scope.
### Metrics ingestion
This section explains the components of a typical ingestion pipeline. The use of Carbon-relay-ng is optional, if the metrics producer has the ability to send its metrics in the right format via HTTP(S) directly to the Graphite write proxy then Carbon-relay-ng could be omitted, but since Carbon-relay-ng comes with lots of useful features such as buffering of failed writes it is recommended to use it.