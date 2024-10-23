import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClaimPredictionService } from "./claimPrediction.service";
import { ClaimPredictionControllerBase } from "./base/claimPrediction.controller.base";

@swagger.ApiTags("claimPredictions")
@common.Controller("claimPredictions")
export class ClaimPredictionController extends ClaimPredictionControllerBase {
  constructor(
    protected readonly service: ClaimPredictionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
