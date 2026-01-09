# Module Configuration

Customize module settings before deployment.



## Example: Configure SNS

When you select the **SNS** module, you’ll see a configuration panel:

### Required Fields

- **Resource Name** — Enter a unique name (e.g., `MyProjectAlerts`)
- **Display Name** — Human-readable name (e.g., “MyProject Alert Notifications”)
- **Email Subscription** — Email address to receive notifications (e.g., `admin@company.com`)



## Why Configure?

- Set resource names to avoid conflicts
- Customize behavior (e.g., email alerts)
- Define dependencies (e.g., S3 bucket for CloudTrail)



> 💡 Pro Tip: Use **Masa Bot** to generate config files automatically — just ask, “Generate SNS config for MyProject.”

Let me know if you’d like to add **advanced configuration options** or **YAML/JSON export** next!