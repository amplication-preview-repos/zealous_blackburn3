import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DiseaseAnalysisCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="prediction" multiline source="prediction" />
        <TextInput label="recommendations" multiline source="recommendations" />
      </SimpleForm>
    </Create>
  );
};
