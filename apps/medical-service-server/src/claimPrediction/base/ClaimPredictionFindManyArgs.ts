/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ClaimPredictionWhereInput } from "./ClaimPredictionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ClaimPredictionOrderByInput } from "./ClaimPredictionOrderByInput";

@ArgsType()
class ClaimPredictionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ClaimPredictionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ClaimPredictionWhereInput, { nullable: true })
  @Type(() => ClaimPredictionWhereInput)
  where?: ClaimPredictionWhereInput;

  @ApiProperty({
    required: false,
    type: [ClaimPredictionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ClaimPredictionOrderByInput], { nullable: true })
  @Type(() => ClaimPredictionOrderByInput)
  orderBy?: Array<ClaimPredictionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ClaimPredictionFindManyArgs as ClaimPredictionFindManyArgs };