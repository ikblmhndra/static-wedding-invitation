export type PersonProfile = {
  fullName: string;
  shortName: string;
  parents: string;
  description: string;
  photo: string;
};

export type StoryBeat = {
  title: string;
  year: string;
  description: string;
};

export type EventDetail = {
  title: string;
  dateTime: string;
  location: string;
  address: string;
  mapUrl: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  span: "portrait" | "landscape" | "square";
};

export const invitationData = {
  coupleLabel: "The Wedding of",
  bride: {
    shortName: "Kiara",
    fullName: "Kiara Maharani",
    parents: "Beloved daughter of Mr. Surya Mahendra & Mrs. Lestari Puspita",
    description:
      "Gentle in spirit and graceful in heart, Kiara brings warmth wherever she goes. She loves handwritten notes, soft sunlight, and the beauty of thoughtful details.",
    photo: "/couple/bride-portrait.svg"
  } satisfies PersonProfile,
  groom: {
    shortName: "Dimas",
    fullName: "Dimas Pratama",
    parents: "Beloved son of Mr. Aditya Pranowo & Mrs. Ratih Kusumaningrum",
    description:
      "Calm, sincere, and endlessly dependable, Dimas finds joy in meaningful conversations, quiet mornings, and building a life rooted in love and faith.",
    photo: "/couple/groom-portrait.svg"
  } satisfies PersonProfile,
  hero: {
    dateTime: "2026-11-21T09:00:00+07:00",
    venue: "The Manor Andara, Jakarta",
    quote:
      "With grateful hearts and joyful anticipation, we invite you to witness the beginning of our forever."
  },
  story: [
    {
      year: "2020",
      title: "First Meeting",
      description:
        "A quiet introduction turned into an unforgettable conversation, and in that moment the world felt a little softer and brighter."
    },
    {
      year: "2022",
      title: "Growing Together",
      description:
        "Through shared dreams, long walks, and countless small kindnesses, friendship gently became the deepest kind of love."
    },
    {
      year: "2025",
      title: "Engagement",
      description:
        "Surrounded by family blessings, we promised to keep choosing each other with intention, tenderness, and faith."
    },
    {
      year: "2026",
      title: "Wedding Day",
      description:
        "Now we look forward to celebrating the sacred beginning of marriage, held close by the people we love most."
    }
  ] satisfies StoryBeat[],
  events: [
    {
      title: "Akad Nikah",
      dateTime: "2026-11-21T09:00:00+07:00",
      location: "Glasshouse Chapel, The Manor Andara",
      address:
        "Jl. Raya Andara No. 88, Cinere, Kota Depok, Jawa Barat 16514, Indonesia",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Manor+Andara+Depok"
    },
    {
      title: "Resepsi",
      dateTime: "2026-11-21T18:30:00+07:00",
      location: "Garden Ballroom, The Manor Andara",
      address:
        "Jl. Raya Andara No. 88, Cinere, Kota Depok, Jawa Barat 16514, Indonesia",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=The+Manor+Andara+Depok"
    }
  ] satisfies EventDetail[],
  gallery: [
    {
      src: "/gallery/gallery-1.svg",
      alt: "Romantic portrait illustration in soft champagne tones",
      width: 960,
      height: 1200,
      caption: "A quiet beginning",
      span: "portrait"
    },
    {
      src: "/gallery/gallery-2.svg",
      alt: "Warm landscape illustration with floral details",
      width: 1200,
      height: 900,
      caption: "Golden hour promises",
      span: "landscape"
    },
    {
      src: "/gallery/gallery-3.svg",
      alt: "Elegant celebration artwork with petals",
      width: 960,
      height: 1200,
      caption: "Blooming with joy",
      span: "portrait"
    },
    {
      src: "/gallery/gallery-4.svg",
      alt: "Soft evening illustration with dance silhouettes",
      width: 1200,
      height: 900,
      caption: "Dancing into forever",
      span: "landscape"
    },
    {
      src: "/gallery/gallery-5.svg",
      alt: "Decorative wedding detail artwork",
      width: 960,
      height: 960,
      caption: "Letters, flowers, and light",
      span: "square"
    },
    {
      src: "/gallery/gallery-6.svg",
      alt: "Elegant floral illustration with wedding arch",
      width: 960,
      height: 1200,
      caption: "Our day in full bloom",
      span: "portrait"
    }
  ] satisfies GalleryItem[],
  gift: {
    enabled: true,
    accounts: [
      {
        bank: "BCA",
        name: "Kiara Maharani",
        number: "1234567890"
      },
      {
        bank: "Mandiri",
        name: "Dimas Pratama",
        number: "9876543210"
      }
    ],
    qrisImage: "/gift/qris-placeholder.svg"
  },
  music: {
    enabled: false,
    src: "/music/instrumental.mp3",
    autoplayOnOpen: true
  },
  closingMessage:
    "Thank you for being part of our special day. Your prayers, presence, and love mean the world to us."
};
