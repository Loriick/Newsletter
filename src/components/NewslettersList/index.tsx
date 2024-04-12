"use client";

import { SimpleGrid } from "@chakra-ui/react";
import { NewsletterItem } from "@/components/NewsletterItem";
import {
  NewsletterItem as NewsletterItemType,
  Subscriptions,
} from "@/utils/type";

type NewlettersListProps = {
  newsletters: NewsletterItemType[];
  subscriptions: Subscriptions;
};

export function NewlettersList({
  newsletters,
  subscriptions,
}: NewlettersListProps) {
  return (
    <SimpleGrid
      spacing={6}
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
    >
      {newsletters.map((newsletter) => (
        <NewsletterItem
          key={newsletter.id}
          {...newsletter}
          userSubscriptions={subscriptions}
        />
      ))}
    </SimpleGrid>
  );
}
