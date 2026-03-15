export type PageSection = {
  title: string;
  body: string;
  bullets?: string[];
  links?: { label: string; href: string }[];
};

export type PageFaq = {
  question: string;
  answer: string;
};

export type PageContent = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: PageSection[];
  faqs?: PageFaq[];
  cta?: {
    title: string;
    body: string;
  };
  noindex?: boolean;
};

export const pages: PageContent[] = [
  {
    slug: "services",
    title: "Deck and Fence Services",
    description:
      "Custom deck design, fence installation, repairs, and maintenance in Toronto and nearby cities.",
    h1: "Deck and Fence Services in Toronto",
    intro:
      "From design to finishing, we build outdoor structures that match your home and stand up to Toronto weather.",
    sections: [
      {
        title: "Custom Deck Design + Build",
        body:
          "We plan your layout, elevations, and material mix to deliver a deck that feels intentional, safe, and easy to maintain."
      },
      {
        title: "Fence Installation",
        body:
          "Modern privacy fences, decorative accents, and security solutions built with clean lines and durable hardware."
      },
      {
        title: "Repairs and Upgrades",
        body:
          "Replace worn boards, update railings, and improve safety with targeted upgrades that extend the life of your structure."
      },
      {
        title: "Permits and Planning",
        body:
          "We help you navigate local guidelines so your deck or fence meets Toronto requirements and passes inspections."
      },
      {
        title: "Service Areas for Deck Projects",
        body:
          "Choose your location page for local details, timelines, and project guidance.",
        links: [
          { label: "Toronto", href: "/deck-builder-in-toronto/" },
          { label: "North York", href: "/deck-builder-in-north-york/" },
          { label: "Richmond Hill", href: "/deck-builder-in-richmond-hill/" },
          { label: "Aurora", href: "/deck-builder-aurora/" }
        ]
      },
      {
        title: "Service Areas for Fence Projects",
        body:
          "Fence installation and privacy builds available across the same service areas.",
        links: [
          { label: "Toronto", href: "/fence-builder-toronto/" },
          { label: "North York", href: "/fence-builder-in-north-york/" },
          { label: "Richmond Hill", href: "/fence-builder-in-richmond-hill/" },
          { label: "Aurora", href: "/fence-builder-aurora/" }
        ]
      }
    ],
    faqs: [
      {
        question: "How long does a typical project take?",
        answer:
          "Most deck builds take 1-3 weeks depending on size, complexity, and permit timing."
      },
      {
        question: "Do you work with composite materials?",
        answer:
          "Yes. We build with wood and composite options and recommend materials based on budget and maintenance goals."
      }
    ],
    cta: {
      title: "Plan your project with us",
      body:
        "Share your measurements and inspiration. We will propose a clean, buildable plan with clear next steps."
    }
  },
  {
    slug: "contact-us",
    title: "Contact Best Toronto Decks",
    description:
      "Reach out for estimates, site visits, and project planning in Toronto and surrounding areas.",
    h1: "Contact Best Toronto Decks",
    intro:
      "Tell us about your yard, timeline, and goals. We respond quickly with a practical next step.",
    sections: [
      {
        title: "Call or Email",
        body:
          "Phone: (289) 812 4560. Email: maximumdecks@gmail.com. We answer inquiries seven days a week."
      },
      {
        title: "Service Area",
        body:
          "We work across Toronto, North York, Richmond Hill, Aurora, and nearby neighborhoods."
      }
    ],
    cta: {
      title: "Book a site visit",
      body:
        "Share your address, and we will schedule a time to take measurements and discuss materials."
    }
  },
  {
    slug: "projeckt",
    title: "Recent Deck Projects",
    description:
      "Explore recent deck and fence projects across Toronto and the GTA.",
    h1: "Recent Deck and Fence Projects",
    intro:
      "A selection of builds that highlight craftsmanship, clean lines, and durable materials.",
    sections: [
      {
        title: "Modern Backyard Decks",
        body:
          "Multi-level platforms, integrated seating, and lighting that extend outdoor living."
      },
      {
        title: "City-Friendly Fence Builds",
        body:
          "Quiet privacy fences with durable hardware, ideal for compact Toronto lots."
      },
      {
        title: "Low-Maintenance Composite",
        body:
          "Composite boards for a consistent finish, long lifespan, and reduced seasonal upkeep."
      }
    ],
    cta: {
      title: "Request a custom plan",
      body:
        "Show us your space and we will propose a build that fits your home and timeline."
    }
  },
  {
    slug: "why-decks-are-essential-for-home",
    title: "Why Decks Are Essential for Home",
    description:
      "Learn how a well-designed deck improves lifestyle, property value, and outdoor usability in Toronto.",
    h1: "Why Decks Are Essential for Toronto Homes",
    intro:
      "Decks expand usable space, make entertaining easier, and connect indoor living with the outdoors.",
    sections: [
      {
        title: "More Living Space",
        body:
          "A deck creates a dedicated zone for dining, relaxing, and family gatherings without major home additions."
      },
      {
        title: "Higher Property Value",
        body:
          "Quality exterior work boosts curb appeal and can help your home stand out in Toronto listings."
      },
      {
        title: "Design Control",
        body:
          "Layouts, railing styles, and materials can be tailored to match your home and local climate."
      }
    ],
    faqs: [
      {
        question: "Is a permit required?",
        answer:
          "Some decks require a permit based on height and attachment. We help review the requirements."
      },
      {
        question: "How do you maintain a deck?",
        answer:
          "Regular cleaning, seasonal inspection, and timely sealing keep wood decks in great shape."
      }
    ]
  },
  {
    slug: "form-order",
    title: "Request a Deck or Fence Quote",
    description:
      "Send your project details and request a quote from Best Toronto Decks.",
    h1: "Request a Quote",
    intro:
      "Share your measurements and goals. We will reply with clear pricing ranges and next steps.",
    sections: [
      {
        title: "What to Include",
        body:
          "Project location, approximate size, preferred materials, and your preferred start date."
      },
      {
        title: "How We Respond",
        body:
          "We review your details and suggest an on-site visit to confirm measurements."
      }
    ],
    noindex: true,
    cta: {
      title: "Send your project details",
      body:
        "Email maximumdecks@gmail.com or use the contact form to start the process."
    }
  },
  {
    slug: "sample-page",
    title: "Sample Page",
    description:
      "Sample content page retained for migration accuracy.",
    h1: "Sample Page",
    intro:
      "This page is preserved for URL continuity during the migration.",
    sections: [
      {
        title: "Migration Placeholder",
        body:
          "If this page is no longer needed, we can remove it after confirming search traffic and backlinks."
      }
    ],
    noindex: true
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description:
      "Privacy policy for Best Toronto Decks website visitors and clients.",
    h1: "Privacy Policy",
    intro:
      "We respect your privacy and only collect information needed to provide services.",
    sections: [
      {
        title: "Information We Collect",
        body:
          "We may collect your name, contact details, project address, and other details you submit through forms.",
        bullets: [
          "Contact details and project information",
          "Website usage data for analytics",
          "Communication preferences"
        ]
      },
      {
        title: "How We Use Information",
        body:
          "We use your information to respond to requests, schedule site visits, and provide estimates."
      },
      {
        title: "Data Protection",
        body:
          "We limit access to your data and do not sell your personal information."
      }
    ]
  },
  {
    slug: "terms-and-conditions",
    title: "Terms and Conditions",
    description:
      "Terms of use for Best Toronto Decks services and website.",
    h1: "Terms and Conditions",
    intro:
      "By using this site, you agree to the terms below. Contact us with any questions.",
    sections: [
      {
        title: "Use of Content",
        body:
          "Content on this site is provided for general information and may be updated without notice."
      },
      {
        title: "Estimates",
        body:
          "Quotes are based on site conditions and measurements confirmed during a visit."
      },
      {
        title: "Liability",
        body:
          "We are not responsible for issues caused by factors outside our control, such as extreme weather."
      }
    ]
  },
  {
    slug: "deck-builder-in-toronto",
    title: "Deck Builder in Toronto",
    description:
      "Custom deck and fence builder serving Toronto with design-led craftsmanship and durable materials.",
    h1: "Deck Builder in Toronto",
    intro:
      "We build decks and fences that feel tailored to Toronto homes, with clean lines, safe engineering, and premium finishes.",
    sections: [
      {
        title: "Toronto-Focused Planning",
        body:
          "We plan for lot sizes, city guidelines, and seasonal weather so your project lasts and stays compliant."
      },
      {
        title: "Material Guidance",
        body:
          "Choose cedar, pressure-treated wood, or composite boards based on appearance, durability, and maintenance goals."
      },
      {
        title: "Clear Build Process",
        body:
          "From measurements to finishing, we keep the jobsite clean and communicate timelines clearly."
      }
    ],
    faqs: [
      {
        question: "Do you handle permits in Toronto?",
        answer:
          "We help you understand permit requirements and can coordinate drawings as needed."
      },
      {
        question: "How long does a typical deck build take?",
        answer:
          "Most projects take 1-3 weeks depending on scope, materials, and inspection timing."
      }
    ],
    cta: {
      title: "Book a Toronto estimate",
      body:
        "Call (289) 812 4560 or email maximumdecks@gmail.com to schedule a site visit."
    }
  },
  {
    slug: "deck-builder-in-richmond-hill",
    title: "Deck Builder in Richmond Hill",
    description:
      "Professional deck and fence builder serving Richmond Hill with modern design and durable materials.",
    h1: "Deck Builder in Richmond Hill",
    intro:
      "We build custom decks and fences that feel tailored to your property and lifestyle.",
    sections: [
      {
        title: "Local Craftsmanship",
        body:
          "Our team designs for Richmond Hill lots with clean details and weather-ready materials."
      },
      {
        title: "Material Options",
        body:
          "Choose pressure-treated wood, cedar, or composite boards based on your maintenance goals."
      },
      {
        title: "Project Planning",
        body:
          "We review bylaws, confirm measurements, and keep the timeline transparent from start to finish."
      }
    ],
    faqs: [
      {
        question: "Do you handle permits?",
        answer:
          "We help you understand local permit requirements and guide you through the process."
      }
    ],
    cta: {
      title: "Schedule a Richmond Hill estimate",
      body:
        "Call (289) 812 4560 to book a site visit and get a tailored plan."
    }
  },
  {
    slug: "deck-builder-aurora",
    title: "Deck Builder in Aurora",
    description:
      "Custom deck design and fence installation for Aurora homeowners.",
    h1: "Deck Builder in Aurora",
    intro:
      "We deliver well-planned decks and fences that match Aurora homes and backyard layouts.",
    sections: [
      {
        title: "Design That Fits",
        body:
          "Every layout is custom-built to match your outdoor flow, doors, and landscaping."
      },
      {
        title: "Durable Finishes",
        body:
          "We focus on clean edges, sturdy footings, and finishes that handle Ontario seasons."
      },
      {
        title: "Clear Timelines",
        body:
          "We provide a practical build schedule and keep you updated through every stage."
      }
    ],
    faqs: [
      {
        question: "What is the average cost per square foot?",
        answer:
          "Costs vary by material and structure. We provide itemized estimates after a site visit."
      }
    ],
    cta: {
      title: "Request an Aurora quote",
      body:
        "Email maximumdecks@gmail.com with your project details."
    }
  },
  {
    slug: "deck-builder-in-north-york",
    title: "Deck Builder in North York",
    description:
      "Modern deck and fence builder serving North York with design-led craftsmanship.",
    h1: "Deck Builder in North York",
    intro:
      "Upgrade your outdoor space with clean design, durable materials, and precise installation.",
    sections: [
      {
        title: "Urban-Friendly Decks",
        body:
          "We build decks that maximize space on North York properties with efficient layouts."
      },
      {
        title: "Premium Materials",
        body:
          "We use quality lumber, composite boards, and hardware designed for long service life."
      },
      {
        title: "Safety and Compliance",
        body:
          "Proper footings, railings, and permits ensure your project is built to code."
      }
    ],
    faqs: [
      {
        question: "Do you build fences as well?",
        answer:
          "Yes. We build privacy and decorative fences to complement deck projects."
      }
    ],
    cta: {
      title: "Book a North York site visit",
      body:
        "Call or email us to schedule a measurement and consult."
    }
  },
  {
    slug: "fence-builder-toronto",
    title: "Fence Builder in Toronto",
    description:
      "Fence builder in Toronto providing privacy fences, decorative fencing, and durable installations.",
    h1: "Fence Builder in Toronto",
    intro:
      "We build modern and classic fences designed for Toronto homes, balancing privacy, security, and curb appeal.",
    sections: [
      {
        title: "Privacy and Security",
        body:
          "Choose layouts that reduce noise, improve privacy, and protect your property with clean design."
      },
      {
        title: "Material Options",
        body:
          "We install pressure-treated wood, cedar, and low-maintenance composite fencing."
      },
      {
        title: "Clean Installation",
        body:
          "Footings, posts, and gates are installed for long-term stability and smooth operation."
      }
    ],
    faqs: [
      {
        question: "Do you build custom gates?",
        answer:
          "Yes. We design gates to match your fence style and access requirements."
      }
    ],
    cta: {
      title: "Book a Toronto fence estimate",
      body:
        "Call (289) 812 4560 or email maximumdecks@gmail.com to schedule a site visit."
    }
  },
  {
    slug: "fence-builder-in-north-york",
    title: "Fence Builder in North York",
    description:
      "Fence installation in North York with privacy, security, and clean craftsmanship.",
    h1: "Fence Builder in North York",
    intro:
      "We build fences that match North York properties, with clean lines and durable materials.",
    sections: [
      {
        title: "Privacy Fences",
        body:
          "Solid panels and modern layouts for quiet, private outdoor spaces."
      },
      {
        title: "Decorative Details",
        body:
          "Add visual accents, lattice, or mixed materials to complement your exterior."
      },
      {
        title: "Reliable Hardware",
        body:
          "Gates and hinges are installed for durability and smooth daily use."
      }
    ],
    faqs: [
      {
        question: "Can you match an existing fence?",
        answer:
          "Yes, we can match materials and style when extending or replacing sections."
      }
    ],
    cta: {
      title: "Book a North York fence estimate",
      body:
        "Call or email us to schedule a measurement and consult."
    }
  },
  {
    slug: "fence-builder-in-richmond-hill",
    title: "Fence Builder in Richmond Hill",
    description:
      "Fence builder in Richmond Hill delivering privacy fencing and durable installations.",
    h1: "Fence Builder in Richmond Hill",
    intro:
      "We design fences that look clean, last longer, and complement Richmond Hill homes.",
    sections: [
      {
        title: "Property Protection",
        body:
          "Fence layouts tailored to lot lines, sightlines, and local requirements."
      },
      {
        title: "Material Selection",
        body:
          "Choose between cedar, pressure-treated, or composite depending on upkeep goals."
      },
      {
        title: "Precision Builds",
        body:
          "Posts are set square and gates are aligned for smooth operation."
      }
    ],
    faqs: [
      {
        question: "Do you remove old fencing?",
        answer:
          "Yes, we can remove and dispose of existing fence materials."
      }
    ],
    cta: {
      title: "Schedule a Richmond Hill fence estimate",
      body:
        "Call (289) 812 4560 to book a site visit and get a tailored plan."
    }
  },
  {
    slug: "fence-builder-aurora",
    title: "Fence Builder in Aurora",
    description:
      "Fence installation in Aurora with privacy and durable craftsmanship.",
    h1: "Fence Builder in Aurora",
    intro:
      "We build fences that align with Aurora properties and hold up through Ontario seasons.",
    sections: [
      {
        title: "Privacy and Style",
        body:
          "Choose modern or classic profiles to match your yard and home exterior."
      },
      {
        title: "Durable Materials",
        body:
          "We install cedar, treated wood, and low-maintenance composite fencing."
      },
      {
        title: "Clear Timelines",
        body:
          "We communicate build stages and keep the jobsite tidy throughout the project."
      }
    ],
    faqs: [
      {
        question: "How tall can a fence be?",
        answer:
          "Fence height limits vary by neighborhood. We help you follow local guidelines."
      }
    ],
    cta: {
      title: "Request an Aurora fence quote",
      body:
        "Email maximumdecks@gmail.com with your project details."
    }
  },
  {
    slug: "need-a-permit-toronto",
    title: "Do I Need a Permit to Build a Deck in Toronto?",
    description:
      "A practical guide to deck permits in Toronto, including when permits are required and how to apply.",
    h1: "Do I Need a Permit to Build a Deck in Toronto?",
    intro:
      "Permits depend on deck height, attachment, and structural details. This guide explains the basics so you can plan confidently.",
    sections: [
      {
        title: "When a Permit Is Required",
        body:
          "A permit is commonly required when a deck is attached to the home or elevated beyond certain thresholds. Always verify based on your exact dimensions."
      },
      {
        title: "How to Apply",
        body:
          "Prepare site plans, deck drawings, and structural details. We can provide drawings or coordinate with your designer to streamline approval."
      },
      {
        title: "Why It Matters",
        body:
          "Permits protect homeowners, ensure safety, and reduce risk during future home sales or inspections."
      }
    ],
    faqs: [
      {
        question: "Can I build without a permit?",
        answer:
          "Building without a permit can lead to fines or removal orders. It is best to confirm requirements up front."
      },
      {
        question: "How long does approval take?",
        answer:
          "Timing varies by season and complexity. We help you plan around typical review windows."
      }
    ],
    cta: {
      title: "Need help with drawings?",
      body:
        "We can prepare a deck plan aligned with Toronto guidelines before you submit."
    }
  },
  {
    slug: "elementor-landing-page-53",
    title: "Deck Builder Toronto Landing",
    description:
      "A focused landing page for Toronto deck and fence projects with fast estimates.",
    h1: "Deck Builder Toronto",
    intro:
      "Design-forward decks and fences built with premium materials and clean craftsmanship.",
    sections: [
      {
        title: "Built for Toronto Homes",
        body:
          "We shape each project to suit your property, climate, and lifestyle."
      },
      {
        title: "Fast Estimates",
        body:
          "Share your yard details and we will provide a clear estimate and schedule."
      }
    ],
    cta: {
      title: "Get a quick estimate",
      body:
        "Call (289) 812 4560 or email maximumdecks@gmail.com."
    }
  },
  {
    slug: "thank-you-page",
    title: "Thank You",
    description:
      "Thank you for contacting Best Toronto Decks.",
    h1: "Thank You",
    intro:
      "We received your request and will reach out soon.",
    sections: [
      {
        title: "Next Steps",
        body:
          "If your project is time-sensitive, call us directly at (289) 812 4560."
      }
    ],
    noindex: true
  }
];

export const pageSlugs = pages.map((page) => page.slug);

export const getPageBySlug = (slug: string) =>
  pages.find((page) => page.slug === slug);
