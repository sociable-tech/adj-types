
export enum RespondentQualificationTypePhase1 {
  PRE_CLAIM = 'PRE_CLAIM',
  CLAIM_RECEIVED_NO_SCHEDULE = 'CLAIM_RECEIVED_NO_SCHEDULE',
  CLAIM_SCHEDULE_PRE_ADJUDICATION = 'CLAIM_SCHEDULE_PRE_ADJUDICATION',
  ADJUDICATION_ON_FOOT = 'ADJUDICATION_ON_FOOT',
  PRINCIPAL_CONTRACTOR_PWR = 'PRINCIPAL_CONTRACTOR_PWR',
}

// Disqualifier types for respondent quick questionnaire
export enum RespondentDisqualifierTypePhase1 {
  NOT_SOPA_NSW_CASE = 'NOT_SOPA_NSW_CASE',
}

// Response messages for qualifications
const RESPONDENT_QUALIFICATION_MESSAGES_PHASE1: Record<RespondentQualificationTypePhase1, { description: string; recommendation: string }> = {
  [RespondentQualificationTypePhase1.PRE_CLAIM]: {
    description: 'You have a NSW construction-related project but have not yet received a Payment Claim. This is a pre-claim scenario where you can prepare for potential claims.',
    recommendation: 'Consider preparing your documentation and understanding your rights under SOPA NSW before a Payment Claim is served. You may want to complete a detailed assessment to understand your obligations.'
  },
  [RespondentQualificationTypePhase1.CLAIM_RECEIVED_NO_SCHEDULE]: {
    description: 'You have received a Payment Claim but have not yet issued a Payment Schedule. Time is critical - you typically have 10 business days to respond.',
    recommendation: 'You should urgently prepare and serve a Payment Schedule. Failure to respond within the statutory timeframe may result in the full claimed amount becoming due. Consider completing a detailed assessment to ensure compliance.'
  },
  [RespondentQualificationTypePhase1.CLAIM_SCHEDULE_PRE_ADJUDICATION]: {
    description: 'You have received a Payment Claim and issued a Payment Schedule. No adjudication application has been received yet.',
    recommendation: 'You are in a pre-adjudication phase. Monitor for any adjudication applications and ensure you are prepared to respond if one is served. Consider completing a detailed assessment to verify your position.'
  },
  [RespondentQualificationTypePhase1.ADJUDICATION_ON_FOOT]: {
    description: 'An adjudication application has been received. This indicates formal dispute resolution proceedings are underway.',
    recommendation: 'You should immediately seek legal advice and prepare your adjudication response. Timeframes are strict and failure to respond appropriately can have significant consequences. Complete a detailed assessment to ensure you understand all requirements.'
  },
  [RespondentQualificationTypePhase1.PRINCIPAL_CONTRACTOR_PWR]: {
    description: 'You are a principal contractor who has received a Payment Withholding Request (PWR) under Division 2A of SOPA NSW.',
    recommendation: 'You have specific obligations under Division 2A regarding payment withholding. You should seek legal advice immediately and ensure compliance with the PWR requirements. Complete a detailed assessment to understand your full obligations.'
  },
};

// Response messages for disqualifiers
const RESPONDENT_DISQUALIFIER_MESSAGES_PHASE1: Record<RespondentDisqualifierTypePhase1, { description: string; recommendation: string }> = {
  [RespondentDisqualifierTypePhase1.NOT_SOPA_NSW_CASE]: {
    description: 'This matter does not appear to fall under SOPA NSW jurisdiction. The project is either not located in NSW or does not relate to construction, building, or related services.',
    recommendation: 'SOPA NSW may not apply to your situation. If you believe this is incorrect, please review your answers or seek legal advice to determine the applicable legislation.'
  },
};

// Recommendations
const RESPONDENT_RECOMMENDATIONS_PHASE1 = {
  QUALIFICATION: 'Based on your responses, SOPA NSW appears to apply to your situation. Consider completing a detailed assessment to understand your full rights and obligations.',
  DISQUALIFICATION: 'Based on your responses, SOPA NSW may not apply to your situation. Please review your answers or seek legal advice.',
} as const;



// PHASE 2 TYPES AND DATA
// Qualification types for respondent Phase 2 questionnaire
export enum RespondentQualificationTypePhase2 {
  // Jurisdiction & Contract
  WITHIN_SOPA_NSW_SCOPE = 'WITHIN_SOPA_NSW_SCOPE',
  CONSTRUCTION_CONTRACT_EXISTS = 'CONSTRUCTION_CONTRACT_EXISTS',
  
  // Payment Claim (Manual/Upload)
  PAYMENT_CLAIM_RECEIVED = 'PAYMENT_CLAIM_RECEIVED',
  PAYMENT_CLAIM_UPLOADED = 'PAYMENT_CLAIM_UPLOADED',
  PAYMENT_CLAIM_MANUAL_PROVIDED = 'PAYMENT_CLAIM_MANUAL_PROVIDED',
  PAYMENT_CLAIM_VALID_SERVICE_METHOD = 'PAYMENT_CLAIM_VALID_SERVICE_METHOD',
  PAYMENT_CLAIM_IDENTIFIES_WORK = 'PAYMENT_CLAIM_IDENTIFIES_WORK',
  PAYMENT_CLAIM_IDENTIFIES_AMOUNT = 'PAYMENT_CLAIM_IDENTIFIES_AMOUNT',
  PAYMENT_CLAIM_AMOUNT_VALID = 'PAYMENT_CLAIM_AMOUNT_VALID',
  
  // Payment Schedule (Manual/Upload)
  PAYMENT_SCHEDULE_ISSUED = 'PAYMENT_SCHEDULE_ISSUED',
  PAYMENT_SCHEDULE_UPLOADED = 'PAYMENT_SCHEDULE_UPLOADED',
  PAYMENT_SCHEDULE_MANUAL_PROVIDED = 'PAYMENT_SCHEDULE_MANUAL_PROVIDED',
  PAYMENT_SCHEDULE_VALID_SERVICE_METHOD = 'PAYMENT_SCHEDULE_VALID_SERVICE_METHOD',
  PAYMENT_SCHEDULE_TIMELY = 'PAYMENT_SCHEDULE_TIMELY',
  PAYMENT_SCHEDULE_AMOUNT_VALID = 'PAYMENT_SCHEDULE_AMOUNT_VALID',
  PAYMENT_SCHEDULE_REASONS_PROVIDED = 'PAYMENT_SCHEDULE_REASONS_PROVIDED',
  PAYMENT_SCHEDULE_PAID_ON_TIME = 'PAYMENT_SCHEDULE_PAID_ON_TIME',
  
  // Notice of Intention (Manual/Upload)
  NOTICE_OF_INTENTION_RECEIVED = 'NOTICE_OF_INTENTION_RECEIVED',
  NOTICE_OF_INTENTION_UPLOADED = 'NOTICE_OF_INTENTION_UPLOADED',
  NOTICE_OF_INTENTION_MANUAL_PROVIDED = 'NOTICE_OF_INTENTION_MANUAL_PROVIDED',
  LATE_PAYMENT_SCHEDULE_AFTER_NOA = 'LATE_PAYMENT_SCHEDULE_AFTER_NOA',
  
  // Adjudication
  ADJUDICATION_APPLICATION_RECEIVED = 'ADJUDICATION_APPLICATION_RECEIVED',
  ADJUDICATION_RESPONSE_ALLOWED = 'ADJUDICATION_RESPONSE_ALLOWED',
  ADJUDICATION_RESPONSE_REASONS_CONSISTENT = 'ADJUDICATION_RESPONSE_REASONS_CONSISTENT',
  ADJUDICATION_RESPONSE_EVIDENCE_AVAILABLE = 'ADJUDICATION_RESPONSE_EVIDENCE_AVAILABLE',
  
  // Division 2A
  PRINCIPAL_CONTRACTOR = 'PRINCIPAL_CONTRACTOR',
  PAYMENT_WITHHOLDING_REQUEST_RECEIVED = 'PAYMENT_WITHHOLDING_REQUEST_RECEIVED',
  FUNDS_HELD_FOR_CONTRACTOR = 'FUNDS_HELD_FOR_CONTRACTOR',
  
  // Service & Evidence
  SERVICE_PROOF_AVAILABLE = 'SERVICE_PROOF_AVAILABLE',
  
  // Payment Status
  PAYMENT_MADE = 'PAYMENT_MADE',
  PAYMENT_FULLY_PAID = 'PAYMENT_FULLY_PAID',
}

// Disqualifier types for respondent Phase 2 questionnaire
export enum RespondentDisqualifierTypePhase2 {
  // Jurisdiction & Contract
  NOT_SOPA_NSW_CASE = 'NOT_SOPA_NSW_CASE',
  NO_CONSTRUCTION_CONTRACT = 'NO_CONSTRUCTION_CONTRACT',
  CONTRACT_TERMINATED_RISK = 'CONTRACT_TERMINATED_RISK',
  
  // Payment Claim
  PAYMENT_CLAIM_NOT_RECEIVED = 'PAYMENT_CLAIM_NOT_RECEIVED',
  PAYMENT_CLAIM_INVALID_SERVICE_METHOD = 'PAYMENT_CLAIM_INVALID_SERVICE_METHOD',
  PAYMENT_CLAIM_MANUAL_INCOMPLETE = 'PAYMENT_CLAIM_MANUAL_INCOMPLETE',
  PAYMENT_CLAIM_DOES_NOT_IDENTIFY_WORK = 'PAYMENT_CLAIM_DOES_NOT_IDENTIFY_WORK',
  PAYMENT_CLAIM_DOES_NOT_IDENTIFY_AMOUNT = 'PAYMENT_CLAIM_DOES_NOT_IDENTIFY_AMOUNT',
  PAYMENT_CLAIM_AMOUNT_INVALID = 'PAYMENT_CLAIM_AMOUNT_INVALID',
  PAYMENT_CLAIM_TIMING_INCONSISTENCY = 'PAYMENT_CLAIM_TIMING_INCONSISTENCY',
  
  // Payment Schedule
  PAYMENT_SCHEDULE_NOT_ISSUED = 'PAYMENT_SCHEDULE_NOT_ISSUED',
  PAYMENT_SCHEDULE_LATE = 'PAYMENT_SCHEDULE_LATE',
  PAYMENT_SCHEDULE_INVALID_SERVICE_METHOD = 'PAYMENT_SCHEDULE_INVALID_SERVICE_METHOD',
  PAYMENT_SCHEDULE_MANUAL_INCOMPLETE = 'PAYMENT_SCHEDULE_MANUAL_INCOMPLETE',
  PAYMENT_SCHEDULE_AMOUNT_MISSING = 'PAYMENT_SCHEDULE_AMOUNT_MISSING',
  PAYMENT_SCHEDULE_REASONS_MISSING = 'PAYMENT_SCHEDULE_REASONS_MISSING',
  PAYMENT_SCHEDULE_NOT_PAID_ON_TIME = 'PAYMENT_SCHEDULE_NOT_PAID_ON_TIME',
  PAYMENT_SCHEDULE_OVER_SCHEDULED = 'PAYMENT_SCHEDULE_OVER_SCHEDULED',
  
  // Notice of Intention
  NOTICE_OF_INTENTION_MANUAL_INCOMPLETE = 'NOTICE_OF_INTENTION_MANUAL_INCOMPLETE',
  LATE_PAYMENT_SCHEDULE_TOO_LATE = 'LATE_PAYMENT_SCHEDULE_TOO_LATE',
  
  // Adjudication
  ADJUDICATION_RESPONSE_BARRED = 'ADJUDICATION_RESPONSE_BARRED',
  ADJUDICATION_RESPONSE_REASONS_INCONSISTENT = 'ADJUDICATION_RESPONSE_REASONS_INCONSISTENT',
  ADJUDICATION_RESPONSE_EVIDENCE_MISSING = 'ADJUDICATION_RESPONSE_EVIDENCE_MISSING',
  
  // Service & Evidence
  SERVICE_PROOF_MISSING = 'SERVICE_PROOF_MISSING',
  
  // Payment Status
  OUTSTANDING_LIABILITY = 'OUTSTANDING_LIABILITY',
}

// Response messages for qualifications
const RESPONDENT_QUALIFICATION_MESSAGES_PHASE2: Record<RespondentQualificationTypePhase2, { description: string; recommendation: string }> = {
  [RespondentQualificationTypePhase2.WITHIN_SOPA_NSW_SCOPE]: {
    description: 'The project is within NSW and involves construction-related work, falling under SOPA NSW jurisdiction.',
    recommendation: 'SOPA NSW applies to your situation. Ensure all statutory requirements are met.'
  },
  [RespondentQualificationTypePhase2.CONSTRUCTION_CONTRACT_EXISTS]: {
    description: 'A construction contract exists between you and the claimant.',
    recommendation: 'The contract relationship is established. Review contract terms for payment obligations.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_CLAIM_RECEIVED]: {
    description: 'You have received a Payment Claim under SOPA NSW.',
    recommendation: 'Time limits apply. Ensure you respond within the statutory timeframe.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_CLAIM_UPLOADED]: {
    description: 'Payment Claim document uploaded successfully.',
    recommendation: 'The uploaded document will be reviewed for compliance with SOPA requirements.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_CLAIM_MANUAL_PROVIDED]: {
    description: 'Payment Claim details provided manually.',
    recommendation: 'Ensure all required information is accurate and complete.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_CLAIM_VALID_SERVICE_METHOD]: {
    description: 'Payment Claim was served using a valid service method.',
    recommendation: 'Service method complies with SOPA NSW requirements.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_CLAIM_IDENTIFIES_WORK]: {
    description: 'Payment Claim clearly identifies the work or services it relates to.',
    recommendation: 'The claim meets content requirements under s.13(2)(a).'
  },
  [RespondentQualificationTypePhase2.PAYMENT_CLAIM_IDENTIFIES_AMOUNT]: {
    description: 'Payment Claim clearly states a claimed amount.',
    recommendation: 'The claim meets content requirements under s.13(2)(b).'
  },
  [RespondentQualificationTypePhase2.PAYMENT_CLAIM_AMOUNT_VALID]: {
    description: 'Payment Claim amount is valid and properly stated.',
    recommendation: 'The claimed amount is clear and can be assessed.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_SCHEDULE_ISSUED]: {
    description: 'You have issued a Payment Schedule in response to the Payment Claim.',
    recommendation: 'Ensure the schedule was served within the statutory timeframe (10 business days).'
  },
  [RespondentQualificationTypePhase2.PAYMENT_SCHEDULE_UPLOADED]: {
    description: 'Payment Schedule document uploaded successfully.',
    recommendation: 'The uploaded document will be reviewed for compliance.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_SCHEDULE_MANUAL_PROVIDED]: {
    description: 'Payment Schedule details provided manually.',
    recommendation: 'Ensure all required information is accurate and complete.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_SCHEDULE_VALID_SERVICE_METHOD]: {
    description: 'Payment Schedule was served using a valid service method.',
    recommendation: 'Service method complies with SOPA NSW requirements.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_SCHEDULE_TIMELY]: {
    description: 'Payment Schedule was served within the statutory timeframe (10 business days).',
    recommendation: 'Your schedule was served in time, protecting your right to respond in adjudication.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_SCHEDULE_AMOUNT_VALID]: {
    description: 'Payment Schedule amount is valid and properly stated.',
    recommendation: 'The scheduled amount is clear and can be assessed.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_SCHEDULE_REASONS_PROVIDED]: {
    description: 'Payment Schedule includes reasons for any reduction or withholding.',
    recommendation: 'Reasons are required when the scheduled amount is less than the claimed amount.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_SCHEDULE_PAID_ON_TIME]: {
    description: 'Scheduled amount was paid on or before the due date.',
    recommendation: 'Payment obligations have been met.'
  },
  [RespondentQualificationTypePhase2.NOTICE_OF_INTENTION_RECEIVED]: {
    description: 'You received a Notice of Intention to apply for adjudication.',
    recommendation: 'You have 5 business days after the NOA to issue a late Payment Schedule if you have not already done so.'
  },
  [RespondentQualificationTypePhase2.NOTICE_OF_INTENTION_UPLOADED]: {
    description: 'Notice of Intention document uploaded successfully.',
    recommendation: 'The uploaded document will be reviewed for compliance.'
  },
  [RespondentQualificationTypePhase2.NOTICE_OF_INTENTION_MANUAL_PROVIDED]: {
    description: 'Notice of Intention details provided manually.',
    recommendation: 'Ensure all required information is accurate and complete.'
  },
  [RespondentQualificationTypePhase2.LATE_PAYMENT_SCHEDULE_AFTER_NOA]: {
    description: 'Payment Schedule was issued within 5 business days after receiving the Notice of Intention.',
    recommendation: 'This late schedule may be valid under SOPA NSW, allowing you to respond in adjudication.'
  },
  [RespondentQualificationTypePhase2.ADJUDICATION_APPLICATION_RECEIVED]: {
    description: 'You have received an adjudication application.',
    recommendation: 'Time limits are strict. Prepare your response promptly if eligible.'
  },
  [RespondentQualificationTypePhase2.ADJUDICATION_RESPONSE_ALLOWED]: {
    description: 'You are eligible to lodge an adjudication response.',
    recommendation: 'You have a valid Payment Schedule, allowing you to respond in adjudication.'
  },
  [RespondentQualificationTypePhase2.ADJUDICATION_RESPONSE_REASONS_CONSISTENT]: {
    description: 'Your adjudication response reasons match your Payment Schedule.',
    recommendation: 'Consistency strengthens your position in adjudication.'
  },
  [RespondentQualificationTypePhase2.ADJUDICATION_RESPONSE_EVIDENCE_AVAILABLE]: {
    description: 'You have supporting evidence for your adjudication response.',
    recommendation: 'Strong evidence supports your position in adjudication.'
  },
  [RespondentQualificationTypePhase2.PRINCIPAL_CONTRACTOR]: {
    description: 'You are a principal contractor engaging other contractors.',
    recommendation: 'Division 2A obligations may apply if you receive a Payment Withholding Request.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_WITHHOLDING_REQUEST_RECEIVED]: {
    description: 'You have received a Payment Withholding Request under Division 2A.',
    recommendation: 'You have specific obligations regarding payment withholding. Seek legal advice if needed.'
  },
  [RespondentQualificationTypePhase2.FUNDS_HELD_FOR_CONTRACTOR]: {
    description: 'You currently hold funds payable to the contractor named in the Payment Withholding Request.',
    recommendation: 'Division 2A withholding obligations are active. Ensure compliance.'
  },
  [RespondentQualificationTypePhase2.SERVICE_PROOF_AVAILABLE]: {
    description: 'You have proof of how documents were served.',
    recommendation: 'Service evidence supports your position and may be required in adjudication.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_MADE]: {
    description: 'You have made payment toward the Payment Claim.',
    recommendation: 'Document all payments made and ensure they are properly recorded.'
  },
  [RespondentQualificationTypePhase2.PAYMENT_FULLY_PAID]: {
    description: 'The full amount has been paid.',
    recommendation: 'Payment obligations have been fully met.'
  },
};

// Response messages for disqualifiers
const RESPONDENT_DISQUALIFIER_MESSAGES_PHASE2: Record<RespondentDisqualifierTypePhase2, { description: string; recommendation: string }> = {
  [RespondentDisqualifierTypePhase2.NOT_SOPA_NSW_CASE]: {
    description: 'This matter does not appear to fall under SOPA NSW jurisdiction. The project is either not located in NSW or does not relate to construction-related work.',
    recommendation: 'SOPA NSW may not apply. Review your situation or seek legal advice to determine applicable legislation.'
  },
  [RespondentDisqualifierTypePhase2.NO_CONSTRUCTION_CONTRACT]: {
    description: 'No construction contract exists between you and the claimant.',
    recommendation: 'SOPA NSW requires a construction contract. Review the relationship and seek legal advice.'
  },
  [RespondentDisqualifierTypePhase2.CONTRACT_TERMINATED_RISK]: {
    description: 'The contract has been terminated. Dates after termination may be risky for claims.',
    recommendation: 'Review timing of claims and payments in relation to termination date.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_CLAIM_NOT_RECEIVED]: {
    description: 'No Payment Claim has been received.',
    recommendation: 'SOPA NSW timing rules do not apply until a Payment Claim is received.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_CLAIM_INVALID_SERVICE_METHOD]: {
    description: 'Payment Claim was served using an unknown or risky service method.',
    recommendation: 'Service method may not comply with SOPA NSW. Review service requirements.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_CLAIM_MANUAL_INCOMPLETE]: {
    description: 'Payment Claim manual details are incomplete.',
    recommendation: 'Complete all required fields for manual entry.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_CLAIM_DOES_NOT_IDENTIFY_WORK]: {
    description: 'Payment Claim does not clearly identify the work or services it relates to.',
    recommendation: 'The claim may be defective under s.13(2)(a). Consider challenging validity.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_CLAIM_DOES_NOT_IDENTIFY_AMOUNT]: {
    description: 'Payment Claim does not clearly state a claimed amount.',
    recommendation: 'The claim may be defective under s.13(2)(b). Consider challenging validity.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_CLAIM_AMOUNT_INVALID]: {
    description: 'Payment Claim amount is missing or invalid.',
    recommendation: 'The claim may be defective. Consider challenging validity.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_CLAIM_TIMING_INCONSISTENCY]: {
    description: 'Last work date is after the claim period, indicating a timing inconsistency.',
    recommendation: 'Review dates carefully. This may indicate an issue with the claim.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_SCHEDULE_NOT_ISSUED]: {
    description: 'No Payment Schedule was issued.',
    recommendation: 'Failure to issue a schedule within 10 business days may result in the full claimed amount becoming due.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_SCHEDULE_LATE]: {
    description: 'Payment Schedule was served after the 10 business day deadline.',
    recommendation: 'Late schedules may not protect your right to respond in adjudication unless issued within 5 business days after a Notice of Intention.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_SCHEDULE_INVALID_SERVICE_METHOD]: {
    description: 'Payment Schedule was served using an unknown or risky service method.',
    recommendation: 'Service method may not comply with SOPA NSW. Review service requirements.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_SCHEDULE_MANUAL_INCOMPLETE]: {
    description: 'Payment Schedule manual details are incomplete.',
    recommendation: 'Complete all required fields for manual entry.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_SCHEDULE_AMOUNT_MISSING]: {
    description: 'Payment Schedule amount is missing or invalid.',
    recommendation: 'A scheduled amount is required. The schedule may be defective without it.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_SCHEDULE_REASONS_MISSING]: {
    description: 'Payment Schedule does not provide reasons for reduction when scheduled amount is less than claimed amount.',
    recommendation: 'Reasons are required when reducing the amount. The schedule may be defective without them.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_SCHEDULE_NOT_PAID_ON_TIME]: {
    description: 'Scheduled amount was not fully paid by the due date.',
    recommendation: 'Outstanding amounts may be subject to enforcement. Consider payment arrangements.'
  },
  [RespondentDisqualifierTypePhase2.PAYMENT_SCHEDULE_OVER_SCHEDULED]: {
    description: 'Scheduled amount is more than the claimed amount (unusual).',
    recommendation: 'Review the scheduled amount. This is unusual and may indicate an error.'
  },
  [RespondentDisqualifierTypePhase2.NOTICE_OF_INTENTION_MANUAL_INCOMPLETE]: {
    description: 'Notice of Intention manual details are incomplete.',
    recommendation: 'Complete all required fields for manual entry.'
  },
  [RespondentDisqualifierTypePhase2.LATE_PAYMENT_SCHEDULE_TOO_LATE]: {
    description: 'Payment Schedule was issued more than 5 business days after the Notice of Intention.',
    recommendation: 'The late schedule may not be valid. You may be barred from responding in adjudication.'
  },
  [RespondentDisqualifierTypePhase2.ADJUDICATION_RESPONSE_BARRED]: {
    description: 'You are barred from providing a full adjudication response due to no valid Payment Schedule.',
    recommendation: 'Without a valid schedule served in time or within 5 business days after NOA, you cannot respond in adjudication. Seek urgent legal advice.'
  },
  [RespondentDisqualifierTypePhase2.ADJUDICATION_RESPONSE_REASONS_INCONSISTENT]: {
    description: 'Your adjudication response reasons do not match your Payment Schedule.',
    recommendation: 'New reasons may not be considered. Align your response with your schedule.'
  },
  [RespondentDisqualifierTypePhase2.ADJUDICATION_RESPONSE_EVIDENCE_MISSING]: {
    description: 'You do not have supporting evidence for your adjudication response.',
    recommendation: 'Evidence strengthens your position. Gather supporting documentation.'
  },
  [RespondentDisqualifierTypePhase2.SERVICE_PROOF_MISSING]: {
    description: 'You do not have proof of how documents were served.',
    recommendation: 'Service proof may be required in adjudication. Gather evidence of service.'
  },
  [RespondentDisqualifierTypePhase2.OUTSTANDING_LIABILITY]: {
    description: 'There is an outstanding amount payable on the Payment Claim.',
    recommendation: 'Outstanding amounts may be subject to enforcement. Consider payment arrangements or prepare for adjudication.'
  },
};

// Recommendations
const RESPONDENT_RECOMMENDATIONS_PHASE2 = {
  QUALIFICATION: 'Based on your responses, you appear to be in a position to manage your obligations under SOPA NSW. Continue to monitor deadlines and ensure compliance.',
  DISQUALIFICATION: 'Based on your responses, there are significant risks or issues with your SOPA NSW position. Seek legal advice immediately.',
} as const;

// Path evaluation result interface
interface RespondentPathEvaluationResult {
  pathId: string;
  pathName: string;
  eligible: boolean;
  qualifications: Partial<Record<RespondentQualificationTypePhase2, { message: string; requirement?: string }>>;
  disqualifiers: Partial<Record<RespondentDisqualifierTypePhase2, { message: string; severity: 'critical' | 'warning' }>>;
  score: number;
  nextPhase: string | null;
}

// Parser response interface
interface RespondentParserResponse {
  eligible: boolean;
  score: number;
  qualifications: Record<string, { description: string; score: number }>;
  disqualifiers: Record<string, { description: string; score: number }>;
  nextPhase?: string | null;
  totalScore?: number;
  recommendation?: string;
  message?: string;
  timestamp?: string;
}