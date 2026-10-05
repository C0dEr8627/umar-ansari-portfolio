export type Credential = {
  issuer: 'AWS' | 'RED HAT';
  title: string;
  meta: string;
  image: string;
};

export const credentials: Credential[] = [
  { issuer: 'RED HAT', title: '2026 Red Hat Academy - Student Ambassador', meta: 'Red Hat · 2026', image: 'red-hat-academy-student-ambassador.png' },
  { issuer: 'AWS', title: 'AWS Academy Graduate - Cloud Architecting - Training Badge', meta: 'AWS Academy · Jun 23, 2026', image: 'aws-academy-cloud-architecting.png' },
  { issuer: 'AWS', title: 'AWS Academy Graduate - Cloud Data Pipeline Builder - Training Badge', meta: 'AWS Academy · Feb 9, 2026', image: 'aws-academy-cloud-data-pipeline-builder.png' },
  { issuer: 'AWS', title: 'AWS Academy Graduate - Cloud Foundations - Training Badge', meta: 'AWS Academy · Oct 16, 2025', image: 'aws-academy-cloud-foundations.png' },
  { issuer: 'AWS', title: 'AWS Academy Graduate - Cloud Security Builder - Training Badge', meta: 'AWS Academy · Feb 6, 2026', image: 'aws-academy-cloud-security-builder.png' },
  { issuer: 'AWS', title: 'AWS Academy Graduate - Cloud Web Application Builder - Training Badge', meta: 'AWS Academy · Jan 11, 2026', image: 'aws-academy-cloud-web-application-builder.png' },
  { issuer: 'AWS', title: 'AWS Academy Graduate - Machine Learning for Natural Language Processing - Training Badge', meta: 'AWS Academy · Jun 30, 2026', image: 'aws-academy-machine-learning-for-nlp.png' },
  { issuer: 'AWS', title: 'AWS Academy Graduate - Machine Learning Foundations - Training Badge', meta: 'AWS Academy · Jun 17, 2026', image: 'aws-academy-machine-learning-foundations.png' },
  { issuer: 'AWS', title: 'AWS Academy Graduate - Microservices and CI/CD Pipeline Builder - Training Badge', meta: 'AWS Academy · Nov 24, 2025', image: 'aws-academy-microservices-cicd-pipeline-builder.png' },
  { issuer: 'AWS', title: 'AWS Certified AI Practitioner', meta: 'AWS · Expires Aug 11, 2029', image: 'aws-certified-ai-practitioner.png' },
  { issuer: 'AWS', title: 'AWS Certified Cloud Practitioner', meta: 'AWS · Expires Jan 21, 2029', image: 'aws-certified-cloud-practitioner.png' },
  { issuer: 'AWS', title: 'AWS re/Start Graduate', meta: 'AWS · Jun 28, 2026', image: 'aws-restart-graduate.png' },
  { issuer: 'AWS', title: 'AWS SBG Core Team Member Badge', meta: 'AWS Community · Jul 22, 2026', image: 'aws-sbg-core-team-member.png' },
  { issuer: 'RED HAT', title: 'Python Programming with Red Hat (AD141 - RHA) - Ver. 9.0', meta: 'Red Hat · Jun 22, 2026', image: 'redhat-python-programming-with-redhat.png' },
  { issuer: 'RED HAT', title: 'Red Hat Enterprise Linux Automation with Ansible (RH294)', meta: 'Red Hat · Jun 29, 2026', image: 'redhat-enterprise-linux-automation-with-ansible.png' },
  { issuer: 'RED HAT', title: 'Red Hat System Administration I (RH124 - RHA) - Ver. 10', meta: 'Red Hat · Apr 24, 2026', image: 'redhat-system-administration1.png' },
];
