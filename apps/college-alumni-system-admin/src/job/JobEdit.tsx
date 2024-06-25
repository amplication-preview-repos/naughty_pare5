import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const JobEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput
          label="applicationDeadline"
          source="applicationDeadline"
        />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="postDate" source="postDate" />
        <TextInput label="postedBy" source="postedBy" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
