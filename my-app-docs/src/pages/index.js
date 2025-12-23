// src/pages/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const FeatureList = [
  {
    title: '🚀 Easy to Use',
    icon: 'https://img.icons8.com/color/96/rocket.png',
    description:
      'CloudMaSa is designed for developers and DevOps engineers to set up, deploy, and manage infrastructure with zero friction.',
  },
  {
    title: '🤖 AI-Powered Masa Bot',
    icon: 'https://img.icons8.com/color/96/robot.png',
    description:
      'Get instant help, generate configs, and automate tasks with our intelligent assistant.',
  },
  {
    title: '🌐 Multi-Cloud Support',
    icon: 'https://img.icons8.com/color/96/globe.png',
    description:
      'Connect AWS, GCP, Azure, and self-managed clusters — all from one dashboard.',
  },
];

function Feature({ title, icon, description }) {
  return (
    <div
      className="col col--4"
      style={{
        padding: '1.5rem',
        borderRadius: '12px',
<<<<<<< HEAD
        background: 'rgba(30, 30, 30, 0.7)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
=======
        background: 'rgba(30, 29, 28, 0.21)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(28, 47, 192, 0.05)',
>>>>>>> 72cf6a4 (updated)
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        textAlign: 'center',
        color: '#fff',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(52, 152, 219, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <img
          src={icon}
          alt={title}
          style={{
            width: '64px',
            height: '64px',
            filter: 'invert(1)',
          }}
        />
      </div>
      <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '0.5rem 0' }}>
        {title}
      </h3>
      <p
        style={{
          color: '#ccc',
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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title} — ${siteConfig.tagline}`}
      description={siteConfig.tagline}
    >
      {/* Space Background with Twinkling Stars */}
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: '#000',
          overflow: 'hidden',
        }}
      >
<<<<<<< HEAD
        {/* Twinkling Stars Layer */}
=======
        {/* Background: Twinkling Stars Only */}
>>>>>>> 72cf6a4 (updated)
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
<<<<<<< HEAD
          {[...Array(150)].map((_, i) => {
            const size = Math.random() * 2 + 0.5;
            const opacity = Math.random() * 0.8 + 0.2;
            const duration = Math.random() * 6 + 3;
            const delay = Math.random() * 10;
            return (
              <div
                key={i}
=======
          {/* Twinkling Stars */}
          {[...Array(150)].map((_, i) => {
            const size = Math.random() * 2;
            const opacity = Math.random() * 0.8 + 0.2;
            const duration = Math.random() * 5 + 3;
            const delay = Math.random() * 5;
            return (
              <div
                key={`star-${i}`}
>>>>>>> 72cf6a4 (updated)
                style={{
                  position: 'absolute',
                  width: `${size}px`,
                  height: `${size}px`,
                  background: '#fff',
                  borderRadius: '50%',
                  opacity,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${duration}s infinite ${delay}s`,
                }}
              />
            );
          })}
        </div>

<<<<<<< HEAD
        {/* Hero Section — Frosted Glass Look */}
=======
        {/* Hero Section */}
>>>>>>> 72cf6a4 (updated)
        <header
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            padding: '5rem 1rem 3rem',
            color: '#fff',
          }}
        >
          <h1
            style={{
              fontSize: '2.8rem',
              fontWeight: 700,
              margin: '0 0 1rem',
              textShadow: '0 0 10px rgba(52, 152, 219, 0.5)',
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
            }}
          >
            {siteConfig.tagline}
          </p>
<<<<<<< HEAD
          <Link
  to="/docs/intro"
  style={{
    background: 'rgba(10, 25, 47, 0.7)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(52, 152, 219, 0.4)',
    color: '#4fc3f7',
    textDecoration: 'none',
    padding: '0.85rem 2.2rem',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '1.1rem',
    display: 'inline-block',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 20px rgba(52, 152, 219, 0.2)',
    textShadow: '0 0 8px rgba(79, 195, 247, 0.5)',
    letterSpacing: '0.5px',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.background = 'rgba(15, 35, 65, 0.8)';
    e.currentTarget.style.boxShadow = '0 0 25px rgba(52, 152, 219, 0.4)';
    e.currentTarget.style.transform = 'scale(1.04)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = 'rgba(10, 25, 47, 0.7)';
    e.currentTarget.style.boxShadow = '0 0 20px rgba(52, 152, 219, 0.2)';
    e.currentTarget.style.transform = 'scale(1)';
  }}
>
  Launch Doc →
</Link>
=======

          {/* Button 1: Launch Docs */}
          <Link
            to="/docs/intro"
            style={{
              background: 'rgba(10, 25, 47, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(52, 152, 219, 0.4)',
              color: '#4fc3f7',
              textDecoration: 'none',
              padding: '0.85rem 2.2rem',
              borderRadius: '12px',
              fontWeight: 600,
              fontSize: '1.1rem',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 20px rgba(52, 152, 219, 0.2)',
              textShadow: '0 0 8px rgba(79, 195, 247, 0.5)',
              letterSpacing: '0.5px',
              marginRight: '1rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(15, 35, 65, 0.8)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(52, 152, 219, 0.4)';
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(10, 25, 47, 0.7)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(52, 152, 219, 0.2)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Launch Docs →
          </Link>

          
>>>>>>> 72cf6a4 (updated)
        </header>

        {/* Features Section */}
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
<<<<<<< HEAD
      </div>

      {/* Star Twinkle Animation */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(52, 152, 219, 0); }
          100% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0); }
        }
      `}</style>
=======

        {/* Animations */}
        <style>{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
>>>>>>> 72cf6a4 (updated)
    </Layout>
  );
}