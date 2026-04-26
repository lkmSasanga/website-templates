import configData from "./config.json";

const config = configData as {
  brand: {
    name: string;
    tagline: string;
    cuisine: string;
    location: string;
  };
  colors: {
    primary: Record<string, string>;
    gradient: {
      from: string;
      via: string;
      to: string;
    };
    background: Record<string, string>;
    text: Record<string, string>;
  };
  theme: {
    style: string;
    accentColor: string;
    buttonStyle: string;
    borderRadius: string;
  };
  customization: Record<string, boolean>;
};

export interface SiteData {
  brand: {
    name: string;
    tagline: string;
    cuisine: string;
    location: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    mapLink: string;
  };
  hours: {
    [key: string]: { open: string; close: string; closed?: boolean };
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  featuredDishes: Array<{
    name: string;
    description: string;
    price: string;
    tags: string[];
    image?: string;
  }>;
  menuCategories: Array<{
    name: string;
    items: Array<{
      name: string;
      description: string;
      price: string;
      tags?: string[];
      image?: string;
    }>;
  }>;
  testimonials: Array<{
    name: string;
    quote: string;
    role: string;
    rating?: number;
    image?: string;
  }>;
  galleryImages: string[];
  socials: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    yelp?: string;
  };
  trustBar: {
    rating: number;
    reviewCount: number;
    badges: string[];
  };
}

export const siteData: SiteData = {
  brand: {
    name: config.brand.name,
    tagline: config.brand.tagline,
    cuisine: config.brand.cuisine,
    location: config.brand.location,
  },
  contact: {
    phone: "+1 (555) 123-4567",
    email: "hello@bellavista.com",
    address: "123 Main Street, Downtown, NY 10001",
    mapLink: "https://maps.google.com/?q=123+Main+Street+Downtown+NY+10001",
  },
  hours: {
    monday: { open: "12:00 PM", close: "10:00 PM" },
    tuesday: { open: "12:00 PM", close: "10:00 PM" },
    wednesday: { open: "12:00 PM", close: "10:00 PM" },
    thursday: { open: "12:00 PM", close: "10:00 PM" },
    friday: { open: "12:00 PM", close: "11:00 PM" },
    saturday: { open: "12:00 PM", close: "11:00 PM" },
    sunday: { open: "12:00 PM", close: "9:00 PM" },
  },
  hero: {
    headline: "Experience Culinary Excellence",
    subheadline: "Where tradition meets innovation in every dish",
    ctaPrimary: "Reserve a Table",
    ctaSecondary: "View Menu",
  },
  featuredDishes: [
    {
      name: "Truffle Risotto",
      description: "Creamy Arborio rice with black truffle and parmesan",
      price: "$32",
      tags: ["Signature", "Vegetarian"],
      image: "/images/menu/truffle.jpg",
    },
    {
      name: "Wagyu Beef Tenderloin",
      description: "Premium A5 Wagyu with seasonal vegetables",
      price: "$85",
      tags: ["Premium", "Chef's Choice"],
      image: "/images/menu/beef.jpg",
    },
    {
      name: "Lobster Thermidor",
      description: "Fresh lobster in creamy cognac sauce",
      price: "$48",
      tags: ["Seafood", "Popular"],
      image: "/images/menu/lobster.jpg",
    },
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with espresso and mascarpone",
      price: "$14",
      tags: ["Dessert", "Traditional"],
      image: "/images/menu/tiramisu.jpg",
    },
    {
      name: "New York Cheesecake",
      description: "Creamy cheesecake with berry compote and graham cracker crust",
      price: "$16",
      tags: ["Dessert", "Popular"],
      image: "/images/menu/cheese_cake.jpg",
    },
    {
      name: "Artisan Ice Cream",
      description: "House-made ice cream with seasonal flavors and premium ingredients",
      price: "$12",
      tags: ["Dessert", "House Special"],
      image: "/images/menu/ice_cream.jpg",
    },
  ],
  menuCategories: [
    {
      name: "Starters",
      items: [
        {
          name: "Bruschetta Trio",
          description: "Three varieties: tomato basil, mushroom, and olive tapenade",
          price: "$16",
          tags: ["Vegetarian"],
          image: "/images/menu/truffle.jpg",
        },
        {
          name: "Burrata Caprese",
          description: "Fresh burrata with heirloom tomatoes and basil",
          price: "$18",
          tags: ["Vegetarian"],
          image: "/images/menu/burrata.jpg",
        },
        {
          name: "Seared Scallops",
          description: "Pan-seared scallops with pea puree and pancetta",
          price: "$24",
          image: "/images/menu/scallops.jpg",
        },
      ],
    },
    {
      name: "Mains",
      items: [
        {
          name: "Osso Buco",
          description: "Braised veal shank with saffron risotto",
          price: "$42",
          tags: ["Signature"],
          image: "/images/menu/beef.jpg",
        },
        {
          name: "Wild Mushroom Pasta",
          description: "Handmade pasta with seasonal wild mushrooms",
          price: "$28",
          tags: ["Vegetarian"],
          image: "/images/menu/truffle.jpg",
        },
        {
          name: "Grilled Branzino",
          description: "Mediterranean sea bass with lemon and herbs",
          price: "$36",
          image: "/images/menu/lobster.jpg",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Chocolate Soufflé",
          description: "Warm chocolate soufflé with vanilla ice cream",
          price: "$16",
          image: "/images/menu/tiramisu.jpg",
        },
        {
          name: "Panna Cotta",
          description: "Vanilla panna cotta with berry compote",
          price: "$12",
          image: "/images/menu/ice_cream.jpg",
        },
      ],
    },
    {
      name: "Drinks",
      items: [
        {
          name: "Wine Selection",
          description: "Curated selection of Italian and international wines",
          price: "$12-45",
          image: "/images/backgrounds/menu.jpg",
        },
        {
          name: "Craft Cocktails",
          description: "Handcrafted cocktails with premium spirits",
          price: "$14-18",
          image: "/images/backgrounds/menu.jpg",
        },
      ],
    },
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      quote: "An absolutely unforgettable dining experience. The truffle risotto was perfection!",
      role: "Food Critic",
      rating: 5,
      image: "/images/profiles/guest_1.jpg",
    },
    {
      name: "Michael Chen",
      quote: "Best Italian restaurant in the city. The service and ambiance are unmatched.",
      role: "Regular Guest",
      rating: 5,
      image: "/images/profiles/guest_2.jpg",
    },
    {
      name: "Emily Rodriguez",
      quote: "Every dish tells a story. The chef's attention to detail is remarkable.",
      role: "Culinary Enthusiast",
      rating: 5,
      image: "/images/profiles/guest_3.jpg",
    },
    {
      name: "David Thompson",
      quote: "Perfect for special occasions. The Wagyu beef was melt-in-your-mouth delicious.",
      role: "Food Blogger",
      rating: 5,
      image: "/images/profiles/guest_1.jpg",
    },
  ],
  galleryImages: [
    "/images/menu/truffle.jpg",
    "/images/menu/beef.jpg",
    "/images/menu/lobster.jpg",
    "/images/menu/tiramisu.jpg",
    "/images/menu/cheese_cake.jpg",
    "/images/menu/ice_cream.jpg",
  ],
  socials: {
    instagram: "https://instagram.com/bellavista",
    facebook: "https://facebook.com/bellavista",
    twitter: "https://twitter.com/bellavista",
    yelp: "https://yelp.com/biz/bellavista",
  },
  trustBar: {
    rating: 4.8,
    reviewCount: 324,
    badges: ["Fresh Ingredients", "Open Today 12–10", "Award Winning"],
  },
};
