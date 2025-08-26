
export interface ValidationError {
  field: string
  message: string
}

// Step types
export interface Step1Data {
  q1_contract_party_name: string
  q2_abn_acn?: string | null
}

export interface Step2Data {
  q3_financial_contract?: boolean | null
  q4_financial_options?: string[] | null
  q5_financial_institution?: boolean | null
}

export interface Step3Data {
  q6_construction_related?: boolean | null
  q7_nsw_construction?: boolean | null
}

// Union of all steps
export type FormData = Step1Data & Step2Data & Step3Data

// ------------------- Validators -------------------

export const validateABN = (abn?: string): boolean => {
  if (!abn) return true // Optional field
  const abnRegex = /^[0-9]{11}$/
  return abnRegex.test(abn.replace(/\s/g, ""))
}

export const validateACN = (acn?: string): boolean => {
  if (!acn) return true // Optional field
  const acnRegex = /^[0-9]{9}$/
  return acnRegex.test(acn.replace(/\s/g, ""))
}

export const validateABNOrACN = (value?: string): boolean => {
  if (!value) return true
  const cleaned = value.replace(/\s/g, "")
  return /^[0-9]{11}$/.test(cleaned) || /^[0-9]{9}$/.test(cleaned)
}

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0
}

// ------------------- Step Validation -------------------

export const validateStep = (step: number, formData: FormData): ValidationError[] => {
  const errors: ValidationError[] = []

  switch (step) {
    case 1: // Personal Details
      if (!validateRequired(formData.q1_contract_party_name)) {
        errors.push({ field: "q1_contract_party_name", message: "Full name is required" })
      }
      if (formData.q2_abn_acn && !validateABNOrACN(formData.q2_abn_acn)) {
        errors.push({ field: "q2_abn_acn", message: "ABN must be 11 digits or ACN must be 9 digits" })
      }
      break

    case 2: // Contract Financial Nature
      if (formData.q3_financial_contract === null || formData.q3_financial_contract === undefined) {
        errors.push({ field: "q3_financial_contract", message: "Please specify if the contract is financial in nature" })
      }

      if (formData.q3_financial_contract === true) {
        const hasFinancialOptions = formData.q4_financial_options && formData.q4_financial_options.length > 0
        if (!hasFinancialOptions && (formData.q5_financial_institution === null || formData.q5_financial_institution === undefined)) {
          errors.push({
            field: "q5_financial_institution",
            message: "Please specify if tied to a financial institution",
          })
        }
      }
      break

    case 3: // Construction Context
      if (formData.q6_construction_related === null || formData.q6_construction_related === undefined) {
        errors.push({
          field: "q6_construction_related",
          message: "Please specify if the contract is related to construction work",
        })
      }

      if (formData.q6_construction_related === true) {
        if (formData.q7_nsw_construction === null || formData.q7_nsw_construction === undefined) {
          errors.push({ field: "q7_nsw_construction", message: "Please specify if the construction work is in NSW" })
        }
      }
      break

    case 4: // Scope of Work
      // TODO: Add validation later
      break

    case 5: // Confirmation / Additional Notes
      // TODO: Add validation later
      break
  }

  return errors
}

// ------------------- Step Navigation -------------------

export const shouldShowStep = (step: number, _formData: FormData): boolean => {
  switch (step) {
    case 1: // Personal Details
    case 2: // Contract Nature
    case 3: // Construction Context
    case 4: // Scope of Work
    case 5: // Confirmation / Additional Notes
      return true

    default:
      return false
  }
}

export const getNextStep = (currentStep: number, formData: FormData, totalSteps: number): number => {
  let nextStep = currentStep + 1

  while (nextStep <= totalSteps && !shouldShowStep(nextStep, formData)) {
    nextStep++
  }

  return nextStep > totalSteps ? totalSteps : nextStep
}

export const getPreviousStep = (currentStep: number, formData: FormData): number => {
  let prevStep = currentStep - 1

  while (prevStep >= 1 && !shouldShowStep(prevStep, formData)) {
    prevStep--
  }

  return prevStep < 1 ? 1 : prevStep
}
