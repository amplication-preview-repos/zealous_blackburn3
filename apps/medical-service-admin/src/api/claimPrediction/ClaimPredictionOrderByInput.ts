import { SortOrder } from "../../util/SortOrder";

export type ClaimPredictionOrderByInput = {
  billingAgent?: SortOrder;
  claimAmount?: SortOrder;
  claimStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  medicalCode?: SortOrder;
  updatedAt?: SortOrder;
};
