/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { DiseaseAnalysis } from "./DiseaseAnalysis";
import { DiseaseAnalysisCountArgs } from "./DiseaseAnalysisCountArgs";
import { DiseaseAnalysisFindManyArgs } from "./DiseaseAnalysisFindManyArgs";
import { DiseaseAnalysisFindUniqueArgs } from "./DiseaseAnalysisFindUniqueArgs";
import { CreateDiseaseAnalysisArgs } from "./CreateDiseaseAnalysisArgs";
import { UpdateDiseaseAnalysisArgs } from "./UpdateDiseaseAnalysisArgs";
import { DeleteDiseaseAnalysisArgs } from "./DeleteDiseaseAnalysisArgs";
import { DiseaseAnalysisService } from "../diseaseAnalysis.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DiseaseAnalysis)
export class DiseaseAnalysisResolverBase {
  constructor(
    protected readonly service: DiseaseAnalysisService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "DiseaseAnalysis",
    action: "read",
    possession: "any",
  })
  async _diseaseAnalysesMeta(
    @graphql.Args() args: DiseaseAnalysisCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [DiseaseAnalysis])
  @nestAccessControl.UseRoles({
    resource: "DiseaseAnalysis",
    action: "read",
    possession: "any",
  })
  async diseaseAnalyses(
    @graphql.Args() args: DiseaseAnalysisFindManyArgs
  ): Promise<DiseaseAnalysis[]> {
    return this.service.diseaseAnalyses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => DiseaseAnalysis, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "DiseaseAnalysis",
    action: "read",
    possession: "own",
  })
  async diseaseAnalysis(
    @graphql.Args() args: DiseaseAnalysisFindUniqueArgs
  ): Promise<DiseaseAnalysis | null> {
    const result = await this.service.diseaseAnalysis(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DiseaseAnalysis)
  @nestAccessControl.UseRoles({
    resource: "DiseaseAnalysis",
    action: "create",
    possession: "any",
  })
  async createDiseaseAnalysis(
    @graphql.Args() args: CreateDiseaseAnalysisArgs
  ): Promise<DiseaseAnalysis> {
    return await this.service.createDiseaseAnalysis({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => DiseaseAnalysis)
  @nestAccessControl.UseRoles({
    resource: "DiseaseAnalysis",
    action: "update",
    possession: "any",
  })
  async updateDiseaseAnalysis(
    @graphql.Args() args: UpdateDiseaseAnalysisArgs
  ): Promise<DiseaseAnalysis | null> {
    try {
      return await this.service.updateDiseaseAnalysis({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DiseaseAnalysis)
  @nestAccessControl.UseRoles({
    resource: "DiseaseAnalysis",
    action: "delete",
    possession: "any",
  })
  async deleteDiseaseAnalysis(
    @graphql.Args() args: DeleteDiseaseAnalysisArgs
  ): Promise<DiseaseAnalysis | null> {
    try {
      return await this.service.deleteDiseaseAnalysis(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
