// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      {/* Hero Banner */}
      <header
        style={{
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
          padding: '4rem 0',
          textAlign: 'center',
        }}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 'var(--ifm-container-width)',
            padding: '0 var(--ifm-spacing-horizontal)',
          }}>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#2d2d2d',
              margin: '0 0 1rem',
            }}>
            {siteConfig.title}
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#666',
              maxWidth: '600px',
              margin: '0 auto 2rem',
            }}>
            {siteConfig.tagline}
          </p>
          <Link
            className="button button--primary button--lg"
            style={{ borderRadius: '6px', fontWeight: '600' }}
            to="/docs/">
            Get Started
          </Link>
        </div>
      </header>

      {/* Main Content — Streamlit-style cards */}
      <main
        style={{
          margin: '0 auto',
          maxWidth: 'var(--ifm-container-width)',
          padding: '3rem var(--ifm-spacing-horizontal) 5rem',
        }}>
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--ifm-font-color-base)',
            maxWidth: '800px',
            margin: '0 0 2.5rem',
          }}>
          This guide explains how MyApp works, how to install it, and how to create your first app!
        </p>

        {/* Card 1 */}
        <div className="card">
          <div className="card-icon">⚙️</div>
          <div className="card-content">
            <h3>
              <Link to="/docs/get-started/installation">Installation</Link>
            </h3>
            <p>Set up your development environment on Windows, macOS, or Linux.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card-icon">📚</div>
          <div className="card-content">
            <h3>
              <Link to="/docs/get-started/fundamentals">Fundamentals</Link>
            </h3>
            <p>Learn MyApp's core concepts: data flow, widgets, caching, and theming.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card-icon">✨</div>
          <div className="card-content">
            <h3>
              <Link to="/docs/get-started/first-steps">First Steps</Link>
            </h3>
            <p>Build your first app with real data, charts, and interactive controls.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}