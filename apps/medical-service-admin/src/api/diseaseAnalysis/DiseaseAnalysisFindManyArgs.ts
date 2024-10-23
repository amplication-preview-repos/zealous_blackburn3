import { DiseaseAnalysisWhereInput } from "./DiseaseAnalysisWhereInput";
import { DiseaseAnalysisOrderByInput } from "./DiseaseAnalysisOrderByInput";

export type DiseaseAnalysisFindManyArgs = {
  where?: DiseaseAnalysisWhereInput;
  orderBy?: Array<DiseaseAnalysisOrderByInput>;
  skip?: number;
  take?: number;
};
