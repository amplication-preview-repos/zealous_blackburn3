import { BillingAgentWhereInput } from "./BillingAgentWhereInput";
import { BillingAgentOrderByInput } from "./BillingAgentOrderByInput";

export type BillingAgentFindManyArgs = {
  where?: BillingAgentWhereInput;
  orderBy?: Array<BillingAgentOrderByInput>;
  skip?: number;
  take?: number;
};
