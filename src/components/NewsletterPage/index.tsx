"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { NewletterHeader } from "@/components/Header";
import { NewslettersSection } from "@/components/NewsletterSection";
import { UserButtonGroup } from "@/components/UserButtonGroup";
import { header } from "@/utils/constant";
import { Subscriptions } from "@/utils/type";

export function NewsletterPage() {
  const [subscriptions, setSubscriptions] = useState<Subscriptions>([
    "RIGHT_1",
  ]);

  return (
    <Container>
      <NewletterHeader title={header.title} description={header.description} />
      <UserButtonGroup
        subscriptions={subscriptions}
        setSubscriptions={setSubscriptions}
      />
      <NewslettersSection subscriptions={subscriptions} />
    </Container>
  );
}
