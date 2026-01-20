Automate your Azure Infrastructure with a Guided, Visual Workflow — No CLI, No ARM Templates, No Guesswork

The **Azure Cloud Workflow** in CloudMaSa walks you through a 5-step process to securely connect, configure, and deploy Azure resources in minutes. Whether you're provisioning a Virtual Network, launching an AKS cluster, or setting up a full CI/CD pipeline, everything is done through an intuitive UI that generates production-ready Infrastructure-as-Code behind the scenes.

All deployments are:
-  **Secure**: Credentials encrypted, least-privilege enforced  
-  **Auditable**: Full IaC preview before deployment  
-  **Cost-aware**: Real-time pricing estimates  
-  **Reusable**: Save configurations as templates for your team

Let’s walk through each step.

### How It Works

The Azure workflow is divided into 5 simple steps:

## 1. Connection — Connect to your Azure account
<img
src="/images/azure-workflow-connection.png"
alt="Azure connection"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>

Start by securely connecting CloudMaSa to your Azure subscription. This one-time setup enables full infrastructure automation without leaving the platform.

Here’s what you’ll do:

- Select Azure as your cloud provider
- Choose an existing connection or enter new Service Principal credentials:
- Client ID
- Client Secret
- Tenant ID
- Subscription ID
- Click “Test Connection” to verify permissions instantly
- Save the connection for future workflows

## 2. Existing Resources — View resources already deployed via IaC (Terraform)
<img
src="/images/azure-workflow-existing.png"
alt="Azure Existing Resources Workflow"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>

Before you build anything new, CloudMaSa helps you see everything already deployed in your Azure account — no more hunting through consoles or CLI tools.

This screen shows:

- All Terraform-managed deployments (like dep-1767006374290)
- Resource type (e.g., AKS, VM, VNet) and count
- Click any deployment to view details, logs, or destroy it safely
- “New Deployment” button to start fresh with a clean slate

## 3. Modules — Select which cloud resources to deploy
<img
src="/images/azure-workflow-modules.png"
alt="Azure Modules"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>

Once connected, choose from a curated library of pre-built, secure, and scalable modules — each representing a set of related Azure resources.

These modules are designed to follow Azure best practices and can be deployed individually or combined to build complex architectures.

Search bar to filter modules by name (e.g., “AKS”, “VM”, “VNet”)

- Module cards showing:
- Name & icon
- Estimated hourly/monthly cost
- Short description
- Required dependencies (e.g., Subscription, Region)


## 4. Configure — Customize module settings
<img
src="/images/azure-workflow-configure.png"
alt="Azure configure"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>

This is where CloudMaSa turns complexity into clarity. Before deploying, you get a complete preview of your configuration — including cost, code, and provider settings.

Here’s what you’ll see:

- Provider Details: Azure, region eastus, Account ID ***********
- Selected Module: AKS Cluster — Managed Kubernetes service for container orchestration
- Estimated Cost: $0.00/month (based on standard pricing — actuals may vary)
- Infrastructure-as-Code Preview: See the exact Terraform code that will be executed — click “Show Preview” to inspect

## 5. Create — Deploy your infrastructure
<img
src="/images/azure-workflow-create.png"
alt="Azure create"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>

You’ve reviewed. You’ve confirmed. Now it’s time to deploy your resources — safely, predictably, and with real-time feedback.

The final summary shows:

- Provider: Azure
- Region: eastus
- Modules: 1 selected
- Estimated Monthly Cost: $0.00
- Click “Create Resources” — and CloudMaSa handles the rest. Deployment typically takes 2–5 minutes, depending on complexity.

> 💡 Pro Tip: Use Masa Bot to automate this process with natural language commands!