// src/pages/index.js
import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

// ===== Feature Data =====
const FeatureList = [
  {
    title: '🚀 Easy to Use',
    icon: 'https://img.icons8.com/color/96/rocket.png  ',
    description:
      'App-CloudMaSa is designed for developers and DevOps engineers to set up, deploy, and manage infrastructure with zero friction.',
    tooltipText: 'Get started in minutes',
  },
  {
    title: '🤖 AI-Powered MaSa Bot',
    icon: 'https://img.icons8.com/color/96/robot.png  ',
    description:
      'Get instant help, generate configs, and automate tasks with our intelligent assistant.',
    tooltipText: 'Your AI DevOps assistant',
  },
  {
    title: '🌐 Multi-Cloud Support',
    icon: 'https://img.icons8.com/color/96/globe.png  ',
    description:
      'Connect AWS, GCP, Azure, and self-managed clusters — all from one dashboard.',
    tooltipText: 'Unified cloud control',
  },
];

// ===== Feature Component with Tooltip =====
function Feature({ title, icon, description, tooltipText }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="col col--4"
      style={{
        padding: '1.5rem',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        cursor: 'pointer',
        textAlign: 'center',
        color: '#222',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.12)';
        e.currentTarget.style.border = '1px solid rgba(0, 0, 0, 0.18)';
        setShowTooltip(true);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
        e.currentTarget.style.border = '1px solid rgba(0, 0, 0, 0.12)';
        setShowTooltip(false);
      }}
    >
      {/* Tooltip above the card */}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '-32px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
            zIndex: 10,
            opacity: 0.95,
            pointerEvents: 'none',
          }}
        >
          {tooltipText}
        </div>
      )}

      <div style={{ marginBottom: '1rem' }}>
        <img
          src={icon.trim()}
          alt={title}
          style={{
            width: '64px',
            height: '64px',
          }}
        />
      </div>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '0.5rem 0' }}>
        {title}
      </h3>
      <p
        style={{
          color: '#555',
          lineHeight: 1.6,
          fontSize: '0.95rem',
          marginTop: '0.5rem',
        }}
      >
        {description}
      </p>
    </div>
  );
}

// ===== Home Page =====
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [showButtonTooltip, setShowButtonTooltip] = useState(false);

  return (
    <Layout
      title={`${siteConfig.title} — ${siteConfig.tagline}`}
      description={siteConfig.tagline}
    >
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: '#fbfbfb',
          overflow: 'hidden',
        }}
      >
        {/* Hero */}
        <header
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            padding: '5rem 1rem 3rem',
            color: '#111',
          }}
        >
          <h1
            style={{
              fontSize: '2.8rem',
              fontWeight: 700,
              margin: '0 0 1rem',
            }}
          >
            {siteConfig.title}
          </h1>
          <p
            style={{
              fontSize: '1.3rem',
              opacity: 0.85,
              maxWidth: '700px',
              margin: '0 auto 2rem',
              lineHeight: 1.6,
              color: '#444',
            }}
          >
            {siteConfig.tagline}
          </p>

          {/* Launch Docs Button with Tooltip */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Link
              to="/docs/intro"
              style={{
                background: 'rgba(86, 189, 194, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                color: '#2c3e50',
                textDecoration: 'none',
                padding: '0.85rem 2.2rem',
                borderRadius: '12px',
                fontWeight: 600,
                fontSize: '1.1rem',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                letterSpacing: '0.5px',
                position: 'relative',
                zIndex: 2,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                setShowButtonTooltip(true);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                setShowButtonTooltip(false);
              }}
            >
              Launch Docs →
            </Link>

            {/* Tooltip for button */}
            {showButtonTooltip && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginBottom: '8px',
                  backgroundColor: '#1a1a1a',
                  color: '#fff',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                  zIndex: 1,
                  opacity: 0.95,
                  pointerEvents: 'none',
                }}
              >
                Explore the documentation
              </div>
            )}
          </div>
        </header>

        {/* Features */}
        <main
          style={{
            position: 'relative',
            zIndex: 1,
            padding: '4rem 1rem',
          }}
        >
          <div className="container">
            <div className="row" style={{ justifyContent: 'center' }}>
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}