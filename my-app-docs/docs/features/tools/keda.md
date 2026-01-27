# Keda

## What is KEDA?
KEDA is a Kubernetes-based Event Driven Autoscaler. With KEDA, you can drive the scaling of any container in Kubernetes based on the number of events needing to be processed.

KEDA is a single-purpose and lightweight component that can be added into any Kubernetes cluster. KEDA works alongside standard Kubernetes components like the Horizontal Pod Autoscaler and can extend functionality without overwriting or duplication. With KEDA, you can explicitly map the apps you want to use event-driven scale, with other apps continuing to function. This makes KEDA a flexible and safe option to run alongside any number of any other Kubernetes applications or frameworks.

As an alternate to scaling event-driven code as deployments you can also run and scale your code as Kubernetes Jobs. The primary reason to consider this option is to handle processing long-running executions. Rather than processing multiple events within a deployment, for each detected event a single Kubernetes Job is scheduled. That job will initialize, pull a single event from the message source, and process to completion and terminate.

For example, if you wanted to use KEDA to run a job for each message that lands on a RabbitMQ queue, the flow may be:

1) When no messages are awaiting processing, no jobs are created.
2) When a message arrives at the queue, KEDA creates a job.
3) When the job starts running, it pulls a single message and processes it to completion.
4) As additional messages arrive, additional jobs are created. Each job processes a single message to completion.
5) Periodically remove completed/failed job by the SuccessfulJobsHistoryLimit and FailedJobsHistoryLimit.

## Pausing autoscaling
It can be useful to instruct KEDA to pause the autoscaling of objects, to do to cluster maintenance or to avoid resource starvation by removing non-mission-critical workloads.

This is preferable to deleting the resource because it removes the instances it is running from operation without touching the applications themselves. When ready, you can then reenable scaling.

## KEDA Architecture
The diagram below shows how KEDA works in conjunction with the Kubernetes Horizontal Pod Autoscaler, external event sources, and Kubernetes’ etcd data store:
<img 
  src="/images/keda-arch.png" 
  alt="Keda-Architecture" 
  style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto' }} 
/>

External events, like an increase in queue messages, trigger the ScaledObject, which sets the scaling rules. The Controller handles the scaling, while the Metrics Adapter sends data to the HPA for real-time scaling decisions. Admission Webhooks ensure your configuration is correct and won’t cause problems.

This setup lets Kubernetes adjust resources automatically based on what’s happening outside, keeping things efficient and responsive.