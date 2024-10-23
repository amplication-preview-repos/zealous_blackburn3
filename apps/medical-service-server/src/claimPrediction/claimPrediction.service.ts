import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClaimPredictionServiceBase } from "./base/claimPrediction.service.base";

@Injectable()
export class ClaimPredictionService extends ClaimPredictionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
