import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const ClaimPredictionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
