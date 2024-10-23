import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DoctorModuleBase } from "./base/doctor.module.base";
import { DoctorService } from "./doctor.service";
import { DoctorController } from "./doctor.controller";
import { DoctorResolver } from "./doctor.resolver";

@Module({
  imports: [DoctorModuleBase, forwardRef(() => AuthModule)],
  controllers: [DoctorController],
  providers: [DoctorService, DoctorResolver],
  exports: [DoctorService],
})
export class DoctorModule {}
