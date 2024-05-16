import { Check } from "lucide-react";

export const Users = [
  { 
    src: "/users/user-1.png",
    label: "users1"
  },
  { 
    src: "/users/user-2.png",
    label: "users2"
  },
  { 
    src: "/users/user-3.png",
    label: "users3"
  },
  { 
    src: "/users/user-4.jpg",
    label: "users4"
  },
  { 
    src: "/users/user-5.jpg",
    label: "users5"
  },
];

export const CheckList = [
  { 
    icon: <Check/>,
    text: "High-quality, durable Material",
    key: "High-quality"
  },
  { 
    icon: <Check/>,
    text: "5 Year print Guarantee",
    key: "Guarantee"
  },
  { 
    icon: <Check/>,
    text: "Modern IPhones Models Supported",
    key: "Modern"
  },
]

export const CheckStrengths = [
  { 
    icon: <Check/>,
    text: "High Quality Silicone Material",
    key: "high quality material"
  },
  { 
    icon: <Check/>,
    text: "Scratch and Fingerprint resistant Coating",
    key: "resistant"
  },
  { 
    icon: <Check/>,
    text: "Wireless Charging Compatible",
    key: "wireless"
  },
  { 
    icon: <Check/>,
    text: "5 Year print warranty",
    key: "warranty"
  },
]

export const Testimonials = [
  {
    rating: 5,
    textParts: [
      "The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and ",
      <span className="p-0.5 bg-slate-800 text-white" key="highlight1">
        The Image is Super Clear
      </span>,
      ", On the case I had before, the image started daing into yellow-ish color after a couple weeks. I love it!",
    ],
    user: {
      name: "Johnathan",
      src: "/users/user-1.png",
      verified: true,
    },
  },
  {
    rating: 5,
    textParts: [
      "I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner, ",
      <span className="p-0.5 bg-slate-800 text-white" key="highlight1">
        looks brand new after about half a year
      </span>,
      ". I dig it."
    ],
    user: {
      name: "Josh",
      src: "/users/user-4.jpg",
      verified: true,
    },
  },
];

export const FooterContent = [
  {
    text: "Terms",
    key: "text-1"
  },
  {
    text: "Privacy Policy",
    key: "text-2"
  },
  {
    text: "Cookie Policy",
    key: "text-3"
  },
]