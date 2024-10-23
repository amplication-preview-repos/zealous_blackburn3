import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BillingAgentServiceBase } from "./base/billingAgent.service.base";

@Injectable()
export class BillingAgentService extends BillingAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
