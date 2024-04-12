import { User } from "@/utils/type";

export const isSubscriptionEqual = (
  subscriptions1: User["subscriptions"],
  subscriptions2: User["subscriptions"]
): boolean => {
  const sortedSubcription1 = subscriptions1.sort().join(",");
  const sortedSubcription2 = subscriptions2.sort().join(",");
  return sortedSubcription1 === sortedSubcription2;
};
