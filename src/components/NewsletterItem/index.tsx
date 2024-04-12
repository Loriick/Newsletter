"use client";

import { Card, CardBody, CardFooter, Stack, Image } from "@chakra-ui/react";
import {
  NewsletterItem as NewsletterItemType,
  Subscriptions,
} from "@/utils/type";
import { SubscriptionButton } from "@/components/SubscriptionButton";

type NewsletterItemProps = NewsletterItemType & {
  userSubscriptions: Subscriptions;
};

export function NewsletterItem({
  image,
  description,
  title,
  subscriptions,
  userSubscriptions,
}: NewsletterItemProps) {
  return (
    <Card variant="untyped" align="center" textAlign="center">
      <CardBody>
        <Image width={["320px", "250px"]} src={image} alt={title} />
        <Stack mt="2" spacing="1">
          <span>{description}</span>
        </Stack>
      </CardBody>
      <CardFooter>
        <SubscriptionButton
          newsletterSubscriptionId={subscriptions}
          userSubscriptions={userSubscriptions}
        />
      </CardFooter>
    </Card>
  );
}
