import { BillingAgent as TBillingAgent } from "../api/billingAgent/BillingAgent";

export const BILLINGAGENT_TITLE_FIELD = "id";

export const BillingAgentTitle = (record: TBillingAgent): string => {
  return record.id?.toString() || String(record.id);
};
