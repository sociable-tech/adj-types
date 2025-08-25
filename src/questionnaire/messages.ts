import { QualificationType, DisqualifierType } from './types';

// Consistent recommendation messages
export const RECOMMENDATIONS = {
  QUALIFICATION: 'Proceed to Phase 2 for detailed analysis of your application. Our comprehensive assessment will evaluate your specific case and provide tailored guidance for your adjudication process.',
  DISQUALIFICATION: 'We recommend exploring our marketplace for alternative dispute resolution services. Our marketplace features a curated list of qualified adjudicators who can assist with your specific dispute resolution needs.'
} as const;

// Response messages
export const RESPONSE_MESSAGES = {
  QUALIFICATIONS: {
    [QualificationType.SERVICE_PROVIDER_CONSULTANT]: {
      description: 'Provides professional services for construction per s.6(1)(b)',
      recommendation: RECOMMENDATIONS.QUALIFICATION
    },
    [QualificationType.BUILDER]: {
      description: 'Provides construction labour per s.6(1)(b)',
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
    [DisqualifierType.GOODS_PROVIDER]: { 
      description: 'Provides materials or components for construction work',
      recommendation: RECOMMENDATIONS.DISQUALIFICATION
    },
  }
} as const;
