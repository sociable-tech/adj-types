import { Questionnaire, QuestionnaireResponse } from './types';

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