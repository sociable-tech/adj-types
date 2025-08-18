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