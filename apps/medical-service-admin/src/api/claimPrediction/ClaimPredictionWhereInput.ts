import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClaimPredictionWhereInput = {
  billingAgent?: StringNullableFilter;
  claimAmount?: FloatNullableFilter;
  claimStatus?: "Option1";
  id?: StringFilter;
  medicalCode?: StringNullableFilter;
};
