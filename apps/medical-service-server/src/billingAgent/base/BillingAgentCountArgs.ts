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
import { Type } from "class-transformer";

@ArgsType()
class BillingAgentCountArgs {
  @ApiProperty({
    required: false,
    type: () => BillingAgentWhereInput,
  })
  @Field(() => BillingAgentWhereInput, { nullable: true })
  @Type(() => BillingAgentWhereInput)
  where?: BillingAgentWhereInput;
}

export { BillingAgentCountArgs as BillingAgentCountArgs };
