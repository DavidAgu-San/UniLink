export const matches = [
    {
        id: 1,
        name: "Monkey D. Luffy",
        major: "Business",
        minor: "Accounting",
        compatibility: 81,
        tags: ["Outgoing", "Adventurous", "Optimistic"],
        color: "linear-gradient(135deg, #34D399, #059669)",
        category: "Social",
        
    },
    {
        id: 2,
        name: "Roronoa Zoro",
        major: "Computer Science",
        minor: "Mathematics",
        compatibility:78,
        tags: ["Determined", "Loyal", "Disciplined"],
        color: "linear-gradient(135deg, #F7706A, #FBBF24)",
        category: "Study Partners",
        
    },
    {
        id: 3,
        name: "Nami",
        major: "Economics",
        minor: "Finance",
        compatibility: 85,
        tags: ["Intelligent", "Resourceful", "Ambitious"],
        color: "linear-gradient(135deg, #F472B6, #EC4899)",
        category: "Social", 
        
    },
    {
        id: 4,
        name: "Usopp",
        major: "Communications",
        minor: "Media Studies",
        compatibility: 85,
        tags: ["Creative", "Humorous", "Imaginative"],
        color: "linear-gradient(135deg, #bcc838, #17b012)",
        category: "Projects",
        
    },
];

export const events = [
    {
        id: 1,
        title: "Campus Mixer",
        date: "2026-04-15",
        time: "18:00",
        description: "More Life More Music More Vibess!🤪",
        location: "The Bull-Pen",
        rsvpCount: 33,


    },
    {
        id: 2,
        title: "Statistics Test 1 Study Sesshh",
        date: "2026-04-09",
        time: "14:00",
        description: "In the MEAN time, lets find the P(Will Pass The Test|You don't understand Counting Methods)!📚",
        location: "Library Room 101",
        rsvpCount: 5,
    },
    {
        id: 3,
        title: "Anime & Chill: Kimetsu no Yaiba Screening",
        date: "2026-04-12",
        time: "17:00",
        description: "Demon Slayer Marathon!🍿",
        location: "Grimes Lounge",
        rsvpCount: 12,
    },
    {
        id: 4,
        title: "For the Streets",
        date: "2026-04-11",
        time: "16:00",
        description: "Let's link up and vibe on campus!🎉Silent Headphone Party!!",
        location: "The pIT",
        rsvpCount: 59,
    }
];

export const posts = [
    {
        id: 1,
        name: "Jon Snow",
        initials: "JS",
        post: "Winter is coming!❄️",
        date: "2026-04-01",
        likes: 120,
        reposts: 15,
        comments:50,
    },
    {
        id: 2,
        name: "Bruce Wayne",
        initials: "BW",
        post: "I am Batman🫠",
        date: "2026-04-02",
        likes: 200,
        reposts: 25,
        comments: 75,
    },
    {
        id: 3,
        name: "Jermaine Cole",
        initials: "JC",
        post: "No Role Modelz🙂‍↔️",
        date: "2026-04-03",
        likes: 150,
        reposts: 20,
        comments: 60,
    },
    {
        id: 4,
        name: "St. Peter",
        initials: "SP",
        post: "I am the keeper of the keys!🔑",
        date: "2026-04-04",
        likes: 180,
        reposts: 22,
        comments: 65,
    },
];


export const userProfile = {
  course: "BSc Computer Engineering",
  year: "Year 2",
  bio: "Here to find my people — study partners, collaborators, and maybe a few lifelong friends. One Piece fan. Statistics survivor.",
  connections: 12,
  groups: 4,
  topMatch: 85,
  interests: [
    { id: 1, label: "Anime",        style: "purple" },
    { id: 2, label: "Data Science", style: "green"  },
    { id: 3, label: "Basketball",   style: "orange" },
    { id: 4, label: "Music",        style: "pink"   },
    { id: 5, label: "Study Groups", style: "blue"   },
    { id: 6, label: "Gaming",       style: "purple" },
    { id: 7, label: "Coding",       style: "green"  },
  ],
  personality: [
    { id: 1, label: "Communication", value: "Balanced",  width: "70%" },
    { id: 2, label: "Study style",   value: "Focused",   width: "85%" },
    { id: 3, label: "Social energy", value: "Introvert", width: "45%" },
    { id: 4, label: "Availability",  value: "Weekdays",  width: "60%" },
  ]
}

export const groups = [
  {
    id: 1,
    name: "CS Study Squad",
    type: "Academic",
    members: 8,
    description: "Weekly study sessions for Computer Science modules. All years welcome.",
    icon: "📚",
    joined: true,
  },
  {
    id: 2,
    name: "Anime Society",
    type: "Social",
    members: 24,
    description: "Weekly screenings, manga swaps and heated debates about the best arc.",
    icon: "🎌",
    joined: true,
  },
  {
    id: 3,
    name: "Quiet Study Collective",
    type: "Academic",
    members: 13,
    description: "For students who prefer silent focused study sessions. Library regulars.",
    icon: "🧠",
    joined: false,
  },
  {
    id: 4,
    name: "International Students Hub",
    type: "Social",
    members: 41,
    description: "A safe space for international students to connect and support each other.",
    icon: "🌍",
    joined: false,
  },
];


export const messages = [
  { id: 1, name: "Monkey D. Luffy",initials: "MD", preview: "Yo whats poppin?", time: "2m ago",  unread: 2, online: true,
    conversation: [
        { id: 1, sender: "them", text: "Yo whats poppin?", time: "2m ago" },
        { id: 2, sender: "them", text: "You joining the study session tmr?🔥", time: "2m ago" },
    ], color: "linear-gradient(135deg, #6C63FF, #A78BFA)"                                   
    }
,
  { id: 2, name: "Roronoa Zoro",initials: "RZ", preview: "I know what cooked looks like haha thats us",time: "1h ago",  unread: 0, online: false,
    conversation: [
        { id: 1, sender: "me", text: "Bro that stats exam was ROUGH", time: "2h ago" },
        { id: 2, sender: "them", text: "I know what cooked looks like haha thats us", time: "1h ago" },
],color: "linear-gradient(135deg, #34D399, #059669)"},
  { id: 3, name: "Nami", initials: "N",  preview: "Do you have stats notes?👀",time: "3h ago",  unread: 1, online: true,
    conversation: [
        { id: 1, sender: "them", text: "Do you have stats notes?👀", time: "3h ago" },
    ],  color: "linear-gradient(135deg, #F472B6, #EC4899)"},
  { id: 4, name: "Usopp",initials: "U",  preview: "BROOOO!!! Hinokami kagura🔥",time: "Yesterday", unread: 0, online: false,conversation: [
        { id: 1, sender: "them", text: "Did you watch the new Demon Slayer ep?", time: "Yesterday" },
        { id: 2, sender: "me", text: "Not yet dont spoil it", time: "Yesterday" },
        { id: 3, sender: "them", text: "BROOOO!!! Hinokami kagura🔥", time: "Yesterday" },
    ], color: "linear-gradient(135deg, #A78BFA, #6C63FF)" },
  { id: 5, name: "Jon Snow",initials: "JS", preview: "Winter is coming and so is finals😭",time: "Yesterday", unread: 0, online: true, color: "linear-gradient(135deg, #A78BFA, #6C63FF)",
    conversation: [
        { id: 1, sender: "them", text: "The nights watch might betray a brother...", time: "yesterday" },
        { id: 2, sender: "me", text: "You know nothing Jon Snow", time: "yesterday" },
        { id: 3, sender: "them", text: "Winter is coming and so is finals😭that i know at least", time: "yesterday" },
    ]
   },
  { id: 6, name: "Bruce Wayne",initials: "BW", preview: "Stranger Things was a bust fr...",time: "2 days ago", unread: 0, online: false, color: "linear-gradient(135deg, #A78BFA, #6C63FF)",
    conversation: [
        { id: 1, sender: "them", text: "How are you feelin about the new season?", time: "2 days ago" },
        { id: 2, sender: "them", text: "Stranger Things was a bust fr...", time: "2 days ago" },
    ]
  },
  { id: 7, name: "Hope Mikaelson",initials: "HM", preview: "Heyyy",time: "2 days ago", unread: 1, online: true, color: "linear-gradient(135deg, #A78BFA, #6C63FF)",
    conversation: [
        { id: 1, sender: "them", text: "Heyyy", time: "2 daysago" },
    ]
   },
];