import { Product } from "../interfaces/Product";

import chair1 from "../assets/images/products/chair1.png";
import chair2 from "../assets/images/products/chair2.png";
import chair3 from "../assets/images/products/chair3.png";
import chair4 from "../assets/images/products/chair4.png";
import chair5 from "../assets/images/products/chair5.png";
import chair6 from "../assets/images/products/chair6.png";
import chair7 from "../assets/images/products/chair7.png";
import chair8 from "../assets/images/products/chair8.png";
import lamp1 from "../assets/images/products/lamp1.png";
import lamp2 from "../assets/images/products/lamp2.png";
import lamp3 from "../assets/images/products/lamp3.png";
import lamp4 from "../assets/images/products/lamp4.png";
import lamp5 from "../assets/images/products/lamp5.png";
import lamp6 from "../assets/images/products/lamp6.png";
import lamp7 from "../assets/images/products/lamp7.png";
import lamp8 from "../assets/images/products/lamp8.png";
import lamp9 from "../assets/images/products/lamp9.png";
import bed1 from "../assets/images/products/bed1.png";
import bed2 from "../assets/images/products/bed2.png";
import bed3 from "../assets/images/products/bed3.png";
import bed4 from "../assets/images/products/bed4.png";
import bed5 from "../assets/images/products/bed5.png";
import bed6 from "../assets/images/products/bed6.png";
import sofa1 from "../assets/images/products/sofa1.png";
import sofa2 from "../assets/images/products/sofa2.png";
import sofa3 from "../assets/images/products/sofa3.png";
import sofa4 from "../assets/images/products/sofa4.png";
import sofa5 from "../assets/images/products/sofa5.png";
import sofa6 from "../assets/images/products/sofa6.png";
import sofa7 from "../assets/images/products/sofa7.png";
import sofa8 from "../assets/images/products/sofa8.png";

const data: Product[] = [
  {
    id: 1,
    name: "Baltsar Chair",
    shortDesc: "fghdijfngsfmfojansfjgindfjgnajosdmfk",
    description: "ffhgdjdfgjshdhdfhkjruhkdjsdfhjdotiyudkjsdfhdyjiktyijyh",
    price: 290,
    image: chair1,
    categoryId: 1,
    category: {
      id: 1,
      name: "Chairs",
      displayOrder: 1,
    },
  },
  {
    id: 2,
    name: "Nyantuy Chair",
    shortDesc: "dxghjhdjfsgshfgdhfdhnjdhfmg",
    description: "zbhfjklghf,mhxfghnfmk,jf.fhk.jldkfjghdfg",
    price: 465,
    image: chair2,
    categoryId: 1,
    category: {
      id: 1,
      name: "Chairs",
      displayOrder: 1,
    },
  },
  {
    id: 3,
    name: "Anjay Chair",
    shortDesc: "dxghjhdjfsgshfgdhfdhnjdhfmg",
    description:
      "cj,./j/h.fhgghfgdghgsfhdjflkg;hlgjkfljdkhjhgfgfhgfdhgfjhtioeitugjxhdgjfiroitujghfdgjfuyitujmxhgjudkytsgjxhjfludyjgx",
    price: 115,
    image: chair3,
    categoryId: 1,
    category: {
      id: 1,
      name: "Chairs",
      displayOrder: 1,
    },
  },
  {
    id: 4,
    name: "Sakarias Armchair",
    shortDesc: "dxghjhdjfsgshfgdhfdhnjdhfmg",
    description: "yhjyietyrwtagrthyjkiruidtjsyd",
    price: 759,
    image: chair4,
    categoryId: 1,
    category: {
      id: 1,
      name: "Chairs",
      displayOrder: 1,
    },
  },
  {
    id: 5,
    name: "Sakarias Armchair",
    shortDesc: "dxghjhdjfsgshfgdhfdhnjdhfmg",
    description: "yhjyietyrwtagrthyjkiruidtjsyd",
    price: 759,
    image: chair5,
    categoryId: 1,
    category: {
      id: 1,
      name: "Chairs",
      displayOrder: 1,
    },
  },
  {
    id: 6,
    name: "Anjay Chair",
    shortDesc: "dxghjhdjfsgshfgdhfdhnjdhfmg",
    description: "yhjyietyrwtagrthyjkiruidtjsyd",
    price: 390,
    image: chair6,
    categoryId: 1,
    category: {
      id: 1,
      name: "Chairs",
      displayOrder: 1,
    },
  },
  {
    id: 7,
    name: "Baltsar Chair",
    shortDesc: "dxghjhdjfsgshfgdhfdhnjdhfmg",
    description: "yhjyietyrwtagrthyjkiruidtjsyd",
    price: 830,
    image: chair7,
    categoryId: 1,
    category: {
      id: 1,
      name: "Chairs",
      displayOrder: 1,
    },
  },
  {
    id: 8,
    name: "Anjay Chair",
    shortDesc: "dxghjhdjfsgshfgdhfdhnjdhfmg",
    description: "bnhgkfdgfhsgdzhfghm",
    price: 105,
    image: chair8,
    categoryId: 1,
    category: {
      id: 1,
      name: "Chairs",
      displayOrder: 1,
    },
  },
  {
    id: 9,
    name: "Capri Floor Lamp",
    shortDesc: "The Thomas O'Brien Capri Floor Lamp",
    description:
      "The Thomas O'Brien Capri Floor Lamp offers a sophisticated look that will tie into a number of interiors, featuring a slim body set into a round table base, and topped with a tapered White Linen shade. The Aged Iron finish of this fixture will patina over time; this lamp is also available in Polished Nickel. The Capri family includes chandeliers with large scale arms welded into the hub, tapered, conical and globe pendants with milk glass shades, sconces and a floor lamp. Robust and versatile series that uses classical profiles to make its distinctive finial and other fine details, from white linen shades to unique finishes.",
    price: 469,
    image: lamp1,
    categoryId: 2,
    category: {
      id: 2,
      name: "Lamps",
      displayOrder: 2,
    },
  },
  {
    id: 10,
    name: "Wood Floor Lamp",
    shortDesc: "The Thomas O'Brien Capri Floor Lamp",
    description:
      "The Thomas O'Brien Capri Floor Lamp offers a sophisticated look that will tie into a number of interiors, featuring a slim body set into a round table base, and topped with a tapered White Linen shade. The Aged Iron finish of this fixture will patina over time; this lamp is also available in Polished Nickel. The Capri family includes chandeliers with large scale arms welded into the hub, tapered, conical and globe pendants with milk glass shades, sconces and a floor lamp. Robust and versatile series that uses classical profiles to make its distinctive finial and other fine details, from white linen shades to unique finishes.",
    price: 320,
    image: lamp2,
    categoryId: 2,
    category: {
      id: 2,
      name: "Lamps",
      displayOrder: 2,
    },
  },
  {
    id: 11,
    name: "Lotus Floor Lamp",
    shortDesc: "The Floor Lamp",
    description:
      "Part of the iconic Nelson Bubble Lamp series collection, the Nelson Cigar Lotus Floor Lamp from Herman Miller offers a rounded shape with clean lines accentuating its elongated sphere. Affixed to a steel stand, it disperses a soft light within any space. Inspired by silk-covered Swedish hanging lamps, the series was originally designed at the height of the mid-century modern movement in 1952. Handcrafted, this eye-catching and instantly recognizable luminary is perfect stationed next to a favorite lounge chair in the study or as ambient lighting in the living room.",
    price: 935,
    image: lamp3,
    categoryId: 2,
    category: {
      id: 2,
      name: "Lamps",
      displayOrder: 2,
    },
  },
  {
    id: 12,
    name: "Grashoppa Floor Lamp",
    shortDesc: "The Floor Lamp",
    description:
      "A true lighting icon, the Grashoppa Floor Lamp from Gubi was first produced in 1947 and remains a highly sought-after lighting design to this day. Showcasing a tubular steel tripod stand, this slim silhouette frame contrasts with an elongated steel conical shade that is mounted with a free moving joint in solid brass for effortless movement. While the light is directional, the glare is minimal thanks to the interior of the shade. The perfect companion to a reading nook set up or at-home office space, the Grashoppa brings sleek, mid-century modern style to any room in your contemporary abode.",
    price: 1199,
    image: lamp4,
    categoryId: 2,
    category: {
      id: 2,
      name: "Lamps",
      displayOrder: 2,
    },
  },
  {
    id: 13,
    name: "Leaf Floor Lamp",
    shortDesc: "The Floor Lamp",
    description:
      "The shape of the Leaf lamp creates an iconic silhouette. It has a build-in energy-efficient LED bulb with a Lumen Maintenance (Lifetime) of L90 B10 35.000 hours. The dim function makes it possible to adjust the light to the mood. With an ultra-thin body and subtly-curved LED head, the Leaf Floor Lamp brings a gentle light to any space.",
    price: 639,
    image: lamp5,
    categoryId: 2,
    category: {
      id: 2,
      name: "Lamps",
      displayOrder: 2,
    },
  },
  {
    id: 14,
    name: "Arya Floor Lamp",
    shortDesc: "The Floor Lamp",
    description:
      "A design project with an appearance that changes according to how they are used. Arya lamps, by Giulio Cappellini and Antonio Facco, look visibly different when they are turned on or off: the essential contours of the shapes are colorful when turned off, and emit soft, subtly colored light when lit.The Arya collection includes floor lamps, table lamps and hanging lamps: for all the lines, the lamp shades are made of pasta-colored glass that has been mouth-blown into a mold. The hues of the matte-finish glass include: white, smoke, air force blue, and chocolate. The metallic parts of the lamps are black, in all designs in the collection.The fruit of the ancient art of master glassmakers, the lamp shades of the Arya lamps are one-of-a-kind. Any irregularities in the color or thickness of the glass, or any tiny air bubbles, are due to the artisanal workmanship, and likewise should be considered a valuable addition.",
    price: 1715,
    image: lamp6,
    categoryId: 2,
    category: {
      id: 2,
      name: "Lamps",
      displayOrder: 2,
    },
  },
  {
    id: 15,
    name: "Opala Floor Lamp",
    shortDesc: "The Floor Lamp",
    description:
      "Opala was originally designed by Hans J. Wegner for Hotel Scandinavia in Copenhagen. A distinct, almost futuristic design, a superb light quality combined with the very best materials and craftsmanship have created a true classic for both hotels, public spaces, offices &amp; private homes.",
    price: 415,
    image: lamp7,
    categoryId: 2,
    category: {
      id: 2,
      name: "Lamps",
      displayOrder: 2,
    },
  },
  {
    id: 16,
    name: "Captain Floor Lamp",
    shortDesc: "The Floor Lamp",
    description:
      "Offering elevated style and sleek details, the Captain Flint Floor Lamp from FLOS is a graceful and stylish addition to your living or office space. Designed by Michael Anastassiades, this floor lamp is crafted from aluminum, steel, polycarbonate, and features a natural marble base for sturdy placement throughout your home. The cone-shaped diffuser provides direct light that is on a rotating rod and can be adjusted and repositioned to fit your needs. Station in a corner of your favorite reading area or use as an accent light in an entryway or dark corner of your home.",
    price: 539,
    image: lamp8,
    categoryId: 2,
    category: {
      id: 2,
      name: "Lamps",
      displayOrder: 2,
    },
  },
  {
    id: 17,
    name: "Luci Floor Lamp",
    shortDesc: "The Floor Lamp",
    description:
      "Luci is a fully rechargeable portable luminaire that allows you to take your ambiance wherever you go indoors and out. Defined by its simplicity of form and high tactile feel, Luci features an all-machined aluminum body that's premium to the touch and brings elegance to any intimate moment or social gathering. Representing the future of illumination, Luci features state of the art Dim to Warm light technology with 3 preset light level plus full range dimming which are activated via optical switch atop the shade. Luci also boasts a best-in-class battery life to provide many hours of untethered illumination between charges. Luci is offered in three anodized machine trace finishes in Silver, Brass, and Black and textured Matte White.",
    price: 495,
    image: lamp9,
    categoryId: 2,
    category: {
      id: 2,
      name: "Lamps",
      displayOrder: 2,
    },
  },
  {
    id: 18,
    name: "Jane 2 Bi-Sectional",
    shortDesc: "Sofa",
    description:
      "The iconic, tufted design of the Jane 2 Bi-Sectional Sofa by Gus is a brilliant mid-century modern piece for your living space. With a custom configuration for the chaise, simply adjust the bottom chaise to the other side to re-proportion your room. Piped edges and button-tufted cushions bring out the vintage style to match a natural ash or walnut base. While the cushions are high durable and resilient against wear, the design radiates a light feel and relaxing comfort.",
    price: 3495,
    image: sofa1,
    categoryId: 4,
    category: {
      id: 4,
      name: "Sofa",
      displayOrder: 4,
    },
  },
  {
    id: 19,
    name: "Podium Modular",
    shortDesc: "Sofa",
    description:
      "An adaptable seating system that brings modern elegance and luxurious comfort to your home, the Podium Modular 4-Piece Sectional from Gus is ready to cradle you as you relax for hours on end. Stylish and streamlined, this sectional sofa offers deep, spacious seats perfect for up to five people to enjoy comfortably. Featuring an FSC-certified hardwood frame, this sectional is topped with plush cushions filled with an eco-friendly synthetic down for guilt-free relaxation.",
    price: 5480,
    image: sofa2,
    categoryId: 4,
    category: {
      id: 4,
      name: "Sofa",
      displayOrder: 4,
    },
  },
  {
    id: 20,
    name: "Silverlake Sectional",
    shortDesc: "Sofa",
    description:
      "A Scandinavian-inspired seating design that strikes an elegant balance between minimalist styling and a casual, inviting feel, the Silverlake Sectional from Gus is ready to elevate any modern interior. Featuring a slender tuxedo frame and plush seat and back cushions filled with eco-friendly, PET fill, this sectional is casual, yet elevated, guaranteeing comfort and relaxation for late night TV watching or afternoon naps. Subtle features like pleated fabric details and architectural, black powder-coated steel legs confirm Silverlake’s laid-back modern aesthetic.",
    price: 4790,
    image: sofa3,
    categoryId: 4,
    category: {
      id: 4,
      name: "Sofa",
      displayOrder: 4,
    },
  },
  {
    id: 21,
    name: "Grant Sectional",
    shortDesc: "Sofa",
    description:
      "The fancy sweatpants of sofas. Elegantly nonchalant, endlessly comfortable and the envy of everyone. When it comes to your comfort, Esker has thought of everything. Wide, low arms provide a satisfying resting spot for your head, your arm or your four-legged friend. A deep sit and overhanging cushions keep your lower half happy and your lounging game on point.",
    price: 2890,
    image: sofa4,
    categoryId: 4,
    category: {
      id: 4,
      name: "Sofa",
      displayOrder: 4,
    },
  },
  {
    id: 22,
    name: "Esker 82 Inch",
    shortDesc: "Sofa",
    description:
      "The fancy sweatpants of sofas. Elegantly nonchalant, endlessly comfortable and the envy of everyone. When it comes to your comfort, Esker has thought of everything. Wide, low arms provide a satisfying resting spot for your head, your arm or your four-legged friend. A deep sit and overhanging cushions keep your lower half happy and your lounging game on point.",
    price: 1795,
    image: sofa5,
    categoryId: 4,
    category: {
      id: 4,
      name: "Sofa",
      displayOrder: 4,
    },
  },
  {
    id: 23,
    name: "Esker With Chaise",
    shortDesc: "Sofa",
    description:
      "The Podium Modular Collection is an adaptable seating system that brings modern elegance and luxurious comfort to any space. The Podium features seven core components (Right Arm, Left Arm, Armless, Corner, Ottoman, Left Lounge and Right Lounge) that can be arranged in unlimited configurations to suit any vision or layout. Components can then be easily reconfigured or added later to adapt to your evolving lifestyle. Each component showcases a relaxed silhouette inspired by 1970’s Modernism: a low and deep sit created by plush seat and back cushions (filled with eco-friendly synthetic down derived from recycled water bottles), and an attractive, subtly angled, chamfered base. The frames are constructed with kiln-dried 100% FSC®-Certified hardwood in support of responsible forest management.",
    price: 3250,
    image: sofa6,
    categoryId: 4,
    category: {
      id: 4,
      name: "Sofa",
      displayOrder: 4,
    },
  },
  {
    id: 24,
    name: "Seater Sofa",
    shortDesc: "Sofa",
    description:
      "The Podium Modular Collection is an adaptable seating system that brings modern elegance and luxurious comfort to any space. The Podium features seven core components (Right Arm, Left Arm, Armless, Corner, Ottoman, Left Lounge and Right Lounge) that can be arranged in unlimited configurations to suit any vision or layout. Components can then be easily reconfigured or added later to adapt to your evolving lifestyle. Each component showcases a relaxed silhouette inspired by 1970’s Modernism: a low and deep sit created by plush seat and back cushions (filled with eco-friendly synthetic down derived from recycled water bottles), and an attractive, subtly angled, chamfered base. The frames are constructed with kiln-dried 100% FSC®-Certified hardwood in support of responsible forest management.",
    price: 4590,
    image: sofa7,
    categoryId: 4,
    category: {
      id: 4,
      name: "Sofa",
      displayOrder: 4,
    },
  },
  {
    id: 25,
    name: "Jane Loft Sofa",
    shortDesc: "Sofa",
    description:
      "A Scandinavian-inspired seating design that strikes an elegant balance between minimalist styling and a casual, inviting feel, the Silverlake Sectional from Gus is ready to elevate any modern interior. Featuring a slender tuxedo frame and plush seat and back cushions filled with eco-friendly, PET fill, this sectional is casual, yet elevated, guaranteeing comfort and relaxation for late night TV watching or afternoon naps. Subtle features like pleated fabric details and architectural, black powder-coated steel legs confirm Silverlake’s laid-back modern aesthetic.",
    price: 3695,
    image: sofa8,
    categoryId: 4,
    category: {
      id: 4,
      name: "Sofa",
      displayOrder: 4,
    },
  },
  {
    id: 26,
    name: "Eaton Bed",
    shortDesc: "Comfortable Bed",
    description:
      "High style with organic vibes. Black resin fills in the natural cracks and graining of this cradle-base bed of beautiful oak. Subtle variance of resin placement and volume speaks to design's character-rich nature. Box spring not required. This bed is not compatible with an adjustable mattress.",
    price: 1799,
    image: bed1,
    categoryId: 3,
    category: {
      id: 3,
      name: "Beds",
      displayOrder: 3,
    },
  },
  {
    id: 27,
    name: "Foundations Bed",
    shortDesc: "Comfortable Bed",
    description:
      "Foundations is a new, refined expression of modern rustic, defined by a minimalist style and relaxed comfort. Highlighted by a button-tufted headboard and a sleek, architectural acacia wood frame, the Foundations bed transforms any bedroom into a cozy haven. Clean lines and intersecting planes merge to create a look that exudes remarkable calm and tranquility.",
    price: 2155,
    image: bed2,
    categoryId: 3,
    category: {
      id: 3,
      name: "Beds",
      displayOrder: 3,
    },
  },
  {
    id: 28,
    name: "Axiom Bed",
    shortDesc: "Comfortable Bed",
    description:
      "This elegant bed design brings together straight lines and a high, luxurious headboard for an elegant feel for your bedroom. The high, padded headboard and matching footboard surround you in cushioned support. The rectangular shape of the padded headboard cushions provides an attractive modern statement while the upholstery and light-toned wood frame offer a soft, relaxing feel. This bed is available in King, and Queen. This bed matches beautifully with Bernhardt's wide range of nightstands, dressers, and upholstered benches.",
    price: 3071,
    image: bed3,
    categoryId: 3,
    category: {
      id: 3,
      name: "Beds",
      displayOrder: 3,
    },
  },
  {
    id: 29,
    name: "Rosedale Bed",
    shortDesc: "Comfortable Bed",
    description:
      "Experience beauty in simplicity with the Rosedale Bed from Four Hands. Crafted from washed oak and top-grain leather, its modern material mix offers a visually light and clean style; while its tightly upholstered headboard and softly rounded legs exude sophistication and elegance. Solid and durable, this distinctive bed will slowly reveal its character with time, becoming a timeless piece of furniture&nbsp;to&nbsp;cherish.",
    price: 1699,
    image: bed4,
    categoryId: 3,
    category: {
      id: 3,
      name: "Beds",
      displayOrder: 3,
    },
  },
  {
    id: 30,
    name: "Sloane Bed",
    shortDesc: "Comfortable Bed",
    description:
      "With its plush upholstered headboard and soft contemporary design, the Sloane bedroom will bring comfort, class and style to your home.",
    price: 4035,
    image: bed5,
    categoryId: 3,
    category: {
      id: 3,
      name: "Beds",
      displayOrder: 3,
    },
  },
  {
    id: 31,
    name: "CLOE Bed",
    shortDesc: "Comfortable Bed",
    description:
      "A stately and handsome frame with a subtle touch of elegance, the CLOE Upholstered Bed from Huppe is the perfect platform for elevating your sleep space for restful nights and memorable mornings. Crafted from North American birch veneer with a button-tufted fabric headboard, this bedframe is available in a wide variety of finish options to effortless match your space. A platform-style frame, simply top with your mattress of choice and plush bedding for a chic and stylish space to relax and recharge.",
    price: 2850,
    image: bed6,
    categoryId: 3,
    category: {
      id: 3,
      name: "Beds",
      displayOrder: 3,
    },
  },
];

export default data;
