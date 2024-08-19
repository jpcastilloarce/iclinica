import { createContext } from "react";
export const RiskContext = createContext({
  riskFactors: {
    smokes: false,
    hasHypertension: false,
    hasDiabetes: false,
    hasAsthma: false,
    hadStroke: false,
    hadHeartAttack: false,
  },
});
export default RiskContext;
