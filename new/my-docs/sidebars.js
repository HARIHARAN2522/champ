module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: '🚀 Welcome to CloudMaSa',
    },


     {
      type: 'category',
      label: 'OVERVIEW',
      collapsed: false,
      items: [
        'overview/what-is-cloudmasa',
        'overview/architecture',
        'overview/basic-concepts',
        'overview/products',
      ],
    },

    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/first-login',
        'getting-started/dashboard-overview',
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      collapsed: true,
      items: [
        'features/dashboard',
        'features/workspace',
        'features/cloud-connector',
        'features/clusters',
        'features/work-flow',
        'features/scm-connector',
        'features/tools',
        'features/database',
        'features/policies',
        'features/masa-bot',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
          'integrations/aws',
          'integrations/aws-connection',
          'integrations/aws-existing-resources',
          'integrations/aws-modules',
          'integrations/aws-configure',
          'integrations/aws-create',
          'integrations/github-gitlab',
          'integrations/argo-cd',
          'integrations/prometheus-grafana',
        ],  
        
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: true,
      items: [
        'api/overview',
        'api/authentication',
        'api/workspaces',
        'api/cloud-accounts',
        'api/clusters',
        'api/workflows',
      ],
    },
    {
      type: 'category',
      label: 'Guides & Best Practices',
      collapsed: true,
      items: [
        'guides/automate-k8s-deploy',
        'guides/team-collaboration',
        'guides/troubleshooting',
      ],
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
    {
      type: 'doc',
      id: 'changelog',
      label: 'Changelog',
    },
  ],
};