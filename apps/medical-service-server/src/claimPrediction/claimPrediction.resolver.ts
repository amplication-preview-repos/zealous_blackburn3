import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ClaimPredictionResolverBase } from "./base/claimPrediction.resolver.base";
import { ClaimPrediction } from "./base/ClaimPrediction";
import { ClaimPredictionService } from "./claimPrediction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ClaimPrediction)
export class ClaimPredictionResolver extends ClaimPredictionResolverBase {
  constructor(
    protected readonly service: ClaimPredictionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
