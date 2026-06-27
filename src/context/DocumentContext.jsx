import { createContext, useContext, useState } from "react";

const DocumentContext = createContext();

export function DocumentProvider({ children }) {

  const [documents, setDocuments] = useState([]);

  const [analysisData, setAnalysisData] = useState({

    applicant: {
      name: "",
      pan: "",
      aadhaar: "",
      phone: "",
      address: "",
    },

    financial: {
      declaredIncome: 0,
      bankCredits: 0,
      gstRevenue: 0,
      fraudScore: 0,
      aiConfidence: 0,
    },

    findings: [],

    comparison: {},

  });

  return (
    <DocumentContext.Provider
      value={{
        documents,
        setDocuments,
        analysisData,
        setAnalysisData,
      }}
    >
      {children}
    </DocumentContext.Provider>
  );
}

export function useDocuments() {
  return useContext(DocumentContext);
}