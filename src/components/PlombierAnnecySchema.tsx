export default function PlombierAnnecySchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.waterplomberie.pro/#plombier-annecy",
    "name": "Water Plomberie - Plombier Annecy",
    "alternateName": ["Plombier Annecy", "Plombier Annecy Urgence", "Meilleur Plombier Annecy"],
    "description": "Plombier Annecy #1 - Water Plomberie : LE plombier de référence à Annecy. Urgence 24/7, devis gratuit, intervention rapide. Plombier Annecy expert depuis 7 ans.",
    "url": "https://www.waterplomberie.pro",
    "telephone": "+33783167613",
    "email": "watter.plomberie@gmail.com",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "Check"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Annecy",
      "addressRegion": "Haute-Savoie",
      "postalCode": "74000",
      "addressCountry": "FR",
      "streetAddress": "Annecy et environs"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.8992,
      "longitude": 6.1294
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Annecy",
        "sameAs": "https://fr.wikipedia.org/wiki/Annecy"
      },
      {
        "@type": "City", 
        "name": "Annecy-le-Vieux"
      },
      {
        "@type": "City",
        "name": "Seynod"
      },
      {
        "@type": "City",
        "name": "Cran-Gevrier"
      },
      {
        "@type": "City",
        "name": "Pringy"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 45.8992,
        "longitude": 6.1294
      },
      "geoRadius": "30000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Plombier Annecy",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plombier Annecy Urgence 24/7",
            "description": "Service d'urgence plomberie Annecy disponible 24h/24 et 7j/7. Intervention rapide en moins de 30 minutes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Rénovation Salle de Bain Annecy",
            "description": "Rénovation complète de salle de bain à Annecy. Plombier Annecy expert en rénovation sanitaire."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chauffage Annecy",
            "description": "Installation et entretien de chauffage à Annecy. Plombier chauffagiste Annecy certifié."
          }
        }
      ]
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Marie L."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Le meilleur plombier Annecy ! Intervention rapide, travail soigné, tarifs corrects. Je recommande ce plombier Annecy à 100%."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Pierre D."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Plombier Annecy très professionnel. Dépannage urgence un dimanche, arrivé en 20 minutes. C'est mon plombier Annecy de confiance !"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Hamza DJAFFER",
      "jobTitle": "Plombier Annecy Expert",
      "worksFor": {
        "@type": "Organization",
        "name": "Water Plomberie"
      }
    },
    "employee": {
      "@type": "Person",
      "name": "Hamza DJAFFER",
      "jobTitle": "Plombier Annecy Certifié"
    },
    "sameAs": [
      "https://www.waterplomberie.pro/plombier-annecy"
    ],
    "keywords": "plombier annecy, plombier annecy urgence, plombier annecy 24h, meilleur plombier annecy, plombier annecy pas cher, plombier annecy centre, plombier annecy le vieux, dépannage plomberie annecy, chauffagiste annecy, rénovation salle de bain annecy"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.waterplomberie.pro/#organization",
    "name": "Water Plomberie",
    "alternateName": "Plombier Annecy Water Plomberie",
    "url": "https://www.waterplomberie.pro",
    "logo": "https://www.waterplomberie.pro/logo.png",
    "description": "Water Plomberie : le plombier Annecy de référence. Urgence 24/7, rénovation, chauffage. Plombier Annecy expert depuis 7 ans.",
    "foundingDate": "2018",
    "founder": {
      "@type": "Person",
      "name": "Hamza DJAFFER"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33783167613",
      "contactType": "customer service",
      "availableLanguage": "French",
      "areaServed": "FR"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Annecy",
      "addressRegion": "Haute-Savoie", 
      "postalCode": "74000",
      "addressCountry": "FR"
    },
    "serviceArea": {
      "@type": "State",
      "name": "Haute-Savoie"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.waterplomberie.pro/#service-plombier-annecy",
    "name": "Plombier Annecy - Service Professionnel",
    "description": "Service de plomberie professionnel à Annecy. Plombier Annecy urgence 24/7, rénovation, chauffage. Devis gratuit.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Water Plomberie",
      "@id": "https://www.waterplomberie.pro/#plombier-annecy"
    },
    "areaServed": {
      "@type": "City",
      "name": "Annecy",
      "sameAs": "https://fr.wikipedia.org/wiki/Annecy"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services Plombier Annecy",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Urgence Plomberie Annecy",
            "description": "Service d'urgence plombier Annecy 24h/24. Intervention rapide pour tous dépannages plomberie Annecy."
          },
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "serviceType": "Plomberie",
    "category": "Plombier",
    "keywords": "plombier annecy, urgence plomberie annecy, dépannage plombier annecy"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
    </>
  );
}
