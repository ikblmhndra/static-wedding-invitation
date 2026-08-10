export type ArtDirectedImageAsset = {
  src: string;
  alt: string;
  focus?: {
    mobile?: string;
    desktop?: string;
  };
};

export type PersonProfile = {
  fullName: string;
  shortName: string;
  parents: string;
  description: string;
  roleNote: string;
  portrait: ArtDirectedImageAsset;
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
  image: ArtDirectedImageAsset;
  width: number;
  height: number;
  lightbox?: {
    width: number;
    height: number;
  };
  caption: string;
  description: string;
  span: "portrait" | "landscape" | "square";
};

export const invitationData = {
  coupleLabel: "The Wedding of",
  bride: {
    shortName: "Kiara",
    fullName: "Kiara Lubis",
    parents: "Beloved daughter of Mr. Surya Mahendra & Mrs. Lestari Puspita",
    description:
      "Graceful, warm, and endlessly thoughtful, Kiara carries beauty in the smallest details and brings a sense of calm to every room she enters.",
    roleNote: "A heart for beauty, tenderness, and quiet joy.",
    portrait: {
      src: "/couple/bride-portrait.webp",
      alt: "Portrait of Kiara Lubis",
      focus: {
        mobile: "center 28%",
        desktop: "center 24%"
      }
    }
  } satisfies PersonProfile,
  groom: {
    shortName: "Dimas",
    fullName: "Dimas Tri Saptaji",
    parents: "Beloved son of Mr. Aditya Pranowo & Mrs. Ratih Kusumaningrum",
    description:
      "Steady, sincere, and deeply dependable, Dimas leads with quiet confidence and finds meaning in sincerity, faith, and thoughtful devotion.",
    roleNote: "Rooted in calm, faith, and enduring affection.",
    portrait: {
      src: "/couple/groom-portrait.webp",
      alt: "Portrait of Dimas Tri Saptaji",
      focus: {
        mobile: "center 28%",
        desktop: "center 24%"
      }
    }
  } satisfies PersonProfile,
  hero: {
    dateTime: "2026-09-05T09:00:00+07:00",
    venue: "The Manor Andara, Jakarta",
    eyebrow: "A New Chapter Begins",
    quote:
      "With grateful hearts and joyful anticipation, we invite you to witness the beginning of our forever.",
    intro:
      "An intimate gathering shaped by love, family, and the quiet beauty of a promise made for life.",
    image: {
      src: "/gallery/gallery-4.webp",
      alt: "Editorial couple portrait at golden hour",
      focus: {
        mobile: "center 32%",
        desktop: "center 36%"
      }
    },
    detailImage: {
      src: "/gallery/gallery-2.webp",
      alt: "Soft romantic detail photograph",
      focus: {
        mobile: "center 36%",
        desktop: "center 34%"
      }
    }
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
      image: {
        src: "/gallery/gallery-1.webp",
        alt: "Romantic portrait in soft champagne tones",
        focus: {
          mobile: "center 34%",
          desktop: "center 30%"
        }
      },
      width: 960,
      height: 1200,
      lightbox: {
        width: 1200,
        height: 1798
      },
      caption: "A Quiet Beginning",
      description: "The kind of stillness where affection first learns its own name.",
      span: "portrait"
    },
    {
      image: {
        src: "/gallery/gallery-2.webp",
        alt: "Warm landscape portrait with floral details",
        focus: {
          mobile: "center 34%",
          desktop: "center 36%"
        }
      },
      width: 1200,
      height: 900,
      lightbox: {
        width: 1200,
        height: 801
      },
      caption: "Golden Hour Promises",
      description: "A memory wrapped in warm light and quiet anticipation.",
      span: "landscape"
    },
    {
      image: {
        src: "/gallery/gallery-3.webp",
        alt: "Elegant celebration portrait with petals",
        focus: {
          mobile: "center 40%",
          desktop: "center 38%"
        }
      },
      width: 960,
      height: 1200,
      lightbox: {
        width: 1200,
        height: 801
      },
      caption: "Blooming With Joy",
      description: "Every detail unfolding with tenderness and delight.",
      span: "portrait"
    },
    {
      image: {
        src: "/gallery/gallery-4.webp",
        alt: "Soft evening portrait with dance silhouettes",
        focus: {
          mobile: "center 30%",
          desktop: "center 34%"
        }
      },
      width: 1200,
      height: 900,
      lightbox: {
        width: 1200,
        height: 1798
      },
      caption: "Dancing Into Forever",
      description: "A moment held between elegance, music, and promise.",
      span: "landscape"
    },
    {
      image: {
        src: "/gallery/gallery-5.webp",
        alt: "Decorative wedding detail portrait",
        focus: {
          mobile: "center",
          desktop: "center"
        }
      },
      width: 960,
      height: 960,
      lightbox: {
        width: 1200,
        height: 801
      },
      caption: "Letters, Flowers, and Light",
      description: "Textures and traces of a day composed with intention.",
      span: "square"
    },
    {
      image: {
        src: "/gallery/gallery-6.webp",
        alt: "Elegant floral portrait with wedding arch",
        focus: {
          mobile: "center 34%",
          desktop: "center 30%"
        }
      },
      width: 960,
      height: 1200,
      lightbox: {
        width: 1200,
        height: 1798
      },
      caption: "Our Day in Full Bloom",
      description: "The setting for vows, celebration, and a life beginning anew.",
      span: "portrait"
    }
  ] satisfies GalleryItem[],
  gift: {
    enabled: true,
    accounts: [
      {
        bank: "BCA",
        name: "Kiara Lubis",
        number: "1234567890"
      },
      {
        bank: "Mandiri",
        name: "Dimas Tri Saptaji",
        number: "9876543210"
      }
    ],
    qrisImage: "/gift/qris-placeholder.svg"
  },
  music: {
    src: "/music/instrumental.mp3",
    autoplayOnOpen: true
  },
  closingMessage:
    "Thank you for being part of our special day. Your prayers, presence, and love mean the world to us."
};
