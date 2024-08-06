import { createContext } from "react";

let patientForm: PatientForm = {} as PatientForm;
export const PatientContext = createContext({ patientForm: patientForm });
export default PatientContext;

export interface PatientPreForm {
  doctor: string;
  patientInfo: {
    country: string;
    age: number;
    gender: string;
    weight: number;
    height: number;
  };
  reason: string;
  riskFactors: {
    smokes: boolean;
    hasHypertension: boolean;
    hasDiabetes: boolean;
    hasAsthma: boolean;
    hadStroke: boolean;
    hadHeartAttack: boolean;
  };
  symptoms: Symptom[];
}

export interface Symptom {
  location: string;
  description: string;
  duration: string;
  intensity: number;
}

export interface PatientForm extends PatientPreForm {
  aditionalQuestions: Question[];
  aditionalConetxt: {
    contacts: string;
    travels: string;
  };
  results: string;
}

export interface Question {
  question: string;
  answer: string;
}
