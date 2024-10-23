/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiseaseAnalysisWhereInput } from "./DiseaseAnalysisWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DiseaseAnalysisListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DiseaseAnalysisWhereInput,
  })
  @ValidateNested()
  @Type(() => DiseaseAnalysisWhereInput)
  @IsOptional()
  @Field(() => DiseaseAnalysisWhereInput, {
    nullable: true,
  })
  every?: DiseaseAnalysisWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiseaseAnalysisWhereInput,
  })
  @ValidateNested()
  @Type(() => DiseaseAnalysisWhereInput)
  @IsOptional()
  @Field(() => DiseaseAnalysisWhereInput, {
    nullable: true,
  })
  some?: DiseaseAnalysisWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiseaseAnalysisWhereInput,
  })
  @ValidateNested()
  @Type(() => DiseaseAnalysisWhereInput)
  @IsOptional()
  @Field(() => DiseaseAnalysisWhereInput, {
    nullable: true,
  })
  none?: DiseaseAnalysisWhereInput;
}
export { DiseaseAnalysisListRelationFilter as DiseaseAnalysisListRelationFilter };
