import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DiseaseAnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="prediction" multiline source="prediction" />
        <TextInput label="recommendations" multiline source="recommendations" />
      </SimpleForm>
    </Edit>
  );
};
