import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { GroupedNewsletterItems, NewsletterItem } from "@/utils/type";

export const header = {
  title: "Newsletters",
  description:
    "On this page, you'll find all the newsletters from Les Echos and its satellite brands. So you can discover all our newsletters according to your centers of interest, and manage your newsletter subscriptions more easily.",
};

export const groupedNewsletter: GroupedNewsletterItems =
  NEWSLETTER_ITEMS.reduce(
    (groupedItems: GroupedNewsletterItems, newsletter: NewsletterItem) => {
      const { site } = newsletter;
      if (!groupedItems[site]) {
        groupedItems[site] = [];
      }
      groupedItems[site].push(newsletter);
      return groupedItems;
    },
    {}
  );
