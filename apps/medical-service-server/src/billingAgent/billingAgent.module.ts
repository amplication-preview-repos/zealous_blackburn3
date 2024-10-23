import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BillingAgentModuleBase } from "./base/billingAgent.module.base";
import { BillingAgentService } from "./billingAgent.service";
import { BillingAgentController } from "./billingAgent.controller";
import { BillingAgentResolver } from "./billingAgent.resolver";

@Module({
  imports: [BillingAgentModuleBase, forwardRef(() => AuthModule)],
  controllers: [BillingAgentController],
  providers: [BillingAgentService, BillingAgentResolver],
  exports: [BillingAgentService],
})
export class BillingAgentModule {}
