import React from "react";
import styles from "./index.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {};
type LegalServiceInterface = {
  id: string;
  label: string;
  description: string;
  points: string[];
  icon: string;
  cta: string;
};

const legalServices: LegalServiceInterface[] = [
  {
    id: "corporate-law",
    label: "Corporate Law",
    description:
      "Comprehensive legal services for businesses of all sizes, from startups to large corporations.",
    points: [
      "Business Formation & Structure",
      "Contract Drafting & Review",
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Regulatory Compliance",
    ],
    icon: "mdi:scale-balance", // Example icon
    cta: "Learn More",
  },
  {
    id: "real-estate-law",
    label: "Real Estate Law",
    description:
      "Expert guidance through all aspects of real estate transactions and property law.",
    points: [
      "Property Transactions",
      "Commercial Real Estate",
      "Title & Escrow Services",
      "Zoning & Land Use",
      "Property Disputes",
    ],
    icon: "mdi:office-building-marker", // Example icon
    cta: "Learn More",
  },
  {
    id: "family-law",
    label: "Family Law",
    description:
      "Compassionate legal support for family matters with personalized attention.",
    points: [
      "Divorce & Separation",
      "Child Custody & Support",
      "Adoption Services",
      "Prenuptial Agreements",
      "Domestic Relations",
    ],
    icon: "mdi:account-group-outline",
    cta: "Learn More",
  },
  {
    id: "estate-planning",
    label: "Estate Planning",
    description:
      "Secure your legacy with comprehensive estate planning and wealth transfer strategies.",
    points: [
      "Will & Testament Drafting",
      "Trust Formation",
      "Probate Administration",
      "Tax Planning",
      "Asset Protection",
    ],
    icon: "mdi:script-text-outline",
    cta: "Learn More",
  },
  {
    id: "employment-law",
    label: "Employment Law",
    description:
      "Protection and advocacy for both employers and employees in workplace matters.",
    points: [
      "Employment Contracts",
      "Workplace Disputes",
      "Discrimination Cases",
      "Wage & Hour Issues",
      "Employee Benefits",
    ],
    icon: "mdi:briefcase-account-outline",
    cta: "Learn More",
  },
  {
    id: "personal-injury",
    label: "Personal Injury",
    description:
      "Dedicated representation for injury victims seeking fair compensation.",
    points: [
      "Auto Accidents",
      "Medical Malpractice",
      "Slip & Fall Cases",
      "Product Liability",
      "Insurance Claims",
    ],
    icon: "mdi:car-emergency",
    cta: "Learn More",
  },
];

const LegalServicesComponent: React.FC<Props> = () => {
  return (
    <>
      <section className={styles["legal-services-section"]}>
        <div className="container">
          <h2 className={styles["service-title"]}>
            Our <span className="theme-text">Legal Services</span>
          </h2>
          <p className={styles["service-subtitle"]}>
            We provide comprehensive legal services across multiple practice
            areas, ensuring expert representation tailored to your specific
            needs.
          </p>
          <div className="row">
            {legalServices.map((service) => (
              <div
                key={service.id}
                className={`col-md-4 ${styles["card-col"]}`}
              >
                <div className={styles["card"]}>
                  <div className={styles["icon"]}>
                    <Icon icon={service.icon} width={26} height={26} />
                  </div>
                  <h5 className={styles["card-title"]}>{service.label}</h5>
                  <p className={styles["card-description"]}>
                    {service.description}
                  </p>
                  <ul className={styles["points-list"]}>
                    {service.points.map((point, index) => (
                      <li key={index}>✓ {point}</li>
                    ))}
                  </ul>
                  <a href="#" className={styles["learn-more"]}>
                    {service.cta} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalServicesComponent;
