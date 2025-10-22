import { Questionnaire } from './types.ts';

// Phase 1 Questionnaires
// This is a questionnaire for the NSW SOPA Act.
export const sopanswQuestionnaire: Questionnaire = {
    id: "sopa-nsw-eligibility",
    title: "SOPA NSW Contract Eligibility Questionnaire",
    description: "This questionnaire helps determine eligibility under the Security of Payment Act (SOPA) in New South Wales.",
    questions: [
        // Section 1: Identification
        {
            id: "Q1",
            text: "What is the person or organisation name (as per contract)?",
            key: "contract_party_name",
            parent: null,
            section: "Identification",
            dependantAnswer: null,
            type: "text",
            options: null
        },
        {
            id: "Q2",
            text: "(Optional) Please provide your ABN (Australian Business Number) or ACN (Australian Company Number), if applicable.",
            key: "abn_acn",
            parent: "Q1",
            section: "Identification",
            dependantAnswer: null,
            type: "text",
            options: null
        },

        // Section 2: Contract Upload and Nature
        {
            id: "Q3",
            text: "Is the contract financial in nature?",
            key: "financial_contract",
            parent: null,
            section: "Contract Nature",
            dependantAnswer: null,
            type: "multiple-choice",
            options: ["Yes", "No"]
        },
        {
            id: "Q4",
            text: "Does it involve any of the following?",
            key: "financial_options",
            parent: "Q3",
            section: "Contract Nature",
            dependantAnswer: "Yes",
            type: "multiple-choice",
            options: [
                "Lending or repaying a loan",
                "Guaranteeing payment of money owed",
                "Repaying money lent"
            ]
        },
        {
            id: "Q5",
            text: "Is it tied to a recognized financial institution?",
            key: "financial_institution",
            parent: "Q3",
            section: "Contract Nature",
            dependantAnswer: "Yes",
            type: "multiple-choice",
            options: ["Yes", "No"]
        },

        // Section 3: Construction Context
        {
            id: "Q6",
            text: "Is the contract related to construction work?",
            key: "construction_related",
            parent: null,
            section: "Construction Context",
            dependantAnswer: null,
            type: "multiple-choice",
            options: ["Yes", "No"]
        },
        {
            id: "Q7",
            text: "Is the construction work being carried out in New South Wales (NSW)?",
            key: "nsw_construction",
            parent: "Q6",
            section: "Construction Context",
            dependantAnswer: "Yes",
            type: "multiple-choice",
            options: ["Yes", "No"]
        },

        // Section 4: Scope of Work
        {
            id: "Q8",
            text: "Does the scope of work involve the provision of goods or services as outlined by s.6 SOPA NSW?",
            key: "scope_s6",
            parent: null,
            section: "Scope of Work",
            dependantAnswer: null,
            type: "multiple-choice",
            options: ["Yes", "No"]
        },
        {
            id: "Q9",
            text: "What category best describes what you provide?",
            key: "provider_category",
            section: "Scope of Work",
            parent: "Q8",
            dependantAnswer: "Yes",
            type: "multiple-choice",
            options: ["Goods Provider", "Service Provider", "Other"]
        },

        // Section 5: Goods Provider specifics
        {
            id: "Q10",
            text: "Do you provide materials or components to form part of any building, structure, or work per s.6(1)(a)?",
            key: "goods_materials",
            parent: "Q9",
            section: "Goods Provider Specifics",
            dependantAnswer: "Goods Provider",
            type: "multiple-choice",
            options: ["Yes", "No"]
        },
        {
            id: "Q11",
            text: "Do you provide plants or materials by sale or hire for construction per s.6(1)(a)?",
            key: "goods_plants",
            parent: "Q10",
            section: "Goods Provider Specifics",
            dependantAnswer: "No",
            type: "multiple-choice",
            options: ["Yes", "No"]
        },

        // Section 6: Service Provider specifics
        {
            id: "Q12",
            text: "Do you provide any of the following services per s.6(1)(b)(i)?",
            key: "services_design",
            section: "Service Provider Specifics",
            parent: "Q9",
            dependantAnswer: "Service Provider",
            type: "multiple-choice",
            options: [
                "Architectural services",
                "Design services",
                "Surveying services",
                "Quantity surveying services"
            ]
        },
        {
            id: "Q13",
            text: "Do you provide any of the following services per s.6(1)(b)(ii)?",
            key: "services_engineering",
            section: "Service Provider Specifics",
            parent: "Q12",
            dependantAnswer: null, // only triggered if none selected from Q12
            type: "multiple-choice",
            options: [
                "Building services",
                "Engineering services",
                "Interior decoration",
                "Exterior decoration",
                "Landscape advisory services"
            ]
        },
        {
            id: "Q14",
            text: "Do you provide labour to carry out construction work per s.6(1)(b)?",
            key: "labour_provider",
            parent: "Q13",
            section: "Service Provider Specifics",
            dependantAnswer: null,
            type: "multiple-choice",
            options: ["Yes", "No"]
        },

        // Section 7: Confirmation
        {
            id: "Q15",
            text: "Are you acting as an employee under the Industrial Relations Act 1996 (subsection 7(3) SOPA NSW)?",
            key: "employee_status",
            parent: null,
            dependantAnswer: null,
            section: "Confirmation",
            type: "multiple-choice",
            options: ["Yes", "No"]
        },
        {
            id: "Q16",
            text: "(Optional) Please provide any additional notes or clarifications about your contract or scope of work.",
            key: "additional_notes",
            section: "Confirmation",
            parent: "Q15",
            dependantAnswer: null,
            type: "text",
            options: null
        }
    ],
    createdAt: new Date("2025-08-18T12:00:00Z"),
    updatedAt: new Date("2025-08-18T12:00:00Z"),
    country: "Australia",
    state: "NSW",
    jurisdiction: "SOPA NSW",
    tags: ["eligibility", "construction", "contract", "sopa", "nsw"],
    version: "1.0.0",
    isActive: true,
    isPublic: true
};

// Comprehensive version of the SOPA NSW questionnaire with detailed analysis and role assignment
export const sopanswQuestionnaireComprehensive: Questionnaire = {
  id: "sopa-nsw-eligibility",
  title: "SOPA NSW Contract Eligibility Questionnaire (Comprehensive)",
  description:
    "This questionnaire helps determine eligibility under the Security of Payment Act (SOPA) in New South Wales (NSW) and assigns the applicant to an appropriate role.",
  questions: [
    // Section 1: Identification
    {
      id: "Q1",
      text: "What is the person or organisation name (as per contract)?",
      key: "contract_party_name",
      parent: null,
      section: "Identification",
      dependantAnswer: null,
      type: "text",
      options: null
    },
    {
      id: "Q2",
      text: "(Optional) Please provide your ABN (Australian Business Number) or ACN (Australian Company Number), if applicable.",
      key: "abn_acn",
      parent: "Q1",
      section: "Identification",
      dependantAnswer: null,
      type: "text",
      options: null
    },

    // Section 2: Contract Nature
    {
      id: "Q3",
      text: "Is the contract financial in nature? (s.7(2) SOPA NSW)",
      key: "financial_contract",
      parent: null,
      section: "Contract Nature",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q4",
      text: "If yes, which of the following apply?",
      key: "financial_options",
      parent: "Q3",
      section: "Contract Nature",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: [
        "Lending or repaying a loan",
        "Guaranteeing payment of money owed",
        "Repaying money lent",
        "Providing indemnity regarding construction work"
      ]
    },
    {
      id: "Q5",
      text: "Is the contract tied to a recognised financial institution (loan-conditioned construction, s.7(3) SOPA NSW)?",
      key: "financial_institution",
      parent: "Q3",
      section: "Contract Nature",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },

    // Section 3: Jurisdiction
    {
      id: "Q6",
      text: "Is the contract related to construction work?",
      key: "construction_related",
      parent: null,
      section: "Jurisdiction",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q7",
      text: "Is the construction work being carried out in New South Wales (NSW)? (s.7(4) SOPA NSW)",
      key: "nsw_construction",
      parent: "Q6",
      section: "Jurisdiction",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },

    // Section 4: Construction Work (s.5)
    {
      id: "Q8",
      text: "Which of the following best describes the construction work involved? (s.5(1) SOPA NSW)",
      key: "construction_scope",
      parent: "Q7",
      section: "Construction Work",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: [
        "Building, alteration, repair, restoration, demolition (s.5(1)(a))",
        "Infrastructure (roads, pipelines, runways, docks, railways, etc.) (s.5(1)(b))",
        "Installations (heating, ventilation, fire, safety, power, comms) (s.5(1)(c))",
        "Cleaning during construction (s.5(1)(d))",
        "Preparatory work (site clearance, foundations, scaffolding, prefabrication, landscaping) (s.5(1)(e))",
        "Painting or decorating (s.5(1)(f))",
        "Other prescribed work (s.5(1)(g))"
      ]
    },
    {
      id: "Q9",
      text: "Does the contract fall under explicit exclusions (s.5(2) SOPA NSW)?",
      key: "construction_exclusions",
      parent: "Q8",
      section: "Construction Work",
      dependantAnswer: null,
      type: "multiple-choice",
      options: [
        "Drilling for or excavation of oil or natural gas (s.5(2)(a))",
        "Extraction of minerals or tunnelling/boring for that purpose (s.5(2)(b))",
        "Other prescribed exclusions (s.5(2)(c))",
        "No exclusions apply"
      ]
    },

    // Section 5: Goods and Services (s.6)
    {
      id: "Q10",
      text: "Does the scope of work involve the provision of goods or services as outlined by s.6 SOPA NSW?",
      key: "scope_s6",
      parent: "Q6",
      section: "Goods and Services",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q11",
      text: "What category best describes what you provide?",
      key: "provider_category",
      parent: "Q10",
      section: "Goods and Services",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Goods Provider", "Service Provider", "Other"]
    },
    {
      id: "Q12",
      text: "Do you provide materials or components to form part of any building, structure, or work? (s.6(1)(a)(i))",
      key: "goods_materials",
      parent: "Q11",
      section: "Goods Provider Specifics",
      dependantAnswer: "Goods Provider",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q13",
      text: "Do you provide plant or materials by sale or hire for construction? (s.6(1)(a)(ii))",
      key: "goods_plants",
      parent: "Q11",
      section: "Goods Provider Specifics",
      dependantAnswer: "Goods Provider",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q14",
      text: "Do you provide architectural, design, surveying, or quantity surveying services? (s.6(1)(b)(ii))",
      key: "services_design",
      parent: "Q11",
      section: "Service Provider Specifics",
      dependantAnswer: "Service Provider",
      type: "multiple-choice",
      options: [
        "Architectural services",
        "Design services",
        "Surveying services",
        "Quantity surveying services"
      ]
    },
    {
      id: "Q15",
      text: "Do you provide building, engineering, interior/exterior decoration, or landscape advisory services? (s.6(1)(b)(iii))",
      key: "services_engineering",
      parent: "Q11",
      section: "Service Provider Specifics",
      dependantAnswer: "Service Provider",
      type: "multiple-choice",
      options: [
        "Building services",
        "Engineering services",
        "Interior decoration",
        "Exterior decoration",
        "Landscape advisory services"
      ]
    },
    {
      id: "Q16",
      text: "Do you provide labour to carry out construction work? (s.6(1)(b)(i))",
      key: "labour_provider",
      parent: "Q11",
      section: "Service Provider Specifics",
      dependantAnswer: "Service Provider",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },

    // Section 6: Entity Classification (explicit + factual)
    {
      id: "Q17a",
      text: "Do you contract directly with the principal/owner?",
      key: "contracts_with_principal",
      parent: "Q6",
      section: "Entity Classification",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q17b",
      text: "Do you engage subcontractors for part(s) of the work?",
      key: "engages_subcontractors",
      parent: "Q6",
      section: "Entity Classification",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },

    // Section 7: Confirmation
    {
      id: "Q18",
      text: "Are you acting as an employee under the Industrial Relations Act 1996 (s.7(3) SOPA NSW)?",
      key: "employee_status",
      parent: null,
      section: "Confirmation",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q19",
      text: "(Optional) Please provide any additional notes or clarifications about your contract or scope of work.",
      key: "additional_notes",
      parent: "Q18",
      section: "Confirmation",
      dependantAnswer: null,
      type: "text",
      options: null
    }
  ],
  createdAt: new Date("2025-09-02T12:00:00Z"),
  updatedAt: new Date("2025-09-02T12:00:00Z"),
  country: "Australia",
  state: "NSW",
  jurisdiction: "SOPA NSW",
  tags: ["eligibility", "construction", "contract", "sopa", "nsw", "enhanced"],
  version: "2.0.0",
  isActive: true,
  isPublic: true
};

// Second version of Phase 1 questionnaire
export const sopanswQuestionnaireComprehensive1: Questionnaire = {
  id: "sopa-nsw-eligibility",
  title: "SOPA NSW Contract Eligibility Questionnaire (Comprehensive1)",
  description:
    "This questionnaire helps determine eligibility under the Security of Payment Act (SOPA) in New South Wales (NSW) and assigns the applicant to an appropriate role.",
  questions: [
    // Section : Tell us about yourself
    {
      id: "Q1",
      text: "Your name or business name",
      key: "contract_party_name",
      parent: null,
      section: "Tell us about yourself",
      dependantAnswer: null,
      type: "text",
      options: null
    },
    {
      id: "Q2",
      text: "Business number (optional)",
      key: "abn_acn",
      parent: "Q1",
      section: "Tell us about yourself",
      dependantAnswer: null,
      type: "text",
      options: null
    },

    // Section : About your contract
    {
      id: "Q3",
      text: "Is your contract about money or loans?",
      key: "financial_contract",
      parent: null,
      section: "About your contract",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q4",
      text: "Which of these apply?",
      key: "financial_options",
      parent: "Q3",
      section: "About your contract",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: [
        "Lending or repaying a loan",
        "Guaranteeing payment of money owed",
        "Repaying money lent",
        "Providing indemnity regarding construction work"
      ]
    },
    {
      id: "Q5",
      text: "Is the contract tied to a recognised financial institution ?",
      key: "financial_institution",
      parent: "Q3",
      section: "About your contract",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },

    // Section : Where is the work happening?
    {
      id: "Q6",
      text: "Is this about construction or building work?",
      key: "construction_related",
      parent: null,
      section: "Where is the work happening?",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q7",
      text: "Is the work happening in New South Wales (NSW)?",
      key: "nsw_construction",
      parent: "Q6",
      section: "Where is the work happening?",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },

    // What kind of work do you do?
    {
      id: "Q8",
      text: "What kind of construction work? (select all that apply)",
      key: "construction_scope",
      parent: "Q7",
      section: "What kind of work do you do?",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: [
        "Building, alteration, repair, restoration, demolition",
        "Infrastructure (roads, pipelines, runways, docks, railways, etc.)",
        "Installations (heating, ventilation, fire, safety, power, comms)",
        "Cleaning during construction.",
        "Preparatory work (site clearance, foundations, scaffolding, prefabrication, landscaping)",
        "Painting or decorating.",
        "Other prescribed work."
      ]
    },
    {
      id: "Q9",
      text: "Do your work fall into any of these special categories?",
      key: "construction_exclusions",
      parent: "Q8",
      section: "What kind of work do you do?",
      dependantAnswer: null,
      type: "multiple-choice",
      options: [
        "Drilling for or excavation of oil or natural gas.",
        "Extraction of minerals or tunnelling/boring for that purpose.",
        "Other prescribed exclusions.",
        "No exclusions apply"
      ]
    },

    // Section: What do you provide?
    {
      id: "Q10",
      text: "Do you provide goods, services or both?",
      key: "scope_s6",
      parent: "Q6",
      section: "What do you provide?",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q11",
      text: "What category best describes you?",
      key: "provider_category",
      parent: "Q10",
      section: "What do you provide?",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Goods Provider", "Service Provider", "Other"]
    },
    {
      id: "Q12",
      text: "Do you supply any materials or parts that are used in building or construction work?",
      key: "goods_materials",
      parent: "Q11",
      section: "Goods Provider Specifics",
      dependantAnswer: "Goods Provider",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q13",
      text: "Do you sell or rent out equipment or materials for construction?",
      key: "goods_plants",
      parent: "Q11",
      section: "Goods Provider Specifics",
      dependantAnswer: "Goods Provider",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q14",
      text: "Which of the following services you provide ?",
      key: "services_design",
      parent: "Q11",
      section: "Service Provider Specifics",
      dependantAnswer: "Service Provider",
      type: "multiple-choice",
      options: [
        "Architectural services",
        "Design services",
        "Surveying services",
        "Quantity surveying services"
      ]
    },
    {
      id: "Q15",
      text: "Do you provide services like building, engineering, interior or exterior decoration, or landscape advice?",
      key: "services_engineering",
      parent: "Q11",
      section: "Service Provider Specifics",
      dependantAnswer: "Service Provider",
      type: "multiple-choice",
      options: [
        "Building services",
        "Engineering services",
        "Interior decoration",
        "Exterior decoration",
        "Landscape advisory services"
      ]
    },
    {
      id: "Q16",
      text: "Do you supply workers to do construction work?",
      key: "labour_provider",
      parent: "Q11",
      section: "Service Provider Specifics",
      dependantAnswer: "Service Provider",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },

    // Section : How does your business work?
    {
      id: "Q17a",
      text: "Do you work directly with the property owner or main client?",
      key: "contracts_with_principal",
      parent: "Q6",
      section: "How does your business work?",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q17b",
      text: "Do you hire other people or companies to help with the work?",
      key: "engages_subcontractors",
      parent: "Q6",
      section: "How does your business work?",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"]
    },

    // Section 7: Just a few more details
    {
      id: "Q18",
      text: "Are you working as an employee for someone else?",
      key: "employee_status",
      parent: null,
      section: "Just a few more details",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"]
    },
    {
      id: "Q19",
      text: "Anything else you'd like to tell us? (optional)",
      key: "additional_notes",
      parent: "Q18",
      section: "Just a few more details",
      dependantAnswer: null,
      type: "text",
      options: null
    }
  ],
  createdAt: new Date("2025-09-02T12:00:00Z"),
  updatedAt: new Date("2025-09-02T12:00:00Z"),
  country: "Australia",
  state: "NSW",
  jurisdiction: "SOPA NSW",
  tags: ["eligibility", "construction", "contract", "sopa", "nsw", "enhanced"],
  version: "2.0.0",
  isActive: true,
  isPublic: true
};

// Third version of Phase 1 questionnaire
export const sopanswPhase2QuestionnaireComprehensive2: Questionnaire = {
  id: "sopa-nsw-phase-2",
  title: "Phase 2 - Payment Claim Validation (SOPA NSW)",
  description: "Checks all SOPA NSW s.8-s.13 requirements for Builders, Contractors, and Head Contractors before a payment claim proceeds.",
  questions: [
       // A. Role Path Identification
        {
          id: "R1",
          text: "What is your role in this contract?",
          key: "role",
          parent: null,
          section: "Role",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Builder", "Contractor", "Head Contractor"]
        },
        
        //Case Information
        {
          id: "CASE1",
          text: "Case Title",
          key: "case_title",
          parent: null,
          section: "Case Information",
          dependantAnswer: null,
          type: "text",
          options: null
        },
        {
          id: "CASE2",
          text: "Case Description ",
          key: "case_description",
          parent: "CASE1",
          section: "Case Information",
          dependantAnswer: null,
          type: "long-text",
          options: null
        },

        // --- BUILDER path prerequisites ---
        {
          id: "B1",
          text: "What is your ABN or ACN",
          key: "abn_acn",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "text",
          options: null
        },
        // UPDATED: Builder licence dual-input
        {
          id: "B2_mode",
          text: "How would you like to share your NSW building licence?",
          key: "builder_licence_mode",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "B2",
          text: "Upload your NSW building licence credential evidence.",
          key: "builder_licence_file",
          parent: "B2_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "B2a",
          text: "NSW building licence number",
          key: "builder_licence_number",
          parent: "B2_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "B2b",
          text: "Licence holder name",
          key: "builder_licence_holder",
          parent: "B2_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "B2c",
          text: "Licence class (optional)",
          key: "builder_licence_class",
          parent: "B2_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "B2d",
          text: "Licence expiry date (optional)",
          key: "builder_licence_expiry",
          parent: "B2_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "B3",
          text: "Is your building contract properly licensed under NSW rules?",
          key: "hba_s4_compliance",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "multiple-choice",
          options: ["Yes", "No", "Unsure"]
        },
        {
          id: "B4",
          text: "Is the work residential building work?",
          key: "is_residential",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "multiple-choice",
          options: ["Yes", "No"]
         },
         // NEW: dual-input selector + manual insurance details (keeps B5 upload)
        {
          id: "B5_mode",
          text: "How will you provide residential insurance (HBA s.92) evidence?",
          key: "hba_s92_mode",
          parent: "B4",
          section: "Builder Prerequisites",
          dependantAnswer: "Yes",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "B5",
          text: "Upload your home building insurance certificate (HBCF)",
          key: "hba_s92_insurance",
          parent: "B5_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "B5a",
          text: "Insurance policy number",
          key: "hba_s92_policy_number",
          parent: "B5_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "B5b",
          text: "Insurer name",
          key: "hba_s92_insurer",
          parent: "B5_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "B5c",
          text: "Coverage period start",
          key: "hba_s92_coverage_from",
          parent: "B5_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "B5d",
          text: "Coverage period end",
          key: "hba_s92_coverage_to",
          parent: "B5_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "B6",
          text: "Confirm you satisfy SOPA s.8(2): a reference date exists for progress payment.",
          key: "s8_2_reference_date",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "multiple-choice",
          options: ["Yes", "No", "Unsure"]
        },

    // --- HEAD CONTRACTOR Supporting Statement (dual-input added) ---
        {
          id: "HC0_mode",
          text: "How will you provide the Supporting Statement (s.13(7) & (9))?",
          key: "ss_mode",
          parent: "R1",
          section: "Supporting Statement",
          dependantAnswer: "Head Contractor",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "HC1",
          text: "Upload your Supporting Statement (approved form).",
          key: "supporting_statement_file",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "HC1a",
          text: "Statement date",
          key: "ss_date",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "HC1b",
          text: "Signed by (name)",
          key: "ss_signer_name",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "HC1c",
          text: "Signer position/title",
          key: "ss_signer_position",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "HC1d",
          text: "Payment claim reference (Claim # / period / project ref)",
          key: "ss_claim_reference",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "HC2",
          text: "Declaration: I confirm the Supporting Statement is true and subcontractors have been paid all amounts due.",
          key: "ss_truth_declaration",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["I acknowledge and declare"]
        },

        // --- COMMON Payment Claim (served + dual-input for claim doc) ---
        {
          id: "C0",
          text: "Have you already sent a payment claim for this job?",
          key: "payment_claim_served",
          parent: null,
          section: "Payment Claim",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "C1_mode",
          text: "How will you provide your payment claim?",
          key: "payment_claim_mode",
          parent: "C0",
          section: "Payment Claim",
          dependantAnswer: "Yes",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "C1a",
          text: "Upload the payment claim you sent (PDF or photo).",
          key: "payment_claim_file",
          parent: "C1_mode",
          section: "Payment Claim",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        // Manual claim context (optional but useful for AI or when no file)
        {
          id: "C1m1",
          text: "Claim number/reference",
          key: "claim_number",
          parent: "C1_mode",
          section: "Payment Claim",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "C1m2",
          text: "Claim period start",
          key: "claim_period_from",
          parent: "C1_mode",
          section: "Payment Claim",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "C1m3",
          text: "Claim period end",
          key: "claim_period_to",
          parent: "C1_mode",
          section: "Payment Claim",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },

        // Existing particulars (manual path) – unchanged IDs so your parser keeps working
        {
          id: "C1",
          text: "Identify the construction work and/or goods/services this claim covers (s.13(2)(a)).",
          key: "claim_scope",
          parent: "C0",
          section: "Payment Claim",
          dependantAnswer: "Yes",
          type: "long-text",
          options: null
        },
        {
          id: "C2",
          text: "Claimed amount (the amount you say is now due) (s.13(2)(b)).",
          key: "claimed_amount",
          parent: "C1",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "currency",
          options: null
        },
        {
          id: "C3",
          text: "Basis for calculating the amount (s.9).",
          key: "amount_basis",
          parent: "C2",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Per contract terms", "Value of work/goods/services provided"]
        },
        // UPDATED: Calculation support dual-input
        {
          id: "C4_mode",
          text: "How will you provide supporting calculations?",
          key: "calculation_support_mode",
          parent: "C3",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "C4",
          text: "Upload supporting calculations.",
          key: "calculation_support_file",
          parent: "C4_mode",
          section: "Payment Claim",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "C4a",
          text: "Enter your calculation details ",
          key: "calculation_support_text",
          parent: "C4_mode",
          section: "Payment Claim",
          dependantAnswer: "Enter details manually",
          type: "long-text",
          options: null
        },
        {
          id: "C5",
          text: "Does your claim include any extra costs (e.g., suspension costs, retention)?",
          key: "includes_s13_3",
          parent: "C3",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "C5a",
          text: "Explain what extra costs you’ve added to your claim.",
          key: "s13_3_details",
          parent: "C5",
          section: "Payment Claim",
          dependantAnswer: "Yes",
          type: "long-text",
          options: null
        },

        // --- Timing & Service ---
        {
          id: "T1",
          text: "When did you send the claim?",
          key: "claim_service_date",
          parent: "C0",
          section: "Timing & Service",
          dependantAnswer: "Yes",
          type: "date",
          options: null
        },
        {
          id: "T2",
          text: "Did the contract specify an earlier 'named month' reference date ?",
          key: "earlier_named_month",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No", "Not sure"]
        },
        {
          id: "T3",
          text: "Has the contract been ended or cancelled?",
          key: "contract_terminated",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "T3a",
          text: "If terminated, termination date.",
          key: "termination_date",
          parent: "T3",
          section: "Timing & Service",
          dependantAnswer: "Yes",
          type: "date",
          options: null
        },
        {
          id: "T4",
          text: "Is this the only payment claim in the named month?",
          key: "single_claim_month",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "T4a",
          text: "If no, select the permitted exception.",
          key: "multi_claim_exception",
          parent: "T4",
          section: "Timing & Service",
          dependantAnswer: "No",
          type: "multiple-choice",
          options: [
            "One claim covering more than one progress payment",
            "Including an amount previously claimed",
            "Claim for previous month's work"
          ]
        },
        {
          id: "T5",
          text: "How was the claim served (method & recipient)?",
          key: "service_method",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "text",
          options: null
        },

        // --- Payment Schedule (dual-input added) ---
        {
          id: "PS1",
          text: "Has the respondent served a Payment Schedule?",
          key: "payment_schedule_received",
          parent: "C0",
          section: "Payment Schedule",
          dependantAnswer: "Yes",
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "PS_mode",
          text: "How will you provide the Payment Schedule?",
          key: "payment_schedule_mode",
          parent: "PS1",
          section: "Payment Schedule",
          dependantAnswer: "Yes",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "PS2",
          text: "Upload the Payment Schedule you received.",
          key: "payment_schedule_file",
          parent: "PS_mode",
          section: "Payment Schedule",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "PS2a",
          text: "Payment Schedule date served",
          key: "ps_date_served",
          parent: "PS_mode",
          section: "Payment Schedule",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "PS2b",
          text: "Scheduled amount",
          key: "ps_scheduled_amount",
          parent: "PS_mode",
          section: "Payment Schedule",
          dependantAnswer: "Enter details manually",
          type: "currency",
          options: null
        },
        {
          id: "PS2c",
          text: "Reasons (summary or per-item)",
          key: "ps_reasons",
          parent: "PS_mode",
          section: "Payment Schedule",
          dependantAnswer: "Enter details manually",
          type: "long-text",
          options: null
        },

        // --- Adjudication Notice branch when no schedule (add optional upload) ---
        {
          id: "N1",
          text: "If the payment schedule was absent or non-compliant, have you issued a Notice of Intention to apply for adjudication?",
          key: "adjudication_notice_given",
          parent: "PS1",
          section: "Adjudication Notice",
          dependantAnswer: "No",
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "N_mode",
          text: "How will you provide your Notice of Intention?",
          key: "notice_mode",
          parent: "N1",
          section: "Adjudication Notice",
          dependantAnswer: "Yes",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "N2",
          text: "When was the notice given?",
          key: "notice_date",
          parent: "N_mode",
          section: "Adjudication Notice",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "N2a",
          text: "Upload the notice you sent.(Optional)",
          key: "notice_file",
          parent: "N_mode",
          section: "Adjudication Notice",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "N2b",
          text: "Method and recipient of service.",
          key: "notice_service_details",
          parent: "N_mode",
          section: "Adjudication Notice",
          dependantAnswer: "Enter details manually",
          type: "long-text",
          options: null
        }
  ],
  createdAt: new Date("2025-09-11T12:00:00Z"),
  updatedAt: new Date("2025-09-11T12:00:00Z"),
  country: "Australia",
  state: "NSW",
  jurisdiction: "SOPA NSW",
  tags: ["eligibility", "construction", "contract", "sopa", "nsw", "enhanced"],
  version: "2.0.0",
  isActive: true,
  isPublic: true
};

// Fourth version of Phase 1 questionnaire
export const sopanswQuestionnaireComprehensive3: Questionnaire = {
  id: "sopa-nsw-eligibility",
  title: "SOPA NSW Contract Eligibility Questionnaire (Comprehensive3)",
  description:
    "This questionnaire helps determine eligibility under the Security of Payment Act (SOPA) in New South Wales (NSW) and assigns the applicant to an appropriate role.",
  questions: [
    // Section 1: Tell us about yourself
    {
      id: "Q1",
      text: "Your name or business name",
      key: "contract_party_name",
      parent: null,
      section: "Tell us about yourself",
      dependantAnswer: null,
      type: "text",
      options: null,
      helpText: "We need to identify the legal entity or person who will be making the payment claim under SOPA NSW."
    },
    {
      id: "Q2",
      text: "Business number (optional)",
      key: "abn_acn",
      parent: "Q1",
      section: "Tell us about yourself",
      dependantAnswer: null,
      type: "text",
      options: null,
      helpText: "Your ABN or ACN helps us verify your business registration and ensure accurate record-keeping for your application."
    },

    // Section 2: About your contract (RESTRUCTURED)
    {
      id: "Q3",
      text: "Does the construction contract to carry out work or provide goods and services include any of the following financial aspects?",
      key: "financial_aspects",
      parent: null,
      section: "About your contract",
      dependantAnswer: null,
      type: "multiple-choice",
      options: [
        "Lending or repaying a loan",
        "Guaranteeing payment of money owed",
        "Repaying money lent",
        "Providing indemnity regarding construction work",
        "None of the above"
      ],
      helpText: "Section 7(2) of SOPA NSW excludes contracts that are primarily financial in nature. These questions help determine if your contract falls under these exclusions."
    },
    {
      id: "Q4",
      text: "Was the construction work or supply of goods and services undertaken as a condition of a loan agreement by a bank or financial institution?",
      key: "financial_institution_condition",
      parent: "Q3",
      section: "About your contract",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"],
      helpText: "Section 7(3) of SOPA NSW excludes construction work or supply of goods/services that are undertaken as a condition of a loan agreement with a bank or financial institution."
    },

    // Section 3: Where is the work happening? (STREAMLINED)
    {
      id: "Q5",
      text: "Is the construction work or supply of goods and services completed in NSW?",
      key: "nsw_location",
      parent: null,
      section: "Where is the work happening?",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes - NSW", "No - Other states and territories"],
      helpText: "SOPA NSW only applies to construction work or supply of goods/services that are carried out in New South Wales, as per Section 7(4) of the Act."
    },

    // Section 4: What is the nature of the construction work? (RENAMED)
    {
      id: "Q6",
      text: "What is the nature of the construction work under the contract? (If you provide goods or services, please select the type of work your goods or services support)",
      key: "construction_scope",
      parent: "Q5",
      section: "What is the nature of the construction work?",
      dependantAnswer: "Yes - NSW",
      type: "multiple-choice",
      options: [
        "Building, alteration, repair, restoration, demolition",
        "Infrastructure (roads, pipelines, runways, docks, railways, etc.)",
        "Installations (heating, ventilation, fire, safety, power, comms)",
        "Cleaning during construction",
        "Preparatory work (site clearance, foundations, scaffolding, prefabrication, landscaping)",
        "Painting or decorating",
        "Other prescribed work"
      ],
      helpText: "Section 5(1) of SOPA NSW defines 'construction work' broadly to include building, infrastructure, installations, and related activities. This helps us determine if your work falls under the Act's scope."
    },
    {
      id: "Q7",
      text: "Does your work fall into any of these special categories?",
      key: "construction_exclusions",
      parent: "Q6",
      section: "What is the nature of the construction work?",
      dependantAnswer: null,
      type: "multiple-choice",
      options: [
        "Drilling for or excavation of oil or natural gas",
        "Extraction of minerals or tunnelling/boring for that purpose",
        "Other prescribed exclusions",
        "No exclusions apply"
      ],
      helpText: "Section 5(2) of SOPA NSW excludes certain types of work including oil/gas drilling, mineral extraction, and tunnelling for mining purposes. These exclusions are specified in the legislation."
    },

    // Section 5: What do you provide? (RESTRUCTURED WITH s.5/s.6 SPLIT)
    {
      id: "Q8",
      text: "What best describes your role in this construction project?",
      key: "primary_role",
      parent: "Q5",
      section: "What do you provide?",
      dependantAnswer: "Yes - NSW",
      type: "multiple-choice",
      options: [
        "I carry out construction work (building, alteration, repair, etc.)",
        "I provide goods or services to support construction work (materials, equipment, design, engineering, etc.)"
      ],
      helpText: "SOPA NSW distinguishes between those who carry out construction work (Section 5) and those who provide goods or services related to construction work (Section 6). This determines which part of the Act applies to you."
    },

    // For s.5 Construction Work Path
    {
      id: "Q9",
      text: "Do you work directly with the property owner or main client?",
      key: "contracts_with_principal",
      parent: "Q8",
      section: "What do you provide?",
      dependantAnswer: "I carry out construction work (building, alteration, repair, etc.)",
      type: "multiple-choice",
      options: ["Yes", "No"],
      helpText: "This helps determine if you are a 'Head Contractor' (works directly with the principal) or a 'Builder' (works under another contractor). This affects your rights and obligations under SOPA NSW."
    },
    {
      id: "Q10",
      text: "Do you hire other people or companies to help with the work?",
      key: "engages_subcontractors",
      parent: "Q9",
      section: "What do you provide?",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"],
      helpText: "A 'Head Contractor' both works directly with the principal AND engages subcontractors. This distinction is important for determining your role classification under SOPA NSW."
    },

    // For s.6 Goods/Services Path
    {
      id: "Q11",
      text: "What category best describes you?",
      key: "provider_category",
      parent: "Q8",
      section: "What do you provide?",
      dependantAnswer: "I provide goods or services to support construction work (materials, equipment, design, engineering, etc.)",
      type: "dropdown",
      options: [
        "Goods Provider - Materials or components for building/construction",
        "Goods Provider - Plant or materials by sale or hire",
        "Service Provider - Architectural services",
        "Service Provider - Design services",
        "Service Provider - Surveying services",
        "Service Provider - Quantity surveying services",
        "Service Provider - Building services",
        "Service Provider - Engineering services",
        "Service Provider - Interior decoration",
        "Service Provider - Exterior decoration",
        "Service Provider - Landscape advisory services",
        "Service Provider - Labour to carry out construction work",
        "Other (please describe)"
      ],
      helpText: "Section 6 of SOPA NSW covers suppliers of goods and providers of services related to construction work. This helps us classify your specific role and determine your rights under the Act."
    },
    {
      id: "Q12",
      text: "Please describe your category",
      key: "provider_category_other",
      parent: "Q11",
      section: "What do you provide?",
      dependantAnswer: "Other (please describe)",
      type: "text",
      options: null,
      helpText: "Please provide details about your specific goods or services so we can properly assess your eligibility under Section 6 of SOPA NSW."
    },

    // Section 6: Just a few more details
    {
      id: "Q13",
      text: "Are you working as an employee for someone else?",
      key: "employee_status",
      parent: null,
      section: "Just a few more details",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"],
      helpText: "SOPA NSW does not apply to employees working under the Industrial Relations Act 1996. If you are an employee, you would typically use industrial relations processes rather than SOPA NSW for payment disputes."
    },
    {
      id: "Q14",
      text: "Anything else you'd like to tell us? (optional)",
      key: "additional_notes",
      parent: "Q13",
      section: "Just a few more details",
      dependantAnswer: null,
      type: "text",
      options: null,
      helpText: "Any additional information about your contract or circumstances that might be relevant to your SOPA NSW eligibility assessment."
    }
  ],
  createdAt: new Date("2025-09-02T12:00:00Z"),
  updatedAt: new Date("2025-09-02T12:00:00Z"),
  country: "Australia",
  state: "NSW",
  jurisdiction: "SOPA NSW",
  tags: ["eligibility", "construction", "contract", "sopa", "nsw", "enhanced"],
  version: "4.0.0",
  isActive: true,
  isPublic: true
};

// Phase 2 Questionnaires
// This is a questionnaire for the NSW SOPA Act Phase 2.
export const sopanswPhase2Questionnaire: Questionnaire = {
  id: "sopa-nsw-phase-2",
  title: "Phase 2 - Payment Claim Validation (SOPA NSW)",
  description: "Checks all SOPA NSW s.8-s.13 requirements for Builders, Contractors, and Head Contractors before a payment claim proceeds.",
  questions: [
       // A. Role Path Identification
        {
          id: "R1",
          text: "Which role do you occupy under this contract?",
          key: "role",
          parent: null,
          section: "Role",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Builder", "Contractor", "Head Contractor"]
        },

        // --- BUILDER path prerequisites ---
        {
          id: "B1",
          text: "Provide your ABN/ACN for licensing cross-reference.",
          key: "abn_acn",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "text",
          options: null
        },
        {
          id: "B2",
          text: "Provide your NSW building licence number (or upload credential evidence).",
          key: "builder_licence",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "file-or-text",
          options: null
        },
        {
          id: "B3",
          text: "Is the building contract compliant with the Home Building Act 1989 s.4 (licensed contracting)?",
          key: "hba_s4_compliance",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "multiple-choice",
          options: ["Yes", "No", "Unsure"]
        },
        {
          id: "B4",
          text: "Is the work residential building work?",
          key: "is_residential",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "B5",
          text: "If residential, upload evidence of s.92 insurance (HBCF policy/certificate).",
          key: "hba_s92_insurance",
          parent: "B4",
          section: "Builder Prerequisites",
          dependantAnswer: "Yes",
          type: "file-upload",
          options: null
        },
        {
          id: "B6",
          text: "Confirm you satisfy SOPA s.8(2): a reference date exists for progress payment.",
          key: "s8_2_reference_date",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "multiple-choice",
          options: ["Yes", "No", "Unsure"]
        },

        // --- HEAD CONTRACTOR Supporting Statement ---
        {
          id: "HC1",
          text: "Upload your Supporting Statement (approved form) that relates to this claim (s.13(7) & (9)).",
          key: "supporting_statement_file",
          parent: "R1",
          section: "Supporting Statement",
          dependantAnswer: "Head Contractor",
          type: "file-upload",
          options: null
        },
        {
          id: "HC2",
          text: "Declaration: I confirm the Supporting Statement is true and subcontractors have been paid all amounts due.",
          key: "ss_truth_declaration",
          parent: "HC1",
          section: "Supporting Statement",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["I acknowledge and declare"]
        },

        // --- COMMON Payment Claim (add served + upload) ---
        {
          id: "C0",
          text: "Have you served a payment claim under this contract?",
          key: "payment_claim_served",
          parent: null,
          section: "Payment Claim",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "C1a",
          text: "Upload the payment claim you served (PDF or image).",
          key: "payment_claim_file",
          parent: "C0",
          section: "Payment Claim",
          dependantAnswer: "Yes",
          type: "file-upload",
          options: null
        },

        // (Make the existing particulars depend on 'served = Yes' so the flow matches the diagram)
        {
          id: "C1",
          text: "Identify the construction work and/or goods/services this claim covers (s.13(2)(a)).",
          key: "claim_scope",
          parent: "C0",
          section: "Payment Claim",
          dependantAnswer: "Yes",
          type: "long-text",
          options: null
        },
        {
          id: "C2",
          text: "Claimed amount (the amount you say is now due) (s.13(2)(b)).",
          key: "claimed_amount",
          parent: "C1",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "currency",
          options: null
        },
        {
          id: "C3",
          text: "Basis for calculating the amount (s.9).",
          key: "amount_basis",
          parent: "C2",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Per contract terms", "Value of work/goods/services provided"]
        },
        {
          id: "C4",
          text: "Upload or provide supporting calculations (progress valuation, retention, etc.).",
          key: "calculation_support",
          parent: "C3",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "file-or-text",
          options: null
        },
        {
          id: "C5",
          text: "Does the claim include any s.13(3) amounts (e.g., suspension costs, retention)?",
          key: "includes_s13_3",
          parent: "C3",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "C5a",
          text: "If yes, describe the s.13(3) amounts included.",
          key: "s13_3_details",
          parent: "C5",
          section: "Payment Claim",
          dependantAnswer: "Yes",
          type: "long-text",
          options: null
        },

        // --- Timing & Service ---
        {
          id: "T1",
          text: "Claim service date.",
          key: "claim_service_date",
          parent: "C0",
          section: "Timing & Service",
          dependantAnswer: "Yes",
          type: "date",
          options: null
        },
        {
          id: "T2",
          text: "Did the contract specify an earlier 'named month' reference date (s.13(1B))?",
          key: "earlier_named_month",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No", "Not sure"]
        },
        {
          id: "T3",
          text: "Has the contract been terminated (s.13(1C))?",
          key: "contract_terminated",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "T3a",
          text: "If terminated, termination date.",
          key: "termination_date",
          parent: "T3",
          section: "Timing & Service",
          dependantAnswer: "Yes",
          type: "date",
          options: null
        },
        {
          id: "T4",
          text: "Is this the only payment claim in the named month (s.13(5))?",
          key: "single_claim_month",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "T4a",
          text: "If no, select the permitted exception (s.13(6)).",
          key: "multi_claim_exception",
          parent: "T4",
          section: "Timing & Service",
          dependantAnswer: "No",
          type: "multiple-choice",
          options: [
            "One claim covering more than one progress payment",
            "Including an amount previously claimed",
            "Claim for previous month's work"
          ]
        },
        {
          id: "T5",
          text: "How was the claim served (method & recipient)?",
          key: "service_method",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "text",
          options: null
        },

        // --- Payment Schedule (add upload) ---
        {
          id: "PS1",
          text: "Has the respondent served a Payment Schedule?",
          key: "payment_schedule_received",
          parent: "C0",
          section: "Payment Schedule",
          dependantAnswer: "Yes",
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "PS2",
          text: "Upload the Payment Schedule you received.",
          key: "payment_schedule_file",
          parent: "PS1",
          section: "Payment Schedule",
          dependantAnswer: "Yes",
          type: "file-upload",
          options: null
        },
        {
          id: "PS2a",
          text: "Provide schedule details (date, scheduled amount, reasons).",
          key: "payment_schedule_details",
          parent: "PS1",
          section: "Payment Schedule",
          dependantAnswer: "Yes",
          type: "long-text",
          options: null
        },

        // --- Adjudication Notice branch when no schedule ---
        {
          id: "N1",
          text: "If the payment schedule was absent or non-compliant, have you issued a Notice of Intention to apply for adjudication?",
          key: "adjudication_notice_given",
          parent: "PS1",
          section: "Adjudication Notice",
          dependantAnswer: "No",
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "N2",
          text: "If yes, when was the notice given?",
          key: "notice_date",
          parent: "N1",
          section: "Adjudication Notice",
          dependantAnswer: "Yes",
          type: "date",
          options: null
        }
  ],
  createdAt: new Date("2025-09-11T12:00:00Z"),
  updatedAt: new Date("2025-09-11T12:00:00Z"),
  country: "Australia",
  state: "NSW",
  jurisdiction: "SOPA NSW",
  tags: ["eligibility", "construction", "contract", "sopa", "nsw", "enhanced"],
  version: "1.0.0",
  isActive: true,
  isPublic: true
};

// Second version of Phase 2 questionnaire
export const sopanswPhase2QuestionnaireComprehensiveWithRespondent: Questionnaire = {
  id: "sopa-nsw-phase-2",
  title: "Phase 2 - Payment Claim Validation (SOPA NSW)",
  description: "Checks all SOPA NSW s.8-s.13 requirements for Builders, Contractors, and Head Contractors before a payment claim proceeds.",
  questions: [
       // A. Role Path Identification
        {
          id: "R1",
          text: "What is your role in this contract?",
          key: "role",
          parent: null,
          section: "Role",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Builder", "Contractor", "Head Contractor"]
        },
        
        //Case Information
        {
          id: "CASE1",
          text: "Case Title",
          key: "case_title",
          parent: null,
          section: "Case Information",
          dependantAnswer: null,
          type: "text",
          options: null
        },
        {
          id: "CASE2",
          text: "Case Description ",
          key: "case_description",
          parent: "CASE1",
          section: "Case Information",
          dependantAnswer: null,
          type: "long-text",
          options: null
        },
        {
          id: "CASE3",
          text: "Respondent's name (individual or company representative)",
          key: "respondent_name",
          parent: "CASE2",
          section: "Case Information",
          dependantAnswer: null,
          type: "text",
          options: null
        },
        // --- BUILDER path prerequisites ---
        {
          id: "B1",
          text: "What is your ABN or ACN",
          key: "abn_acn",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "text",
          options: null
        },
        // UPDATED: Builder licence dual-input
        {
          id: "B2_mode",
          text: "How would you like to share your NSW building licence?",
          key: "builder_licence_mode",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "B2",
          text: "Upload your NSW building licence credential evidence.",
          key: "builder_licence_file",
          parent: "B2_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "B2a",
          text: "NSW building licence number",
          key: "builder_licence_number",
          parent: "B2_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "B2b",
          text: "Licence holder name",
          key: "builder_licence_holder",
          parent: "B2_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "B2c",
          text: "Licence class (optional)",
          key: "builder_licence_class",
          parent: "B2_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "B2d",
          text: "Licence expiry date (optional)",
          key: "builder_licence_expiry",
          parent: "B2_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "B3",
          text: "Is your building contract properly licensed under NSW rules?",
          key: "hba_s4_compliance",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "multiple-choice",
          options: ["Yes", "No", "Unsure"]
        },
        {
          id: "B4",
          text: "Is the work residential building work?",
          key: "is_residential",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "multiple-choice",
          options: ["Yes", "No"]
         },
         // NEW: dual-input selector + manual insurance details (keeps B5 upload)
        {
          id: "B5_mode",
          text: "How will you provide residential insurance (HBA s.92) evidence?",
          key: "hba_s92_mode",
          parent: "B4",
          section: "Builder Prerequisites",
          dependantAnswer: "Yes",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "B5",
          text: "Upload your home building insurance certificate (HBCF)",
          key: "hba_s92_insurance",
          parent: "B5_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "B5a",
          text: "Insurance policy number",
          key: "hba_s92_policy_number",
          parent: "B5_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "B5b",
          text: "Insurer name",
          key: "hba_s92_insurer",
          parent: "B5_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "B5c",
          text: "Coverage period start",
          key: "hba_s92_coverage_from",
          parent: "B5_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "B5d",
          text: "Coverage period end",
          key: "hba_s92_coverage_to",
          parent: "B5_mode",
          section: "Builder Prerequisites",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "B6",
          text: "Confirm you satisfy SOPA s.8(2): a reference date exists for progress payment.",
          key: "s8_2_reference_date",
          parent: "R1",
          section: "Builder Prerequisites",
          dependantAnswer: "Builder",
          type: "multiple-choice",
          options: ["Yes", "No", "Unsure"]
        },

    // --- HEAD CONTRACTOR Supporting Statement (dual-input added) ---
        {
          id: "HC0_mode",
          text: "How will you provide the Supporting Statement (s.13(7) & (9))?",
          key: "ss_mode",
          parent: "R1",
          section: "Supporting Statement",
          dependantAnswer: "Head Contractor",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "HC1",
          text: "Upload your Supporting Statement (approved form).",
          key: "supporting_statement_file",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "HC1a",
          text: "Statement date",
          key: "ss_date",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "HC1b",
          text: "Signed by (name)",
          key: "ss_signer_name",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "HC1c",
          text: "Signer position/title",
          key: "ss_signer_position",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "HC1d",
          text: "Payment claim reference (Claim # / period / project ref)",
          key: "ss_claim_reference",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "HC2",
          text: "Declaration: I confirm the Supporting Statement is true and subcontractors have been paid all amounts due.",
          key: "ss_truth_declaration",
          parent: "HC0_mode",
          section: "Supporting Statement",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["I acknowledge and declare"]
        },

        // --- COMMON Payment Claim (served + dual-input for claim doc) ---
        {
          id: "C0",
          text: "Have you already sent a payment claim for this job?",
          key: "payment_claim_served",
          parent: null,
          section: "Payment Claim",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "C1_mode",
          text: "How will you provide your payment claim?",
          key: "payment_claim_mode",
          parent: "C0",
          section: "Payment Claim",
          dependantAnswer: "Yes",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "C1a",
          text: "Upload the payment claim you sent (PDF or photo).",
          key: "payment_claim_file",
          parent: "C1_mode",
          section: "Payment Claim",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        // Manual claim context (optional but useful for AI or when no file)
        {
          id: "C1m1",
          text: "Claim number/reference",
          key: "claim_number",
          parent: "C1_mode",
          section: "Payment Claim",
          dependantAnswer: "Enter details manually",
          type: "text",
          options: null
        },
        {
          id: "C1m2",
          text: "Claim period start",
          key: "claim_period_from",
          parent: "C1_mode",
          section: "Payment Claim",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "C1m3",
          text: "Claim period end",
          key: "claim_period_to",
          parent: "C1_mode",
          section: "Payment Claim",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },

        // Existing particulars (manual path) – unchanged IDs so your parser keeps working
        {
          id: "C1",
          text: "Identify the construction work and/or goods/services this claim covers (s.13(2)(a)).",
          key: "claim_scope",
          parent: "C0",
          section: "Payment Claim",
          dependantAnswer: "Yes",
          type: "long-text",
          options: null
        },
        {
          id: "C2",
          text: "Claimed amount (the amount you say is now due) (s.13(2)(b)).",
          key: "claimed_amount",
          parent: "C1",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "currency",
          options: null
        },
        {
          id: "C3",
          text: "Basis for calculating the amount (s.9).",
          key: "amount_basis",
          parent: "C2",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Per contract terms", "Value of work/goods/services provided"]
        },
        // UPDATED: Calculation support dual-input
        {
          id: "C4_mode",
          text: "How will you provide supporting calculations?",
          key: "calculation_support_mode",
          parent: "C3",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "C4",
          text: "Upload supporting calculations.",
          key: "calculation_support_file",
          parent: "C4_mode",
          section: "Payment Claim",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "C4a",
          text: "Enter your calculation details ",
          key: "calculation_support_text",
          parent: "C4_mode",
          section: "Payment Claim",
          dependantAnswer: "Enter details manually",
          type: "long-text",
          options: null
        },
        {
          id: "C5",
          text: "Does your claim include any extra costs (e.g., suspension costs, retention)?",
          key: "includes_s13_3",
          parent: "C3",
          section: "Payment Claim",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "C5a",
          text: "Explain what extra costs you’ve added to your claim.",
          key: "s13_3_details",
          parent: "C5",
          section: "Payment Claim",
          dependantAnswer: "Yes",
          type: "long-text",
          options: null
        },

        // --- Timing & Service ---
        {
          id: "T1",
          text: "When did you send the claim?",
          key: "claim_service_date",
          parent: "C0",
          section: "Timing & Service",
          dependantAnswer: "Yes",
          type: "date",
          options: null
        },
        {
          id: "T2",
          text: "Did the contract specify an earlier 'named month' reference date ?",
          key: "earlier_named_month",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No", "Not sure"]
        },
        {
          id: "T3",
          text: "Has the contract been ended or cancelled?",
          key: "contract_terminated",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "T3a",
          text: "If terminated, termination date.",
          key: "termination_date",
          parent: "T3",
          section: "Timing & Service",
          dependantAnswer: "Yes",
          type: "date",
          options: null
        },
        {
          id: "T4",
          text: "Is this the only payment claim in the named month?",
          key: "single_claim_month",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "T4a",
          text: "If no, select the permitted exception.",
          key: "multi_claim_exception",
          parent: "T4",
          section: "Timing & Service",
          dependantAnswer: "No",
          type: "multiple-choice",
          options: [
            "One claim covering more than one progress payment",
            "Including an amount previously claimed",
            "Claim for previous month's work"
          ]
        },
        {
          id: "T5",
          text: "How was the claim served (method & recipient)?",
          key: "service_method",
          parent: "T1",
          section: "Timing & Service",
          dependantAnswer: null,
          type: "text",
          options: null
        },

        // --- Payment Schedule (dual-input added) ---
        {
          id: "PS1",
          text: "Has the respondent served a Payment Schedule?",
          key: "payment_schedule_received",
          parent: "C0",
          section: "Payment Schedule",
          dependantAnswer: "Yes",
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "PS_mode",
          text: "How will you provide the Payment Schedule?",
          key: "payment_schedule_mode",
          parent: "PS1",
          section: "Payment Schedule",
          dependantAnswer: "Yes",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "PS2",
          text: "Upload the Payment Schedule you received.",
          key: "payment_schedule_file",
          parent: "PS_mode",
          section: "Payment Schedule",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "PS2a",
          text: "Payment Schedule date served",
          key: "ps_date_served",
          parent: "PS_mode",
          section: "Payment Schedule",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "PS2b",
          text: "Scheduled amount",
          key: "ps_scheduled_amount",
          parent: "PS_mode",
          section: "Payment Schedule",
          dependantAnswer: "Enter details manually",
          type: "currency",
          options: null
        },
        {
          id: "PS2c",
          text: "Reasons (summary or per-item)",
          key: "ps_reasons",
          parent: "PS_mode",
          section: "Payment Schedule",
          dependantAnswer: "Enter details manually",
          type: "long-text",
          options: null
        },

        // --- Adjudication Notice branch when no schedule (add optional upload) ---
        {
          id: "N1",
          text: "If the payment schedule was absent or non-compliant, have you issued a Notice of Intention to apply for adjudication?",
          key: "adjudication_notice_given",
          parent: "PS1",
          section: "Adjudication Notice",
          dependantAnswer: "No",
          type: "multiple-choice",
          options: ["Yes", "No"]
        },
        {
          id: "N_mode",
          text: "How will you provide your Notice of Intention?",
          key: "notice_mode",
          parent: "N1",
          section: "Adjudication Notice",
          dependantAnswer: "Yes",
          type: "multiple-choice",
          options: ["Upload", "Enter details manually"]
        },
        {
          id: "N2",
          text: "When was the notice given?",
          key: "notice_date",
          parent: "N_mode",
          section: "Adjudication Notice",
          dependantAnswer: "Enter details manually",
          type: "date",
          options: null
        },
        {
          id: "N2a",
          text: "Upload the notice you sent.(Optional)",
          key: "notice_file",
          parent: "N_mode",
          section: "Adjudication Notice",
          dependantAnswer: "Upload",
          type: "file-upload",
          options: null
        },
        {
          id: "N2b",
          text: "Method and recipient of service.",
          key: "notice_service_details",
          parent: "N_mode",
          section: "Adjudication Notice",
          dependantAnswer: "Enter details manually",
          type: "long-text",
          options: null
        }
  ],
  createdAt: new Date("2025-09-11T12:00:00Z"),
  updatedAt: new Date("2025-09-11T12:00:00Z"),
  country: "Australia",
  state: "NSW",
  jurisdiction: "SOPA NSW",
  tags: ["eligibility", "construction", "contract", "sopa", "nsw", "enhanced"],
  version: "3.0.0",
  isActive: true,
  isPublic: true
};

// Enhanced Phase 2 questionnaire with user-friendly language and help text
export const sopanswPhase2QuestionnaireEnhanced: Questionnaire = {
  id: "sopa-nsw-phase-2-enhanced",
  title: "Phase 2 - Payment Claim Validation (Enhanced)",
  description: "This questionnaire helps validate your payment claim under SOPA NSW and ensures all legal requirements are met before proceeding with your case.",
  questions: [
    // A. Role Path Identification
    {
      id: "R1",
      text: "What's your role in this construction project?",
      key: "role",
      parent: null,
      section: "What's your role?",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Builder", "Contractor", "Head Contractor"],
      helpText: "Your role determines which SOPA NSW requirements apply to your payment claim. Builders work directly with property owners, Contractors work under other contractors, and Head Contractors manage multiple subcontractors."
    },
    
    // Case Information
    {
      id: "CASE1",
      text: "What would you like to call this case?",
      key: "case_title",
      parent: null,
      section: "Tell us about your case",
      dependantAnswer: null,
      type: "text",
      options: null,
      helpText: "Give your case a clear name so you can easily identify it later. This helps with record-keeping and case management."
    },
    {
      id: "CASE2",
      text: "Please describe what this case is about",
      key: "case_description",
      parent: "CASE1",
      section: "Tell us about your case",
      dependantAnswer: null,
      type: "long-text",
      options: null,
      helpText: "Provide a brief summary of the dispute, including the work performed, amounts involved, and why you're making a payment claim."
    },
    {
      id: "CASE3",
      text: "Who are you making this claim against? (Respondent's name)",
      key: "respondent_name",
      parent: "CASE2",
      section: "Tell us about your case",
      dependantAnswer: null,
      type: "text",
      options: null,
      helpText: "Enter the name of the person or company you're claiming payment from. This is the 'respondent' in your SOPA NSW case."
    },

    // --- BUILDER path prerequisites ---
    {
      id: "B1",
      text: "What's your business number (ABN or ACN)?",
      key: "abn_acn",
      parent: "R1",
      section: "Builder requirements",
      dependantAnswer: "Builder",
      type: "text",
      options: null,
      helpText: "Your Australian Business Number (ABN) or Australian Company Number (ACN) is required for licensing verification and legal compliance under SOPA NSW."
    },
    {
      id: "B2_mode",
      text: "How would you like to provide your NSW building licence?",
      key: "builder_licence_mode",
      parent: "R1",
      section: "Builder requirements",
      dependantAnswer: "Builder",
      type: "multiple-choice",
      options: ["Upload", "Enter details manually"],
      helpText: "NSW building licences are required for all building work. You can upload your licence document or enter the details manually for verification."
    },
    {
      id: "B2",
      text: "Upload your NSW building licence",
      key: "builder_licence_file",
      parent: "B2_mode",
      section: "Builder requirements",
      dependantAnswer: "Upload",
      type: "file-upload",
      options: null,
      helpText: "Upload a clear photo or PDF of your NSW building licence. This helps verify your eligibility to make payment claims under SOPA NSW."
    },
    {
      id: "B2a",
      text: "What's your NSW building licence number?",
      key: "builder_licence_number",
      parent: "B2_mode",
      section: "Builder requirements",
      dependantAnswer: "Enter details manually",
      type: "text",
      options: null,
      helpText: "Enter your NSW building licence number exactly as it appears on your licence document."
    },
    {
      id: "B2b",
      text: "Who is the licence holder?",
      key: "builder_licence_holder",
      parent: "B2_mode",
      section: "Builder requirements",
      dependantAnswer: "Enter details manually",
      type: "text",
      options: null,
      helpText: "Enter the full name of the person or company that holds the building licence."
    },
    {
      id: "B2c",
      text: "What type of building work can you do? (optional)",
      key: "builder_licence_class",
      parent: "B2_mode",
      section: "Builder requirements",
      dependantAnswer: "Enter details manually",
      type: "text",
      options: null,
      helpText: "Enter your licence class if you know it (e.g., 'Residential Builder', 'Commercial Builder'). This helps verify the scope of work you're licensed to perform."
    },
    {
      id: "B2d",
      text: "When does your licence expire? (optional)",
      key: "builder_licence_expiry",
      parent: "B2_mode",
      section: "Builder requirements",
      dependantAnswer: "Enter details manually",
      type: "date",
      options: null,
      helpText: "Enter the expiry date of your building licence. A valid licence is required to make payment claims under SOPA NSW."
    },
    {
      id: "B3",
      text: "Is your building contract properly licensed under NSW rules?",
      key: "hba_s4_compliance",
      parent: "R1",
      section: "Builder requirements",
      dependantAnswer: "Builder",
      type: "multiple-choice",
      options: ["Yes", "No", "Unsure"],
      helpText: "The Home Building Act 1989 requires all building contracts to be properly licensed. This ensures your contract is legally valid and eligible for SOPA NSW protection."
    },
    {
      id: "B4",
      text: "Is this residential building work?",
      key: "is_residential",
      parent: "R1",
      section: "Builder requirements",
      dependantAnswer: "Builder",
      type: "multiple-choice",
      options: ["Yes", "No"],
      helpText: "Residential building work has additional insurance requirements under the Home Building Act. This affects your SOPA NSW eligibility and documentation needs."
    },
    {
      id: "B5_mode",
      text: "How will you provide your home building insurance?",
      key: "hba_s92_mode",
      parent: "B4",
      section: "Builder requirements",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Upload", "Enter details manually"],
      helpText: "Home Building Compensation Fund (HBCF) insurance is required for all residential building work over $20,000. This protects homeowners and is required for SOPA NSW eligibility."
    },
    {
      id: "B5",
      text: "Upload your home building insurance certificate",
      key: "hba_s92_insurance",
      parent: "B5_mode",
      section: "Builder requirements",
      dependantAnswer: "Upload",
      type: "file-upload",
      options: null,
      helpText: "Upload your HBCF insurance certificate. This proves you have the required insurance for residential building work under the Home Building Act."
    },
    {
      id: "B5a",
      text: "What's your insurance policy number?",
      key: "hba_s92_policy_number",
      parent: "B5_mode",
      section: "Builder requirements",
      dependantAnswer: "Enter details manually",
      type: "text",
      options: null,
      helpText: "Enter your HBCF insurance policy number for verification purposes."
    },
    {
      id: "B5b",
      text: "Which insurance company issued your policy?",
      key: "hba_s92_insurer",
      parent: "B5_mode",
      section: "Builder requirements",
      dependantAnswer: "Enter details manually",
      type: "text",
      options: null,
      helpText: "Enter the name of the insurance company that issued your HBCF policy."
    },
    {
      id: "B5c",
      text: "When does your insurance coverage start?",
      key: "hba_s92_coverage_from",
      parent: "B5_mode",
      section: "Builder requirements",
      dependantAnswer: "Enter details manually",
      type: "date",
      options: null,
      helpText: "Enter the start date of your HBCF insurance coverage period."
    },
    {
      id: "B5d",
      text: "When does your insurance coverage end?",
      key: "hba_s92_coverage_to",
      parent: "B5_mode",
      section: "Builder requirements",
      dependantAnswer: "Enter details manually",
      type: "date",
      options: null,
      helpText: "Enter the end date of your HBCF insurance coverage period."
    },
    {
      id: "B6",
      text: "Do you have a valid reference date for progress payments?",
      key: "s8_2_reference_date",
      parent: "R1",
      section: "Builder requirements",
      dependantAnswer: "Builder",
      type: "multiple-choice",
      options: ["Yes", "No", "Unsure"],
      helpText: "A reference date is when you can make a payment claim under SOPA NSW. This is usually the end of each month or as specified in your contract."
    },

    // --- HEAD CONTRACTOR Supporting Statement ---
    {
      id: "HC0_mode",
      text: "How will you provide your Supporting Statement?",
      key: "ss_mode",
      parent: "R1",
      section: "Head Contractor requirements",
      dependantAnswer: "Head Contractor",
      type: "multiple-choice",
      options: ["Upload", "Enter details manually"],
      helpText: "Head Contractors must provide a Supporting Statement with their payment claims. This confirms subcontractors have been paid and is required under SOPA NSW s.13(7) and (9)."
    },
    {
      id: "HC1",
      text: "Upload your Supporting Statement",
      key: "supporting_statement_file",
      parent: "HC0_mode",
      section: "Head Contractor requirements",
      dependantAnswer: "Upload",
      type: "file-upload",
      options: null,
      helpText: "Upload your completed Supporting Statement form. This must be the official form approved by NSW Fair Trading and must relate to your specific payment claim."
    },
    {
      id: "HC1a",
      text: "When was the Supporting Statement signed?",
      key: "ss_date",
      parent: "HC0_mode",
      section: "Head Contractor requirements",
      dependantAnswer: "Enter details manually",
      type: "date",
      options: null,
      helpText: "Enter the date when the Supporting Statement was signed. This must be recent and relate to your current payment claim."
    },
    {
      id: "HC1b",
      text: "Who signed the Supporting Statement?",
      key: "ss_signer_name",
      parent: "HC0_mode",
      section: "Head Contractor requirements",
      dependantAnswer: "Enter details manually",
      type: "text",
      options: null,
      helpText: "Enter the full name of the person who signed the Supporting Statement. This should be an authorized representative of your company."
    },
    {
      id: "HC1c",
      text: "What's the signer's position or title?",
      key: "ss_signer_position",
      parent: "HC0_mode",
      section: "Head Contractor requirements",
      dependantAnswer: "Enter details manually",
      type: "text",
      options: null,
      helpText: "Enter the position or title of the person who signed the Supporting Statement (e.g., 'Director', 'Manager', 'Authorized Representative')."
    },
    {
      id: "HC1d",
      text: "What's the reference for this payment claim?",
      key: "ss_claim_reference",
      parent: "HC0_mode",
      section: "Head Contractor requirements",
      dependantAnswer: "Enter details manually",
      type: "text",
      options: null,
      helpText: "Enter the claim number, period, or project reference that this Supporting Statement relates to."
    },
    {
      id: "HC2",
      text: "I confirm the Supporting Statement is true and subcontractors have been paid",
      key: "ss_truth_declaration",
      parent: "HC0_mode",
      section: "Head Contractor requirements",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["I acknowledge and declare"],
      helpText: "By selecting this option, you declare that the Supporting Statement is true and that all subcontractors have been paid the amounts due to them."
    },

    // --- COMMON Payment Claim ---
    {
      id: "C0",
      text: "Have you already sent a payment claim for this work?",
      key: "payment_claim_served",
      parent: null,
      section: "About your payment claim",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"],
      helpText: "A payment claim is the formal document you send to request payment. If you've already sent one, we'll need to see it to validate your case."
    },
    {
      id: "C1_mode",
      text: "How will you provide your payment claim?",
      key: "payment_claim_mode",
      parent: "C0",
      section: "About your payment claim",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Upload", "Enter details manually"],
      helpText: "You can upload your payment claim document or provide the details manually. Having the actual document helps with case validation."
    },
    {
      id: "C1a",
      text: "Upload your payment claim",
      key: "payment_claim_file",
      parent: "C1_mode",
      section: "About your payment claim",
      dependantAnswer: "Upload",
      type: "file-upload",
      options: null,
      helpText: "Upload a clear photo or PDF of the payment claim you sent. This helps verify that your claim meets SOPA NSW requirements."
    },
    {
      id: "C1m1",
      text: "What's your claim number or reference?",
      key: "claim_number",
      parent: "C1_mode",
      section: "About your payment claim",
      dependantAnswer: "Enter details manually",
      type: "text",
      options: null,
      helpText: "Enter any reference number or identifier for your payment claim."
    },
    {
      id: "C1m2",
      text: "When did your claim period start?",
      key: "claim_period_from",
      parent: "C1_mode",
      section: "About your payment claim",
      dependantAnswer: "Enter details manually",
      type: "date",
      options: null,
      helpText: "Enter the start date of the work period covered by this payment claim."
    },
    {
      id: "C1m3",
      text: "When did your claim period end?",
      key: "claim_period_to",
      parent: "C1_mode",
      section: "About your payment claim",
      dependantAnswer: "Enter details manually",
      type: "date",
      options: null,
      helpText: "Enter the end date of the work period covered by this payment claim."
    },
    {
      id: "C1",
      text: "What work does this claim cover?",
      key: "claim_scope",
      parent: "C0",
      section: "About your payment claim",
      dependantAnswer: "Yes",
      type: "long-text",
      options: null,
      helpText: "Describe the construction work, goods, or services that this payment claim covers. Be specific about what was completed and when."
    },
    {
      id: "C2",
      text: "How much are you claiming?",
      key: "claimed_amount",
      parent: "C1",
      section: "About your payment claim",
      dependantAnswer: null,
      type: "currency",
      options: null,
      helpText: "Enter the total amount you're claiming for this work. This should include all work completed, materials supplied, and any other costs you're entitled to."
    },
    {
      id: "C3",
      text: "How did you calculate this amount?",
      key: "amount_basis",
      parent: "C2",
      section: "About your payment claim",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Per contract terms", "Value of work/goods/services provided"],
      helpText: "Select how you calculated the claimed amount. This helps verify that your claim is based on valid pricing under your contract or the value of work performed."
    },
    {
      id: "C4_mode",
      text: "How will you provide your calculations?",
      key: "calculation_support_mode",
      parent: "C3",
      section: "About your payment claim",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Upload", "Enter details manually"],
      helpText: "Supporting calculations help verify your claimed amount. You can upload invoices, timesheets, or other documents, or provide the details manually."
    },
    {
      id: "C4",
      text: "Upload your supporting calculations",
      key: "calculation_support_file",
      parent: "C4_mode",
      section: "About your payment claim",
      dependantAnswer: "Upload",
      type: "file-upload",
      options: null,
      helpText: "Upload invoices, timesheets, receipts, or other documents that support your claimed amount."
    },
    {
      id: "C4a",
      text: "Please describe your calculations",
      key: "calculation_support_text",
      parent: "C4_mode",
      section: "About your payment claim",
      dependantAnswer: "Enter details manually",
      type: "long-text",
      options: null,
      helpText: "Explain how you calculated the claimed amount, including hours worked, materials used, rates applied, and any other relevant details."
    },
    {
      id: "C5",
      text: "Does your claim include any extra costs?",
      key: "includes_s13_3",
      parent: "C3",
      section: "About your payment claim",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"],
      helpText: "Extra costs might include suspension costs, retention amounts, or other costs allowed under SOPA NSW s.13(3)."
    },
    {
      id: "C5a",
      text: "Please explain the extra costs",
      key: "s13_3_details",
      parent: "C5",
      section: "About your payment claim",
      dependantAnswer: "Yes",
      type: "long-text",
      options: null,
      helpText: "Describe what extra costs you've included in your claim and why you're entitled to them under your contract or SOPA NSW."
    },

    // --- Timing & Service ---
    {
      id: "T1",
      text: "When did you send your payment claim?",
      key: "claim_service_date",
      parent: "C0",
      section: "When and how was your claim sent?",
      dependantAnswer: "Yes",
      type: "date",
      options: null,
      helpText: "Enter the date when you sent your payment claim to the respondent. This is important for timing requirements under SOPA NSW."
    },
    {
      id: "T2",
      text: "Did your contract specify an earlier reference date?",
      key: "earlier_named_month",
      parent: "T1",
      section: "When and how was your claim sent?",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No", "Not sure"],
      helpText: "Some contracts specify different reference dates for payment claims. This affects when you can make claims under SOPA NSW."
    },
    {
      id: "T3",
      text: "Has your contract been ended or cancelled?",
      key: "contract_terminated",
      parent: "T1",
      section: "When and how was your claim sent?",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"],
      helpText: "If your contract has been terminated, this affects your rights under SOPA NSW and may change the timing requirements for your payment claim."
    },
    {
      id: "T3a",
      text: "When was the contract terminated?",
      key: "termination_date",
      parent: "T3",
      section: "When and how was your claim sent?",
      dependantAnswer: "Yes",
      type: "date",
      options: null,
      helpText: "Enter the date when your contract was terminated. This is important for determining your rights under SOPA NSW."
    },
    {
      id: "T4",
      text: "Is this your only payment claim for this month?",
      key: "single_claim_month",
      parent: "T1",
      section: "When and how was your claim sent?",
      dependantAnswer: null,
      type: "multiple-choice",
      options: ["Yes", "No"],
      helpText: "SOPA NSW generally allows only one payment claim per month, unless specific exceptions apply."
    },
    {
      id: "T4a",
      text: "Which exception applies to your situation?",
      key: "multi_claim_exception",
      parent: "T4",
      section: "When and how was your claim sent?",
      dependantAnswer: "No",
      type: "multiple-choice",
      options: [
        "One claim covering more than one progress payment",
        "Including an amount previously claimed",
        "Claim for previous month's work"
      ],
      helpText: "SOPA NSW allows multiple claims in certain circumstances. Select the exception that applies to your situation."
    },
    {
      id: "T5",
      text: "How did you send your claim?",
      key: "service_method",
      parent: "T1",
      section: "When and how was your claim sent?",
      dependantAnswer: null,
      type: "text",
      options: null,
      helpText: "Describe how you sent your payment claim (e.g., email, post, hand delivery) and who you sent it to."
    },

    // --- Payment Schedule ---
    {
      id: "PS1",
      text: "Did the respondent send you a Payment Schedule?",
      key: "payment_schedule_received",
      parent: "C0",
      section: "What happened after you sent your claim?",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Yes", "No"],
      helpText: "A Payment Schedule is the respondent's response to your payment claim. They must send one within 10 business days or pay the full amount."
    },
    {
      id: "PS_mode",
      text: "How will you provide the Payment Schedule?",
      key: "payment_schedule_mode",
      parent: "PS1",
      section: "What happened after you sent your claim?",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Upload", "Enter details manually"],
      helpText: "You can upload the Payment Schedule document or provide the details manually. Having the actual document helps with case validation."
    },
    {
      id: "PS2",
      text: "Upload the Payment Schedule",
      key: "payment_schedule_file",
      parent: "PS_mode",
      section: "What happened after you sent your claim?",
      dependantAnswer: "Upload",
      type: "file-upload",
      options: null,
      helpText: "Upload a clear photo or PDF of the Payment Schedule you received from the respondent."
    },
    {
      id: "PS2a",
      text: "When did you receive the Payment Schedule?",
      key: "ps_date_served",
      parent: "PS_mode",
      section: "What happened after you sent your claim?",
      dependantAnswer: "Enter details manually",
      type: "date",
      options: null,
      helpText: "Enter the date when you received the Payment Schedule. This is important for timing requirements under SOPA NSW."
    },
    {
      id: "PS2b",
      text: "How much did they agree to pay?",
      key: "ps_scheduled_amount",
      parent: "PS_mode",
      section: "What happened after you sent your claim?",
      dependantAnswer: "Enter details manually",
      type: "currency",
      options: null,
      helpText: "Enter the amount the respondent agreed to pay in their Payment Schedule."
    },
    {
      id: "PS2c",
      text: "What reasons did they give?",
      key: "ps_reasons",
      parent: "PS_mode",
      section: "What happened after you sent your claim?",
      dependantAnswer: "Enter details manually",
      type: "long-text",
      options: null,
      helpText: "Describe the reasons the respondent gave for not paying the full amount, or for any deductions they made."
    },

    // --- Adjudication Notice ---
    {
      id: "N1",
      text: "Did you send a Notice of Intention to apply for adjudication?",
      key: "adjudication_notice_given",
      parent: "PS1",
      section: "Next steps",
      dependantAnswer: "No",
      type: "multiple-choice",
      options: ["Yes", "No"],
      helpText: "If the respondent didn't send a Payment Schedule or didn't pay the scheduled amount, you can apply for adjudication. You must first send a Notice of Intention."
    },
    {
      id: "N_mode",
      text: "How will you provide your Notice of Intention?",
      key: "notice_mode",
      parent: "N1",
      section: "Next steps",
      dependantAnswer: "Yes",
      type: "multiple-choice",
      options: ["Upload", "Enter details manually"],
      helpText: "You can upload your Notice of Intention document or provide the details manually."
    },
    {
      id: "N2",
      text: "When did you send the Notice of Intention?",
      key: "notice_date",
      parent: "N_mode",
      section: "Next steps",
      dependantAnswer: "Enter details manually",
      type: "date",
      options: null,
      helpText: "Enter the date when you sent your Notice of Intention to apply for adjudication."
    },
    {
      id: "N2a",
      text: "Upload your Notice of Intention (optional)",
      key: "notice_file",
      parent: "N_mode",
      section: "Next steps",
      dependantAnswer: "Upload",
      type: "file-upload",
      options: null,
      helpText: "Upload your Notice of Intention document if you have it available."
    },
    {
      id: "N2b",
      text: "How did you send the Notice of Intention?",
      key: "notice_service_details",
      parent: "N_mode",
      section: "Next steps",
      dependantAnswer: "Enter details manually",
      type: "long-text",
      options: null,
      helpText: "Describe how you sent the Notice of Intention (e.g., email, post, hand delivery) and who you sent it to."
    }
  ],
  createdAt: new Date("2025-09-11T12:00:00Z"),
  updatedAt: new Date("2025-09-11T12:00:00Z"),
  country: "Australia",
  state: "NSW",
  jurisdiction: "SOPA NSW",
  tags: ["eligibility", "construction", "contract", "sopa", "nsw", "enhanced", "phase2"],
  version: "4.0.0",
  isActive: true,
  isPublic: true
};