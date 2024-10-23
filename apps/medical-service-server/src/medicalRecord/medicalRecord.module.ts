import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MedicalRecordModuleBase } from "./base/medicalRecord.module.base";
import { MedicalRecordService } from "./medicalRecord.service";
import { MedicalRecordController } from "./medicalRecord.controller";
import { MedicalRecordResolver } from "./medicalRecord.resolver";

@Module({
  imports: [MedicalRecordModuleBase, forwardRef(() => AuthModule)],
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService, MedicalRecordResolver],
  exports: [MedicalRecordService],
})
export class MedicalRecordModule {}
