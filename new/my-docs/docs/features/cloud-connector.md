# Cloud Connector

Connect your AWS, GCP, or Azure accounts to manage cloud infrastructure from a single dashboard.



## Connect Your Cloud Account

To connect a new cloud account:

1. Click **+ Create Workspace** (top-right corner) → **Cloud Connector**
2. In the **Choose Cloud Provider** dropdown, select:
   - **Amazon Web Services (AWS)**
   - **Microsoft Azure**
   - **Google Cloud Platform (GCP)**

> 💡 Pro Tip: Use **Masa Bot** to say, “Connect my AWS account” — it will guide you through the process!



## Connected Cloud Accounts

View all your connected cloud accounts in one place.

### Account Card

Each connected account shows:

- **Provider** — The cloud platform (e.g., `AWS Cloud`)
- **Account** — Your account name (e.g., `vignesh_cm`)
- **Region** — Where your resources are deployed (e.g., `us-east-1`)
- **Account ID** — Last 6 digits of your account ID (e.g., `...610918`)
- **Status** — `Connected` (green badge)

> 🚫 To disconnect an account, click the **red X** button.



## Supported Providers

### Amazon Web Services (AWS)

- Manage EC2, S3, RDS, Lambda, VPC, and more
- Use IAM credentials for secure access
- Monitor costs and usage in real-time

### Microsoft Azure

- Manage VMs, Storage, SQL Database, Functions, and more
- Use Service Principal for secure access
- Integrate with Azure Active Directory

### Google Cloud Platform (GCP)

- Manage Compute Engine, Cloud Storage, BigQuery, and more
- Use Service Account Key for secure access
- View resource usage and billing



## Best Practices

✅ Always use **IAM roles** instead of access keys for production environments  
✅ Limit permissions to required services  
✅ Enable **CloudTrail** (AWS), **Azure Activity Logs**, or **GCP Audit Logs** for auditing  
✅ Regularly review connected accounts and permissions



> 💡 Pro Tip: Use **Masa Bot** to ask, “Show me all my connected accounts” or “Disconnect my GCP account.”

Let me know if you’d like to dive deeper into any provider!