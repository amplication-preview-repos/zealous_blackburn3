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
import { ClaimPredictionWhereInput } from "./ClaimPredictionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ClaimPredictionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ClaimPredictionWhereInput,
  })
  @ValidateNested()
  @Type(() => ClaimPredictionWhereInput)
  @IsOptional()
  @Field(() => ClaimPredictionWhereInput, {
    nullable: true,
  })
  every?: ClaimPredictionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClaimPredictionWhereInput,
  })
  @ValidateNested()
  @Type(() => ClaimPredictionWhereInput)
  @IsOptional()
  @Field(() => ClaimPredictionWhereInput, {
    nullable: true,
  })
  some?: ClaimPredictionWhereInput;

  @ApiProperty({
    required: false,
    type: () => ClaimPredictionWhereInput,
  })
  @ValidateNested()
  @Type(() => ClaimPredictionWhereInput)
  @IsOptional()
  @Field(() => ClaimPredictionWhereInput, {
    nullable: true,
  })
  none?: ClaimPredictionWhereInput;
}
export { ClaimPredictionListRelationFilter as ClaimPredictionListRelationFilter };
