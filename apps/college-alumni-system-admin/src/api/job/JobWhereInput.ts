import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type JobWhereInput = {
  applicationDeadline?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  postDate?: DateTimeNullableFilter;
  postedBy?: StringNullableFilter;
  title?: StringNullableFilter;
};
