# Team Collaboration

CloudMaSa is built for teams. With role-based access and shared workspaces, everyone in your organization can collaborate securely and efficiently without stepping on each other’s toes.

## Roles and Permissions

Every team member is assigned a role that defines what they can see and do. There are three roles: Admin, Editor, and Viewer. Admins have full control and can customize access even further based on your company’s needs.

### Admin

Admins have complete access to the workspace. They can:

- View, create, edit, or delete any resource
- Invite new users and remove existing ones
- Assign or change roles for any team member
- Configure global settings and integrations
- Set fine-grained access rules (for example, limiting certain users to specific environments)
- Review full audit logs showing who did what and when

Only Admins can promote someone else to Admin or adjust system-wide permissions.

### Editor

Editors can actively contribute to projects without having full control. They can:

- Create and update documentation, workflows, and configurations
- Deploy applications or Helm charts within allowed scopes
- Comment on workflows and mention teammates using @username
- View activity logs for resources they’re working on

However, Editors cannot invite users, delete core infrastructure, or change anyone’s role—including their own.

### Viewer

Viewers have read-only access. This role is ideal for stakeholders, auditors, or team members who need visibility but not editing rights. Viewers can:

- Browse all visible documentation and dashboards
- See real-time status of deployments and resources
- Receive notifications when mentioned or subscribed to updates
- Download or share public reports (if sharing is enabled by an Admin)

They cannot make changes, view secrets, or access audit trails unless explicitly permitted.

## Inviting Team Members

Adding someone to your workspace takes just a few clicks:

1. Go to **Settings > Team**
2. Click **+ Invite User**
3. Enter their email address
4. Choose their role: Admin, Editor, or Viewer
5. (Optional) Apply custom access limits, like restricting them to a specific environment
6. Click **Send Invitation**

The person will receive an email with a secure link to join. Once they accept, they’ll appear in your team list right away—and their permissions apply instantly.

## Shared Workspaces

All team members work in the same live workspace. That means:

- Everyone sees the same dashboards, docs, and resource states
- Changes appear in real time—no need to refresh the page
- You can see who’s currently online or who last updated a workflow
- Every action is recorded in an audit log, including who made the change, when, and what was affected

To keep communication smooth, use comments directly inside workflows or documentation pages. Tag teammates with **@mentions** to ask questions, request reviews, or share updates—all without switching apps.

## Custom Access Control (Admin Only)

Beyond the standard roles, Admins can define more precise rules. For example:

- Allow an Editor to deploy only to staging, not production
- Let a Viewer access just the “Getting Started” section of your docs
- Disable file exports for external collaborators

This ensures your team follows security best practices while staying productive.