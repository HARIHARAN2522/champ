# Jenkins
## What is Jenkins?
Jenkins is a self-contained, open source automation server which can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software.

Jenkins can be installed through native system packages, Docker, or even run standalone by any machine with a Java Runtime Environment (JRE) installed.

## Using Jenkins
This chapter contains topics for typical Jenkins users (of all skill levels) about Jenkins usage which is outside the scope of the core Jenkins features: Pipeline and Blue Ocean.

If you want to create and configure a Pipeline project through a Jenkinsfile or through Blue Ocean, or you wish to find out more about these core Jenkins features, refer to the relevant topics within the respective Pipeline and Blue Ocean chapters.

## Architecture
The audience is Java developers familiar with Jenkins (as users) who want to understand how Jenkins works internally.

### Dataflow diagram
This dataflow represents Jenkins as a "box". The goal is to have a view of network flow that goes in and out.

This diagram is a high level view centered on Jenkins core.

Please note that:

- Some plugins such as the LDAP plugin can contribute to add new network flow.
- All port numbers can be changed by configuration. The port in the diagram is the default port
- Jenkins can be configured to use TLS (HTTPS)
- It’s not mandatory to have all agent types, there is one instance of each agent to illustrate communication types

<img 
  src="/images/jenkins-arch.png" 
  alt="Jenkins Architecture" 
  style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }} 
/>
