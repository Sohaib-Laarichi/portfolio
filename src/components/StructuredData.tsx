'use client'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sohaib Laarichi",
    "alternateName": [
      "Sohaib", 
      "Laarichi", 
      "SohaibLaarichi",
      "صهيب لعريشي",
      "Sohaib Laarichi Maroc",
      "Sohaib Laarichi Morocco",
      "Ingénieur Réseau Maroc",
      "Network Engineer Morocco"
    ],
    "jobTitle": "Network & Software Engineer",
    "description": "Ingénieur Réseau et Développeur Full-Stack au Maroc, spécialisé en sécurité réseau Cisco, développement Java Spring Boot et architecture système. Étudiant en 5ème année Ingénierie EMSI Marrakech offrant services IT professionnels.",
    "url": "https://sohaib-laarichi.netlify.app",
    "image": "https://sohaib-laarichi.netlify.app/images/me.png",
    "email": "sohaiblaarichi112@gmail.com",
    "telephone": "+212 6 XX XX XX XX",
    "nationality": "Moroccan",
    "birthPlace": "Morocco",
    "homeLocation": "Morocco",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MA",
      "addressRegion": "Marrakech-Safi",
      "addressLocality": "Marrakech",
      "streetAddress": "Marrakech, Maroc"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "École Marocaine des Sciences de l'Ingénieur (EMSI)",
        "alternateName": ["EMSI Marrakech", "EMSI Morocco", "EMSI Maroc"],
        "description": "Génie Informatique - Réseaux & Systèmes, Computer Engineering - Network & Systems",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MA",
          "addressLocality": "Marrakech",
          "addressRegion": "Marrakech-Safi"
        },
        "url": "https://www.emsi.ma"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "Université Privée de Marrakech (UPM)",
        "alternateName": ["UPM Marrakech", "UPM Morocco", "UPM Maroc"],
        "description": "Génie Informatique - Réseaux & Systèmes, Computer Engineering - Network & Systems",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "MA",
          "addressLocality": "Marrakech", 
          "addressRegion": "Marrakech-Safi"
        }
      }
    ],
    "knowsAbout": [
      "Network Engineering",
      "Software Development", 
      "Network Security",
      "Cisco Technologies",
      "Java Programming",
      "Spring Boot",
      "Next.js",
      "React",
      "TypeScript",
      "Android Development",
      "Kotlin",
      "MySQL",
      "MongoDB",
      "Systems Administration",
      "Network Architecture",
      "Cybersecurity",
      "Full Stack Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Network & Software Engineer",
      "description": "Développement d'applications web et mobiles, administration système et architecture réseau"
    },
    "owns": [
      {
        "@type": "SoftwareApplication",
        "name": "GeoBus",
        "description": "Système de tracking de bus en temps réel",
        "applicationCategory": "Mobile Application",
        "operatingSystem": "Android"
      },
      {
        "@type": "WebSite",
        "name": "Mkhedmin.ma",
        "description": "Plateforme freelance marocaine",
        "url": "https://mkhedmin.ma"
      },
      {
        "@type": "SoftwareApplication",
        "name": "PharmaLive",
        "description": "Système de gestion de pharmacie",
        "applicationCategory": "Enterprise Application"
      }
    ],
    "sameAs": [
      "https://github.com/Sohaib-Laarichi",
      "https://linkedin.com/in/sohaib-laarichi",
      "https://sohaib-laarichi.netlify.app"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://sohaib-laarichi.netlify.app"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sohaib Laarichi Portfolio",
    "alternateName": ["Portfolio Sohaib Laarichi", "Sohaib Portfolio", "Laarichi Portfolio"],
    "url": "https://sohaib-laarichi.netlify.app",
    "description": "Portfolio professionnel de Sohaib Laarichi, ingénieur réseau et développeur full-stack",
    "author": {
      "@type": "Person",
      "name": "Sohaib Laarichi"
    },
    "inLanguage": ["fr-FR", "en-US", "ar-SA"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://sohaib-laarichi.netlify.app/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Sohaib Laarichi - Services Informatiques",
    "alternateName": ["Sohaib Laarichi Services", "Laarichi IT Services"],
    "description": "Services professionnels en ingénierie réseau, développement logiciel et sécurité informatique",
    "founder": {
      "@type": "Person",
      "name": "Sohaib Laarichi"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Morocco"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Professional Services",
      "email": "sohaiblaarichi112@gmail.com"
    },
    "serviceType": [
      "Network Engineering",
      "Software Development",
      "Web Development", 
      "Mobile App Development",
      "Network Security",
      "Systems Administration"
    ],
    "areaServed": "Morocco",
    "url": "https://sohaib-laarichi.netlify.app"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}