// app/Data/product.ts
export interface Product {
  id: number;
  name: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  rating?: number; // Added rating
  colors?: string[]; // Added colors
  description?: string; // Added description
  categories?: string[]; // Added categories
  tags?: string[]; // Added tags
}

// app/Data/product.ts
export const products: Product[] = [
  {
    id: 1,
    name: "Vel elit euismod",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/p1.png",
    rating: 4.5,
    colors: ["Red", "Blue", "Green"],
    description: "A comfortable chair with a modern design, perfect for any living room.",
    categories: ["Furniture", "Chairs", "Living Room"],
    tags: ["Modern", "Comfortable", "Stylish"],
  },
  {
    id: 2,
    name: "Ultrices condimentum imperdiet",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/p2.png",
    rating: 4.2,
    colors: ["Black", "White"],
    description: "A stylish and versatile table to fit any office or home decor.",
    categories: ["Furniture", "Tables", "Office"],
    tags: ["Office", "Versatile", "Stylish"],
  },
  {
    id: 3,
    name: "Jonathan adler chair",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/p3.png",
    rating: 4.7,
    colors: ["Gray", "Blue"],
    description: "A chic and comfy chair by Jonathan Adler, perfect for modern interiors.",
    categories: ["Furniture", "Chairs", "Design"],
    tags: ["Chic", "Designer", "Comfort"],
  },
  {
    id: 4,
    name: "Sed at fermentum",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/p4.png",
    rating: 4.0,
    colors: ["Brown", "Beige"],
    description: "A luxurious and durable armchair for all types of interiors.",
    categories: ["Furniture", "Chairs", "Luxury"],
    tags: ["Luxury", "Durable", "Comfortable"],
  },
  {
    id: 5,
    name: "Fusce pellentesque at",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/p5.png",
    rating: 4.3,
    colors: ["Black", "Gold"],
    description: "A sleek and stylish office chair designed for comfort and productivity.",
    categories: ["Furniture", "Chairs", "Office"],
    tags: ["Sleek", "Comfortable", "Productivity"],
  },
  {
    id: 6,
    name: "Vestibulum magna laoreet",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/p6.png",
    rating: 4.6,
    colors: ["Red", "Orange"],
    description: "An elegant side table that adds a touch of style to any room.",
    categories: ["Furniture", "Tables", "Decor"],
    tags: ["Elegant", "Stylish", "Modern"],
  },
  {
    id: 7,
    name: "Sollicitudin amet orci",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/p7.png",
    rating: 4.1,
    colors: ["White", "Gray"],
    description: "A minimalist side table that fits perfectly in any contemporary setting.",
    categories: ["Furniture", "Tables", "Minimalist"],
    tags: ["Minimalist", "Contemporary", "Chic"],
  },
  {
    id: 8,
    name: "Ultrices mauris sit",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/p8.png",
    rating: 4.4,
    colors: ["Black", "Silver"],
    description: "A modern coffee table with a unique design to suit any living space.",
    categories: ["Furniture", "Tables", "Living Room"],
    tags: ["Modern", "Living Room", "Stylish"],
  },
  {
    id: 9,
    name: "Pellentesque condimentum ac",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/p9.png",
    rating: 4.8,
    colors: ["Brown", "Green"],
    description: "A beautiful dining table perfect for family gatherings and formal dinners.",
    categories: ["Furniture", "Tables", "Dining"],
    tags: ["Dining", "Family", "Elegant"],
  },
  {
    id: 10,
    name: "Cras scelerisque velit",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/p10.png",
    rating: 4.0,
    colors: ["Blue", "White"],
    description: "A sleek and stylish sofa perfect for modern living rooms.",
    categories: ["Furniture", "Sofas", "Living Room"],
    tags: ["Sleek", "Modern", "Comfortable"],
  },
  {
    id: 11,
    name: "Cras scelerisque velit",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/pr11.png",
    rating: 4.2,
    colors: ["Gray", "White"],
    description: "A versatile armchair that fits any home decor.",
    categories: ["Furniture", "Chairs", "Living Room"],
    tags: ["Versatile", "Comfort", "Decor"],
  },
  {
    id: 12,
    name: "Cras scelerisque velit",
    originalPrice: 96,
    discountedPrice: 62,
    image: "/p12.png",
    rating: 4.3,
    colors: ["Purple", "Pink"],
    description: "A comfortable lounge chair designed for relaxation.",
    categories: ["Furniture", "Chairs", "Relaxation"],
    tags: ["Comfortable", "Relax", "Lounge"],
  },
];



