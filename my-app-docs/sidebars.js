module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: '  Welcome to CloudMaSa',
    },


     {
      type: 'category',
      label: 'OVERVIEW',
      collapsed: false,
      items: [
        'overview/what-is-App-cloudmasa',
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
        'getting-started/get-access', 
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
        {
      type: 'category',
      label: 'Workflow',
      collapsed: true,
      items: [
        'features/workflow/overview', 
        'features/workflow/aws',
        'features/workflow/gcp',
        'features/workflow/azure'
      ],
        },
        'features/scm-connector',
        'features/database',
        'features/policies',
        'features/masa-bot',
      ],
    },
   {
  type: 'category',
  label: 'TOOLS',
  collapsed: true,
  items: [
    'features/tools/overview',
    'features/tools/argo-cd',
    'features/tools/gitlab',
    'features/tools/jenkins',
    'features/tools/prometheus',
    'features/tools/grafana',
    'features/tools/keda',
    'features/tools/loki',
    'features/tools/nexus',
    'features/tools/sonarqube',
    'features/tools/hashicorp-vault',
    'features/tools/nginx',
    'features/tools/harbor',
    'features/tools/sourcegraph',
    'features/tools/reportportal',
    'features/tools/opa-gatekeeper',
    'features/tools/thanos',
    'features/tools/kibana',
    'features/tools/alertmanager',
    'features/tools/ghost',
    'features/tools/influx-db',
    'features/tools/elasticsearch',
    'features/tools/fluentbit',
    'features/tools/percona-everest',
    'features/tools/wordpress',
    'features/tools/karpenter',
    'features/tools/jaegor',
    'features/tools/openmetadata',
  ],
},
    {
      type: 'category',
      label: 'Guides & Best Practices',
      collapsed: true,
      items: [
      
        'guides/team-collaboration',
        'guides/troubleshooting',
      ],
    },
    {
      type: 'doc',
      id: 'changelog',
      label: 'Changelog',
    },
  ],
};