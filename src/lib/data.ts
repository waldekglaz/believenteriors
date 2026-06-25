// Centralised content for Believe Interiors.
// Editing copy or adding gallery items? Do it here.

import type { IconName } from "@/components/Icons";

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Initial quote",
    description: "Send photos and dimensions, we'll provide an estimate.",
  },
  {
    title: "Site visit & design confirmation",
    description:
      "Final measurements, discuss requirements, confirm the design.",
  },
  {
    title: "Installation date booked",
    description: "Once approved, we schedule your installation.",
  },
  {
    title: "50% deposit",
    description: "Covers materials and preparation.",
  },
  {
    title: "Installation",
    description: "Professionally installed with care and attention.",
  },
  {
    title: "Final balance",
    description: "Due upon completion, once you're delighted.",
  },
];

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: "softClose",
    title: "Soft close hinges & runners",
    description:
      "Fitted to all doors and drawers as standard for a quiet, refined finish.",
  },
  {
    icon: "ruler",
    title: "Made to measure",
    description:
      "Every piece is custom fit to your space — no awkward gaps, no off-the-shelf compromises.",
  },
  {
    icon: "scribe",
    title: "Scribe to walls & ceilings",
    description:
      "Uneven surfaces are handled so everything sits flush, floor to ceiling.",
  },
  {
    icon: "install",
    title: "Professionally installed",
    description:
      "Experienced fitters work with precision, treating your home as their own.",
  },
  {
    icon: "clean",
    title: "Clean & tidy",
    description:
      "We protect your home throughout and leave it spotless when we're done.",
  },
  {
    icon: "durable",
    title: "Built to last",
    description:
      "Quality materials and expert craftsmanship designed to stand the test of time.",
  },
];

export type GalleryCategory =
  | "Wardrobes"
  | "Kitchens"
  | "Studies"
  | "Media walls";

export type Project = {
  title: string;
  category: GalleryCategory;
  blurb: string;
  /** Optional real image. Falls back to a styled placeholder when omitted. */
  src?: string;
};

export const projects: Project[] = [
  {
    title: "Floor-to-ceiling wardrobe",
    category: "Wardrobes",
    blurb: "Handleless doors in smooth matt white with integrated lighting.",
  },
  {
    title: "Walk-in dressing room",
    category: "Wardrobes",
    blurb: "Open shelving, hanging rails and a central island in oak.",
  },
  {
    title: "Contemporary galley kitchen",
    category: "Kitchens",
    blurb:
      "Gloss-finish cabinetry with quartz worktops and integrated appliances.",
    src: "/images/kitchen-1.webp",
  },
  {
    title: "Handleless kitchen",
    category: "Kitchens",
    blurb: "Slab doors with a continuous J-pull and stone worktops.",
  },
  {
    title: "Home study",
    category: "Studies",
    blurb: "Fitted desk, drawers and bookcases scribed wall to wall.",
  },
  {
    title: "Alcove study nook",
    category: "Studies",
    blurb: "A compact workspace built into a chimney breast recess.",
  },
  {
    title: "Media wall with fireplace",
    category: "Media walls",
    blurb: "Recessed electric fire framed by lit display niches.",
    src: "/images/tv-wall.webp",
  },
  {
    title: "Cinema media wall",
    category: "Media walls",
    blurb:
      "Custom-built entertainment wall with feature fireplace and ambient lighting.",
    src: "/images/cinema-wall.webp",
  },
  {
    title: "Angled-ceiling wardrobe",
    category: "Wardrobes",
    blurb: "Bespoke fit beneath a sloping loft-conversion ceiling.",
  },
  {
    title: "Pantry & utility run",
    category: "Kitchens",
    blurb: "Full-height larder units with pull-out internal storage.",
  },
  {
    title: "Island kitchen",
    category: "Kitchens",
    blurb: "A generous central island with breakfast-bar seating and storage.",
  },
  {
    title: "Open-plan kitchen-diner",
    category: "Kitchens",
    blurb: "Cabinetry flowing seamlessly into a relaxed dining zone.",
  },
  {
    title: "Classic in-frame kitchen",
    category: "Kitchens",
    blurb: "Timeless in-frame doors with brushed-brass cup handles.",
  },
  {
    title: "Sliding-door wardrobe",
    category: "Wardrobes",
    blurb: "Mirrored sliding doors maximising light in a compact bedroom.",
  },
  {
    title: "Boutique dressing room",
    category: "Wardrobes",
    blurb: "Display shelving, glass-fronted drawers and a dressing island.",
  },
  {
    title: "Children's fitted wardrobe",
    category: "Wardrobes",
    blurb: "Adaptable hanging and shelving designed to grow with them.",
  },
];

export type DoorStyle = {
  name: string;
  description: string;
  /** number of horizontal panels, used by the line illustration */
  panels: number;
  /** "equal" | "lower" | "centred" | "topBottom" — placement hint */
  layout: "single" | "lower" | "centred" | "equal" | "topBottom" | "slab";
  /** Optional photo/render; falls back to the line illustration when absent. */
  image?: string;
};

export const shakerDoors: DoorStyle[] = [
  {
    name: "Single panel",
    description: "A classic full-height shaker frame — clean and versatile.",
    panels: 1,
    layout: "single",
    image: "/images/doors/door-single.webp",
  },
  {
    name: "Mid rail lower",
    description: "A single rail set low for a grounded, contemporary look.",
    panels: 2,
    layout: "lower",
    image: "/images/doors/door-mid-rail-lower.webp",
  },
  {
    name: "Mid rail centred",
    description: "A balanced central rail dividing the door evenly.",
    panels: 2,
    layout: "centred",
    image: "/images/doors/door-mid-rail-center.webp",
  },
  {
    name: "Three panel equal",
    description: "Two rails creating three equal panels with rhythm and depth.",
    panels: 3,
    layout: "equal",
    image: "/images/doors/door-three-panel-equal.webp",
  },
  {
    name: "Three panel top & bottom square",
    description: "Square panels top and bottom framing a tall central panel.",
    panels: 3,
    layout: "topBottom",
    image: "/images/doors/door-three-square.webp",
  },
];

export const slabDoors: DoorStyle[] = [
  {
    name: "Handleless slab",
    description: "A flat, frameless door opened by an integrated J-pull.",
    panels: 1,
    layout: "slab",
  },
  {
    name: "Slab with edge profile",
    description: "Minimalist slab with a subtle routed grip along one edge.",
    panels: 1,
    layout: "slab",
  },
  {
    name: "Slab with bar handle",
    description: "Smooth slab paired with a slimline brushed-metal handle.",
    panels: 1,
    layout: "slab",
  },
];

export type ConstructionDetail = {
  icon: IconName;
  title: string;
  description: string;
};

export const constructionDetails: ConstructionDetail[] = [
  {
    icon: "durable",
    title: "Built strong",
    description:
      "Solid 18mm carcasses, glued and dowelled for rigidity that lasts decades.",
  },
  {
    icon: "door",
    title: "Door construction",
    description:
      "MDF doors are precision-machined, primed and ready for a flawless paint finish.",
  },
  {
    icon: "hinge",
    title: "Premium hardware",
    description:
      "Blum and Hettich soft-close hinges and runners on every door and drawer.",
  },
  {
    icon: "handle",
    title: "Handles of your choice",
    description:
      "Choose from knobs, cup handles, bar handles or fully handleless designs.",
  },
  {
    icon: "fill",
    title: "Caulked, filled & ready to finish",
    description:
      "Joints are caulked and screw heads filled so painting is seamless.",
  },
  {
    icon: "shelf",
    title: "Adjustable shelving",
    description:
      "Shelves reposition on concealed supports as your storage needs change.",
  },
];

export const contactInfo = {
  email: "hello@believeinteriors.co.uk",
  phone: "+44 7700 900123",
  phoneHref: "tel:+447700900123",
  whatsapp: "+44 7700 900123",
  whatsappHref: "https://wa.me/447700900123",
  instagram: "@believeinteriors",
  instagramHref: "https://instagram.com/believeinteriors",
  facebook: "Believe Interiors",
  facebookHref: "https://facebook.com/believeinteriors",
};
