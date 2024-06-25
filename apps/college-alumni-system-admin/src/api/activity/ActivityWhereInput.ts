import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ActivityWhereInput = {
  activityType?: "Option1";
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
