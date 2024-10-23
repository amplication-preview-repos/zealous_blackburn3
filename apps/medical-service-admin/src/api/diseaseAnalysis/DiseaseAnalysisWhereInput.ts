import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DiseaseAnalysisWhereInput = {
  id?: StringFilter;
  prediction?: StringNullableFilter;
  recommendations?: StringNullableFilter;
};
