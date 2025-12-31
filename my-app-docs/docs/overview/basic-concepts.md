# Basic Concepts

Understanding these key terms will help you navigate CloudMaSa effectively.



## 1. **Workspace**

A **Workspace** is a project container where you group related resources (clusters, workflows, databases, etc.).

>   Use separate workspaces for dev/staging/prod  
>   Name workspaces clearly (e.g., `ProjectX-Dev`)  
>   Assign roles: Admin, Editor, Viewer



## 2. **Cluster**

Manage Kubernetes clusters across cloud providers from a single interface.

>   Supported Platforms: Amazon EKS, Google GKE, Azure AKS, Self-managed Kubernetes  
>   Monitor real-time metrics: CPU/Memory usage, Pod status, Node health  
>   Scale manually or auto-scale based on load



## 3. **Workflow**

Automate your CI/CD pipelines with visual workflow builder.

>   Drag-and-drop steps: Build, Test, Deploy, Notify  
>   Triggers: On Git push, schedule, or manual  
>   Variables: Predefined (`{{GIT_BRANCH}}`) or custom



## 4. **Policy**

Define security, compliance, and operational rules for your infrastructure.

>   Built-in Policies: Enforce HTTPS, disable root access, cost alerts  
>   Apply to workspaces or clusters  
>   Enforcement: Audit Mode (log violations) or Enforce Mode (block non-compliant actions)



## 5. **Masa Bot**

Your AI-powered DevOps assistant — ask questions, get suggestions, and automate tasks.

>   Ask for examples: “Show me a sample workflow for Node.js”  
>   Use natural language: “I want to deploy my app to AWS”  
>   Review bot actions before executing



> 💡 Pro Tip: Policies can be versioned and shared across teams.

Let me know if you’d like to dive deeper into any concept!