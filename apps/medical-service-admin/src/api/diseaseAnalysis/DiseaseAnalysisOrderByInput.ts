import { SortOrder } from "../../util/SortOrder";

export type DiseaseAnalysisOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  prediction?: SortOrder;
  recommendations?: SortOrder;
  updatedAt?: SortOrder;
};
