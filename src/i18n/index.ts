import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills", 
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        greeting: "Hello, I am",
        name: "SOHAIB LAARICHI",
        titles: [
          "Network Security Specialist",
          "Full-Stack Developer",
          "Systems Administrator", 
          "DevOps Engineer",
          "Cloud Infrastructure Expert"
        ],
        description: "A passionate Computer Engineering student at EMSI specializing in network architecture, security, and systems administration. Actively seeking an innovative company to apply and grow my expertise in designing and deploying robust network solutions.",
        viewProjects: "View My Projects",
        contactMe: "Contact Me",
        scrollDown: "Scroll Down"
      },
      about: {
        title: "About Me",
        subtitle: "Get to know me better",
        profile: {
          title: "Professional Profile",
          description: "Currently pursuing my Computer Engineering degree at EMSI, I am passionate about network infrastructure and cybersecurity. My goal is to contribute to innovative technological solutions while continuously expanding my expertise in network security and systems administration."
        },
        education: {
          title: "Education & Training",
          degree: "Computer Engineering Student",
          school: "EMSI - École Marocaine des Sciences de l'Ingénieur",
          period: "2023 - Present",
          certifications: "Professional Certifications"
        },
        softSkills: {
          title: "Soft Skills",
          skills: [
            "Team Leadership",
            "Problem Solving", 
            "Critical Thinking",
            "Project Management",
            "Effective Communication",
            "Adaptability"
          ]
        }
      },
      skills: {
        title: "Technical Skills",
        subtitle: "Technologies and tools I work with",
        categories: {
          networking: "Networking & Security",
          programming: "Programming Languages",
          databases: "Databases & Cloud",
          tools: "Development Tools"
        },
        viewCertificate: "View Certificate"
      },
      experience: {
        title: "Professional Experience",
        subtitle: "My journey in technology",
        jobs: [
          {
            title: "Network Administrator Intern",
            company: "TechCorp Solutions",
            period: "June 2024 - August 2024",
            description: "Configured and maintained network infrastructure, implemented security protocols, and provided technical support for enterprise systems."
          },
          {
            title: "IT Support Specialist", 
            company: "Digital Services Inc.",
            period: "January 2024 - May 2024",
            description: "Provided comprehensive technical support, troubleshooted hardware and software issues, and assisted in system deployments."
          },
          {
            title: "Junior Developer",
            company: "WebDev Agency",
            period: "September 2023 - December 2023", 
            description: "Developed web applications using modern frameworks, collaborated with design teams, and maintained code repositories."
          }
        ]
      },
      projects: {
        title: "Featured Projects",
        subtitle: "Some of my recent work",
        viewProject: "View Project",
        viewCode: "View Code"
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Let's work together",
        form: {
          name: "Full Name",
          email: "Email Address",
          subject: "Subject", 
          message: "Your Message",
          send: "Send Message",
          sending: "Sending..."
        },
        info: {
          title: "Contact Information",
          email: "Email",
          phone: "Phone",
          location: "Location",
          social: "Follow Me"
        }
      },
      footer: {
        brand: "SOHAIB LAARICHI",
        quickLinks: "Quick Links",
        connect: "Connect With Me", 
        rights: "All rights reserved.",
        backToTop: "Back to Top"
      },
      stats: {
        projects: "Projects Completed",
        certifications: "Certifications",
        experience: "Years Experience"
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        skills: "Compétences",
        experience: "Expérience", 
        projects: "Projets",
        contact: "Contact"
      },
      hero: {
        greeting: "Bonjour, je suis",
        name: "SOHAIB LAARICHI",
        titles: [
          "Spécialiste Sécurité Réseau",
          "Développeur Full-Stack",
          "Administrateur Systèmes",
          "Ingénieur DevOps", 
          "Expert Infrastructure Cloud"
        ],
        description: "Étudiant passionné en Génie Informatique à l'EMSI, spécialisé en architecture réseau, sécurité et administration système. Je recherche activement une entreprise innovante pour appliquer et développer mon expertise dans la conception et le déploiement de solutions réseau robustes.",
        viewProjects: "Voir Mes Projets",
        contactMe: "Me Contacter",
        scrollDown: "Faire Défiler"
      },
      about: {
        title: "À Propos de Moi", 
        subtitle: "Apprenez à me connaître",
        profile: {
          title: "Profil Professionnel",
          description: "Actuellement en cours d'études d'ingénieur informatique à l'EMSI, je suis passionné par l'infrastructure réseau et la cybersécurité. Mon objectif est de contribuer à des solutions technologiques innovantes tout en développant continuellement mon expertise en sécurité réseau et administration système."
        },
        education: {
          title: "Formation & Éducation",
          degree: "Étudiant en Génie Informatique",
          school: "EMSI - École Marocaine des Sciences de l'Ingénieur",
          period: "2023 - Présent",
          certifications: "Certifications Professionnelles"
        },
        softSkills: {
          title: "Compétences Humaines",
          skills: [
            "Leadership d'Équipe",
            "Résolution de Problèmes",
            "Pensée Critique", 
            "Gestion de Projet",
            "Communication Efficace",
            "Adaptabilité"
          ]
        }
      },
      skills: {
        title: "Compétences Techniques",
        subtitle: "Technologies et outils que j'utilise",
        categories: {
          networking: "Réseau & Sécurité",
          programming: "Langages de Programmation", 
          databases: "Bases de Données & Cloud",
          tools: "Outils de Développement"
        },
        viewCertificate: "Voir Certificat"
      },
      experience: {
        title: "Expérience Professionnelle",
        subtitle: "Mon parcours technologique",
        jobs: [
          {
            title: "Stagiaire Administrateur Réseau",
            company: "TechCorp Solutions", 
            period: "Juin 2024 - Août 2024",
            description: "Configuration et maintenance de l'infrastructure réseau, mise en œuvre de protocoles de sécurité, et support technique pour les systèmes d'entreprise."
          },
          {
            title: "Spécialiste Support IT",
            company: "Digital Services Inc.",
            period: "Janvier 2024 - Mai 2024",
            description: "Support technique complet, résolution de problèmes matériels et logiciels, assistance dans les déploiements système."
          },
          {
            title: "Développeur Junior",
            company: "WebDev Agency", 
            period: "Septembre 2023 - Décembre 2023",
            description: "Développement d'applications web avec des frameworks modernes, collaboration avec les équipes design, maintenance des référentiels de code."
          }
        ]
      },
      projects: {
        title: "Projets en Vedette",
        subtitle: "Quelques-uns de mes travaux récents",
        viewProject: "Voir Projet",
        viewCode: "Voir Code"
      },
      contact: {
        title: "Entrer en Contact",
        subtitle: "Travaillons ensemble", 
        form: {
          name: "Nom Complet",
          email: "Adresse Email",
          subject: "Sujet",
          message: "Votre Message",
          send: "Envoyer Message",
          sending: "Envoi en cours..."
        },
        info: {
          title: "Informations de Contact",
          email: "Email",
          phone: "Téléphone", 
          location: "Localisation",
          social: "Suivez-moi"
        }
      },
      footer: {
        brand: "SOHAIB LAARICHI",
        quickLinks: "Liens Rapides",
        connect: "Connectez-vous avec Moi",
        rights: "Tous droits réservés.",
        backToTop: "Retour en Haut"
      },
      stats: {
        projects: "Projets Complétés",
        certifications: "Certifications",
        experience: "Années d'Expérience"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "عني",
        skills: "المهارات",
        experience: "الخبرة",
        projects: "المشاريع", 
        contact: "التواصل"
      },
      hero: {
        greeting: "مرحباً، أنا",
        name: "صهيب العارشي",
        titles: [
          "أخصائي أمن الشبكات",
          "مطور تطبيقات شامل",
          "مدير أنظمة",
          "مهندس DevOps",
          "خبير البنية التحتية السحابية"
        ],
        description: "طالب شغوف في هندسة الحاسوب بالمدرسة المغربية لعلوم المهندس، متخصص في هندسة الشبكات والأمان وإدارة الأنظمة. أبحث بنشاط عن شركة مبتكرة لتطبيق وتطوير خبرتي في تصميم ونشر حلول الشبكات القوية.",
        viewProjects: "عرض مشاريعي",
        contactMe: "تواصل معي", 
        scrollDown: "مرر لأسفل"
      },
      about: {
        title: "عني",
        subtitle: "تعرف علي أكثر",
        profile: {
          title: "الملف المهني",
          description: "أتابع حالياً دراستي في هندسة الحاسوب بالمدرسة المغربية لعلوم المهندس، وأنا شغوف بالبنية التحتية للشبكات والأمن السيبراني. هدفي هو المساهمة في الحلول التكنولوجية المبتكرة مع التطوير المستمر لخبرتي في أمن الشبكات وإدارة الأنظمة."
        },
        education: {
          title: "التعليم والتدريب",
          degree: "طالب هندسة الحاسوب",
          school: "المدرسة المغربية لعلوم المهندس - EMSI", 
          period: "2023 - الحاضر",
          certifications: "الشهادات المهنية"
        },
        softSkills: {
          title: "المهارات الشخصية",
          skills: [
            "قيادة الفريق",
            "حل المشكلات",
            "التفكير النقدي",
            "إدارة المشاريع", 
            "التواصل الفعال",
            "القدرة على التكيف"
          ]
        }
      },
      skills: {
        title: "المهارات التقنية",
        subtitle: "التقنيات والأدوات التي أعمل بها",
        categories: {
          networking: "الشبكات والأمان",
          programming: "لغات البرمجة",
          databases: "قواعد البيانات والسحابة",
          tools: "أدوات التطوير"
        },
        viewCertificate: "عرض الشهادة"
      },
      experience: {
        title: "الخبرة المهنية",
        subtitle: "رحلتي في التكنولوجيا",
        jobs: [
          {
            title: "متدرب مدير الشبكات",
            company: "TechCorp Solutions",
            period: "يونيو 2024 - أغسطس 2024",
            description: "تكوين وصيانة البنية التحتية للشبكة، تطبيق بروتوكولات الأمان، وتقديم الدعم التقني لأنظمة المؤسسات."
          },
          {
            title: "أخصائي دعم تقني",
            company: "Digital Services Inc.",
            period: "يناير 2024 - مايو 2024", 
            description: "تقديم دعم تقني شامل، حل مشاكل الأجهزة والبرامج، والمساعدة في نشر الأنظمة."
          },
          {
            title: "مطور مبتدئ",
            company: "WebDev Agency",
            period: "سبتمبر 2023 - ديسمبر 2023",
            description: "تطوير تطبيقات ويب باستخدام أطر عمل حديثة، التعاون مع فرق التصميم، وصيانة مستودعات الكود."
          }
        ]
      },
      projects: {
        title: "المشاريع المميزة",
        subtitle: "بعض من أعمالي الحديثة",
        viewProject: "عرض المشروع",
        viewCode: "عرض الكود"
      },
      contact: {
        title: "تواصل معي",
        subtitle: "دعنا نعمل معاً", 
        form: {
          name: "الاسم الكامل",
          email: "عنوان البريد الإلكتروني",
          subject: "الموضوع",
          message: "رسالتك",
          send: "إرسال الرسالة",
          sending: "جارٍ الإرسال..."
        },
        info: {
          title: "معلومات التواصل",
          email: "البريد الإلكتروني",
          phone: "الهاتف",
          location: "الموقع",
          social: "تابعني"
        }
      },
      footer: {
        brand: "صهيب العارشي",
        quickLinks: "روابط سريعة",
        connect: "تواصل معي",
        rights: "جميع الحقوق محفوظة.",
        backToTop: "العودة إلى الأعلى"
      },
      stats: {
        projects: "المشاريع المكتملة",
        certifications: "الشهادات",
        experience: "سنوات الخبرة"
      }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },

    interpolation: {
      escapeValue: false
    }
  })

export default i18n