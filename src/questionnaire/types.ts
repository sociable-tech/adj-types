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
        type: "text" | "multiple-choice" | "rating";
        options: string[] | null; // Only for multiple-choice questions
    }[];
    createdAt: Date;
    updatedAt: Date;
};

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
  qualifications: Record<QualificationType, { description: string; recommendation: string }>;
  disqualifiers: Record<DisqualifierType, { description: string; recommendation: string }>;
}