# Thanos
Thanos provides a global query view, high availability, data backup with historical, cheap data access as its core features in a single binary.

Those features can be deployed independently of each other. This allows you to have a subset of Thanos features ready for immediate benefit or testing, while also making it flexible for gradual roll outs in more complex environments.

In this quick-start guide, we will explain:

- How to ask questions, build and contribute to Thanos.
- A few common ways of deploying Thanos.
- Links for further reading.
Thanos will work in cloud native environments as well as more traditional ones. Some users run Thanos in Kubernetes while others on the bare metal.

## Dependencies 
Thanos aims for a simple deployment and maintenance model. The only dependencies are:

- One or more Prometheus v2.2.1+ installations with persistent disk.
- Optional object storage
    - Thanos is able to use many different storage providers, with the ability to add more providers as necessary.

## Quick Tutorial 
Check out the free, in-browser interactive tutorial Killercoda Thanos course. We will be progressively updating our Killercoda course with more scenarios.

On top of this, find our quick tutorial below.

### Prometheus 
Thanos is based on Prometheus. With Thanos, Prometheus always remains as an integral foundation for collecting metrics and alerting using local data.

Thanos bases itself on vanilla Prometheus. We plan to support all Prometheus versions beyond v2.2.1.

NOTE: It is highly recommended to use Prometheus v2.13.0+ due to its remote read improvements.

Always make sure to run Prometheus as recommended by the Prometheus team:

- Put Prometheus in the same failure domain. This means in the same network and in the same geographic location as the monitored services.
- Use a persistent disk to persist data across Prometheus restarts.
- Use local compaction for longer retentions.
- Do not change the minimum TSDB block durations.
- Do not scale out Prometheus unless necessary. A single Prometheus instance is already efficient.
- We recommend using Thanos when you need to scale out your Prometheus instance.

### Components 
Following the KISS and Unix philosophies, Thanos is comprised of a set of components where each fulfills a specific role.

- **Sidecar:** connects to Prometheus, reads its data for query and/or uploads it to cloud storage.
- **Store Gateway:** serves metrics inside of a cloud storage bucket.
- **Compactor:** compacts, downsamples and applies retention on the data stored in the cloud storage bucket.
- **Receiver:** receives data from Prometheus’s remote write write-ahead log, exposes it, and/or uploads it to cloud storage.
- **Ruler/Rule:** evaluates recording and alerting rules against data in Thanos for exposition and/or upload.
- **Querier/Query:** implements Prometheus’s v1 API to aggregate data from the underlying components.
- **Query Frontend:** implements Prometheus’s v1 API to proxy it to Querier while caching the response and optionally splitting it by queries per day.

Deployment with Thanos Sidecar for Kubernetes:

<img
src="/images/thanos-arch.png"
alt="Thanos Architecture"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>
Deployment via Receive in order to scale out or integrate with other remote write-compatible sources:
<img
src="/images/thanos-arch1.png"
alt="Thanos Architecture"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>

