import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  applicationDeadline?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  postDate?: SortOrder;
  postedBy?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
