import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '594'),
    exact: true
  },
  {
    path: '/blog/01-01-2026-welcome',
    component: ComponentCreator('/blog/01-01-2026-welcome', 'e3d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '736'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '0f0'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '5d4'),
            routes: [
              {
                path: '/intro',
                component: ComponentCreator('/intro', 'fd3'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
