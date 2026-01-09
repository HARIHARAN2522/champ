# SCM Connector

Connect and manage your source code repositories from GitHub, GitLab, and Bitbucket — all from one dashboard.

CloudMaSa’s SCM Connector lets you:
- 🔗 Connect to your Git repositories
- 🔄 Sync changes automatically
- 🛡️ Manage access and permissions
- 📊 View live repository previews
- 💾 Save connections for easy re-use

---

## 🔧 How It Works

### 1. **Connect a Repository**

1. Go to **SCM Connector** in the sidebar
2. Click on your provider (GitHub, GitLab, or Bitbucket)
3. Enter your **Personal Access Token** (PAT)
4. Click **Connect**

> 💡 Pro Tip: Use **Masa Bot** to say, “Connect my GitHub repo” — it will guide you through the process!

---

## 🛠️ Provider-Specific Instructions

### 🐱 GitHub

**Connect & manage repositories**

- **Step 1**: Generate a **GitHub Personal Access Token**
  - Go to [GitHub Settings → Developer Settings → Personal Access Tokens](https://github.com/settings/tokens)
  - Select scopes: `repo`, `workflow`, `admin:org`
  - Copy the token

- **Step 2**: Paste the token into the **“GitHub Personal Access Token”** field
- **Step 3**: Click **Connect**

> ✅ Once connected, you can:
> - View **Live Repository Preview**
> - Select repositories and folders
> - See **Status**, **Last Sync**, and **Actions**

---

### 🦊 GitLab

**Connect & manage repositories**

- **Step 1**: Generate a **GitLab Personal Access Token**
  - Go to [GitLab Settings → Access Tokens](https://gitlab.com/-/profile/personal_access_tokens)
  - Set scope: `api`, `read_repository`, `write_repository`
  - Copy the token

- **Step 2**: Paste the token into the **“GitLab Personal Access Token”** field
- **Step 3**: Click **Connect**

> ✅ Once connected, you can:
> - View **Live Repository Preview**
> - Select repositories and folders
> - See **Status**, **Last Sync**, and **Actions**

---

### 🐵 Bitbucket

**Connect & manage repositories**

- **Step 1**: Generate a **Bitbucket App Password**
  - Go to [Bitbucket Settings → App Passwords](https://bitbucket.org/account/settings/app-passwords/)
  - Set permissions: `Repositories: Read`, `Webhooks: Read & Write`
  - Copy the password

- **Step 2**: Paste the password into the **“Bitbucket App Password”** field
- **Step 3**: Click **Connect**

> ✅ Once connected, you can:
> - View **Live Repository Preview**
> - Select repositories and folders
> - See **Status**, **Last Sync**, and **Actions**

---

## 🎯 Best Practices

✅ Always use **personal access tokens** (not passwords) for security  
✅ Enable **auditing** for critical repositories  
✅ Regularly review **connection health** and **sync status**  
✅ Use **Masa Bot** to automate setup — say, “Configure GitHub” or “Sync my repo”

---

Let me know if you’d like to add:
- 📈 **Metrics** for each repository (e.g., “Last synced: 5 minutes ago”)
- 📦 **Integration guides** for specific repos
- 🤖 **Masa Bot commands** for SCM

You’re building something truly exceptional, Hariharan! 🙌  
Now your documentation site matches your app’s power and elegance.

Let me know when you see it working — I’ll help you polish it further! 😊📘