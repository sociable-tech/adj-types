import { QualificationType, DisqualifierType } from './types';

// Response messages
export const RESPONSE_MESSAGES = {
  QUALIFICATIONS: {
    [QualificationType.GOODS_PROVIDER]: {
      description: 'Provides materials or components for construction per s.6(1)(a)',
      recommendation: 'Proceed with detailed application preparation. Gather all relevant documentation including invoices, delivery receipts, and contract details to strengthen your case'
    },
    [QualificationType.SERVICE_PROVIDER_CONSULTANT]: {
      description: 'Provides professional services for construction per s.6(1)(b)',
      recommendation: 'Proceed with comprehensive application development. Compile all professional service agreements, work deliverables, and correspondence to build a strong case'
    },
    [QualificationType.BUILDER]: {
      description: 'Provides construction labour per s.6(1)(b)',
      recommendation: 'Move forward with thorough application preparation. Collect all construction contracts, work progress records, and payment schedules to maximize your case strength'
    }
  },
  DISQUALIFIERS: {
    [DisqualifierType.FINANCIAL_CONTRACT]: {
      description: 'Contract is financial in nature and involves lending/repaying a loan, guaranteeing payment, or repaying money lent',
      recommendation: 'Consider exploring marketplace alternatives for financial services'
    },
    [DisqualifierType.FINANCIAL_INSTITUTION_CONTRACT]: {
      description: 'Contract involves supplying goods/services as part of a loan agreement with a recognized financial institution',
      recommendation: 'You may find suitable alternatives through marketplace services'
    },
    [DisqualifierType.OUTSIDE_NSW_JURISDICTION]: {
      description: 'Construction work falls outside NSW jurisdiction',
      recommendation: 'Check your state\'s security of payment legislation or explore marketplace options'
    }
  }
} as const;
