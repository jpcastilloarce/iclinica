export async function getQuestions(doctor, patientPreForm) {
  const API_URL_QUESTIONS = "https://iclinica-api.vercel.app/api/questions";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      doctor: doctor,
      patientPreForm: patientPreForm,
    }),
  };
  const rawData = await fetch(API_URL_QUESTIONS, options);
  const json = await rawData.json();
  return json.questions;
}

export async function getResult(doctor, patientForm) {
  const API_URL_RESULT = "https://iclinica-api.vercel.app/api/consultation";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      doctor: doctor,
      patientForm: patientForm,
    }),
  };
  const rawData = await fetch(API_URL_RESULT, options);
  const json = await rawData.json();
  return json;
}
