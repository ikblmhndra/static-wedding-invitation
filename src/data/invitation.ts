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
  endDateTime?: string;
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
    shortName: "Bidadari",
    fullName: "Bidadari Kiara Ramadhani Lubis, S.T.P",
    parents: "Beloved daughter of Tigor H. Asnawi Lubis & Almh. Mira Ruthie Suryo",
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
    fullName: "Dimas Tri Saptaji, S.T",
    parents: "Beloved son of Zein Djaeni & Wiwin",
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
    dateTime: "2026-09-05T11:00:00+07:00",
    venue: "Kalibata House 21",
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
      year: "2023",
      title: "First Meeting",
      description:
        "We met by chance, simply finding ourselves in the same place at the same time. Never knowing that our paths would intertwine. It all began with small talks and jokes, and it led us to the beginning of our forever."
    },
    {
      year: "2023",
      title: "Growing Together",
      description:
        "With the intention of building something meaningful, we took time to know each other’s dreams, hopes, and to grow together along the way."
    },
    {
      year: "2026",
      title: "Engagement",
      description:
        "Somewhere along the way, a simple “yes” became our promise to choose each other forever. Surrounded by family, in a sacred moment filled with love, we found ourselves ready to be each other’s home not just for today, but for all the days that follow."
    },
    {
      year: "2026",
      title: "Wedding Day",
      description:
        "And now, we begin the forever we once only dreamed of. Hand in hand, heart to heart. To be each other’s panacea, each other’s oxytocin."
    }
  ] satisfies StoryBeat[],
  events: [
    // {
    //   title: "Akad Nikah",
    //   dateTime: "2026-09-05T10:00:00+07:00",
    //   location: "Kalibata House 21",
    //   address:
    //     "Jl. Kalibata Utara II No.21, RT.1/RW.7, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12740",
    //   mapUrl:
    //     "https://maps.app.goo.gl/BbKSVBuZ5Y7aDkQi7"
    // }
    {
      title: "Resepsi",
      dateTime: "2026-09-05T11:00:00+07:00",
      endDateTime: "2026-09-05T14:00:00+07:00",
      location: "Kalibata House 21",
      address:
        "Jl. Kalibata Utara II No.21, RT.1/RW.7, Kalibata, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12740",
      mapUrl:
        "https://maps.app.goo.gl/BbKSVBuZ5Y7aDkQi7"
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
        name: "Bidadari Kiara R Lubis",
        number: "5855120426"
      },
      {
        bank: "Mandiri",
        name: "Dimas Tri Saptaji",
        number: "0060011325689"
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
