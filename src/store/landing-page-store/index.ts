import { create } from "zustand";
import axios from "axios";

export interface LegalServiceItem {
  id: string;
  label: string;
  description: string;
  points: string[];
  icon: string;
  cta: string;
}

export interface LegalServiceItem {
  id: string;
  label: string;
  description: string;
  points: string[];
  icon: string;
  cta: string;
}

const legalServices: LegalServiceItem[] = [
  {
    id: "white-collar-crimes",
    label: "White Collar Crimes",
    description:
      "Defense in complex financial and regulatory offenses under PMLA, PC Act, NDPS, and Customs laws.",
    points: [
      "PMLA & Prevention of Corruption Act",
      "NDPS & Customs Violations",
      "DRI Investigations",
      "Economic Offences & Enforcement",
    ],
    icon: "mdi:shield-lock-outline",
    cta: "Learn More",
  },
  {
    id: "civil-criminal-litigation",
    label: "Civil & Criminal Litigation",
    description:
      "Robust litigation support across civil and criminal courts, including personal and property disputes.",
    points: [
      "Trial Representation",
      "Bail & Anticipatory Bail",
      "Matrimonial & Divorce Cases",
      "Defamation & Real Estate Disputes",
    ],
    icon: "mdi:gavel",
    cta: "Learn More",
  },
  {
    id: "commercial-disputes",
    label: "Commercial Disputes",
    description:
      "Strategic handling of contractual conflicts, shareholder issues, and commercial arbitration.",
    points: [
      "Contract Breaches",
      "Shareholder Disputes",
      "Commercial Arbitration",
      "Business Torts",
    ],
    icon: "mdi:handshake-outline",
    cta: "Learn More",
  },
  {
    id: "taxation-matters",
    label: "Taxation Matters",
    description:
      "Representation in direct and indirect tax matters including ITAT, GSTAT, and appellate forums.",
    points: [
      "Income Tax Advisory",
      "GST Appeals & Filings",
      "Customs & Excise Law",
      "Representation before ITAT & GSTAT",
    ],
    icon: "mdi:cash-register",
    cta: "Learn More",
  },
  {
    id: "debt-recovery-insolvency",
    label: "Debt Recovery & Insolvency",
    description:
      "End-to-end support in debt resolution and insolvency proceedings under IBC, NCLT, and DRT.",
    points: [
      "IBC Proceedings under NCLT",
      "DRT Litigation",
      "Loan & Debt Recovery",
      "Creditor & Debtor Representation",
    ],
    icon: "mdi:scale-balance",
    cta: "Learn More",
  },
  {
    id: "insurance-negligence",
    label: "Insurance & Medical Negligence",
    description:
      "Claim enforcement and litigation related to insurance policies and healthcare malpractice.",
    points: [
      "Insurance Claim Settlements",
      "Health Insurance Disputes",
      "Medical Negligence Suits",
      "Consumer Forum Litigation",
    ],
    icon: "mdi:hospital-box-outline",
    cta: "Learn More",
  },
  {
    id: "intellectual-property",
    label: "Intellectual Property",
    description:
      "Protection and enforcement of IP rights including trademarks, copyrights, and IP litigation.",
    points: [
      "Trademark Filing & Objection",
      "Copyright Enforcement",
      "IPR Infringement Litigation",
      "Brand Protection",
    ],
    icon: "mdi:lightbulb-on-outline",
    cta: "Learn More",
  },
  {
    id: "negotiable-instruments",
    label: "Negotiable Instruments Cases",
    description:
      "Specialized litigation services under NI Act, including cheque bounce and recovery cases.",
    points: [
      "Cheque Dishonour (Sec 138)",
      "Recovery Suits",
      "Notice Drafting & Legal Action",
      "Trial & Appeal Process",
    ],
    icon: "mdi:file-document-outline",
    cta: "Learn More",
  },
  {
    id: "regulatory-litigation",
    label: "Regulatory & Revenue Litigation",
    description:
      "Advocacy before revenue and quasi-judicial authorities including regulatory tribunals.",
    points: [
      "Revenue Tribunal Matters",
      "Customs & Excise Litigation",
      "SEBI & Regulatory Hearings",
      "Appeals & Adjudication",
    ],
    icon: "mdi:bank-outline",
    cta: "Learn More",
  },
  {
    id: "property-documentation",
    label: "Property Documentation",
    description:
      "Meticulous drafting and legal vetting of property documents for secure ownership transfer.",
    points: [
      "Sale Deed Drafting",
      "Power of Attorney & Will",
      "Gift Deeds & Title Verification",
      "Registration Assistance",
    ],
    icon: "mdi:home-edit-outline",
    cta: "Learn More",
  },
];

export interface CoreValue {
  id: string;
  label: string;
  description: string;
  icon: string;
}

const coreValues: CoreValue[] = [
  {
    id: "integrity",
    label: "Integrity",
    description:
      "We maintain the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction.",
    icon: "mdi:shield-check",
  },
  {
    id: "excellence",
    label: "Excellence",
    description:
      "We strive for excellence in every case, delivering outstanding results through meticulous attention to detail.",
    icon: "mdi:target",
  },
  {
    id: "client-focus",
    label: "Client Focus",
    description:
      "Our clients are at the heart of everything we do. We provide personalized attention to understand and meet their unique needs.",
    icon: "mdi:account-group-outline",
  },
  {
    id: "timeliness",
    label: "Timeliness",
    description:
      "We understand the importance of time in legal matters and ensure prompt, efficient service delivery.",
    icon: "mdi:clock-outline",
  },
  {
    id: "expertise",
    label: "Expertise",
    description:
      "Our team continuously updates their knowledge to stay at the forefront of legal developments and best practices.",
    icon: "mdi:book-open-variant",
  },
  {
    id: "results",
    label: "Results",
    description:
      "We are committed to achieving the best possible outcomes for our clients through strategic thinking and dedicated advocacy.",
    icon: "mdi:medal-outline",
  },
];

export type LeadershipProfile = {
  name: string;
  role: string;
  location: string;
  icon: string;
  descriptionHtml: string;
};

export interface BlogPost {
  id: number;
  title: string;
  categoryName: string;
  description: string;
  tags: string;
  writtenBy: string;
  image: string;
  published: boolean;
  isActive: boolean;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  readTime?: number;
  summary?: string;
}

const LeadershipProfiles: LeadershipProfile[] = [
  {
    name: "Kumar Bhaskar",
    role: "Partner – Civil & Commercial Litigation",
    location: "Delhi & Jharkhand",
    icon: "mdi:scale-balance", // ⚖️ Civil & Commercial
    descriptionHtml: `
      An LL.B and LL.M graduate from the <strong>Faculty of Law, University of Delhi</strong>, 
      Mr. Bhaskar has a strong presence in civil and commercial litigation across courts and tribunals. 
      He began his career under the mentorship of Senior Advocate <strong>Uttam Datt</strong> and has served as 
      <strong>Amicus Curiae</strong> before the Hon’ble Delhi High Court in sensitive matters. 
      He also contributes to <strong>legal aid</strong> through NDDLSA and is a published author in 
      <strong>SCC’s Practical Lawyer</strong>.
    `,
  },
  {
    name: "Vishal Kumar",
    role: "Partner – White Collar Crimes & Commercial Litigation",
    location: "Bihar, Delhi, Jharkhand & West Bengal",
    icon: "mdi:briefcase-search", // 👔 For investigations/white-collar
    descriptionHtml: `
      An alumnus of <strong>Ramjas College</strong> and <strong>Campus Law Centre</strong>, University of Delhi, 
      Mr. Vishal Kumar previously worked with <strong>Shri S.D. Sanjay</strong>, Senior Advocate and Former ASG of India. 
      With substantial experience in high-stakes litigation under <strong>PMLA</strong>, <strong>Customs</strong>, and 
      <strong>Commercial Writs</strong>, he has appeared in over twenty white-collar matters before the Patna High Court 
      and also practices before Adjudicating Authorities and Tribunals.
    `,
  },
  {
    name: "Amit Anand",
    role: "Partner – General Litigation",
    location: "Patna",
    icon: "mdi:gavel", // 🧑‍⚖️ General litigation
    descriptionHtml: `
      Mr. Anand leads a broad practice encompassing <strong>civil</strong>, <strong>criminal</strong>, 
      <strong>tax</strong>, and <strong>property documentation</strong> matters. Known for his methodical approach and 
      persuasive courtroom skills, he regularly appears before <strong>District Courts</strong>, 
      <strong>Tribunals</strong>, and the <strong>Patna High Court</strong>. His practice also includes arbitration, 
      property law advisory, and compliance under local revenue frameworks.
    `,
  },
  {
    name: "Kumar Abhishek",
    role: "Partner – Taxation, IPR & Regulatory Litigation",
    location: "Delhi & West Bengal",
    icon: "mdi:bank-outline", // 🏛️ Tax/IPR/Regulatory
    descriptionHtml: `
      Mr. Abhishek holds an LL.B from the <strong>Faculty of Law, Delhi University</strong> and an LL.M from 
      <strong>Indian Law Institute</strong>. He represents clients before the <strong>Supreme Court</strong>, 
      <strong>Delhi High Court</strong>, <strong>ITAT</strong>, and <strong>GSTAT</strong>, including the 
      <strong>State of Telangana</strong> in both civil and criminal appeals. He also manages IP portfolios and 
      supervises legal documentation and registration processes across Delhi.
    `,
  },
];

export interface LandingPageStoreInterface {
  LegalServices: LegalServiceItem[];
  CoreValues: CoreValue[];
  ContactInfo: any[];
  LeadershipData: any[];
  fetchPost: () => Promise<any>;
  blogsPost: BlogPost[];
  blogLoading: boolean;
}

export const useLandingPageStore = create<LandingPageStoreInterface>((set) => ({
  LegalServices: legalServices,
  CoreValues: coreValues,
  ContactInfo: [],
  LeadershipData: LeadershipProfiles,
  blogsPost: [],
  blogLoading: false,

  fetchPost: async () => {
    try {
      set({ blogLoading: true });

      const res = await axios.get("http://localhost:3000/public/blogs");

      // Ensure API success
      if (res.data?.success && Array.isArray(res.data.data)) {
        const resData: BlogPost[] = res.data.data.map((item: BlogPost) => ({
          ...item,
          readTime: 8,
          summary: "lorem dfdf",
        }));

        set({ blogsPost: resData });
      } else {
        console.warn("API response invalid or unsuccessful:", res.data);
        set({ blogsPost: [] });
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      set({ blogsPost: [] });
    } finally {
      set({ blogLoading: false });
    }
  },
  
}));
