
export interface Licence {
  certificate_number: string;
  certificate_url: string;
  issue_date: string;
  expiry_date: string;
  issuing_authority: string;
}

export interface Profile {
  id: string;
  email: string;
  user_id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  profile_completion: string;
  avatar_url: string;
  org_id: string;
  provider_type: string;
  occupation: string;
  qualification: string;
  area_of_practice: string[];
  years_of_experience: number;
  hourly_rate: number;
  currency: string;
  bio: string;
  is_active: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  licences: {
    tasmania: Licence;
    victoria: Licence;
    queensland: Licence;
    new_south_wales: Licence;
    south_australia: Licence;
    western_australia: Licence;
    northern_territory: Licence;
    australian_capital_territory: Licence;
  };
}


export const JURISDICTIONS: Record<string, string> = {
  new_south_wales: 'NSW',
  victoria: 'Victoria',
  queensland: 'Queensland',
  south_australia: 'South Australia',
  western_australia: 'Western Australia',
  australian_capital_territory: 'ACT',
  northern_territory: 'NT',
  tasmania: 'Tasmania',
};

export const AREA_OF_PRACTICE = [
  {"label": "Construction Contract Disputes", "value": "construction_contract_disputes"},
  {"label": "Contract Review and Advice", "value": "contract_review_and_advice"},
  {"label": "Retention Money Claims", "value": "retention_money_claims"},
  {"label": "Delays and Liquidated Damages", "value": "delays_and_liquidated_damages"},
  {"label": "Variation Claims", "value": "variation_claims"},
  {"label": "Defects and Quality of Work", "value": "defects_and_quality_of_work"},
  {"label": "Subcontractor Payment Issues", "value": "subcontractor_payment_issues"},
  {"label": "Compliance and Regulatory Issues", "value": "compliance_and_regulatory_issues"},
  {"label": "Building Code Compliance", "value": "building_code_compliance"},
  {"label": "Health and Safety Regulations", "value": "health_and_safety_regulations"},
  {"label": "Environmental Compliance in Construction", "value": "environmental_compliance_in_construction"},
  {"label": "Construction Insurance Claims", "value": "construction_insurance_claims"},
  {"label": "Dispute Resolution and Negotiation", "value": "dispute_resolution_and_negotiation"},
  {"label": "Project Management and Oversight", "value": "project_management_and_oversight"},
  {"label": "Claims for Unpaid Invoices", "value": "claims_for_unpaid_invoices"}
]