"use client";
import styled from "styled-components";
import { NewlettersList } from "@/components/NewslettersList";
import { groupedNewsletter } from "@/utils/constant";
import { Subscriptions } from "@/utils/type";

type NewslettersSection = {
  subscriptions: Subscriptions;
};

const Section = styled.section`
  padding: 2rem 0;
`;

const Title = styled.h3`
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  font-weight: 600;
  font-size: 1.2rem;

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    background-color: #b00005;
  }
`;

export function NewslettersSection({ subscriptions }: NewslettersSection) {
  return Object.keys(groupedNewsletter).map((site) => (
    <Section key={site}>
      <Title>{site}</Title>
      <NewlettersList
        newsletters={groupedNewsletter[site]}
        subscriptions={subscriptions}
      />
    </Section>
  ));
}
