import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messageContent?: SortOrder;
  receiver?: SortOrder;
  sender?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
};
