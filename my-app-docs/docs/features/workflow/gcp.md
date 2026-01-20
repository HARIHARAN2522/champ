Automate Your Google Cloud Infrastructure with a Guided, Visual Workflow — No CLI, No Terraform Files, No Guesswork

The **GCP Cloud Workflow** in CloudMaSa walks you through a 5-step process to securely connect, configure, and deploy Google Cloud resources in minutes. Whether you're provisioning a Compute Engine VM, launching a GKE cluster, or setting up a full CI/CD pipeline, everything is done through an intuitive UI that generates production-ready Infrastructure-as-Code behind the scenes.

All deployments are:

- Secure: Credentials encrypted, least-privilege enforced
- Auditable: Full IaC preview before deployment
- Cost-aware: Real-time pricing estimates
- Reusable: Save configurations as templates for your team
- Let’s walk through each step.

### How It Works
The **GCP workflow** is divided into 5 simple steps:

## 1. Connection — Connect to your GCP account
<img
src="/images/gcp-workflow-connection.png"
alt="GCP connection"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>

Start by securely connecting CloudMaSa to your Google Cloud project. This one-time setup enables full infrastructure automation without leaving the platform.

Here’s what you’ll do:

- Select GCP as your cloud provider
- Choose an existing connection or upload/paste your GCP Service Account Key (JSON)
- Click “Parse & Validate Key” to verify permissions instantly
- Select region (e.g., us-central1)
- Save the connection for future workflows

## 2. Existing Resources — View resources already deployed via IaC (Terraform)
<img
src="/images/gcp-workflow-existing-resource.png"
alt="GCP Existing Resources Workflow"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>

Before you build anything new, CloudMaSa helps you see everything already deployed in your GCP project — no more hunting through consoles or CLI tools.

This screen shows:

- All Terraform-managed deployments (like dep-1767006374290)
- Resource type (e.g., GKE, Compute Engine) and count
- Click any deployment to view details, logs, or destroy it safely
- “New Deployment” button to start fresh with a clean slate

## 3. Modules — Select which cloud resources to deploy
<img
src="/images/gcp-workflow-modules.png"
alt="GCP Modules"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>

Once connected, choose from a curated library of pre-built, secure, and scalable modules — each representing a set of related GCP resources.

These modules are designed to follow Google Cloud best practices and can be deployed individually or combined to build complex architectures.

Search bar to filter modules by name (e.g., “Compute”, “GKE”, “VPC”)

- Module cards showing:
- Name & icon
- Estimated hourly/monthly cost
- Short description
- Required dependencies (e.g., VPC, Region)
## 4. Configure — Customize module settings
<img
src="/images/gcp-workflow-configure.png"
alt="GCP configure"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>

This is where CloudMaSa turns complexity into clarity. Before deploying, you get a complete preview of your configuration — including cost, code, and provider settings.

Here’s what you’ll see:

- Provider Details: GCP, region global, Project ID ***********
- Selected Module: Compute Engine — Launch virtual machines on Google Cloud Platform
- Estimated Cost: $36.50/month (based on standard pricing — actuals may vary)
- Infrastructure-as-Code Preview: See the exact Terraform code that will be executed — click “Show Preview” to inspect

## 5. Create — Deploy your infrastructure
<img
src="/images/gcp-workflow-create.png"
alt="GCP create"
style={{ width: '90%', height: 'auto', display: 'block', margin: '0 auto' }}
/>

You’ve reviewed. You’ve confirmed. Now it’s time to deploy your resources — safely, predictably, and with real-time feedback.

The final summary shows:

- Provider: GCP
- Region: global
- Modules: 1 selected
- Estimated Monthly Cost: $36.50
- Click “Create Resources” — and CloudMaSa handles the rest. Deployment typically takes 2–5 minutes, depending on complexity.

> 💡 Pro Tip: Use Masa Bot to automate this process with natural language commands!