export type Questionnaire = {
    id: string;
    title: string;
    description: string | null;
    country: string; // e.g., "Australia"
    state: string | null; // e.g., "NSW"
    jurisdiction: string | null; // e.g., "SOPA NSW"
    tags: string[]; // e.g., ["eligibility", "construction", "contract"]
    version: string; // e.g., "1.0.0"
    isActive: boolean; // Indicates if the questionnaire is currently active
    isPublic: boolean; // Indicates if the questionnaire is publicly accessible
    questions: {
        id: string;
        section: string | null; // Optional section for grouping questions
        text: string;
        key: string;
        parent: string | null; // ID of the parent question, if any
        dependantAnswer: string | null; // The answer that triggers this question, if applicable
        type: "multiple-choice" | "text" | "rating" | "file-or-text" | "file-upload" | "long-text" | "currency" | "date";
        options: string[] | null; // Only for multiple-choice questions
    }[];
    createdAt: Date;
    updatedAt: Date;
};

export type Question = {
    id: string
    text: string
    key: string
    parent: string | null
    section: string | null
    dependantAnswer: string | null
       type: "multiple-choice" | "text" | "rating" | "file-or-text" | "file-upload" | "long-text" | "currency" | "date";
    options: string[] | null
}

// Response Type (using hashmap & normalized data)
export type QuestionnaireResponse = {
    questionnaireId: string;
    userId: string; // anonymous responses can have ip+uniqueId instead of userId
    responses: Record<
        string, // questionId or key
        {
            key: string; // question key
            answer: string | string[];
        }
    >;
    submittedAt: Date;
};

// Enums for qualification and evaluation
export enum QualificationType {
  BUILDER = 'Builder',
  HEAD_CONTRACTOR = 'HEAD_CONTRACTOR',
  GOODS_PROVIDER_MATERIALS = 'GOODS_PROVIDER_MATERIALS',
  GOODS_PROVIDER_PLANT = 'GOODS_PROVIDER_PLANT',
  SERVICE_PROVIDER_PROFESSIONAL = 'SERVICE_PROVIDER_PROFESSIONAL',
  SERVICE_PROVIDER_LABOUR = 'SERVICE_PROVIDER_LABOUR'
}

export enum DisqualifierType {
  FINANCIAL_CONTRACT = 'Financial Contract',
  FINANCIAL_INSTITUTION_CONTRACT = 'Financial Institution Contract',
  OUTSIDE_NSW_JURISDICTION = 'Outside NSW Jurisdiction',
  NOT_CONSTRUCTION_RELATED = 'NOT_CONSTRUCTION_RELATED',
  S5_EXCLUSION = 'S5_EXCLUSION',
  EMPLOYEE_STATUS = 'EMPLOYEE_STATUS'
}

export enum EligibilityStatus {
  ELIGIBLE = 'eligible',
  INELIGIBLE = 'ineligible'
}

// Type definitions for better type safety
export type AnswerValue = string | boolean | string[] | null;

export interface QuestionnaireResponseOptimized {
  [questionId: string]: {
    key: string;
    answer: AnswerValue;
  };
}

export interface QualificationResult {
  type: QualificationType;
  description: string;
  recommendation: string;
}

export interface DisqualifierResult {
  type: DisqualifierType;
  description: string;
  recommendation: string;
}

export interface PathEvaluationResult {
  disqualifiers: DisqualifierResult[];
  qualifiers: QualificationResult[];
}

export interface ParserResponse {
  ticket: string;
  status: "pending" | "completed" | "error";
  eligible: boolean;
  score: number;
  recommendation: string;
  qualifications: Record<QualificationType, { description: string; recommendation: string; score: number }>;
  disqualifiers: Record<DisqualifierType, { description: string; recommendation: string ; score: number }>;
}

export enum Phase2Qualification {
  // Builder specific
  BUILDER_ABN_ACN_VALID = 'BUILDER_ABN_ACN_VALID',
  BUILDER_LICENCE_PROVIDED = 'BUILDER_LICENCE_PROVIDED',
  BUILDER_HBA_S4_COMPLIANT = 'BUILDER_HBA_S4_COMPLIANT',
  BUILDER_HBA_S92_INSURANCE = 'BUILDER_HBA_S92_INSURANCE',
  BUILDER_S8_2_REFERENCE_DATE = 'BUILDER_S8_2_REFERENCE_DATE',
  
  // Head Contractor specific
  HEAD_CONTRACTOR_SS_PROVIDED = 'HEAD_CONTRACTOR_SS_PROVIDED',
  HEAD_CONTRACTOR_SS_DECLARATION = 'HEAD_CONTRACTOR_SS_DECLARATION',
  
  // Payment Claim specific
  CLAIM_SCOPE_IDENTIFIED = 'CLAIM_SCOPE_IDENTIFIED',
  CLAIM_AMOUNT_VALID = 'CLAIM_AMOUNT_VALID',
  CLAIM_BASIS_PROVIDED = 'CLAIM_BASIS_PROVIDED',
  CLAIM_S13_3_DETAILED = 'CLAIM_S13_3_DETAILED',
  CLAIM_FILE_UPLOADED = 'CLAIM_FILE_UPLOADED',
  
  // Payment Schedule specific
  PAYMENT_SCHEDULE_UPLOADED = 'PAYMENT_SCHEDULE_UPLOADED',
  PAYMENT_SCHEDULE_DETAILS_PROVIDED = 'PAYMENT_SCHEDULE_DETAILS_PROVIDED',
  NOTICE_OF_ADJUDICATION_GIVEN = 'NOTICE_OF_ADJUDICATION_GIVEN',
  
  // Timing specific
  TIMING_SERVICE_DATE_VALID = 'TIMING_SERVICE_DATE_VALID',
  TIMING_TERMINATION_DOCUMENTED = 'TIMING_TERMINATION_DOCUMENTED',
  TIMING_MULTIPLE_CLAIMS_EXCEPTION = 'TIMING_MULTIPLE_CLAIMS_EXCEPTION',
  TIMING_SINGLE_CLAIM_CONFIRMED = 'TIMING_SINGLE_CLAIM_CONFIRMED',
  TIMING_NAMED_MONTH_CLARIFIED = 'TIMING_NAMED_MONTH_CLARIFIED',
  
  // Service specific
  SERVICE_METHOD_SPECIFIED = 'SERVICE_METHOD_SPECIFIED',
  
  // Contractor specific
  CONTRACTOR_S6_ELIGIBLE = 'CONTRACTOR_S6_ELIGIBLE',
}

export enum Phase2Disqualifier {
  // Builder specific
  BUILDER_ABN_ACN_INVALID = 'BUILDER_ABN_ACN_INVALID',
  BUILDER_LICENCE_MISSING = 'BUILDER_LICENCE_MISSING',
  BUILDER_HBA_S4_NON_COMPLIANT = 'BUILDER_HBA_S4_NON_COMPLIANT',
  BUILDER_HBA_S92_MISSING = 'BUILDER_HBA_S92_MISSING',
  BUILDER_S8_2_NO_REFERENCE_DATE = 'BUILDER_S8_2_NO_REFERENCE_DATE',
  
  // Head Contractor specific
  HEAD_CONTRACTOR_SS_MISSING = 'HEAD_CONTRACTOR_SS_MISSING',
  HEAD_CONTRACTOR_SS_DECLARATION_MISSING = 'HEAD_CONTRACTOR_SS_DECLARATION_MISSING',
  
  // Payment Claim specific
  CLAIM_SCOPE_MISSING = 'CLAIM_SCOPE_MISSING',
  CLAIM_AMOUNT_INVALID = 'CLAIM_AMOUNT_INVALID',
  CLAIM_BASIS_MISSING = 'CLAIM_BASIS_MISSING',
  CLAIM_S13_3_INVALID = 'CLAIM_S13_3_INVALID',
  CLAIM_FILE_MISSING = 'CLAIM_FILE_MISSING',
  
  // Payment Schedule specific
  PAYMENT_SCHEDULE_FILE_MISSING = 'PAYMENT_SCHEDULE_FILE_MISSING',
  
  // Timing specific
  TIMING_SERVICE_DATE_MISSING = 'TIMING_SERVICE_DATE_MISSING',
  TIMING_INVALID_MULTIPLE_CLAIMS = 'TIMING_INVALID_MULTIPLE_CLAIMS',
  TIMING_TERMINATION_IMPACT = 'TIMING_TERMINATION_IMPACT',
  TIMING_NAMED_MONTH_UNCLEAR = 'TIMING_NAMED_MONTH_UNCLEAR',
  
  // Service specific
  SERVICE_METHOD_INVALID = 'SERVICE_METHOD_INVALID',
}

// Phase 2 Message Constants
export const PHASE2_MESSAGES = {
  // Builder Messages
  BUILDER: {
    ABN_ACN_REQUIRED: 'ABN (11 digits) or ACN (9 digits) is required for licensing cross-reference',
    ABN_ACN_INVALID_FORMAT: 'Invalid ABN/ACN format. ABN must be 11 digits, ACN must be 9 digits (e.g., 12345678901 or 123456789)',
    ABN_ACN_VALID: (type: string) => `Valid ${type} provided`,
    LICENCE_MISSING: 'NSW building licence number or credential evidence is required',
    LICENCE_PROVIDED: 'Building licence provided',
    HBA_S4_NON_COMPLIANT: 'Building contract must be compliant with Home Building Act 1989 s.4 (licensed contracting)',
    HBA_S4_COMPLIANT: 'Building contract is compliant with Home Building Act 1989 s.4',
    HBA_S92_MISSING: 'Residential building work requires s.92 insurance (HBCF policy/certificate)',
    HBA_S92_PROVIDED: 's.92 insurance provided for residential building work',
    S8_2_REFERENCE_DATE_MISSING: 'Valid reference date must exist for progress payment under SOPA s.8(2)',
    S8_2_REFERENCE_DATE_VALID: 'Valid reference date exists for progress payment'
  },
  HEAD_CONTRACTOR: {
    SS_MISSING: 'Supporting Statement (s.13(7) & (9)) is required for Head Contractors',
    SS_PROVIDED: 'Supporting Statement provided',
    SS_DECLARATION_MISSING: 'Supporting Statement truth declaration is required',
    SS_DECLARATION_PROVIDED: 'Supporting Statement declaration provided'
  },
  CONTRACTOR: {
    S6_ELIGIBLE: 'Contractor eligible under s.6 goods/services'
  },
  CLAIM: {
    FILE_MISSING: 'Payment claim file upload is required',
    FILE_UPLOADED: 'Payment claim file uploaded',
    SCOPE_MISSING: 'Detailed claim scope (construction work/goods/services) is required under s.13(2)(a)',
    SCOPE_IDENTIFIED: 'Claim scope identified',
    AMOUNT_INVALID: 'Valid claimed amount is required under s.13(2)(b). Accepts formats like: 50000, $50,000, 50,000.00',
    AMOUNT_VALID: 'Valid claimed amount provided',
    BASIS_MISSING: 'Basis for calculating amount is required under s.9',
    BASIS_PROVIDED: 'Amount calculation basis provided',
    S13_3_INVALID: 's.13(3) amounts must be properly described',
    S13_3_VALID: 's.13(3) amounts properly described'
  },
  TIMING: {
    SERVICE_DATE_MISSING: 'Valid claim service date is required',
    SERVICE_DATE_VALID: 'Claim service date provided',
    NAMED_MONTH_UNCLEAR: 'Earlier named month reference date status must be clarified. This affects timing calculations under s.13(1B). Please review contract terms.',
    NAMED_MONTH_CLARIFIED: 'Named month reference date clarified',
    TERMINATION_IMPACT: 'Termination date must be provided if contract is terminated',
    TERMINATION_DOCUMENTED: 'Contract termination properly documented',
    MULTIPLE_CLAIMS_INVALID: 'Multiple claims in month require permitted exception under s.13(6)',
    MULTIPLE_CLAIMS_EXCEPTION: 'Permitted exception for multiple claims provided',
    SINGLE_CLAIM_CONFIRMED: 'Single claim in named month confirmed'
  },
  SERVICE: {
    METHOD_INVALID: 'Service method and recipient must be specified',
    METHOD_SPECIFIED: 'Service method and recipient specified'
  },
  PAYMENT_SCHEDULE: {
    FILE_MISSING: 'Payment schedule file upload is required',
    FILE_UPLOADED: 'Payment schedule file uploaded',
    DETAILS_PROVIDED: 'Payment schedule details provided',
    NOTICE_DATE_MISSING: 'Notice date must be provided if adjudication notice was given',
    NOTICE_GIVEN: 'Notice of intention to apply for adjudication given'
  }
} as const;