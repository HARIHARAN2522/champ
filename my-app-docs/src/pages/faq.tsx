// src/pages/faq.tsx
import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './faq.module.css'; // ✅ Only once!
import Layout from '@theme/Layout';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        className={clsx(styles.faqQuestion, {
          [styles.active]: isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {question}
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </button>
      <div
        id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
        className={clsx(styles.faqAnswer, {
          [styles.show]: isOpen,
        })}
        role="region"
        aria-hidden={!isOpen}
      >
        {answer}
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqData = [
    {
      question: "Q: Is CloudMaSa free?",
      answer: "A: Yes! The core platform is free for personal and small teams. Enterprise plans with advanced features are available."
    },
    {
      question: "Q: How secure is my data?",
      answer: "A: All data is encrypted at rest and in transit. We comply with GDPR, HIPAA, and SOC2."
    },
    {
      question: "Q: Does CloudMaSa support multi-cloud?",
      answer: "A: Yes! Connect AWS, GCP, Azure, and more — manage them from one dashboard."
    },
    {
    question: "Q: Do I need to write Terraform or ARM templates?",
    answer: "A: No! CloudMaSa generates production-ready Infrastructure-as-Code (Terraform) behind the scenes. You configure resources visually, and we handle the code. You can always preview and export it."
  },
  {
    question: "Q: What is Masa Bot?",
    answer: "A: Masa Bot is your AI-powered DevOps assistant. Ask it questions like “Show me my S3 buckets” or “Deploy an EKS cluster” — and it will fetch data, generate configs, or trigger workflows using natural language."
  },
  {
    question: "Q: How does CloudMaSa connect to my cloud account?",
    answer: "A: Securely via standard credentials:\n- **AWS**: IAM Access Key + Secret\n- **Azure**: Service Principal (Client ID + Secret)\n- **GCP**: Service Account JSON key\nAll credentials are encrypted and never exposed in logs."
  },
  {
    question: "Q: Can I see what Terraform code will be deployed?",
    answer: "A: Yes! Before any deployment, CloudMaSa shows a full IaC preview. You can inspect, validate, and approve the exact Terraform code that will run — no surprises."
  },
  {
    question: "Q: Does CloudMaSa support GitOps?",
    answer: "A: Yes! Deployments can be integrated with GitHub/GitLab webhooks. You can also export configurations as reusable templates and manage them via Git."
  },
  {
    question: "Q: How are costs calculated?",
    answer: "A: CloudMaSa uses official cloud provider pricing APIs to estimate monthly costs in real time — based on region, instance type, storage, and data transfer. Estimates update as you configure resources."
  }
  ];

 // Inside your FAQ component return:
return (
  <Layout title="FAQ" description="Frequently asked questions about CloudMaSa">
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0',
      }}
    >
      <div className={styles.faqContainer}>
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>FAQ</h1>
        <p style={{ textAlign: 'center', color: '#cbd5f0', marginBottom: '2rem' }}>
          Frequently asked questions about CloudMaSa.
        </p>
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  </Layout>
);
}