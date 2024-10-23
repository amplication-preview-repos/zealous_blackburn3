import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiseaseAnalysisServiceBase } from "./base/diseaseAnalysis.service.base";

@Injectable()
export class DiseaseAnalysisService extends DiseaseAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
