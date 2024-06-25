import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const JobCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
