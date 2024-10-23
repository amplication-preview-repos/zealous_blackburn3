import { ClaimPrediction as TClaimPrediction } from "../api/claimPrediction/ClaimPrediction";

export const CLAIMPREDICTION_TITLE_FIELD = "billingAgent";

export const ClaimPredictionTitle = (record: TClaimPrediction): string => {
  return record.billingAgent?.toString() || String(record.id);
};
