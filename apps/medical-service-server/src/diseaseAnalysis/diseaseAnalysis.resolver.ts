import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DiseaseAnalysisResolverBase } from "./base/diseaseAnalysis.resolver.base";
import { DiseaseAnalysis } from "./base/DiseaseAnalysis";
import { DiseaseAnalysisService } from "./diseaseAnalysis.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiseaseAnalysis)
export class DiseaseAnalysisResolver extends DiseaseAnalysisResolverBase {
  constructor(
    protected readonly service: DiseaseAnalysisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
