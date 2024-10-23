import { DiseaseAnalysis as TDiseaseAnalysis } from "../api/diseaseAnalysis/DiseaseAnalysis";

export const DISEASEANALYSIS_TITLE_FIELD = "id";

export const DiseaseAnalysisTitle = (record: TDiseaseAnalysis): string => {
  return record.id?.toString() || String(record.id);
};
