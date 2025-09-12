export enum Phase2QualificationType {
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

export enum Phase2DisqualifierType {
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

export const PHASE2_RECOMMENDATIONS = {
  QUALIFICATION: 'Payment claim validation successful. Proceed to adjudication monitoring for real-time updates on your application status.',
  DISQUALIFICATION: 'Payment claim validation failed. Please address the issues identified or explore our marketplace for alternative dispute resolution services.'
} as const;

export const PHASE2_RESPONSE_MESSAGES = {
  QUALIFICATIONS: {
    // Builder qualifications
    [Phase2QualificationType.BUILDER_ABN_ACN_VALID]: {
      description: 'Valid ABN (11 digits) or ACN (9 digits) provided for licensing cross-reference',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.BUILDER_LICENCE_PROVIDED]: {
      description: 'NSW building licence number or credential evidence provided',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.BUILDER_HBA_S4_COMPLIANT]: {
      description: 'Building contract is compliant with Home Building Act 1989 s.4 (licensed contracting)',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.BUILDER_HBA_S92_INSURANCE]: {
      description: 'Residential building work s.92 insurance (HBCF policy/certificate) provided',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.BUILDER_S8_2_REFERENCE_DATE]: {
      description: 'Valid reference date exists for progress payment under SOPA s.8(2)',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    
    // Head Contractor qualifications
    [Phase2QualificationType.HEAD_CONTRACTOR_SS_PROVIDED]: {
      description: 'Supporting Statement (s.13(7) & (9)) provided for Head Contractor requirements',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.HEAD_CONTRACTOR_SS_DECLARATION]: {
      description: 'Supporting Statement truth declaration completed',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    
    // Payment Claim qualifications
    [Phase2QualificationType.CLAIM_SCOPE_IDENTIFIED]: {
      description: 'Detailed claim scope (construction work/goods/services) identified under s.13(2)(a)',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.CLAIM_AMOUNT_VALID]: {
      description: 'Valid claimed amount provided under s.13(2)(b)',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.CLAIM_BASIS_PROVIDED]: {
      description: 'Basis for calculating amount provided under s.9',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.CLAIM_S13_3_DETAILED]: {
      description: 's.13(3) amounts properly described and detailed',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.CLAIM_FILE_UPLOADED]: {
      description: 'Payment claim file successfully uploaded',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    
    // Payment Schedule qualifications
    [Phase2QualificationType.PAYMENT_SCHEDULE_UPLOADED]: {
      description: 'Payment schedule file uploaded for reference',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.PAYMENT_SCHEDULE_DETAILS_PROVIDED]: {
      description: 'Payment schedule details provided for context',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.NOTICE_OF_ADJUDICATION_GIVEN]: {
      description: 'Notice of intention to apply for adjudication properly given',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    
    // Timing qualifications
    [Phase2QualificationType.TIMING_SERVICE_DATE_VALID]: {
      description: 'Valid claim service date provided for timing calculations',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.TIMING_TERMINATION_DOCUMENTED]: {
      description: 'Contract termination properly documented with dates',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.TIMING_MULTIPLE_CLAIMS_EXCEPTION]: {
      description: 'Permitted exception for multiple claims in month provided under s.13(6)',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.TIMING_SINGLE_CLAIM_CONFIRMED]: {
      description: 'Single claim in named month confirmed under s.13(5)',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    [Phase2QualificationType.TIMING_NAMED_MONTH_CLARIFIED]: {
      description: 'Earlier named month reference date status clarified for s.13(1B)',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    
    // Service qualifications
    [Phase2QualificationType.SERVICE_METHOD_SPECIFIED]: {
      description: 'Service method and recipient properly specified',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    },
    
    // Contractor qualifications
    [Phase2QualificationType.CONTRACTOR_S6_ELIGIBLE]: {
      description: 'Contractor eligible under s.6 goods/services provisions',
      recommendation: PHASE2_RECOMMENDATIONS.QUALIFICATION
    }
  },
  DISQUALIFIERS: {
    // Builder disqualifiers
    [Phase2DisqualifierType.BUILDER_ABN_ACN_INVALID]: {
      description: 'Invalid ABN/ACN format. ABN must be 11 digits, ACN must be 9 digits for licensing cross-reference',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.BUILDER_LICENCE_MISSING]: {
      description: 'NSW building licence number or credential evidence is required for licensed contracting',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.BUILDER_HBA_S4_NON_COMPLIANT]: {
      description: 'Building contract must be compliant with Home Building Act 1989 s.4 (licensed contracting)',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.BUILDER_HBA_S92_MISSING]: {
      description: 'Residential building work requires s.92 insurance (HBCF policy/certificate)',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.BUILDER_S8_2_NO_REFERENCE_DATE]: {
      description: 'Valid reference date must exist for progress payment under SOPA s.8(2)',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    
    // Head Contractor disqualifiers
    [Phase2DisqualifierType.HEAD_CONTRACTOR_SS_MISSING]: {
      description: 'Supporting Statement (s.13(7) & (9)) is required for Head Contractors',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.HEAD_CONTRACTOR_SS_DECLARATION_MISSING]: {
      description: 'Supporting Statement truth declaration is required',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    
    // Payment Claim disqualifiers
    [Phase2DisqualifierType.CLAIM_SCOPE_MISSING]: {
      description: 'Detailed claim scope (construction work/goods/services) is required under s.13(2)(a)',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.CLAIM_AMOUNT_INVALID]: {
      description: 'Valid claimed amount is required under s.13(2)(b). Accepts formats like: 50000, $50,000, 50,000.00',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.CLAIM_BASIS_MISSING]: {
      description: 'Basis for calculating amount is required under s.9',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.CLAIM_S13_3_INVALID]: {
      description: 's.13(3) amounts must be properly described and detailed',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.CLAIM_FILE_MISSING]: {
      description: 'Payment claim file upload is required',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    
    // Payment Schedule disqualifiers
    [Phase2DisqualifierType.PAYMENT_SCHEDULE_FILE_MISSING]: {
      description: 'Payment schedule file upload is required when payment schedule was received',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    
    // Timing disqualifiers
    [Phase2DisqualifierType.TIMING_SERVICE_DATE_MISSING]: {
      description: 'Valid claim service date is required for timing calculations',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.TIMING_INVALID_MULTIPLE_CLAIMS]: {
      description: 'Multiple claims in month require permitted exception under s.13(6)',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.TIMING_TERMINATION_IMPACT]: {
      description: 'Termination date must be provided if contract is terminated',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    [Phase2DisqualifierType.TIMING_NAMED_MONTH_UNCLEAR]: {
      description: 'Earlier named month reference date status must be clarified. This affects timing calculations under s.13(1B)',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    },
    
    // Service disqualifiers
    [Phase2DisqualifierType.SERVICE_METHOD_INVALID]: {
      description: 'Service method and recipient must be specified',
      recommendation: PHASE2_RECOMMENDATIONS.DISQUALIFICATION
    }
  }
} as const;

export interface Phase2ParserResponse {
  eligible: boolean;
  score: number;
  qualifications: Record<Phase2QualificationType, { description: string; recommendation: string }>;
  disqualifiers: Record<Phase2DisqualifierType, { description: string; recommendation: string }>;
  nextPhase?: string | null;
}

export interface QualificationEntry {
  message: string;
  requirement: string;
  type?: string;
  value?: number;
  status?: string;
}

export interface DisqualifierEntry {
  message: string;
  severity: 'critical' | 'warning';
}

export interface Phase2PathEvaluationResult {
  pathId: string;
  pathName: string;
  eligible: boolean;
  qualifications: Partial<Record<Phase2QualificationType, QualificationEntry>>;
  disqualifiers: Partial<Record<Phase2DisqualifierType, DisqualifierEntry>>;
  score: number;
  nextPhase: string;
}

export type ValidationDisqualifiers = Record<string, DisqualifierEntry>;

export enum Phase2QuestionId {
  // Role selection
  ROLE_SELECTION = 'R1',
  
  // Payment claim
  CLAIM_SERVED = 'C0',
  CLAIM_FILE = 'C1a',
  CLAIM_SCOPE = 'C1',
  CLAIMED_AMOUNT = 'C2',
  AMOUNT_BASIS = 'C3',
  CLAIM_DESCRIPTION = 'C4',
  INCLUDES_S13_3 = 'C5',
  S13_3_DETAILS = 'C5a',
  
  // Builder questions
  BUILDER_ABN_ACN = 'B1',
  BUILDER_LICENCE = 'B2',
  BUILDER_HBA_S4 = 'B3',
  BUILDER_IS_RESIDENTIAL = 'B4',
  BUILDER_S92_INSURANCE = 'B5',
  BUILDER_S8_2_REFERENCE = 'B6',
  
  // Head Contractor questions
  HC_SUPPORTING_STATEMENT = 'HC1',
  HC_SS_DECLARATION = 'HC2',
  
  // Timing questions
  SERVICE_DATE = 'T1',
  EARLIER_NAMED_MONTH = 'T2',
  CONTRACT_TERMINATED = 'T3',
  TERMINATION_DATE = 'T3a',
  SINGLE_CLAIM = 'T4',
  MULTIPLE_CLAIM_EXCEPTION = 'T4a',
  SERVICE_METHOD = 'T5',
  
  // Payment Schedule questions
  PAYMENT_SCHEDULE_RECEIVED = 'PS1',
  PAYMENT_SCHEDULE_FILE = 'PS2',
  PAYMENT_SCHEDULE_DETAILS = 'PS2a',
  
  // Notice questions
  ADJUDICATION_NOTICE = 'N1',
  NOTICE_DATE = 'N2'
}