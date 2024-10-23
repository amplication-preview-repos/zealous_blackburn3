import { ClaimPredictionWhereInput } from "./ClaimPredictionWhereInput";
import { ClaimPredictionOrderByInput } from "./ClaimPredictionOrderByInput";

export type ClaimPredictionFindManyArgs = {
  where?: ClaimPredictionWhereInput;
  orderBy?: Array<ClaimPredictionOrderByInput>;
  skip?: number;
  take?: number;
};
