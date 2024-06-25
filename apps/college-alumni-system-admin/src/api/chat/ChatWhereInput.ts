import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ChatWhereInput = {
  id?: StringFilter;
  messageContent?: StringNullableFilter;
  receiver?: StringNullableFilter;
  sender?: StringNullableFilter;
  sentAt?: DateTimeNullableFilter;
};
