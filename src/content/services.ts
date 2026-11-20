export type Service = {
  slug: string;
  name: string;
  line: string;
  body: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "think",
    name: "think",
    line: "You stop guessing. A clear position, a reason to be picked, and a plan you can actually run.",
    body: "Most brands do not have a content problem, they have a decision problem. We settle what you stand for, who it is for and what you will not do. You leave with a position, the words that carry it, and partners worth having. Everything after this gets cheaper and faster because of it.",
    items: [
      "Brand strategy and positioning",
      "Creative strategy",
      "Marketing strategy",
      "Campaign concepts",
      "Strategic partnerships",
      "Business development",
      "Brand consulting and workshops",
    ],
  },
  {
    slug: "make",
    name: "make",
    line: "Work that looks like you, and keeps earning after launch week.",
    body: "The person who wrote the strategy is on set and in the edit, so the idea survives all the way to the feed. You end up owning a library of photography, film and social content you can keep using, not a single campaign that dies on Friday.",
    items: [
      "Brand and visual identity",
      "Creative and art direction",
      "Photography",
      "Video production",
      "Reels, TikTok and social-first content",
      "Social media strategy and management",
      "Graphic design",
    ],
  },
  {
    slug: "gather",
    name: "gather",
    line: "A room full of the right people, and the relationships that outlast the night.",
    body: "An event is the fastest way to turn an audience into a community. We build the concept, book the artists, run the night and hand back the footage, the contacts and a reason for people to return. We also place artists and DJs from our network with brands, as ambassadors or for one night.",
    items: [
      "Event concepts and production",
      "Brand activations and pop-ups",
      "Product launches",
      "Community building and management",
      "Influencer and creator collaborations",
      "Artists as brand ambassadors",
      "Brand ambassador programs",
    ],
  },
];
