import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DiseaseAnalysisModuleBase } from "./base/diseaseAnalysis.module.base";
import { DiseaseAnalysisService } from "./diseaseAnalysis.service";
import { DiseaseAnalysisController } from "./diseaseAnalysis.controller";
import { DiseaseAnalysisResolver } from "./diseaseAnalysis.resolver";

@Module({
  imports: [DiseaseAnalysisModuleBase, forwardRef(() => AuthModule)],
  controllers: [DiseaseAnalysisController],
  providers: [DiseaseAnalysisService, DiseaseAnalysisResolver],
  exports: [DiseaseAnalysisService],
})
export class DiseaseAnalysisModule {}
