export interface EventItem {
  _id: string;
  eventName: string;
  eventDate: string;
  eventInfo: string;
  eventThumbnailKey: string;
  subImages?: string[];
  eventTagline?: string;
  location?: string;
  price?: string;
  seats?: string;
  totalSeats?: number;
  registeredSeats?: number;
  highlights?: Array<{ icon: string; title: string; desc: string }>;
  takeaways?: string[];
}

export interface Member {
  _id: string;
  memberName: string;
  role: string;
  memberBranch: string;
  memberImageKey: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
  priority?: number;
}

export interface YearGroup {
  _id: string;
  year: string;
  events: EventItem[];
  members: Member[];
}

export const yearGroups: YearGroup[] = [
  {
    _id: "yg_2025",
    year: "2025",
    events: [
      {
        _id: "evt_2025_1",
        eventName: "DevFest 2025",
        eventDate: "2025-03-15",
        eventTagline: "The premier developer event celebrating innovation, AI, and cloud technology",
        location: "Walchand College of Engineering, Sangli",
        price: "Free",
        seats: "Seats Filling Fast!",
        totalSeats: 500,
        registeredSeats: 423,
        eventInfo: "Join us for the biggest developer festival of the year featuring talks on AI, Cloud, and Mobile development. Network with industry leaders and learn cutting-edge technologies.",
        eventThumbnailKey: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
        subImages: [
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop"
        ],
        highlights: [
          { icon: "Zap", title: "Live Demos", desc: "Real-time AI demonstrations" },
          { icon: "Users", title: "500+ Attendees", desc: "Connect with peers" },
          { icon: "Award", title: "Certificates", desc: "For all participants" },
          { icon: "Target", title: "Hands-on Labs", desc: "Practical experience" }
        ],
        takeaways: [
          "Hands-on experience with Google Cloud Platform",
          "Understanding LLMs and RAG Architecture",
          "Networking with Industry Experts",
          "Exclusive Swags and Certificates",
          "Career guidance from tech leaders"
        ]
      },
      {
        _id: "evt_2025_2",
        eventName: "Flutter Forward",
        eventDate: "2025-02-20",
        eventTagline: "Multi-platform mastery with Flutter & Dart",
        location: "Main Auditorium, WCE Sangli",
        price: "Free",
        seats: "Limited Seats",
        totalSeats: 250,
        registeredSeats: 210,
        eventInfo: "Explore the future of cross-platform development with Flutter and Dart. Build beautiful, natively compiled applications from a single codebase.",
        eventThumbnailKey: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=800&h=400&fit=crop",
        subImages: [],
        highlights: [
          { icon: "Zap", title: "Widget Mastery", desc: "Deep dive into Flutter internals" },
          { icon: "Users", title: "200+ Developers", desc: "Collaborative learning" },
          { icon: "Award", title: "Code Badges", desc: "Official GDG completion certificate" },
          { icon: "Target", title: "Live App Build", desc: "Ship an app in 3 hours" }
        ],
        takeaways: [
          "State management with Riverpod and Bloc",
          "Cross-platform responsive UI designs",
          "Publishing Flutter apps to Play Store and Web"
        ]
      },
      {
        _id: "evt_2025_3",
        eventName: "AI/ML Workshop",
        eventDate: "2025-01-10",
        eventTagline: "Hands-on neural networks and deep learning models",
        location: "CCF Lab, WCE Sangli",
        price: "Free",
        seats: "Completed",
        totalSeats: 150,
        registeredSeats: 150,
        eventInfo: "Hands-on workshop on building ML models with TensorFlow and Vertex AI. Learn to train, evaluate, and deploy machine learning models at scale.",
        eventThumbnailKey: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        subImages: [],
        highlights: [
          { icon: "Zap", title: "TensorFlow & Keras", desc: "From basics to neural nets" },
          { icon: "Users", title: "Interactive Labs", desc: "1-on-1 mentor guidance" },
          { icon: "Award", title: "Kaggle Badges", desc: "Hands-on competition" },
          { icon: "Target", title: "Model Deployment", desc: "Serve APIs using FastAPI" }
        ],
        takeaways: [
          "TensorFlow & PyTorch foundational concepts",
          "Model evaluation, fine-tuning, and inference",
          "Deploying models with Vertex AI"
        ]
      }
    ],
    members: [
      {
        _id: "mem_2025_1",
        memberName: "Sarah Chen",
        role: "Lead",
        memberBranch: "Computer Science",
        memberImageKey: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        linkedin: "https://linkedin.com/in/example",
        github: "https://github.com/example",
        instagram: "#",
        priority: 1
      },
      {
        _id: "mem_2025_2",
        memberName: "Alex Kumar",
        role: "Tech Lead",
        memberBranch: "Information Technology",
        memberImageKey: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        linkedin: "https://linkedin.com/in/example",
        github: "https://github.com/example",
        instagram: "#",
        priority: 2
      },
      {
        _id: "mem_2025_3",
        memberName: "Emily Rodriguez",
        role: "Co-Lead",
        memberBranch: "Electronics",
        memberImageKey: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        linkedin: "https://linkedin.com/in/example",
        github: "#",
        instagram: "https://instagram.com/example",
        priority: 3
      },
      {
        _id: "mem_2025_4",
        memberName: "James Wilson",
        role: "Secretary",
        memberBranch: "Computer Science",
        memberImageKey: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
        linkedin: "#",
        github: "https://github.com/example",
        instagram: "#",
        priority: 4
      },
      {
        _id: "mem_2025_5",
        memberName: "Priya Sharma",
        role: "Treasurer",
        memberBranch: "Information Technology",
        memberImageKey: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
        linkedin: "https://linkedin.com/in/example",
        github: "#",
        instagram: "#",
        priority: 5
      },
      {
        _id: "mem_2025_6",
        memberName: "Rohan Desai",
        role: "Event Coordinator",
        memberBranch: "Mechanical",
        memberImageKey: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
        linkedin: "#",
        github: "https://github.com/example",
        instagram: "https://instagram.com/example",
        priority: 6
      }
    ]
  },
  {
    _id: "yg_2024",
    year: "2024",
    events: [
      {
        _id: "evt_2024_1",
        eventName: "DevFest 2024",
        eventDate: "2024-11-23",
        eventTagline: "Annual gathering of tech minds, code crafters, and creators",
        location: "Walchand College of Engineering, Sangli",
        price: "Free",
        seats: "Completed",
        totalSeats: 450,
        registeredSeats: 450,
        eventInfo: "A day full of tech talks, workshops, and networking with fellow developers. Featuring keynotes on Web, Android, and Cloud technologies.",
        eventThumbnailKey: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop",
        subImages: [],
        highlights: [
          { icon: "Zap", title: "Keynotes", desc: "Google Developer Experts sessions" },
          { icon: "Users", title: "450+ Attendees", desc: "Regional developer community" },
          { icon: "Award", title: "Swag Bags", desc: "Exclusive GDG merchandise" }
        ],
        takeaways: [
          "State of Modern Web with Angular & React",
          "Android 15 and Compose innovations",
          "Community networking opportunities"
        ]
      },
      {
        _id: "evt_2024_2",
        eventName: "Google I/O Extended",
        eventDate: "2024-05-14",
        eventTagline: "Watch Google I/O live & unpack breakthrough announcements",
        location: "Seminar Hall, WCE Sangli",
        price: "Free",
        seats: "Completed",
        totalSeats: 300,
        registeredSeats: 300,
        eventInfo: "Watch Google I/O together and discuss the latest announcements. Live screening with community discussions and hands-on demos.",
        eventThumbnailKey: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop",
        subImages: [],
        highlights: [
          { icon: "Zap", title: "Gemini Era", desc: "Deep dive into Google Gemini 1.5" },
          { icon: "Users", title: "Panel Talks", desc: "Discussions with alumni in tech" }
        ],
        takeaways: [
          "Understanding Gemini Multimodal APIs",
          "Firebase Studio & Project IDX updates"
        ]
      },
      {
        _id: "evt_2024_3",
        eventName: "Cloud Study Jam",
        eventDate: "2024-08-05",
        eventTagline: "Earn Google Cloud badges and master modern cloud architecture",
        location: "Virtual & Labs",
        price: "Free",
        seats: "Completed",
        totalSeats: 400,
        registeredSeats: 400,
        eventInfo: "Learn Google Cloud Platform with hands-on labs and expert guidance. Earn cloud skill badges and certifications.",
        eventThumbnailKey: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
        subImages: [],
        highlights: [
          { icon: "Target", title: "Qwiklabs Credits", desc: "Free access to GCP labs" },
          { icon: "Award", title: "Google Badges", desc: "Verifiable credentials on LinkedIn" }
        ],
        takeaways: [
          "Google Compute Engine & Cloud Run",
          "Kubernetes Engine deployment basics",
          "Cloud IAM and security best practices"
        ]
      }
    ],
    members: [
      {
        _id: "mem_2024_1",
        memberName: "Michael Park",
        role: "Lead",
        memberBranch: "Computer Science",
        memberImageKey: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
        linkedin: "https://linkedin.com/in/example",
        github: "https://github.com/example",
        instagram: "#",
        priority: 1
      },
      {
        _id: "mem_2024_2",
        memberName: "Lisa Chang",
        role: "Tech Lead",
        memberBranch: "Information Technology",
        memberImageKey: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
        linkedin: "https://linkedin.com/in/example",
        github: "#",
        instagram: "#",
        priority: 2
      },
      {
        _id: "mem_2024_3",
        memberName: "David Kim",
        role: "Co-Lead",
        memberBranch: "Electronics",
        memberImageKey: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
        linkedin: "#",
        github: "https://github.com/example",
        instagram: "#",
        priority: 3
      },
      {
        _id: "mem_2024_4",
        memberName: "Ananya Patel",
        role: "Secretary",
        memberBranch: "Computer Science",
        memberImageKey: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
        linkedin: "https://linkedin.com/in/example",
        github: "#",
        instagram: "https://instagram.com/example",
        priority: 4
      }
    ]
  },
  {
    _id: "yg_2023",
    year: "2023",
    events: [
      {
        _id: "evt_2023_1",
        eventName: "DevFest 2023",
        eventDate: "2023-12-02",
        eventTagline: "Global developer conference on Web, Mobile, and Cloud",
        location: "Walchand College of Engineering, Sangli",
        price: "Free",
        seats: "Completed",
        totalSeats: 350,
        registeredSeats: 350,
        eventInfo: "The biggest developer conference with speakers from around the globe. Three tracks covering Web, Mobile, and AI/ML.",
        eventThumbnailKey: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=400&fit=crop",
        subImages: [],
        highlights: [
          { icon: "Zap", title: "3 Tracks", desc: "Web, Mobile, and AI" },
          { icon: "Users", title: "350+ Attendees", desc: "Full house celebration" }
        ],
        takeaways: [
          "State of modern JavaScript",
          "Cross-platform mobile apps"
        ]
      },
      {
        _id: "evt_2023_2",
        eventName: "Android Study Jam",
        eventDate: "2023-09-15",
        eventTagline: "4-week intensive sprint into modern Android development",
        location: "Lab 3, WCE Sangli",
        price: "Free",
        seats: "Completed",
        totalSeats: 120,
        registeredSeats: 120,
        eventInfo: "Build your first Android app with Kotlin and Jetpack Compose. A 4-week intensive learning program.",
        eventThumbnailKey: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=400&fit=crop",
        subImages: [],
        highlights: [
          { icon: "Target", title: "Jetpack Compose", desc: "Declarative UI in Kotlin" },
          { icon: "Award", title: "Google Certificate", desc: "Android track completion" }
        ],
        takeaways: [
          "Kotlin coroutines and async programming",
          "Building responsive layouts with Compose"
        ]
      }
    ],
    members: [
      {
        _id: "mem_2023_1",
        memberName: "Rachel Green",
        role: "Lead",
        memberBranch: "Computer Science",
        memberImageKey: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop",
        linkedin: "https://linkedin.com/in/example",
        github: "#",
        instagram: "#",
        priority: 1
      },
      {
        _id: "mem_2023_2",
        memberName: "Tom Anderson",
        role: "Tech Lead",
        memberBranch: "Information Technology",
        memberImageKey: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop",
        linkedin: "#",
        github: "#",
        instagram: "#",
        priority: 2
      }
    ]
  }
];

/**
 * Helper accessors for static data
 */
export const getAllYears = async (): Promise<YearGroup[]> => {
  return yearGroups;
};

export const getEventsByYear = async (yearId: string): Promise<EventItem[]> => {
  const group = yearGroups.find(
    (yg) => yg._id === yearId || yg.year === yearId || yg.year === String(yearId)
  );
  return group ? group.events : [];
};

export const getMembersByYear = async (yearId: string): Promise<Member[]> => {
  const group = yearGroups.find(
    (yg) => yg._id === yearId || yg.year === yearId || yg.year === String(yearId)
  );
  return group ? group.members : [];
};

export const getEventById = async (eventId: string): Promise<EventItem | null> => {
  for (const group of yearGroups) {
    const match = group.events.find((e) => e._id === eventId || (e as any).id === eventId);
    if (match) return match;
  }
  return null;
};

export const getImageUrl = (imageKey?: string): string => {
  if (!imageKey) return "";
  return imageKey;
};

export default {
  yearGroups,
  getAllYears,
  getEventsByYear,
  getMembersByYear,
  getEventById,
  getImageUrl,
};
