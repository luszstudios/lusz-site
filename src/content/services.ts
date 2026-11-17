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
    line: "Positioning, brand and creative strategy, partnerships. Deciding what is worth making.",
    body: "Before anything gets shot, designed or booked, we work out what the brand should stand for and who it is for. Then we look for the partners and openings that make the plan bigger than the budget.",
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
    line: "Identity, art direction, photography, film, social. Made by the people who planned it.",
    body: "The person who wrote the strategy is on set and in the edit. That is how the idea survives all the way to the feed.",
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
    line: "Events, pop-ups, launches, community, and artists as ambassadors for your brand.",
    body: "We put the right people in one room and give them a reason to come back. We also match brands with artists and DJs from our network, as ambassadors or for a single night.",
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
