import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MedicalRecordWhereInput = {
  cost?: FloatNullableFilter;
  cover?: StringNullableFilter;
  id?: StringFilter;
};
