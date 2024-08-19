import { createContext } from "react";
export const BasicInfoContext = createContext({
  patientInfo: {
    country: "",
    age: "",
    gender: "Masculino",
    weight: "",
    height: "",
  },
});
export default BasicInfoContext;
