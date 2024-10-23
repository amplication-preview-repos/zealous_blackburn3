export type ClaimPrediction = {
  billingAgent: string | null;
  claimAmount: number | null;
  claimStatus?: "Option1" | null;
  createdAt: Date;
  id: string;
  medicalCode: string | null;
  updatedAt: Date;
};
