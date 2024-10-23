import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClaimPredictionModuleBase } from "./base/claimPrediction.module.base";
import { ClaimPredictionService } from "./claimPrediction.service";
import { ClaimPredictionController } from "./claimPrediction.controller";
import { ClaimPredictionResolver } from "./claimPrediction.resolver";

@Module({
  imports: [ClaimPredictionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClaimPredictionController],
  providers: [ClaimPredictionService, ClaimPredictionResolver],
  exports: [ClaimPredictionService],
})
export class ClaimPredictionModule {}
