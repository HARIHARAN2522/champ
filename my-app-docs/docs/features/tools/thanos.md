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