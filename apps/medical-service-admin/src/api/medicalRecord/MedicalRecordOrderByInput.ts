import { SortOrder } from "../../util/SortOrder";

export type MedicalRecordOrderByInput = {
  cost?: SortOrder;
  cover?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
