export const servicesData = {
  "visa-evaluation": {
    id: "visa-evaluation",
    title: "Visa Evaluation",
    category: "General Services",
    description: "Comprehensive visa eligibility assessment tailored to your unique immigration goals",
    shortDescription: "Determine your visa eligibility with expert guidance",
    image:
      "https://canadainntravelconsult.com/wp-content/uploads/2024/12/viza_10-1024x595.jpg", // person reviewing visa documents
    overview: `Our visa evaluation service provides a thorough analysis of your qualifications and circumstances to determine the most suitable visa category for your situation. Our experienced immigration attorneys will review your credentials, work experience, education, and family status to recommend the best pathway forward.`,
    features: [
      "Detailed eligibility assessment",
      "Multiple visa option recommendations",
      "Cost-benefit analysis",
      "Timeline projections",
      "Success rate estimates",
      "Personalized strategy plan",
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We gather comprehensive information about your background, qualifications, and immigration goals.",
      },
      {
        step: 2,
        title: "Document Review",
        description:
          "Our attorneys thoroughly review your educational credentials, work history, and personal circumstances.",
      },
      {
        step: 3,
        title: "Analysis & Assessment",
        description:
          "We evaluate your eligibility across multiple visa categories and analyze the pros and cons of each.",
      },
      {
        step: 4,
        title: "Recommendation Report",
        description: "You receive a detailed report with our recommendations, timeline, and next steps.",
      },
    ],
    price: "Starting at $500",
    duration: "2-3 weeks",
  },

  "immigration-consultations": {
    id: "immigration-consultations",
    title: "Immigration Consultations",
    category: "General Services",
    description: "Expert legal guidance for all your immigration questions and concerns",
    shortDescription: "Expert guidance for your immigration journey",
    image:
      "https://canadainntravelconsult.com/wp-content/uploads/2024/12/viza_10-1024x595.jpg", // attorney consultation
    overview: `Our immigration consultations provide expert legal advice on complex immigration matters. Whether you're facing a specific challenge or need general guidance, our experienced attorneys are here to help you navigate the complexities of U.S. immigration law.`,
    features: [
      "One-on-one attorney consultation",
      "Expert legal advice",
      "Case evaluation",
      "Strategy development",
      "Document preparation guidance",
      "Ongoing support",
    ],
    process: [
      {
        step: 1,
        title: "Schedule Consultation",
        description: "Book a convenient time to meet with one of our experienced immigration attorneys.",
      },
      {
        step: 2,
        title: "Detailed Discussion",
        description: "We discuss your situation, concerns, and goals in detail during the consultation.",
      },
      {
        step: 3,
        title: "Legal Analysis",
        description: "Our attorney analyzes your case and discusses all available options and strategies.",
      },
      {
        step: 4,
        title: "Action Plan",
        description: "We provide a clear action plan with recommendations and next steps.",
      },
    ],
    price: "Hourly rates starting at $250",
    duration: "60-90 minutes",
  },

  "h-1b-visa": {
    id: "h-1b-visa",
    title: "H-1B Visa",
    category: "Work Visas",
    description: "Specialized visa for skilled workers in specialty occupations",
    shortDescription: "Premium work visa for specialty occupations",
    image:
      "https://plus.unsplash.com/premium_photo-1661908759956-93c29efea72b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3VsdGF0aW9ufGVufDB8fDB8fHww", // US visa concept with passport & form :contentReference[oaicite:0]{index=0}
    overview: `The H-1B visa is the most popular visa for specialized workers. Our firm specializes in assisting employers and employees navigate the complex H-1B application process, from labor certification to visa petition and extension.`,
    features: [
      "Employer-sponsored work authorization",
      "Specialty occupation verification",
      "Labor certification assistance",
      "Visa petition preparation",
      "Consular processing guidance",
      "Amendment and extension support",
    ],
    process: [
      {
        step: 1,
        title: "Labor Certification",
        description: "Employer demonstrates no available U.S. workers for the position.",
      },
      {
        step: 2,
        title: "I-129 Petition",
        description: "Employer files Form I-129 with USCIS for H-1B approval.",
      },
      {
        step: 3,
        title: "Consular Processing",
        description: "Employee completes visa interview at U.S. embassy or consulate.",
      },
      {
        step: 4,
        title: "Port of Entry",
        description: "Employee enters the U.S. with H-1B visa authorization.",
      },
    ],
    price: "Varies by complexity",
    duration: "4-6 months",
  },

  "l-1-visa": {
    id: "l-1-visa",
    title: "L-1 Visa",
    category: "Work Visas",
    description: "Intracompany transfer visa for multinational companies",
    shortDescription: "Transfer managers and executives between company offices",
    image:
      "https://images.pexels.com/photos/1181282/pexels-photo-1181282.jpeg", // business travel concept
    overview: `The L-1 visa allows multinational companies to transfer managers and specialized workers between their international offices and U.S. operations. We assist both employers and employees throughout the L-1 application process.`,
    features: [
      "L-1A for executives and managers",
      "L-1B for specialized knowledge workers",
      "Blanket petition support",
      "Individual petition preparation",
      "Visa extension assistance",
      "Change of status support",
    ],
    process: [
      {
        step: 1,
        title: "Eligibility Verification",
        description: "Confirm employee meets L-1 requirements and company structure.",
      },
      {
        step: 2,
        title: "I-129 Filing",
        description: "Prepare and file Form I-129 with comprehensive documentation.",
      },
      {
        step: 3,
        title: "USCIS Review",
        description: "USCIS reviews petition and may request additional evidence.",
      },
      {
        step: 4,
        title: "Visa Processing",
        description: "Upon approval, proceed with visa interview and authorization.",
      },
    ],
    price: "Varies by petition type",
    duration: "2-4 months",
  },

  "o-1-visa": {
    id: "o-1-visa",
    title: "O-1 Visa",
    category: "Specialty Visas",
    description: "For individuals with extraordinary ability in sciences, arts, business, or athletics",
    shortDescription: "Elite visa for extraordinary talent",
    image:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1766897767/photo-1709715357520-5e1047a2b691_mcd2m1.jpg", // standout achievement scene
    overview: `The O-1 visa is designed for individuals with extraordinary ability in their field. Whether you're a renowned artist, accomplished scientist, or exceptional athlete, we can help you navigate the demanding O-1 petition process.`,
    features: [
      "Extraordinary ability documentation",
      "Peer review coordination",
      "Media documentation gathering",
      "Award and recognition verification",
      "Job offer review",
      "Visa processing support",
    ],
    process: [
      {
        step: 1,
        title: "Eligibility Assessment",
        description: "We evaluate your achievements against O-1 extraordinary ability standards.",
      },
      {
        step: 2,
        title: "Documentation Preparation",
        description: "Gather evidence of awards, media coverage, and peer recognition.",
      },
      {
        step: 3,
        title: "Petition Filing",
        description: "File comprehensive I-129 petition with all supporting materials.",
      },
      {
        step: 4,
        title: "Visa Authorization",
        description: "Upon approval, proceed to visa interview and entry.",
      },
    ],
    price: "Varies by case complexity",
    duration: "3-5 months",
  },

  "e-2-visa": {
    id: "e-2-visa",
    title: "E-2 Visa",
    category: "Business Visas",
    description: "Treaty investor visa for business owners and executives",
    shortDescription: "Invest and manage your business in the U.S.",
    image:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1768415748/pexels-fauxels-3182759_fmbwwl.jpg", // business investor concept
    overview: `The E-2 visa is available to nationals of countries with which the U.S. maintains a treaty. It allows qualified investors to enter and work in the U.S. to manage a business enterprise in which they have invested substantial capital.` + ` E-2 visas are for treaty investor categories. :contentReference[oaicite:1]{index=1}`,
    features: [
      "Treaty country verification",
      "Investment requirement analysis",
      "Business plan development",
      "Financial documentation",
      "Consular application support",
      "Renewal and extension assistance",
    ],
    process: [
      {
        step: 1,
        title: "Eligibility Review",
        description: "Verify treaty eligibility and investment requirements.",
      },
      {
        step: 2,
        title: "Documentation Preparation",
        description: "Prepare comprehensive business plan and financial documentation.",
      },
      {
        step: 3,
        title: "Consular Application",
        description: "File visa application at U.S. embassy or consulate.",
      },
      {
        step: 4,
        title: "Visa Interview",
        description: "Attend interview and receive visa authorization.",
      },
    ],
    price: "Starting at $2,000",
    duration: "4-8 weeks",
  },

  "eb-1-green-card": {
    id: "eb-1-green-card",
    title: "EB-1 Green Card",
    category: "Employment-Based Green Cards",
    description: "Green card for individuals with extraordinary ability",
    shortDescription: "Permanent residence for exceptional talent",
    image:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1760774260/9ul472v5hb.jpg", // green card concept
    overview: `The EB-1 green card is available to individuals with extraordinary ability in sciences, business, education, or arts. This category offers a direct path to permanent residence without labor certification or employment offer requirements.`,
    features: [
      "Self-petition option (EB-1C)",
      "Extraordinary ability documentation",
      "International recognition evidence",
      "Award and media verification",
      "National interest waiver support",
      "Priority date processing",
    ],
    process: [
      {
        step: 1,
        title: "Category Assessment",
        description: "Determine which EB-1 category best suits your qualifications.",
      },
      {
        step: 2,
        title: "Evidence Collection",
        description: "Gather comprehensive evidence of extraordinary ability.",
      },
      {
        step: 3,
        title: "Petition Filing",
        description: "File Form I-140 immigrant petition with supporting materials.",
      },
      {
        step: 4,
        title: "Adjustment/Consular Processing",
        description: "Proceed to green card issuance through appropriate process.",
      },
    ],
    price: "Varies by complexity",
    duration: "6-12 months",
  },

  "eb-2-niw": {
    id: "eb-2-niw",
    title: "EB-2 NIW",
    category: "Employment-Based Green Cards",
    description: "Green card through National Interest Waiver for skilled professionals",
    shortDescription: "Employment-based green card without job offer",
    image:
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg", // professionals concept
    overview: `The EB-2 National Interest Waiver provides a path to permanent residence for skilled professionals whose work benefits the U.S. national interest. It eliminates the need for a labor certification and job offer.`,
    features: [
      "National interest determination",
      "Advanced degree verification",
      "Exceptional ability documentation",
      "Impact assessment preparation",
      "Labor certification waiver support",
      "Priority date tracking",
    ],
    process: [
      {
        step: 1,
        title: "Qualifications Assessment",
        description: "Evaluate eligibility under EB-2 NIW requirements.",
      },
      {
        step: 2,
        title: "Evidence Development",
        description: "Prepare comprehensive evidence of exceptional ability.",
      },
      {
        step: 3,
        title: "NIW Petition Filing",
        description: "File Form I-140 with national interest waiver request.",
      },
      {
        step: 4,
        title: "Green Card Processing",
        description: "Upon approval, proceed to adjustment of status.",
      },
    ],
    price: "Starting at $3,500",
    duration: "8-14 months",
  },

  "eb-3-green-card": {
    id: "eb-3-green-card",
    title: "EB-3 Green Card",
    category: "Employment-Based Green Cards",
    description: "Employment-based green card for skilled and unskilled workers",
    shortDescription: "Standard employment-based green card pathway",
    image:
      "https://images.pexels.com/photos/3862142/pexels-photo-3862142.jpeg", // immigration documents concept
    overview: `The EB-3 green card category includes skilled workers, professionals, and unskilled workers. This is the primary employment-based category requiring labor certification and job sponsorship.`,
    features: [
      "Labor certification filing",
      "Job offer documentation",
      "Prevailing wage determination",
      "Recruitment evidence preparation",
      "I-140 petition filing",
      "Visa availability monitoring",
    ],
    process: [
      {
        step: 1,
        title: "Labor Certification",
        description: "Employer demonstrates no available U.S. workers.",
      },
      {
        step: 2,
        title: "I-140 Petition",
        description: "Employer files immigrant petition.",
      },
      {
        step: 3,
        title: "Priority Date Wait",
        description: "Wait for visa availability based on priority date.",
      },
      {
        step: 4,
        title: "Adjustment of Status",
        description: "File I-485 and proceed to green card approval.",
      },
    ],
    price: "Varies by case",
    duration: "2-5 years",
  },

  "family-based-immigration": {
    id: "family-based-immigration",
    title: "Family-Based Immigration",
    category: "Family Sponsorship",
    description: "Reunite with your family through family-based immigration",
    shortDescription: "Bring your loved ones to America",
    image:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1767744143/consultants-making-a-plan-8d8hudqwednxzxst_hvxl7a.jpg", // family concept
    overview: `Family-based immigration allows U.S. citizens and permanent residents to sponsor their family members. We guide families through the petitioning process and help establish the relationships and evidence needed for approval.`,
    features: [
      "Immediate relative sponsorship",
      "Family preference category guidance",
      "Visa bulletin monitoring",
      "I-130 petition preparation",
      "Affidavit of support assistance",
      "Medical exam coordination",
    ],
    process: [
      {
        step: 1,
        title: "Eligibility Determination",
        description: "Verify relationship and immigration status requirements.",
      },
      {
        step: 2,
        title: "I-130 Filing",
        description: "File family relationship petition with USCIS.",
      },
      {
        step: 3,
        title: "Approval & Priority Date",
        description: "Receive approval and establish priority date.",
      },
      {
        step: 4,
        title: "Visa Processing",
        description: "Complete visa interview and final green card issuance.",
      },
    ],
    price: "Starting at $1,500",
    duration: "6 months - 2+ years",
  },

  "adjustment-of-status": {
    id: "adjustment-of-status",
    title: "Adjustment of Status",
    category: "Immigration Processes",
    description: "Apply for green card without leaving the United States",
    shortDescription: "Gain permanent residence while in the U.S.",
    image:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1767744374/premium_photo-1661517500992-184e02c6b6c7_f3upzq.jpg", // adjustment of status concept
    overview: `Adjustment of Status allows eligible immigrants to apply for permanent residence without returning to their home country. Our attorneys guide you through the entire I-485 process to help you achieve your green card.`,
    features: [
      "Eligibility assessment",
      "I-485 application preparation",
      "Medical examination coordination",
      "Background check guidance",
      "Interview preparation",
      "Work and travel authorization support",
    ],
    process: [
      {
        step: 1,
        title: "Eligibility Verification",
        description: "Confirm you qualify for adjustment of status.",
      },
      {
        step: 2,
        title: "I-485 Preparation",
        description: "Prepare comprehensive adjustment of status application.",
      },
      {
        step: 3,
        title: "Medical & Security Checks",
        description: "Complete required medical examination and background checks.",
      },
      {
        step: 4,
        title: "Green Card Approval",
        description: "Attend interview and receive green card upon approval.",
      },
    ],
    price: "Starting at $2,000",
    duration: "6-12 months",
  },

  "consular-processing": {
    id: "consular-processing",
    title: "Consular Processing",
    category: "Immigration Processes",
    description: "Complete visa process at U.S. embassy or consulate abroad",
    shortDescription: "Overseas visa interview and processing",
    image:
      "https://res.cloudinary.com/diml90c1y/image/upload/v1767743961/consultant-background-0bb0flkn9zvgvg9v_montma.jpg", // consular interview concept :contentReference[oaicite:2]{index=2}
    overview: `Consular Processing is the process by which immigrants obtain visas at U.S. embassies and consulates abroad. We guide you through every step, from document preparation to the final visa interview.`,
    features: [
      "NVC documentation preparation",
      "DS-260 form assistance",
      "Medical examination coordination",
      "Police certificate gathering",
      "Interview preparation",
      "Document translation support",
    ],
    process: [
      {
        step: 1,
        title: "NVC Processing",
        description: "Complete National Visa Center documentation and fees.",
      },
      {
        step: 2,
        title: "Medical Exam",
        description: "Undergo civil surgeon medical examination.",
      },
      {
        step: 3,
        title: "Interview Preparation",
        description: "Prepare thoroughly for your consular interview.",
      },
      {
        step: 4,
        title: "Visa Issuance",
        description: "Receive visa and proceed to U.S. entry.",
      },
    ],
    price: "Starting at $1,500",
    duration: "3-6 months",
  },
}

export type ServiceKey = keyof typeof servicesData
export type Service = (typeof servicesData)[ServiceKey]

export const allServices = Object.values(servicesData)
export const serviceCategories = Array.from(
  new Set(allServices.map((s) => s.category))
)
