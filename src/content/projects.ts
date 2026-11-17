// Projects and case studies. To add one, copy an entry and change the text.
// Photos go in /public/images. A project without a cover photo gets a colour block.
// Set draft: true while a case study is still missing its full text.

export type Photo = { src: string; alt: string; width: number; height: number };

export type Project = {
  slug: string;
  title: string;
  role: string;
  year: string;
  color: "blue" | "lime" | "orange" | "charcoal";
  summary: string;
  cover?: Photo;
  facts?: string[];
  sections?: { heading: string; body: string }[];
  gallery?: Photo[];
  // Optional film. Put the .mp4 in /public/videos (keep it under about 20 MB)
  // and a still image for it in /public/images.
  video?: { src: string; poster?: string };
  credits?: string;
  draft?: boolean;
};

const portrait = { width: 1200, height: 1800 };
const landscape = { width: 1800, height: 1200 };

export const projects: Project[] = [
  {
    slug: "the-coffee-party-stockholm",
    title: "The Coffee Party Stockholm",
    role: "Concept, production, community, content, partnerships",
    year: "2025 to now",
    color: "blue",
    summary:
      "A Sunday daytime party built on coffee, DJ sets and whoever you end up talking to. Co-founded by LUSZ.",
    cover: {
      src: "/images/tcp-wide.jpg",
      alt: "Coffee Party crowd around the DJ table in a hall with tall windows, seen from above",
      ...landscape,
    },
    facts: [
      "Monthly, Sundays 11.00 to 15.00. Running since May 2025",
      "Every edition sold out: 200 to 400 tickets, waitlist of 200+",
      "Partners: Lynk & Co, Johan & Nyström, Pioneer, Sproud",
      "Venues: Snickeriet, Trädgården, Musikaliska Kvarteret, Eric Ericsonhallen",
    ],
    sections: [
      {
        heading: "The idea",
        body: "A party that starts at eleven in the morning and ends before dinner. Coffee instead of drinks, four DJs, a room worth seeing in daylight. Betsey co-created it in May 2025 and LUSZ has run the concept, the content and the community since.",
      },
      {
        heading: "The opening",
        body: "Most of what brings people together in Stockholm happens late and involves alcohol. We wanted a room for the people who love music and meeting strangers but also love their Monday. One guest called it a midday party without the usual mess around it.",
      },
      {
        heading: "How we built it",
        body: "Three decisions carry the concept. A new venue every edition, so the party is also a reason to see a space you have never been inside. Limited capacity with RSVP, so the room stays the right size. A membership for regulars, which keeps the parties independent and fair for venues, sound and creators.",
      },
      {
        heading: "On the day",
        body: "We turn the venue into a pop-up coffee party: a coffee bar, a booth, four one-hour sets from 11.00 to 15.00. We book the line-up, run the door, brief the photographers and have the content out while people are still talking about it.",
      },
      {
        heading: "Community and partners",
        body: "Brands join as part of the room, not as a logo on a wall. Lynk & Co hosted us in their clubhouse. Johan & Nyström and Sproud poured. With Pioneer we added a gathering for DJs, bookers and collectives straight after the main party, with open decks and new gear to try.",
      },
      {
        heading: "What happened",
        body: "Every edition since launch has sold out, between 200 and 400 tickets each time, with more than 200 people on the waitlist. Fourteen editions in, people plan their Sundays around it.",
      },
    ],
    gallery: [
      {
        src: "/images/tcp-crowd.jpg",
        alt: "Dancing crowd at Eric Ericsonhallen seen from behind the DJ booth",
        ...portrait,
      },
      {
        src: "/images/tcp-dj.jpg",
        alt: "DJ with one arm raised behind the decks at Eric Ericsonhallen",
        ...portrait,
      },
    ],
    credits: "Photos: EA, Samuel Waghorn",
  },
  {
    slug: "vsco",
    title: "VSCO",
    role: "Ambassador",
    year: "2026",
    color: "lime",
    summary:
      "Street style and nightlife photography as a VSCO Ambassador, a role Betsey has held since June 2026.",
    cover: {
      src: "/images/vsco-street1.jpg",
      alt: "Street style portrait: person in an orange and green printed dress, pink braids and yellow sunglasses",
      width: 1173,
      height: 1545,
    },
    gallery: [
      {
        src: "/images/vsco-street2.jpg",
        alt: "Street style portrait: person in a blue floral robe, green ruffled shirt and velvet trousers",
        width: 1103,
        height: 1549,
      },
      {
        src: "/images/vsco-night.jpg",
        alt: "Portrait in red club light, person wearing glowing green visor glasses, titled VSCO x Betseyph",
        width: 1189,
        height: 1545,
      },
    ],
    draft: true,
  },
  {
    slug: "dometic",
    title: "Dometic",
    role: "Social strategy",
    year: "2026",
    color: "orange",
    summary:
      "Social strategy for Dometic: a steadier publishing rhythm, stronger storytelling and collaborations.",
    draft: true,
  },
  {
    slug: "xbox",
    title: "Xbox",
    role: "Photography",
    year: "2024",
    color: "charcoal",
    summary: "A portrait series for Xbox, shot in green neon.",
    cover: {
      src: "/images/xbox1.jpg",
      alt: "Portrait in green neon light, model holding a pink Xbox controller",
      ...portrait,
    },
    gallery: [
      {
        src: "/images/xbox2.jpg",
        alt: "Portrait in green neon light, model seated with a controller",
        ...portrait,
      },
    ],
    draft: true,
  },
  {
    slug: "malibu-rum",
    title: "Malibu Rum",
    role: "Community management, content",
    year: "2022 to 2023",
    color: "orange",
    summary:
      "Community manager for Malibu Rum globally, at The Absolut Company. Ideas, project management and the occasional turn in front of the camera.",
    draft: true,
  },
  {
    slug: "urbanears",
    title: "Urbanears",
    role: "Community management",
    year: "2021",
    color: "lime",
    summary: "Community manager for Urbanears.",
    draft: true,
  },
];

export const featured = projects[0];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
