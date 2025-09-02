import { QualificationType, DisqualifierType } from './types';

// Consistent recommendation messages
export const RECOMMENDATIONS = {
  QUALIFICATION: 'Proceed to Phase 2 for detailed analysis of your application. Our comprehensive assessment will evaluate your specific case and provide tailored guidance for your adjudication process.',
  DISQUALIFICATION: 'We recommend exploring our marketplace for alternative dispute resolution services. Our marketplace features a curated list of qualified adjudicators who can assist with your specific dispute resolution needs.'
} as const;

// Response messages
export const RESPONSE_MESSAGES = {
  QUALIFICATIONS: {
    [QualificationType.BUILDER]: {
      description: 'Performs construction work under Section 5 (Construction Work)',
      recommendation: RECOMMENDATIONS.QUALIFICATION
    },
    // Add new qualification types
    [QualificationType.HEAD_CONTRACTOR]: {
    description: 'Contracts with the principal and engages subcontractors for Section 5 construction work',
      recommendation: RECOMMENDATIONS.QUALIFICATION
    },
    [QualificationType.GOODS_PROVIDER_MATERIALS]: {
      description: 'Provides materials for construction work per s.6(1)(a)(i)',
      recommendation: RECOMMENDATIONS.QUALIFICATION
    },
    [QualificationType.GOODS_PROVIDER_PLANT]: {
      description: 'Provides plant hire for construction work per s.6(1)(a)(ii)',
      recommendation: RECOMMENDATIONS.QUALIFICATION
    },
    [QualificationType.SERVICE_PROVIDER_PROFESSIONAL]: {
      description: 'Provides professional services for construction per s.6(1)(b)',
      recommendation: RECOMMENDATIONS.QUALIFICATION
    },
    [QualificationType.SERVICE_PROVIDER_LABOUR]: {
      description: 'Provides labour hire for construction work per s.6(1)(b)(i)',
      recommendation: RECOMMENDATIONS.QUALIFICATION
    }
  },
  DISQUALIFIERS: {
    [DisqualifierType.FINANCIAL_CONTRACT]: {
      description: 'Contract is financial in nature and involves lending/repaying a loan, guaranteeing payment, or repaying money lent',
      recommendation: RECOMMENDATIONS.DISQUALIFICATION
    },
    [DisqualifierType.FINANCIAL_INSTITUTION_CONTRACT]: {
      description: 'Contract involves supplying goods/services as part of a loan agreement with a recognized financial institution',
      recommendation: RECOMMENDATIONS.DISQUALIFICATION
    },
    [DisqualifierType.OUTSIDE_NSW_JURISDICTION]: {
      description: 'Construction work falls outside NSW jurisdiction',
      recommendation: RECOMMENDATIONS.DISQUALIFICATION
    },
    // Add new disqualifier types
    [DisqualifierType.NOT_CONSTRUCTION_RELATED]: {
      description: 'Contract is not related to construction work',
      recommendation: RECOMMENDATIONS.DISQUALIFICATION
    },
    [DisqualifierType.S5_EXCLUSION]: {
      description: 'Contract falls under explicit exclusions in s.5(2) SOPA NSW',
      recommendation: RECOMMENDATIONS.DISQUALIFICATION
    },
    [DisqualifierType.EMPLOYEE_STATUS]: {
      description: 'Acting as an employee under Industrial Relations Act 1996',
      recommendation: RECOMMENDATIONS.DISQUALIFICATION
    }
  }
} as const;
