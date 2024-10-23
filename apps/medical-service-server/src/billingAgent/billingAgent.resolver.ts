import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BillingAgentResolverBase } from "./base/billingAgent.resolver.base";
import { BillingAgent } from "./base/BillingAgent";
import { BillingAgentService } from "./billingAgent.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BillingAgent)
export class BillingAgentResolver extends BillingAgentResolverBase {
  constructor(
    protected readonly service: BillingAgentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
