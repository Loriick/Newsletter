"use client";
import { Button } from "@chakra-ui/react";
import { isSubscriptionEqual } from "@/utils/isSubcriptionEqual";
import { NewsletterItem, User } from "@/utils/type";

type SubscriptionButtonProps = {
  newsletterSubscriptionId: NewsletterItem["subscriptions"];
  userSubscriptions: User["subscriptions"];
};

export function SubscriptionButton({
  newsletterSubscriptionId,
  userSubscriptions,
}: SubscriptionButtonProps) {
  const hasAccess = isSubscriptionEqual(
    newsletterSubscriptionId,
    userSubscriptions
  );

  return (
    <Button variant="solid" colorScheme={hasAccess ? "red" : "yellow"}>
      {hasAccess ? "Register" : "Subscribe"}
    </Button>
  );
}
