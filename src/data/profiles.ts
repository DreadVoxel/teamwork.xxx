export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  tagline: string;
  bio: string;
  interests: string[];
  imagePlaceholder: string;
}

export const profiles: Profile[] = [
  {
    id: "1",
    name: "Emma Thompson",
    age: 28,
    location: "New York, NY",
    tagline: "Adventure seeker with a love for art",
    bio: "Creative soul who believes in making every moment count. I spend my weekends exploring hidden galleries, trying new cuisines, and capturing life through my camera lens. Looking for someone who appreciates both quiet evenings and spontaneous adventures.",
    interests: ["Photography", "Art", "Travel", "Cooking", "Music"],
    imagePlaceholder: "/placeholder-profile-1.jpg"
  },
  {
    id: "2",
    name: "James Mitchell",
    age: 32,
    location: "Los Angeles, CA",
    tagline: "Entrepreneur by day, chef by night",
    bio: "Building my dream startup while perfecting my pasta recipes. I believe in work-life balance and finding joy in simple things. Looking for a genuine connection with someone who values authenticity and good conversation.",
    interests: ["Entrepreneurship", "Cooking", "Hiking", "Wine Tasting", "Tech"],
    imagePlaceholder: "/placeholder-profile-2.jpg"
  },
  {
    id: "3",
    name: "Sofia Rodriguez",
    age: 26,
    location: "Miami, FL",
    tagline: "Dance is my language of love",
    bio: "Professional dancer with a passion for Latin culture. When I'm not in the studio, you'll find me at the beach or exploring local markets. I believe that life is meant to be lived with passion and purpose.",
    interests: ["Dancing", "Beach", "Fitness", "Languages", "Travel"],
    imagePlaceholder: "/placeholder-profile-3.jpg"
  },
  {
    id: "4",
    name: "Michael Chen",
    age: 30,
    location: "San Francisco, CA",
    tagline: "Tech geek with a poetic soul",
    bio: "Software engineer who writes code by day and poetry by night. I enjoy deep conversations, board game nights, and exploring the outdoors. Seeking someone who appreciates both logical thinking and creative expression.",
    interests: ["Technology", "Writing", "Board Games", "Hiking", "Coffee"],
    imagePlaceholder: "/placeholder-profile-4.jpg"
  },
  {
    id: "5",
    name: "Isabella Martinez",
    age: 27,
    location: "Austin, TX",
    tagline: "Music teacher spreading joy one note at a time",
    bio: "There's nothing quite like the magic of music. I teach piano to kids and play in a jazz band on weekends. Looking for someone who can appreciate a good melody and isn't afraid to sing along in the car.",
    interests: ["Music", "Teaching", "Jazz", "Yoga", "Reading"],
    imagePlaceholder: "/placeholder-profile-5.jpg"
  },
  {
    id: "6",
    name: "David Kim",
    age: 34,
    location: "Seattle, WA",
    tagline: "Architect designing dreams into reality",
    bio: "I see beauty in structure and find inspiration in unexpected places. When not sketching buildings, I'm brewing craft beer or cycling through the city. Looking for someone who shares my appreciation for design and good coffee.",
    interests: ["Architecture", "Cycling", "Craft Beer", "Design", "Museums"],
    imagePlaceholder: "/placeholder-profile-6.jpg"
  },
  {
    id: "7",
    name: "Olivia Williams",
    age: 29,
    location: "Chicago, IL",
    tagline: "Veterinarian with a heart for all creatures",
    bio: "Animals have always been my calling. I run a small animal clinic and volunteer at local shelters. Looking for someone kind-hearted who might want to adopt our future pets together.",
    interests: ["Animals", "Volunteering", "Running", "Baking", "Nature"],
    imagePlaceholder: "/placeholder-profile-7.jpg"
  },
  {
    id: "8",
    name: "Alexander Brooks",
    age: 31,
    location: "Boston, MA",
    tagline: "History professor with stories to tell",
    bio: "I teach history at a local university and believe the past holds valuable lessons for the future. I enjoy visiting historical sites, reading by the fireplace, and engaging in thoughtful debates over dinner.",
    interests: ["History", "Reading", "Travel", "Museums", "Philosophy"],
    imagePlaceholder: "/placeholder-profile-8.jpg"
  }
];
