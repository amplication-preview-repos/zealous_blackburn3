import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ClaimPredictionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="billingAgent" source="billingAgent" />
        <NumberInput label="claimAmount" source="claimAmount" />
        <SelectInput
          source="claimStatus"
          label="claimStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="medicalCode" source="medicalCode" />
      </SimpleForm>
    </Create>
  );
};
