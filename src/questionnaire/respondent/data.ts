import { Questionnaire } from "../types.ts";
// Respondent Initial Questionnaire V1
export const sopanswRespondentQuickQuestionnaire: Questionnaire = {
  id: "sopa-nsw-respondent-quick-v2",
  title: "SOPA NSW - Quick Check for Respondents",
  description:
    "Answer a few quick questions to see how the NSW Security of Payment laws may affect you and whether you should complete a detailed assessment.",
  questions: [
    {
      id: "Q1",
      text: "Is the project located in New South Wales?",
      key: "quick_project_in_nsw",
      parent: null,
      dependantAnswer: null,
      section: "Project",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "Q2",
      text: "Does the work relate to construction, building, or related services?",
      key: "quick_construction_indicator",
      parent: null,
      dependantAnswer: null,
      section: "Project",
      type: "multiple-choice",
      options: [
        "Yes - construction/building work",
        "Yes - related professional services (design, engineering, consultancy)",
        "Yes - supply of materials or plant for construction",
        "No - something else"
      ]
    },
    {
      id: "Q3",
      text: "Have you received a Payment Claim (an invoice or document asking for payment under a construction contract)?",
      key: "quick_received_payment_claim",
      parent: null,
      dependantAnswer: null,
      section: "Payment Claim",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "Q4",
      text: "Have you sent a written response stating how much you will pay (a Payment Schedule or similar)?",
      key: "quick_issued_payment_schedule",
      parent: "Q3",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "Q5",
      text: "Compared with the amount claimed, how much have you paid so far?",
      key: "quick_payment_status",
      parent: "Q3",
      dependantAnswer: "Yes",
      section: "Payment Status",
      type: "multiple-choice",
      options: [
        "Nothing",
        "Less than the claimed amount",
        "The full claimed amount",
        "More than the claimed amount"
      ]
    },
    {
      id: "Q6",
      text: "Have you received an adjudication application from the claimant or an Authorised Nominating Authority?",
      key: "quick_received_adjudication_application",
      parent: null,
      dependantAnswer: null,
      section: "Adjudication",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "Q7",
      text: "Are you a principal contractor who engages other contractors for this project?",
      key: "quick_is_principal_contractor",
      parent: null,
      dependantAnswer: null,
      section: "Principal Contractor",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "Q8",
      text: "Have you received a Payment Withholding Request relating to this project?",
      key: "quick_received_pwr",
      parent: "Q7",
      dependantAnswer: "Yes",
      section: "Principal Contractor",
      type: "boolean",
      options: ["Yes", "No"]
    }
  ],
  createdAt: new Date("2025-11-24T12:00:00:00Z"),
  updatedAt: new Date("2025-11-24T12:00:00:00Z"),
  country: "Australia",
  state: "NSW",
  jurisdiction: "SOPA NSW",
  tags: ["respondent", "sopa", "nsw", "construction", "triage", "anonymous"],
  version: "2.0.0",
  isActive: true,
  isPublic: true
};

// Respondent Detailed Questionnaire V1
export const sopanswRespondentQuestionnaire2: Questionnaire = {
  id: "sopa-nsw-respondent-v2",
  title: "SOPA NSW Respondent Questionnaire",
  description:
    "This questionnaire determines the respondent's position under SOPA NSW regarding payment claims, payment schedules, service rules, adjudication response eligibility, and Division 2A obligations.",
  questions: [
    // SECTION A: Respondent Identity
    {
      id: "R1",
      text: "Your name or business name",
      key: "respondent_name",
      parent: null,
      dependantAnswer: null,
      section: "About you", 
      type: "text"
    },
    {
      id: "R2",
      text: "Business number (optional)",
      key: "respondent_abn_acn",
      parent: "R1",
      dependantAnswer: null,
      section: "About you",
      type: "text"
    },

    // SECTION A.1: Case Information
    {
      id: "CASE1",
      text: "Case title",
      key: "case_title",
      parent: null,
      dependantAnswer: null,
      section: "Case Information",
      type: "text"
    },
    {
      id: "CASE2",
      text: "Case description",
      key: "case_description",
      parent: null,
      dependantAnswer: null,
      section: "Case Information",
      type: "text"
    },
    {
      id: "CASE3",
      text: "Claimant name or business name",
      key: "claimant_name",
      parent: null,
      dependantAnswer: null,
      section: "Case Information",
      type: "text"
    },

    // SECTION B: Project / Contract Context
    {
      id: "CT0",
      text: "Where is the construction work for this project carried out?",
      key: "work_location",
      parent: null,
      dependantAnswer: null,
      section: "Contract Details",
      type: "multiple-choice",
      options: [
        "New South Wales",
        "Another Australian state or territory",
        "Outside Australia"
      ]
    },
    {
      id: "CT4",
      text: "Which option best describes the work or services?",
      key: "work_type_category",
      parent: null,
      dependantAnswer: null,
      section: "Contract Details",
      type: "multiple-choice",
      options: [
        "Building / construction work",
        "Civil or infrastructure work",
        "Design, engineering or consultancy",
        "Supply of materials",
        "Plant or equipment hire",
        "Labour hire / on-site labour only",
        "Other"
      ]
    },
    {
      id: "CT2",
      text: "When was the last work performed or last goods/services supplied?",
      key: "last_work_date",
      parent: null,
      dependantAnswer: null,
      section: "Contract Details",
      type: "date"
    },
    {
      id: "CT3",
      text: "Has the contract been terminated?",
      key: "contract_terminated",
      parent: null,
      dependantAnswer: null,
      section: "Contract Details",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "CT3a",
      text: "When was the contract terminated?",
      key: "contract_termination_date",
      parent: "CT3",
      dependantAnswer: "Yes",
      section: "Contract Details",
      type: "date"
    },

    // SECTION C: Payment Claim - first existence, then mode, then details
    {
      id: "RC1",
      text: "Did you receive a Payment Claim?",
      key: "received_payment_claim",
      parent: null,
      dependantAnswer: null,
      section: "Payment Claim",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "RC0",
      text: "How would you like to provide details of the Payment Claim?",
      key: "payment_claim_input_mode",
      parent: "RC1",
      dependantAnswer: "Yes",
      section: "Payment Claim",
      type: "multiple-choice",
      options: ["Upload the Payment Claim", "Enter details manually"]
    },
    {
      id: "RC0a",
      text: "Upload the Payment Claim",
      key: "payment_claim_upload",
      parent: "RC0",
      dependantAnswer: "Upload the Payment Claim",
      section: "Payment Claim",
      type: "file-upload"
    },
    {
      id: "RC1a",
      text: "When did you receive the Payment Claim?",
      key: "payment_claim_received_date",
      parent: "RC1",
      dependantAnswer: "Yes",
      section: "Payment Claim",
      type: "date"
    },
    {
      id: "RC1b",
      text: "How was the Payment Claim served?",
      key: "payment_claim_service_method",
      parent: "RC1",
      dependantAnswer: "Yes",
      section: "Payment Claim",
      type: "multiple-choice",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ]
    },
    {
      id: "RC1c1",
      text: "What amount was claimed (including GST, if applicable)?",
      key: "payment_claim_amount",
      parent: "RC0",
      dependantAnswer: "Enter details manually",
      section: "Payment Claim",
      type: "currency"
    },
    {
      id: "RC1c_work",
      text: "Does the Payment Claim clearly identify the work or services it relates to?",
      key: "payment_claim_identifies_work",
      parent: "RC0",
      dependantAnswer: "Enter details manually",
      section: "Payment Claim",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "RC1c_amount",
      text: "Does the Payment Claim clearly state a claimed amount?",
      key: "payment_claim_identifies_amount",
      parent: "RC0",
      dependantAnswer: "Enter details manually",
      section: "Payment Claim",
      type: "boolean",
      options: ["Yes", "No"]
    },

    // SECTION D: Payment Schedule - first existence, then mode, then details
    {
      id: "PS1",
      text: "Did you issue a Payment Schedule (a written response stating how much you will pay)?",
      key: "issued_payment_schedule",
      parent: null,
      dependantAnswer: null,
      section: "Payment Schedule",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "PS0",
      text: "How would you like to provide details of the Payment Schedule?",
      key: "payment_schedule_input_mode",
      parent: "PS1",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "multiple-choice",
      options: ["Upload the Payment Schedule", "Enter details manually"]
    },
    {
      id: "PS0a",
      text: "Upload the Payment Schedule",
      key: "payment_schedule_upload",
      parent: "PS0",
      dependantAnswer: "Upload the Payment Schedule",
      section: "Payment Schedule",
      type: "file-upload"
    },
    {
      id: "PS2",
      text: "When did you serve the Payment Schedule?",
      key: "payment_schedule_issue_date",
      parent: "PS1",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "date"
    },
    {
      id: "PS3",
      text: "How did you serve the Payment Schedule?",
      key: "payment_schedule_service_method",
      parent: "PS1",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "multiple-choice",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ]
    },
    {
      id: "PS6",
      text: "Did you pay the scheduled amount by the due date?",
      key: "scheduled_amount_paid",
      parent: "PS1",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "boolean",
      options: ["Yes", "No", "Partially"]
    },
    {
      id: "PS6a",
      text: "If partially paid, how much did you pay?",
      key: "scheduled_amount_partial_paid",
      parent: "PS6",
      dependantAnswer: "Partially",
      section: "Payment Schedule",
      type: "currency"
    },
    {
      id: "PS4",
      text: "What amount did you schedule as payable?",
      key: "scheduled_amount",
      parent: "PS0",
      dependantAnswer: "Enter details manually",
      section: "Payment Schedule",
      type: "currency"
    },
    {
      id: "PS5",
      text: "What was the main reason you reduced or withheld payment (if any)?",
      key: "payment_schedule_reason_category",
      parent: "PS0",
      dependantAnswer: "Enter details manually",
      section: "Payment Schedule",
      type: "multiple-choice",
      options: [
        "Defective work",
        "Incomplete work",
        "Disputed variations",
        "Set-offs / back charges",
        "Time-related issues (delay, liquidated damages)",
        "Other",
        "No reduction (paid in full)"
      ]
    },

    // SECTION E: Payment Due Date / Status
    {
      id: "PM0",
      text: "When was payment due for this Payment Claim (under the contract or SOPA)?",
      key: "payment_due_date",
      parent: null,
      dependantAnswer: null,
      section: "Payment Status",
      type: "date"
    },
    {
      id: "PM1",
      text: "Have you paid any amount toward the Payment Claim?",
      key: "any_payment_made",
      parent: null,
      dependantAnswer: null,
      section: "Payment Status",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "PM2",
      text: "How much have you paid so far?",
      key: "amount_paid",
      parent: "PM1",
      dependantAnswer: "Yes",
      section: "Payment Status",
      type: "currency"
    },
    {
      id: "PM3",
      text: "What best describes why payment was withheld or reduced (if applicable)?",
      key: "payment_withheld_reason_category",
      parent: "PM1",
      dependantAnswer: "No",
      section: "Payment Status",
      type: "multiple-choice",
      options: [
        "Defective work",
        "Incomplete work",
        "Disputed variations",
        "Set-offs / back charges",
        "Time-related issues (delay, liquidated damages)",
        "Cash flow constraints",
        "Other"
      ]
    },

    // SECTION F: No Payment Schedule → Notice of Intention
    {
      id: "NS0",
      text: "Did the claimant send you a Notice of Intention to apply for adjudication?",
      key: "received_noa",
      parent: "PS1",
      dependantAnswer: "No",
      section: "No Payment Schedule",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "NS0_mode",
      text: "How would you like to provide details about the Notice of Intention?",
      key: "noa_input_mode",
      parent: "NS0",
      dependantAnswer: "Yes",
      section: "No Payment Schedule",
      type: "multiple-choice",
      options: ["Upload the Notice of Intention", "Enter details manually"]
    },
    {
      id: "NS0_upload",
      text: "Upload the Notice of Intention",
      key: "noa_upload",
      parent: "NS0_mode",
      dependantAnswer: "Upload the Notice of Intention",
      section: "No Payment Schedule",
      type: "file-upload"
    },
    {
      id: "NS2_date",
      text: "When did you receive the Notice of Intention?",
      key: "noa_received_date",
      parent: "NS0_mode",
      dependantAnswer: "Enter details manually",
      section: "No Payment Schedule",
      type: "date"
    },
    {
      id: "NS2_method",
      text: "How was the Notice of Intention served?",
      key: "noa_service_method",
      parent: "NS0_mode",
      dependantAnswer: "Enter details manually",
      section: "No Payment Schedule",
      type: "multiple-choice",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ]
    },
    {
      id: "NS2",
      text: "After receiving the Notice of Intention, did you issue a Payment Schedule?",
      key: "late_payment_schedule_issued",
      parent: "NS0",
      dependantAnswer: "Yes",
      section: "No Payment Schedule",
      type: "boolean",
      options: ["Yes", "No"]
    },

    // SECTION G: Adjudication Response
    {
      id: "AD1",
      text: "Have you received an adjudication application?",
      key: "received_adjudication_application",
      parent: null,
      dependantAnswer: null,
      section: "Adjudication Response",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "AD1a",
      text: "When did you receive the adjudication application?",
      key: "adjudication_application_received_date",
      parent: "AD1",
      dependantAnswer: "Yes",
      section: "Adjudication Response",
      type: "date"
    },
    {
      id: "AD1b",
      text: "How was the adjudication application served?",
      key: "adjudication_application_service_method",
      parent: "AD1",
      dependantAnswer: "Yes",
      section: "Adjudication Response",
      type: "multiple-choice",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ]
    },
    {
      id: "AD5",
      text: "Has an adjudication determination been issued?",
      key: "adjudication_determination_issued",
      parent: null,
      dependantAnswer: null,
      section: "Adjudication Response",
      type: "boolean",
      options: ["Yes", "No"]
    },

    // SECTION H: Division 2A - Principal Contractor Receiving PWR
    {
      id: "D2A1",
      text: "Are you a principal contractor who engages other contractors for this project?",
      key: "is_principal_contractor",
      section: "Division 2A",
      parent: null,
      dependantAnswer: null,
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "D2A2",
      text: "Have you received a Payment Withholding Request relating to this project?",
      key: "received_pwr",
      parent: "D2A1",
      dependantAnswer: "Yes",
      section: "Division 2A",
      type: "boolean",
      options: ["Yes", "No"]
    },
    {
      id: "D2A2a",
      text: "When did you receive the Payment Withholding Request?",
      key: "pwr_received_date",
      parent: "D2A2",
      dependantAnswer: "Yes",
      section: "Division 2A",
      type: "date"
    },
    {
      id: "D2A3",
      text: "Do you currently hold funds payable to the contractor named in the Payment Withholding Request?",
      key: "funds_held_for_contractor",
      parent: "D2A2",
      dependantAnswer: "Yes",
      section: "Division 2A",
      type: "boolean",
      options: ["Yes", "No"]
    }
  ],

  createdAt: new Date("2025-11-24T12:00:00Z"),
  updatedAt: new Date("2025-11-24T12:00:00Z"),
  country: "Australia",
  state: "NSW",
  jurisdiction: "SOPA NSW",
  tags: ["respondent", "sopa", "nsw", "construction", "adjudication"],
  version: "2.5.0",
  isActive: true,
  isPublic: true
};  