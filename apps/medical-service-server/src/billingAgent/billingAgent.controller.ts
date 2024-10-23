import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BillingAgentService } from "./billingAgent.service";
import { BillingAgentControllerBase } from "./base/billingAgent.controller.base";

@swagger.ApiTags("billingAgents")
@common.Controller("billingAgents")
export class BillingAgentController extends BillingAgentControllerBase {
  constructor(
    protected readonly service: BillingAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
