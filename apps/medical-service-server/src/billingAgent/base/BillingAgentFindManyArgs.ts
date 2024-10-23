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
import { BillingAgentWhereInput } from "./BillingAgentWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BillingAgentOrderByInput } from "./BillingAgentOrderByInput";

@ArgsType()
class BillingAgentFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BillingAgentWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BillingAgentWhereInput, { nullable: true })
  @Type(() => BillingAgentWhereInput)
  where?: BillingAgentWhereInput;

  @ApiProperty({
    required: false,
    type: [BillingAgentOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BillingAgentOrderByInput], { nullable: true })
  @Type(() => BillingAgentOrderByInput)
  orderBy?: Array<BillingAgentOrderByInput>;

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

export { BillingAgentFindManyArgs as BillingAgentFindManyArgs };
