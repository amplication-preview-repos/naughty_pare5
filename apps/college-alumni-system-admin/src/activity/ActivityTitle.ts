import { Activity as TActivity } from "../api/activity/Activity";

export const ACTIVITY_TITLE_FIELD = "createdBy";

export const ActivityTitle = (record: TActivity): string => {
  return record.createdBy?.toString() || String(record.id);
};
