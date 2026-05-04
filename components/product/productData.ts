export type ProductColor = {
  id: string
  name: string
  swatch: string
  amazonUrl: string
  images: string[]
}

export type ProductVariant = {
  id: string
  name: string
  price: number
  originalPrice: number
  colors: ProductColor[]
}

const productImageBase = '/product images'

export const productVariants: ProductVariant[] = [
  {
    id: 'standard',
    name: 'Standard (3ft)',
    price: 599,
    originalPrice: 899,
    colors: [
      {
        id: 'white',
        name: 'White',
        swatch: '#f8fafc',
        amazonUrl: 'https://amzn.in/d/0gQ1BWJH',
        images: [
          `${productImageBase}/Standard/White/IMG_8038(1) 2.jpg`,
          `${productImageBase}/Standard/White/My project- 2 1.jpg`,
          `${productImageBase}/Standard/White/3.jpg`,
          `${productImageBase}/Standard/White/6 1.jpg`,
          `${productImageBase}/Standard/White/9.jpg`,
        ],
      },
      {
        id: 'black',
        name: 'Black',
        swatch: '#111827',
        amazonUrl: 'https://amzn.in/d/0hm8FRvd',
        images: [
          `${productImageBase}/Standard/Black/IMG_7224 1.jpg`,
          `${productImageBase}/Standard/Black/IMG_7225(2).jpg`,
          `${productImageBase}/Standard/Black/IMG_72251.jpg`,
          `${productImageBase}/Standard/Black/1.jpg`,
          `${productImageBase}/Standard/Black/3.jpg`,
          `${productImageBase}/Standard/Black/5.jpg`,
        ],
      },
      {
        id: 'grey',
        name: 'Grey',
        swatch: '#6b7280',
        amazonUrl: 'https://amzn.in/d/01pJQBjO',
        images: [
          `${productImageBase}/Standard/Grey/IMG_20240116_084152-removebg-preview (1).png`,
          `${productImageBase}/Standard/Grey/imgonline-com-ua-ReplaceColor-AFfB0eIjFC6J0iwX.png`,
          `${productImageBase}/Standard/Grey/imgonline-com-ua-ReplaceColor-HaMNlWqQmgkeB.png`,
          `${productImageBase}/Standard/Grey/imgonline-com-ua-ReplaceColor-aFGRfdcb1hkVrAXr.png`,
          `${productImageBase}/Standard/Grey/imgonline-com-ua-ReplaceColor-qv7TjXjuS7xtGt.png`,
          `${productImageBase}/Standard/Grey/imgonline-com-ua-ReplaceColor-sjmD5uqs2CWMAw.png`,
          `${productImageBase}/Standard/Grey/imgonline-com-ua-ReplaceColor-xLBRJwSgAjOXU.png`,
        ],
      },
      {
        id: 'yellow',
        name: 'Yellow',
        swatch: '#facc15',
        amazonUrl: 'https://amzn.in/d/03iLmOTK',
        images: [
          `${productImageBase}/Standard/Yellow/IMG_6340.jpg`,
          `${productImageBase}/Standard/Yellow/IMG_7218.jpg`,
          `${productImageBase}/Standard/Yellow/IMG_7219.jpg`,
          `${productImageBase}/Standard/Yellow/2.jpg`,
          `${productImageBase}/Standard/Yellow/4.jpg`,
          `${productImageBase}/Standard/Yellow/6.jpg`,
        ],
      },
    ],
  },
  {
    id: 'heavy-duty',
    name: 'Heavy Duty (3ft)',
    price: 1299,
    originalPrice: 1799,
    colors: [
      {
        id: 'yellow',
        name: 'Yellow',
        swatch: '#facc15',
        amazonUrl: 'https://amzn.in/d/00Eb4IyZ',
        images: [
          `${productImageBase}/Heavy-Duty/Yellow/IMG20250202191303-Photoroom.png`,
          `${productImageBase}/Heavy-Duty/Yellow/IMG20250131192541-Photoroom.jpg`,
          `${productImageBase}/Heavy-Duty/Yellow/Zoom In Image.png`,
          `${productImageBase}/Heavy-Duty/Yellow/Complete Packaging V2 copy.png`,
          `${productImageBase}/Heavy-Duty/Yellow/Car Tyre-Photoroom.jpg`,
          `${productImageBase}/Heavy-Duty/Yellow/Untitled design (1).png`,
        ],
      },
      {
        id: 'black',
        name: 'Black',
        swatch: '#111827',
        amazonUrl: 'https://amzn.in/d/0g00fJDz',
        images: [
          `${productImageBase}/Heavy-Duty/Black/91sEhlbXm7L.hjh_SX679_-Photoroom-Photoroom.jpg`,
          `${productImageBase}/Heavy-Duty/Black/IMG20250131191836-Photoroom.jpg`,
          `${productImageBase}/Heavy-Duty/Black/Zoom In Image (2).png`,
          `${productImageBase}/Heavy-Duty/Black/Dimension-Photoroom (2).jpg`,
          `${productImageBase}/Heavy-Duty/Black/Complete Packaging V2 (2) copy.png`,
        ],
      },
      {
        id: 'yellow-black',
        name: 'Yellow + Black',
        swatch: 'linear-gradient(135deg, #facc15 0 50%, #111827 50% 100%)',
        amazonUrl: 'https://amzn.in/d/07YQnIq3',
        images: [
          `${productImageBase}/Heavy-Duty/Yellow+Black/main Photoroom-Photoroom (2).png`,
          `${productImageBase}/Heavy-Duty/Yellow+Black/IMG20250131192310-Photoroom.jpg`,
          `${productImageBase}/Heavy-Duty/Yellow+Black/Zoom In Image (3).png`,
          `${productImageBase}/Heavy-Duty/Yellow+Black/Complete Packaging V2 (3) copy.png`,
          `${productImageBase}/Heavy-Duty/Yellow+Black/Untitled design (4).png`,
        ],
      },
      {
        id: 'black-yellow',
        name: 'Black + Yellow',
        swatch: 'linear-gradient(135deg, #111827 0 50%, #facc15 50% 100%)',
        amazonUrl: 'https://amzn.in/d/0eHAT1lw',
        images: [
          `${productImageBase}/Heavy-Duty/Black+Yellow/main-Photoroom (1).jpg`,
          `${productImageBase}/Heavy-Duty/Black+Yellow/IMG20250131191448-Photoroom.jpg`,
          `${productImageBase}/Heavy-Duty/Black+Yellow/Zoom In Image (4).png`,
          `${productImageBase}/Heavy-Duty/Black+Yellow/Complete Packaging V2 (4) copy.png`,
          `${productImageBase}/Heavy-Duty/Black+Yellow/Untitled design.png`,
        ],
      },
    ],
  },
]

export const defaultProductSelection = {
  variantId: productVariants[0].id,
  colorId: productVariants[0].colors[0].id,
}
