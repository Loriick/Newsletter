export type NewsletterItem = {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
};

export type GroupedNewsletterItems = Record<string, NewsletterItem[]>;

export type Subscriptions = string[] | [];

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  subscriptions: Subscriptions;
};
