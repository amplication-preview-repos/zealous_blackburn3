import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ClaimPredictionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ClaimPredictions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="billingAgent" source="billingAgent" />
        <TextField label="claimAmount" source="claimAmount" />
        <TextField label="claimStatus" source="claimStatus" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="medicalCode" source="medicalCode" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
