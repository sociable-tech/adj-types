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
      text: "What is the jurisdiction of the arrangement?",
      key: "quick_project_in_nsw",
      parent: null,
      dependantAnswer: null,
      section: "Project",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "SOPA NSW only applies to construction work or supply of goods/services that are carried out in New South Wales, as per Section 7(4) of the Act. If the work is outside NSW, different security of payment legislation may apply."
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
      ],
      helpText: "SOPA NSW covers construction work (Section 5) and the supply of goods or services related to construction work (Section 6). This includes building work, infrastructure, professional services, and material supply. If your contract doesn't involve construction-related work, SOPA NSW may not apply."
    },
    {
      id: "Q3",
      text: "Have you received a Payment Claim (an invoice or document asking for payment under a construction contract)?",
      key: "quick_received_payment_claim",
      parent: null,
      dependantAnswer: null,
      section: "Payment Claim",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "A Payment Claim under SOPA NSW (Section 13) is a formal document that identifies the work/goods/services and states a claimed amount. If you receive one, you must respond within 10 business days with a Payment Schedule or pay the full claimed amount, otherwise you may lose your right to dispute the claim."
    },
    {
      id: "Q3a",
      text: "When did you receive the Payment Claim?",
      key: "quick_payment_claim_received_date",
      parent: "Q3",
      dependantAnswer: "Yes",
      section: "Payment Claim",
      type: "date",
      options: null,
      helpText: "The date you received the Payment Claim helps determine your response deadlines. You have 10 business days from this date to serve a Payment Schedule."
    },
    {
      id: "Q4",
      text: "Have you sent a written response stating how much you will pay (a Payment Schedule or similar)?",
      key: "quick_issued_payment_schedule",
      parent: "Q3",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "A Payment Schedule (Section 14) is your written response to a Payment Claim. You must serve it within 10 business days of receiving the Payment Claim. If you don't serve a Payment Schedule and don't pay the full amount, the claimant can apply for adjudication and you may be liable for the full claimed amount plus interest."
    },
    {
      id: "Q4a",
      text: "When did you issue the Payment Schedule?",
      key: "quick_payment_schedule_issued_date",
      parent: "Q4",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "date",
      options: null,
      helpText: "The date you issued the Payment Schedule helps verify if it was served within the required 10 business days."
    },
    {
      id: "Q5",
      text: "Compared with the amount claimed, how much have you paid so far?",
      key: "quick_payment_status",
      parent: "Q4",
      dependantAnswer: "Yes",
      section: "Payment Status",
      type: "boolean",
      options: [
        "Less than the claimed amount",
        "The full claimed amount",
        "More than the claimed amount"
      ],
      helpText: "Under SOPA NSW, if you don't pay the scheduled amount (or full claimed amount if no Payment Schedule) by the due date, the claimant can apply for adjudication. Payment status affects your rights and obligations, including whether you can dispute the claim in adjudication."
    },
    {
      id: "Q6",
      text: "Have you received an adjudication application from the claimant or an Authorised Nominating Authority?",
      key: "quick_received_adjudication_application",
      parent: null,
      dependantAnswer: null,
      section: "Adjudication",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "An adjudication application (Section 17) is a formal request for an adjudicator to determine the payment dispute. If you receive one, you have limited time (usually 10 business days) to respond with an adjudication response. Failure to respond may result in an adverse determination."
    },
    {
      id: "Q7",
      text: "Are you a principal contractor who engages other contractors for this project?",
      key: "quick_is_principal_contractor",
      parent: null,
      dependantAnswer: null,
      section: "Principal Contractor",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "Principal contractors (also called Head Contractors) who engage subcontractors have additional obligations under SOPA NSW Division 2A. This includes responding to Payment Withholding Requests from subcontractors' claimants, which can affect funds you hold for your subcontractors."
    },
    {
      id: "Q8",
      text: "Have you received a Payment Withholding Request relating to this project?",
      key: "quick_received_pwr",
      parent: "Q7",
      dependantAnswer: "Yes",
      section: "Principal Contractor",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "A Payment Withholding Request (PWR) under Division 2A allows a claimant to request that you withhold funds from a subcontractor who owes them money. You must respond within 10 business days. If you hold funds for that subcontractor, you may be required to withhold the requested amount."
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
      type: "text",
      helpText: "Enter the legal name of the person or company who received the Payment Claim. This is the 'respondent' in SOPA NSW proceedings and must match the name on the construction contract."
    },
    {
      id: "R2",
      text: "Business number (optional)",
      key: "respondent_abn_acn",
      parent: "R1",
      dependantAnswer: null,
      section: "About you",
      type: "text",
      helpText: "Your Australian Business Number (ABN) or Australian Company Number (ACN) helps verify your business identity and may be required for legal proceedings under SOPA NSW."
    },

    // SECTION A.1: Case Information
    {
      id: "CASE1",
      text: "Case title",
      key: "case_title",
      parent: null,
      dependantAnswer: null,
      section: "Case Information",
      type: "text",
      helpText: "Give your case a clear name for easy identification. This helps with record-keeping and case management throughout the SOPA NSW process."
    },
    {
      id: "CASE2",
      text: "Case description",
      key: "case_description",
      parent: null,
      dependantAnswer: null,
      section: "Case Information",
      type: "text",
      helpText: "Provide a brief summary of the payment dispute, including the project details, work performed, and the nature of the disagreement. This helps assess your position under SOPA NSW."
    },
    {
      id: "CASE3",
      text: "Claimant name or business name",
      key: "claimant_name",
      parent: null,
      dependantAnswer: null,
      section: "Case Information",
      type: "text",
      helpText: "Enter the name of the person or company who sent you the Payment Claim. This is the 'claimant' in SOPA NSW proceedings and must match the name on the Payment Claim document."
    },

    // SECTION B: Project / Contract Context
    {
      id: "CT0",
      text: "Where is the construction work for this project carried out?",
      key: "work_location",
      parent: null,
      dependantAnswer: null,
      section: "Contract Details",
      type: "boolean",
      options: [
        "New South Wales",
        "Another Australian state or territory",
        "Outside Australia"
      ],
      helpText: "SOPA NSW only applies to construction work or supply of goods/services carried out in New South Wales (Section 7(4)). If work is in another state or outside Australia, different legislation applies and SOPA NSW may not protect you or the claimant."
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
      ],
      helpText: "SOPA NSW covers construction work (Section 5) and supply of goods/services related to construction (Section 6). The type of work determines which sections of the Act apply and affects your rights and obligations as a respondent."
    },
    {
      id: "CT2",
      text: "When was the last work performed or last goods/services supplied?",
      key: "last_work_date",
      parent: null,
      dependantAnswer: null,
      section: "Contract Details",
      type: "date",
      helpText: "The date of last work is important for determining reference dates and timing requirements under SOPA NSW. This affects when payment claims can be made and when payment is due."
    },
    {
      id: "CT3",
      text: "Has the contract been terminated?",
      key: "contract_terminated",
      parent: null,
      dependantAnswer: null,
      section: "Contract Details",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "Contract termination affects your rights and obligations under SOPA NSW. If terminated, special rules apply for payment claims and payment schedules, including different timing requirements under Section 13(1C)."
    },
    {
      id: "CT3a",
      text: "When was the contract terminated?",
      key: "contract_termination_date",
      parent: "CT3",
      dependantAnswer: "Yes",
      section: "Contract Details",
      type: "date",
      helpText: "The termination date is critical for determining your obligations under SOPA NSW. Payment claims served after termination have different requirements, and this date affects when payment is due and your response deadlines."
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
      options: ["Yes", "No"],
      helpText: "A Payment Claim under SOPA NSW (Section 13) is a formal document requesting payment. If you receive one, you must respond within 10 business days with a Payment Schedule or pay the full claimed amount, otherwise you may lose your right to dispute the claim."
    },
    {
      id: "RC0",
      text: "How would you like to provide details of the Payment Claim?",
      key: "payment_claim_input_mode",
      parent: "RC1",
      dependantAnswer: "Yes",
      section: "Payment Claim",
      type: "boolean",
      options: ["Upload the Payment Claim", "Enter details manually"],
      helpText: "You can upload the actual Payment Claim document or provide the details manually. Having the document helps verify compliance with SOPA NSW requirements and assess your response obligations."
    },
    {
      id: "RC0a",
      text: "Upload the Payment Claim",
      key: "payment_claim_upload",
      parent: "RC0",
      dependantAnswer: "Upload the Payment Claim",
      section: "Payment Claim",
      type: "file-upload",
      helpText: "Upload a clear copy of the Payment Claim you received. This helps verify that it meets SOPA NSW requirements under Section 13(2), including identification of work and stated amount."
    },
    {
      id: "RC1a",
      text: "When did you receive the Payment Claim?",
      key: "payment_claim_received_date",
      parent: "RC1",
      dependantAnswer: "Yes",
      section: "Payment Claim",
      type: "date",
      helpText: "The date you received the Payment Claim is critical. You have 10 business days from this date to serve a Payment Schedule (Section 14). Missing this deadline may result in liability for the full claimed amount plus interest."
    },
    {
      id: "RC1b",
      text: "How was the Payment Claim served?",
      key: "payment_claim_service_method",
      parent: "RC1",
      dependantAnswer: "Yes",
      section: "Payment Claim",
      type: "boolean",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ],
      helpText: "The method of service affects when the Payment Claim is considered 'received' under SOPA NSW. Service must comply with the contract terms or SOPA NSW service rules (Section 31) for the claim to be valid."
    },
    {
      id: "RC1c1",
      text: "What amount was claimed (including GST, if applicable)?",
      key: "payment_claim_amount",
      parent: "RC0",
      dependantAnswer: "Enter details manually",
      section: "Payment Claim",
      type: "currency",
      helpText: "Enter the total amount claimed, including GST if applicable. Under Section 13(2)(b), a Payment Claim must state the amount claimed. This is the amount you must pay in full if you don't serve a Payment Schedule within 10 business days."
    },
    {
      id: "RC1c_work",
      text: "Does the Payment Claim clearly identify the work or services it relates to?",
      key: "payment_claim_identifies_work",
      parent: "RC0",
      dependantAnswer: "Enter details manually",
      section: "Payment Claim",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "Under Section 13(2)(a), a Payment Claim must identify the construction work or goods/services it relates to. If it doesn't clearly identify the work, you may have grounds to dispute its validity, but you should still serve a Payment Schedule to protect your rights."
    },
    {
      id: "RC1c_amount",
      text: "Does the Payment Claim clearly state a claimed amount?",
      key: "payment_claim_identifies_amount",
      parent: "RC0",
      dependantAnswer: "Enter details manually",
      section: "Payment Claim",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "Under Section 13(2)(b), a Payment Claim must state the amount claimed. If no amount is stated, the claim may be invalid, but you should still respond with a Payment Schedule to protect your position and avoid potential liability."
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
      options: ["Yes", "No"],
      helpText: "A Payment Schedule (Section 14) is your written response to a Payment Claim. You must serve it within 10 business days of receiving the Payment Claim. If you don't serve a Payment Schedule and don't pay the full amount, the claimant can apply for adjudication and you may be liable for the full claimed amount plus interest."
    },
    {
      id: "PS0",
      text: "How would you like to provide details of the Payment Schedule?",
      key: "payment_schedule_input_mode",
      parent: "PS1",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "boolean",
      options: ["Upload the Payment Schedule", "Enter details manually"],
      helpText: "You can upload your Payment Schedule document or provide the details manually. The Payment Schedule must comply with Section 14(2) requirements, including the scheduled amount and reasons for any reduction."
    },
    {
      id: "PS0a",
      text: "Upload the Payment Schedule",
      key: "payment_schedule_upload",
      parent: "PS0",
      dependantAnswer: "Upload the Payment Schedule",
      section: "Payment Schedule",
      type: "file-upload",
      helpText: "Upload a clear copy of the Payment Schedule you served. This helps verify compliance with Section 14(2) requirements, including the scheduled amount and reasons for any payment reduction."
    },
    {
      id: "PS2",
      text: "When did you serve the Payment Schedule?",
      key: "payment_schedule_issue_date",
      parent: "PS1",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "date",
      helpText: "You must serve the Payment Schedule within 10 business days of receiving the Payment Claim (Section 14(1)). If served late, you may still be liable for the full claimed amount. The service date is critical for determining your payment obligations."
    },
    {
      id: "PS3",
      text: "How did you serve the Payment Schedule?",
      key: "payment_schedule_service_method",
      parent: "PS1",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "boolean",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ],
      helpText: "The Payment Schedule must be served in accordance with the contract terms or SOPA NSW service rules (Section 31). Proper service is essential for the Payment Schedule to be valid and protect your rights."
    },
    {
      id: "PS6",
      text: "Did you pay the scheduled amount by the due date?",
      key: "scheduled_amount_paid",
      parent: "PS1",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "boolean",
      options: ["Yes", "No", "Partially"],
      helpText: "Under Section 15, you must pay the scheduled amount by the due date (usually 10 business days after the Payment Schedule is served). If you don't pay the scheduled amount, the claimant can apply for adjudication. Partial payment may still allow adjudication for the unpaid balance."
    },
    {
      id: "PS6a",
      text: "If partially paid, how much did you pay?",
      key: "scheduled_amount_partial_paid",
      parent: "PS6",
      dependantAnswer: "Partially",
      section: "Payment Schedule",
      type: "currency",
      helpText: "Enter the amount you actually paid. The unpaid balance may still be subject to adjudication. Partial payment doesn't prevent the claimant from applying for adjudication for the remaining amount."
    },
    {
      id: "PS4",
      text: "What amount did you schedule as payable?",
      key: "scheduled_amount",
      parent: "PS0",
      dependantAnswer: "Enter details manually",
      section: "Payment Schedule",
      type: "currency",
      helpText: "Enter the amount you stated you would pay in your Payment Schedule. Under Section 14(2)(a), the Payment Schedule must state the scheduled amount. This is the amount you must pay by the due date to avoid adjudication."
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
      ],
      helpText: "Under Section 14(2)(b), if you reduce the scheduled amount below the claimed amount, you must provide reasons. These reasons will be important if the matter goes to adjudication, as the adjudicator will consider them when determining the amount payable."
    },

    // SECTION E: Payment Due Date / Status
    {
      id: "PM0",
      text: "When was payment due for this Payment Claim (under the contract or SOPA)?",
      key: "payment_due_date",
      parent: null,
      dependantAnswer: null,
      section: "Payment Status",
      type: "date",
      helpText: "Payment is due under Section 11 (if no Payment Schedule) or Section 15 (if Payment Schedule served). The due date is critical - if payment isn't made by this date, the claimant can apply for adjudication and you may be liable for interest."
    },
    {
      id: "PM1",
      text: "Have you paid any amount toward the Payment Claim?",
      key: "any_payment_made",
      parent: null,
      dependantAnswer: null,
      section: "Payment Status",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "Your payment status affects your rights and obligations under SOPA NSW. If you haven't paid the full amount by the due date, the claimant can apply for adjudication for the unpaid balance, and you may be liable for interest on overdue amounts."
    },
    {
      id: "PM2",
      text: "How much have you paid so far?",
      key: "amount_paid",
      parent: "PM1",
      dependantAnswer: "Yes",
      section: "Payment Status",
      type: "currency",
      helpText: "Enter the total amount you've paid toward this Payment Claim. The unpaid balance (claimed amount minus amount paid) may still be subject to adjudication if payment wasn't made by the due date."
    },
    {
      id: "PM3",
      text: "What best describes why payment was withheld or reduced (if applicable)?",
      key: "payment_withheld_reason_category",
      parent: "PM1",
      dependantAnswer: "No",
      section: "Payment Status",
      type: "boolean",
      options: [
        "Defective work",
        "Incomplete work",
        "Disputed variations",
        "Set-offs / back charges",
        "Time-related issues (delay, liquidated damages)",
        "Cash flow constraints",
        "Other"
      ],
      helpText: "If you withheld or reduced payment, you should have served a Payment Schedule with reasons (Section 14(2)(b)). These reasons will be important in adjudication. Note that 'cash flow constraints' alone is not a valid reason under SOPA NSW - you must have legitimate contractual or legal grounds."
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
      options: ["Yes", "No"],
      helpText: "If you didn't serve a Payment Schedule, the claimant must send you a Notice of Intention before applying for adjudication (Section 17(1)). This gives you a final opportunity to serve a Payment Schedule, though it may be too late to avoid adjudication."
    },
    {
      id: "NS0_mode",
      text: "How would you like to provide details about the Notice of Intention?",
      key: "noa_input_mode",
      parent: "NS0",
      dependantAnswer: "Yes",
      section: "No Payment Schedule",
      type: "boolean",
      options: ["Upload the Notice of Intention", "Enter details manually"],
      helpText: "You can upload the Notice of Intention document or provide details manually. The Notice must comply with Section 17(1) requirements and gives you notice that the claimant intends to apply for adjudication."
    },
    {
      id: "NS0_upload",
      text: "Upload the Notice of Intention",
      key: "noa_upload",
      parent: "NS0_mode",
      dependantAnswer: "Upload the Notice of Intention",
      section: "No Payment Schedule",
      type: "file-upload",
      helpText: "Upload a clear copy of the Notice of Intention you received. This helps verify compliance with Section 17(1) and assess your response options, including whether you can still serve a Payment Schedule."
    },
    {
      id: "NS2_date",
      text: "When did you receive the Notice of Intention?",
      key: "noa_received_date",
      parent: "NS0_mode",
      dependantAnswer: "Enter details manually",
      section: "No Payment Schedule",
      type: "date",
      helpText: "The date you received the Notice of Intention is important. After receiving it, you may still be able to serve a Payment Schedule, but the claimant can proceed with adjudication. The date affects timing for any response you may wish to make."
    },
    {
      id: "NS2_method",
      text: "How was the Notice of Intention served?",
      key: "noa_service_method",
      parent: "NS0_mode",
      dependantAnswer: "Enter details manually",
      section: "No Payment Schedule",
      type: "boolean",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ],
      helpText: "The Notice of Intention must be served in accordance with the contract terms or SOPA NSW service rules (Section 31). Proper service is required for the Notice to be valid and for the claimant to proceed with adjudication."
    },
    {
      id: "NS2",
      text: "After receiving the Notice of Intention, did you issue a Payment Schedule?",
      key: "late_payment_schedule_issued",
      parent: "NS0",
      dependantAnswer: "Yes",
      section: "No Payment Schedule",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "Even after receiving a Notice of Intention, you can still serve a Payment Schedule. However, the claimant may still proceed with adjudication. Serving a late Payment Schedule may limit your ability to dispute the claim in adjudication, but it's better than not serving one at all."
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
      options: ["Yes", "No"],
      helpText: "An adjudication application (Section 17) is a formal request for an adjudicator to determine the payment dispute. If you receive one, you have limited time (usually 10 business days) to respond with an adjudication response. Failure to respond may result in an adverse determination."
    },
    {
      id: "AD1a",
      text: "When did you receive the adjudication application?",
      key: "adjudication_application_received_date",
      parent: "AD1",
      dependantAnswer: "Yes",
      section: "Adjudication Response",
      type: "date",
      helpText: "The date you received the adjudication application is critical. You typically have 10 business days from this date to serve your adjudication response (Section 20). Missing this deadline severely limits your ability to dispute the claim and may result in an adverse determination."
    },
    {
      id: "AD1b",
      text: "How was the adjudication application served?",
      key: "adjudication_application_service_method",
      parent: "AD1",
      dependantAnswer: "Yes",
      section: "Adjudication Response",
      type: "boolean",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ],
      helpText: "The adjudication application must be served in accordance with the contract terms or SOPA NSW service rules (Section 31). Proper service is required for the application to be valid. The service method affects when you're considered to have received it."
    },
    {
      id: "AD5",
      text: "Has an adjudication determination been issued?",
      key: "adjudication_determination_issued",
      parent: null,
      dependantAnswer: null,
      section: "Adjudication Response",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "An adjudication determination (Section 22) is the adjudicator's decision on the payment dispute. If issued, you must pay the determined amount within 5 business days (Section 23) or face enforcement proceedings. You have limited grounds to challenge a determination."
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
      options: ["Yes", "No"],
      helpText: "Principal contractors (also called Head Contractors) who engage subcontractors have additional obligations under SOPA NSW Division 2A. This includes responding to Payment Withholding Requests from subcontractors' claimants, which can affect funds you hold for your subcontractors."
    },
    {
      id: "D2A2",
      text: "Have you received a Payment Withholding Request relating to this project?",
      key: "received_pwr",
      parent: "D2A1",
      dependantAnswer: "Yes",
      section: "Division 2A",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "A Payment Withholding Request (PWR) under Division 2A allows a claimant to request that you withhold funds from a subcontractor who owes them money. You must respond within 10 business days. If you hold funds for that subcontractor, you may be required to withhold the requested amount."
    },
    {
      id: "D2A2a",
      text: "When did you receive the Payment Withholding Request?",
      key: "pwr_received_date",
      parent: "D2A2",
      dependantAnswer: "Yes",
      section: "Division 2A",
      type: "date",
      helpText: "The date you received the Payment Withholding Request is critical. You have 10 business days from this date to respond (Section 27B). If you don't respond or don't withhold funds when required, you may be liable for the amount that should have been withheld."
    },
    {
      id: "D2A3",
      text: "Do you currently hold funds payable to the contractor named in the Payment Withholding Request?",
      key: "funds_held_for_contractor",
      parent: "D2A2",
      dependantAnswer: "Yes",
      section: "Division 2A",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "Under Division 2A, if you hold funds payable to the subcontractor named in the Payment Withholding Request, you must withhold the requested amount (up to the amount you hold). If you don't hold funds, you must notify the claimant within 10 business days. Failure to comply may result in liability."
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

// Respondent Detailed Questionnaire V2
export const sopanswRespondentQuestionnaire3: Questionnaire = {
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
      type: "text",
      helpText: "Enter the legal name of the person or company who received the Payment Claim. This is the 'respondent' in SOPA NSW proceedings and must match the name on the construction contract."
    },
    {
      id: "R2",
      text: "Business number (optional)",
      key: "respondent_abn_acn",
      parent: "R1",
      dependantAnswer: null,
      section: "About you",
      type: "text",
      helpText: "Your Australian Business Number (ABN) or Australian Company Number (ACN) helps verify your business identity and may be required for legal proceedings under SOPA NSW."
    },

    // SECTION A.1: Case Information
    {
      id: "CASE1",
      text: "Case title",
      key: "case_title",
      parent: null,
      dependantAnswer: null,
      section: "Case Information",
      type: "text",
      helpText: "Give your case a clear name for easy identification. This helps with record-keeping and case management throughout the SOPA NSW process."
    },
    {
      id: "CASE3",
      text: "Claimant name or business name",
      key: "claimant_name",
      parent: null,
      dependantAnswer: null,
      section: "Case Information",
      type: "text",
      helpText: "Enter the name of the person or company who sent you the Payment Claim. This is the 'claimant' in SOPA NSW proceedings and must match the name on the Payment Claim document."
    },

    // SECTION B: Project / Contract Context
    {
      id: "CT0",
      text: "Where is the construction work for this project carried out?",
      key: "work_location",
      parent: null,
      dependantAnswer: null,
      section: "Contract Details",
      type: "boolean",
      options: [
        "New South Wales",
        "Another Australian state or territory",
        "Outside Australia"
      ],
      helpText: "SOPA NSW only applies to construction work or supply of goods/services carried out in New South Wales (Section 7(4)). If work is in another state or outside Australia, different legislation applies and SOPA NSW may not protect you or the claimant."
    },
    {
      id: "CT4",
      text: "Which option best describes the work or services?",
      key: "work_type_category",
      parent: null,
      dependantAnswer: null,
      section: "Contract Details",
      type: "boolean",
      options: [
        "Building / construction work",
        "Civil or infrastructure work",
        "Design, engineering or consultancy",
        "Supply of materials",
        "Plant or equipment hire",
        "Labour hire / on-site labour only",
        "Other"
      ],
      helpText: "SOPA NSW covers construction work (Section 5) and supply of goods/services related to construction (Section 6). The type of work determines which sections of the Act apply and affects your rights and obligations as a respondent."
    },
    {
      id: "CT2",
      text: "When was the last work performed or last goods/services supplied?",
      key: "last_work_date",
      parent: null,
      dependantAnswer: null,
      section: "Contract Details",
      type: "date",
      helpText: "The date of last work is important for determining reference dates and timing requirements under SOPA NSW. This affects when payment claims can be made and when payment is due."
    },
    {
      id: "CT3",
      text: "Has the contract been terminated?",
      key: "contract_terminated",
      parent: null,
      dependantAnswer: null,
      section: "Contract Details",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "Contract termination affects your rights and obligations under SOPA NSW. If terminated, special rules apply for payment claims and payment schedules, including different timing requirements under Section 13(1C)."
    },
    {
      id: "CT3a",
      text: "When was the contract terminated?",
      key: "contract_termination_date",
      parent: "CT3",
      dependantAnswer: "Yes",
      section: "Contract Details",
      type: "date",
      helpText: "The termination date is critical for determining your obligations under SOPA NSW. Payment claims served after termination have different requirements, and this date affects when payment is due and your response deadlines."
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
      options: ["Yes", "No"],
      helpText: "A Payment Claim under SOPA NSW (Section 13) is a formal document requesting payment. If you receive one, you must respond within 10 business days with a Payment Schedule or pay the full claimed amount, otherwise you may lose your right to dispute the claim."
    },
    {
      id: "RC0",
      text: "How would you like to provide details of the Payment Claim?",
      key: "payment_claim_input_mode",
      parent: "RC1",
      dependantAnswer: "Yes",
      section: "Payment Claim",
      type: "boolean",
      options: ["Upload the Payment Claim", "Enter details manually"],
      helpText: "You can upload the actual Payment Claim document or provide the details manually. Having the document helps verify compliance with SOPA NSW requirements and assess your response obligations."
    },
    {
      id: "RC0a",
      text: "Upload the Payment Claim",
      key: "payment_claim_upload",
      parent: "RC0",
      dependantAnswer: "Upload the Payment Claim",
      section: "Payment Claim",
      type: "file-upload",
      helpText: "Upload a clear copy of the Payment Claim you received. This helps verify that it meets SOPA NSW requirements under Section 13(2), including identification of work and stated amount."
    },
    {
      id: "RC1a",
      text: "When did you receive the Payment Claim?",
      key: "payment_claim_received_date",
      parent: "RC1",
      dependantAnswer: "Yes",
      section: "Payment Claim",
      type: "date",
      helpText: "The date you received the Payment Claim is critical. You have 10 business days from this date to serve a Payment Schedule (Section 14). Missing this deadline may result in liability for the full claimed amount plus interest."
    },
    {
      id: "RC1b",
      text: "How did you receive the Payment Claim?",
      key: "payment_claim_service_method",
      parent: "RC1",
      dependantAnswer: "Yes",
      section: "Payment Claim",
      type: "boolean",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ],
      helpText: "The method of service affects when the Payment Claim is considered 'received' under SOPA NSW. Service must comply with the contract terms or SOPA NSW service rules (Section 31) for the claim to be valid."
    },
    {
      id: "RC1c1",
      text: "What amount was claimed (including GST, if applicable)?",
      key: "payment_claim_amount",
      parent: "RC0",
      dependantAnswer: "Enter details manually",
      section: "Payment Claim",
      type: "currency",
      helpText: "Enter the total amount claimed, including GST if applicable. Under Section 13(2)(b), a Payment Claim must state the amount claimed. This is the amount you must pay in full if you don't serve a Payment Schedule within 10 business days."
    },
    {
      id: "RC1c_work",
      text: "Does the Payment Claim clearly identify the work or services it relates to?",
      key: "payment_claim_identifies_work",
      parent: "RC0",
      dependantAnswer: "Enter details manually",
      section: "Payment Claim",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "Under Section 13(2)(a), a Payment Claim must identify the construction work or goods/services it relates to. If it doesn't clearly identify the work, you may have grounds to dispute its validity, but you should still serve a Payment Schedule to protect your rights."
    },
    {
      id: "RC1c_amount",
      text: "Does the Payment Claim clearly state a claimed amount?",
      key: "payment_claim_identifies_amount",
      parent: "RC0",
      dependantAnswer: "Enter details manually",
      section: "Payment Claim",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "Under Section 13(2)(b), a Payment Claim must state the amount claimed. If no amount is stated, the claim may be invalid, but you should still respond with a Payment Schedule to protect your position and avoid potential liability."
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
      options: ["Yes", "No"],
      helpText: "A Payment Schedule (Section 14) is your written response to a Payment Claim. You must serve it within 10 business days of receiving the Payment Claim. If you don't serve a Payment Schedule and don't pay the full amount, the claimant can apply for adjudication and you may be liable for the full claimed amount plus interest."
    },
    {
      id: "PS0",
      text: "How would you like to provide details of the Payment Schedule?",
      key: "payment_schedule_input_mode",
      parent: "PS1",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "boolean",
      options: ["Upload the Payment Schedule", "Enter details manually"],
      helpText: "You can upload your Payment Schedule document or provide the details manually. The Payment Schedule must comply with Section 14(2) requirements, including the scheduled amount and reasons for any reduction."
    },
    {
      id: "PS0a",
      text: "Upload the Payment Schedule",
      key: "payment_schedule_upload",
      parent: "PS0",
      dependantAnswer: "Upload the Payment Schedule",
      section: "Payment Schedule",
      type: "file-upload",
      helpText: "Upload a clear copy of the Payment Schedule you served. This helps verify compliance with Section 14(2) requirements, including the scheduled amount and reasons for any payment reduction."
    },
    {
      id: "PS2",
      text: "When did you serve the Payment Schedule?",
      key: "payment_schedule_issue_date",
      parent: "PS1",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "date",
      helpText: "You must serve the Payment Schedule within 10 business days of receiving the Payment Claim (Section 14(1)). If served late, you may still be liable for the full claimed amount. The service date is critical for determining your payment obligations."
    },
    {
      id: "PS3",
      text: "How did you serve the Payment Schedule?",
      key: "payment_schedule_service_method",
      parent: "PS1",
      dependantAnswer: "Yes",
      section: "Payment Schedule",
      type: "boolean",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ],
      helpText: "The Payment Schedule must be served in accordance with the contract terms or SOPA NSW service rules (Section 31). Proper service is essential for the Payment Schedule to be valid and protect your rights."
    },
    {
      id: "PS4",
      text: "What amount did you schedule as payable?",
      key: "scheduled_amount",
      parent: "PS0",
      dependantAnswer: "Enter details manually",
      section: "Payment Schedule",
      type: "currency",
      helpText: "Enter the amount you stated you would pay in your Payment Schedule. Under Section 14(2)(a), the Payment Schedule must state the scheduled amount. This is the amount you must pay by the due date to avoid adjudication."
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
      options: ["Yes", "No"],
      helpText: "If you didn't serve a Payment Schedule, the claimant must send you a Notice of Intention before applying for adjudication (Section 17(1)). This gives you a final opportunity to serve a Payment Schedule, though it may be too late to avoid adjudication."
    },
    {
      id: "NS0_mode",
      text: "How would you like to provide details about the Notice of Intention?",
      key: "noa_input_mode",
      parent: "NS0",
      dependantAnswer: "Yes",
      section: "No Payment Schedule",
      type: "boolean",
      options: ["Upload the Notice of Intention", "Enter details manually"],
      helpText: "You can upload the Notice of Intention document or provide details manually. The Notice must comply with Section 17(1) requirements and gives you notice that the claimant intends to apply for adjudication."
    },
    {
      id: "NS0_upload",
      text: "Upload the Notice of Intention",
      key: "noa_upload",
      parent: "NS0_mode",
      dependantAnswer: "Upload the Notice of Intention",
      section: "No Payment Schedule",
      type: "file-upload",
      helpText: "Upload a clear copy of the Notice of Intention you received. This helps verify compliance with Section 17(1) and assess your response options, including whether you can still serve a Payment Schedule."
    },
    {
      id: "NS2_date",
      text: "When did you receive the Notice of Intention?",
      key: "noa_received_date",
      parent: "NS0_mode",
      dependantAnswer: "Enter details manually",
      section: "No Payment Schedule",
      type: "date",
      helpText: "The date you received the Notice of Intention is important. After receiving it, you may still be able to serve a Payment Schedule, but the claimant can proceed with adjudication. The date affects timing for any response you may wish to make."
    },
    {
      id: "NS2_method",
      text: "How was the Notice of Intention served?",
      key: "noa_service_method",
      parent: "NS0_mode",
      dependantAnswer: "Enter details manually",
      section: "No Payment Schedule",
      type: "boolean",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ],
      helpText: "The Notice of Intention must be served in accordance with the contract terms or SOPA NSW service rules (Section 31). Proper service is required for the Notice to be valid and for the claimant to proceed with adjudication."
    },
    {
      id: "NS2",
      text: "After receiving the Notice of Intention, did you issue a Payment Schedule?",
      key: "late_payment_schedule_issued",
      parent: "NS0",
      dependantAnswer: "Yes",
      section: "No Payment Schedule",
      type: "boolean",
      options: ["Yes", "No", "Not Yet"],
      helpText: "Even after receiving a Notice of Intention, you can still serve a Payment Schedule. However, the claimant may still proceed with adjudication. Serving a late Payment Schedule may limit your ability to dispute the claim in adjudication, but it's better than not serving one at all. Select 'Not Yet' if you plan to issue one but haven't yet."
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
      options: ["Yes", "No"],
      helpText: "An adjudication application (Section 17) is a formal request for an adjudicator to determine the payment dispute. If you receive one, you have limited time (usually 10 business days) to respond with an adjudication response. Failure to respond may result in an adverse determination."
    },
    {
      id: "AD1a",
      text: "When did you receive the adjudication application?",
      key: "adjudication_application_received_date",
      parent: "AD1",
      dependantAnswer: "Yes",
      section: "Adjudication Response",
      type: "date",
      helpText: "The date you received the adjudication application is critical. You typically have 10 business days from this date to serve your adjudication response (Section 20). Missing this deadline severely limits your ability to dispute the claim and may result in an adverse determination."
    },
    {
      id: "AD1b",
      text: "How was the adjudication application served?",
      key: "adjudication_application_service_method",
      parent: "AD1",
      dependantAnswer: "Yes",
      section: "Adjudication Response",
      type: "boolean",
      options: [
        "Email",
        "Post",
        "Fax",
        "Hand delivery",
        "As specified in the contract",
        "Other"
      ],
      helpText: "The adjudication application must be served in accordance with the contract terms or SOPA NSW service rules (Section 31). Proper service is required for the application to be valid. The service method affects when you're considered to have received it."
    },
    {
      id: "AD5",
      text: "Has an adjudication determination been issued?",
      key: "adjudication_determination_issued",
      parent: null,
      dependantAnswer: null,
      section: "Adjudication Response",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "An adjudication determination (Section 22) is the adjudicator's decision on the payment dispute. If issued, you must pay the determined amount within 5 business days (Section 23) or face enforcement proceedings. You have limited grounds to challenge a determination."
    },

    // SECTION H: Division 2A - Principal Contractor Above
    {
      id: "D2A1",
      text: "For this project, Is there a principal or main contractor you are contracting with?",
      key: "is_principal_contractor",
      section: "Division 2A",
      parent: null,
      dependantAnswer: null,
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "If you are contracting with a principal or main contractor above you, Division 2A obligations may apply. This affects whether Payment Withholding Requests can be made against funds the principal contractor holds for you."
    },
    {
      id: "D2A2",
      text: "Have you received a Payment Withholding Request relating to this project?",
      key: "received_pwr",
      parent: "D2A1",
      dependantAnswer: "Yes",
      section: "Division 2A",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "A Payment Withholding Request (PWR) under Division 2A allows a claimant to request that you withhold funds from a subcontractor who owes them money. You must respond within 10 business days. If you hold funds for that subcontractor, you may be required to withhold the requested amount."
    },
    {
      id: "D2A2a",
      text: "When did you receive the Payment Withholding Request?",
      key: "pwr_received_date",
      parent: "D2A2",
      dependantAnswer: "Yes",
      section: "Division 2A",
      type: "date",
      helpText: "The date you received the Payment Withholding Request is critical. You have 10 business days from this date to respond (Section 27B). If you don't respond or don't withhold funds when required, you may be liable for the amount that should have been withheld."
    },
    {
      id: "D2A3",
      text: "Do you currently hold funds payable to the contractor named in the Payment Withholding Request?",
      key: "funds_held_for_contractor",
      parent: "D2A2",
      dependantAnswer: "Yes",
      section: "Division 2A",
      type: "boolean",
      options: ["Yes", "No"],
      helpText: "Under Division 2A, if you hold funds payable to the subcontractor named in the Payment Withholding Request, you must withhold the requested amount (up to the amount you hold). If you don't hold funds, you must notify the claimant within 10 business days. Failure to comply may result in liability."
    }
  ],

  createdAt: new Date("2025-11-24T12:00:00Z"),
  updatedAt: new Date("2025-11-24T12:00:00Z"),
  country: "Australia",
  state: "NSW",
  jurisdiction: "SOPA NSW",
  tags: ["respondent", "sopa", "nsw", "construction", "adjudication"],
  version: "2.6.0",
  isActive: true,
  isPublic: true
};   