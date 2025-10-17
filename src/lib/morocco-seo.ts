export const moroccoSEOData = {
  // Villes principales du Maroc pour le référencement local
  cities: [
    'Casablanca',
    'Rabat', 
    'Marrakech',
    'Fès',
    'Tangier',
    'Agadir',
    'Meknes',
    'Oujda',
    'Kenitra',
    'Tetouan',
    'Safi',
    'Mohammedia',
    'Khouribga',
    'El Jadida',
    'Beni Mellal',
    'Nador',
    'Taza',
    'Settat'
  ],

  // Régions administratives du Maroc
  regions: [
    'Marrakech-Safi',
    'Casablanca-Settat', 
    'Rabat-Salé-Kénitra',
    'Fès-Meknès',
    'Tanger-Tétouan-Al Hoceïma',
    'Souss-Massa',
    'Oriental',
    'Béni Mellal-Khénifra',
    'Drâa-Tafilalet',
    'Guelmim-Oued Noun',
    'Laâyoune-Sakia El Hamra',
    'Dakhla-Oued Ed-Dahab'
  ],

  // Mots-clés spécifiques au secteur IT au Maroc
  itKeywords: [
    'Développeur Maroc',
    'Programmeur Morocco',
    'Ingénieur Informatique Maroc',
    'IT Consultant Morocco',
    'Freelance Developer Maroc',
    'Software Engineer Morocco',
    'Web Developer Maroc',
    'Mobile Developer Morocco',
    'Network Engineer Maroc',
    'System Administrator Morocco',
    'DevOps Engineer Maroc',
    'Full Stack Developer Morocco',
    'Backend Developer Maroc',
    'Frontend Developer Morocco'
  ],

  // Institutions éducatives IT au Maroc
  educationalInstitutions: [
    'EMSI',
    'ENSA',
    'ENSIAS',
    'EHTP',
    'EMI',
    'INPT',
    'EST',
    'FST',
    'Université Mohammed V',
    'Université Hassan II',
    'Université Cadi Ayyad',
    'Université Sidi Mohamed Ben Abdellah',
    'ISCAE',
    'HEM'
  ],

  // Technologies populaires au Maroc
  technologies: [
    'Java Morocco',
    'PHP Maroc', 
    'JavaScript Morocco',
    'Python Maroc',
    'React Morocco',
    'Angular Maroc',
    'Vue.js Morocco',
    'Spring Boot Maroc',
    'Laravel Morocco',
    'Django Maroc',
    'Node.js Morocco',
    'MySQL Maroc',
    'MongoDB Morocco'
  ],

  // Secteurs d'activité IT au Maroc
  sectors: [
    'Banque Digitale Maroc',
    'E-commerce Morocco',
    'Fintech Maroc',
    'Startup Morocco',
    'Digital Agency Maroc',
    'Software Company Morocco',
    'IT Services Maroc',
    'Consulting IT Morocco',
    'Outsourcing Maroc',
    'Nearshoring Morocco'
  ],

  // Certifications et formations populaires
  certifications: [
    'Cisco CCNA Morocco',
    'Microsoft Azure Maroc',
    'AWS Morocco',
    'Google Cloud Maroc',
    'Oracle Certification Morocco',
    'Red Hat Linux Maroc',
    'CompTIA Security+ Morocco'
  ]
}

// Fonction pour générer des mots-clés localisés
export const generateLocalSEOKeywords = (baseName: string) => {
  const keywords = []
  
  // Ajouter le nom avec chaque ville
  moroccoSEOData.cities.forEach(city => {
    keywords.push(`${baseName} ${city}`)
    keywords.push(`${baseName} ${city} Morocco`)
    keywords.push(`${baseName} ${city} Maroc`)
  })
  
  // Ajouter avec les technologies
  moroccoSEOData.technologies.forEach(tech => {
    keywords.push(`${baseName} ${tech}`)
  })
  
  // Ajouter avec les secteurs
  moroccoSEOData.sectors.forEach(sector => {
    keywords.push(`${baseName} ${sector}`)
  })
  
  return keywords
}

// Données de contact géolocalisées
export const contactGeoData = {
  country: 'Morocco',
  countryCode: 'MA',
  region: 'Marrakech-Safi',
  city: 'Marrakech',
  timezone: 'Africa/Casablanca',
  currency: 'MAD',
  language: ['ar-MA', 'fr-MA', 'en-US'],
  coordinates: {
    latitude: 31.6295,
    longitude: -7.9811
  }
}