import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  activityType?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
