import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DiseaseAnalysisService } from "./diseaseAnalysis.service";
import { DiseaseAnalysisControllerBase } from "./base/diseaseAnalysis.controller.base";

@swagger.ApiTags("diseaseAnalyses")
@common.Controller("diseaseAnalyses")
export class DiseaseAnalysisController extends DiseaseAnalysisControllerBase {
  constructor(
    protected readonly service: DiseaseAnalysisService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
