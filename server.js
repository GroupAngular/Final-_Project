const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Enable CORS for frontend applications (You can restrict it to specific domains in production)
app.use(cors());

// Serve static files from the 'public' directory (Ensure images are in 'public/images')
app.use(express.static('public'));

// Furniture Types (Main Categories)
const furnitureTypes = [
  { id: 1, name: "Appliances", image: '/images/Appliances.jpg' },
  { id: 2, name: "Kitchen", image: '/images/Kitchen.jpg' },
  { id: 3, name: "Bedrooms", image: '/images/Bedrooms.webp' },
  { id: 4, name: "Decor", image: '/images/Decor.webp' },
  { id: 5, name: "Lighting", image: '/images/Lightingbg.png' },
  { id: 6, name: "Rugs", image: '/images/rug.jpeg' },
  // { id: 7, name: "Bedding & Bath", image: '/images/BeddingBath.jpg' },
  // { id: 8, name: "Outdoor", image: '/images/Outdoorbg.jpg' },
  // { id: 9, name: "Home Office", image: '/images/HomeOffice.jpg' },
  // { id: 10, name: "Bedroom", image: '/images/Bedroom.jpg' },
  // { id: 11, name: "Dining Room", image: '/images/DiningRoom.jpg' },
  // { id: 12, name: "Living Room", image: '/images/LivingRoom.jpg' }
];

// Furniture Parts based on Category
const furnitureParts = {
  1: [{ id: 101, name: "Food Processor" ,image:'/images/FoodProcessor.webp'}, { id: 102, name: "BLENDER",image: '/images/BLENDER.webp' },{ id: 103, name: "Microwave" ,image: '/images/Microwave.webp'}],
  2: [{ id: 201, name: "Dinnerware",image: '/images/Dinnerware.webp' }, { id: 202, name: "Kitchen Accessories",image: '/images/KitchenAccessories.webp' },{ id: 203, name: "Drinkware",image: '/images/Drinkware.webp' }],
  3: [{ id: 301, name: "Bed",image: '/images/Bed.webp' },{ id: 302, name: "Dressers",image: '/images/Dressers.jpg' }, { id: 303, name: "Wardrobes",image: '/images/Wardrobes.jpg' }],
  4: [{ id: 401, name: "Artwork",image: '/images/Artwork.webp' }, { id: 402, name: "Artificial Plants" ,image: '/images/ArtificialPlants.webp'}],
  5: [{ id: 501, name: "Ceiling Lights" ,image: '/images/CeilingLighting.webp'}, { id: 502, name: "Side Lamps",image: '/images/SideLamps.webp' }],
  6: [{ id: 601, name: "Area Rugs" ,image: '/images/AreaRugs.webp'}, { id: 602, name: "Indoor-Outdoor Rugs",image: '/images/IndoorOutdoorRugs.webp' },{ id: 603, name: "Floormats Doormats",image: '/images/FloormatsDoormats.webp' }],
}

// Products based on Parts
const products = {
  101: [  
  
      {
        id: 100001,
        name: "Elegant Ceramic Dinner Set",
        description: "This high-quality ceramic dinner set includes 6 plates, 6 bowls, and 6 cups. Perfect for hosting dinner parties or enjoying family meals. The elegant floral design adds sophistication to your table setting.",
        category: "Dinnerware",
        price: 499,
        discountPercentage: 10,
        rating: 4.5,
        stock: 15,
        tags: [
          "Dinnerware",
          "Ceramic",
          "Floral"
        ],
        brand: "Elegant Living",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Beautiful design and great quality!",
            date: "2025-02-12T10:12:00.618Z",
            reviewerName: "Sophia Roberts",
            reviewerEmail: "sophia.roberts@example.com"
          },
          {
            rating: 4,
            comment: "Lovely set, just wish it was microwave safe.",
            date: "2025-02-11T09:56:21.618Z",
            reviewerName: "James Turner",
            reviewerEmail: "james.turner@example.com"
          }
        ],
        images: [
          "images/dinnerware1.webp",
          "images/dinnerware1.1.webp",
          "images/dinnerware1.2.webp"
        ]
      },
      {
        id: 100002,
        name: "Porcelain Dinner Plates Set",
        description: "This set of 6 porcelain dinner plates brings an elegant touch to any dining experience. Lightweight, durable, and perfect for formal dinners or everyday meals.",
        category: "Dinnerware",
        price: 600,
        discountPercentage: 12,
        rating: 4.7,
        stock: 25,
        tags: [
          "Dinnerware",
          "Porcelain",
          "Elegant"
        ],
        brand: "Prestige Dining",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Love the quality! Very durable.",
            date: "2025-02-10T08:30:15.618Z",
            reviewerName: "Liam Carter",
            reviewerEmail: "liam.carter@example.com"
          },
          {
            rating: 4,
            comment: "Nice set, but the plates are a bit heavy.",
            date: "2025-02-09T07:45:05.618Z",
            reviewerName: "Olivia Wilson",
            reviewerEmail: "olivia.wilson@example.com"
          }
        ],
        images: [
          "images/dinnerware2.webp",
          "images/dinnerware2.1.webp",
          "images/dinnerware2.2.webp"
        ]
      },
      {
        id: 100003,
        name: "Glass Dinner Plates Set",
        description: "These sleek and modern glass dinner plates will add a contemporary flair to any table. The set includes 6 dinner plates, perfect for both casual and special occasions.",
        category: "Dinnerware",
        price: 350,
        discountPercentage: 15,
        rating: 4.6,
        stock: 30,
        tags: [
          "Dinnerware",
          "Glass",
          "Modern"
        ],
        brand: "ClearView",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "These are perfect for our dinner parties!",
            date: "2025-02-08T11:00:21.618Z",
            reviewerName: "Ethan Moore",
            reviewerEmail: "ethan.moore@example.com"
          },
          {
            rating: 4,
            comment: "Beautiful, but they are a bit delicate.",
            date: "2025-02-07T09:15:21.618Z",
            reviewerName: "Ava Mitchell",
            reviewerEmail: "ava.mitchell@example.com"
          }
        ],
        images: [
          "images/dinnerware3.webp",
          "images/dinnerware3.1.webp",
          "images/dinnerware3.2.webp"
        ]
      },
      {
        id: 100004,
        name: "Stoneware Dinner Plates Set",
        description: "Crafted from durable stoneware, this 6-piece dinner plate set is perfect for any meal. The earthy, rustic finish adds a natural touch to your table.",
        category: "Dinnerware",
        price: 450,
        discountPercentage: 8,
        rating: 4.2,
        stock: 20,
        tags: [
          "Dinnerware",
          "Stoneware",
          "Rustic"
        ],
        brand: "Nature's Table",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Love the rustic look! Perfect for my farmhouse kitchen.",
            date: "2025-02-06T10:00:10.618Z",
            reviewerName: "Mason Garcia",
            reviewerEmail: "mason.garcia@example.com"
          },
          {
            rating: 4,
            comment: "Beautiful design, but not dishwasher safe.",
            date: "2025-02-05T08:30:21.618Z",
            reviewerName: "Charlotte Taylor",
            reviewerEmail: "charlotte.taylor@example.com"
          }
        ],
        images: [
          "images/dinnerware4.webp",
          "images/dinnerware4.1.webp",
          "images/dinnerware4.2.webp"
        ]
      },
      {
        id: 100005,
        name: "Vintage Porcelain Dinner Set",
        description: "This vintage porcelain dinner set is perfect for fine dining. The set includes 6 dinner plates and bowls with intricate patterns.",
        category: "Dinnerware",
        price: 950,
        discountPercentage: 20,
        rating: 4.8,
        stock: 10,
        tags: [
          "Dinnerware",
          "Vintage",
          "Porcelain"
        ],
        brand: "Royal China",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Absolutely beautiful set. Great for hosting!",
            date: "2025-02-04T12:12:21.618Z",
            reviewerName: "Isabella Johnson",
            reviewerEmail: "isabella.johnson@example.com"
          },
          {
            rating: 4,
            comment: "Love the design, but expensive.",
            date: "2025-02-03T11:20:15.618Z",
            reviewerName: "Noah Harris",
            reviewerEmail: "noah.harris@example.com"
          }
        ],
        images: [
          "images/dinnerware5.webp",
          "images/dinnerware5.1.webp",
          "images/dinnerware5.2.webp"
        ]
      },
      {
        id: 100006,
        name: "Luxury Dinner Plate Set",
        description: "Made of fine bone china, this luxury dinner plate set adds sophistication to your dining experience. Includes 6 dinner plates with gold trim and elegant design.",
        category: "Dinnerware",
        price: 1200,
        discountPercentage: 10,
        rating: 5,
        stock: 5,
        tags: [
          "Dinnerware",
          "Luxury",
          "Bone China"
        ],
        brand: "Goldline",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "The best dinner set I've ever owned!",
            date: "2025-02-02T08:00:30.618Z",
            reviewerName: "Lucas Clark",
            reviewerEmail: "lucas.clark@example.com"
          },
          {
            rating: 5,
            comment: "Elegant and stylish. Perfect for formal occasions.",
            date: "2025-02-01T07:40:21.618Z",
            reviewerName: "Amelia Scott",
            reviewerEmail: "amelia.scott@example.com"
          }
        ],
        images: [
          "images/dinnerware6.webp",
          "images/dinnerware6.1.webp",
          "images/dinnerware6.2.webp"
        ]
      },
      {
        id: 100007,
        name: "Modern Ceramic Dinnerware Set",
        description: "A modern ceramic dinnerware set designed for everyday use. Includes 6 dinner plates, 6 side plates, and 6 bowls in neutral tones.",
        category: "Dinnerware",
        price: 700,
        discountPercentage: 15,
        rating: 4.3,
        stock: 18,
        tags: [
          "Dinnerware",
          "Ceramic",
          "Modern"
        ],
        brand: "Urban Living",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Great set for daily use. Durable and stylish.",
            date: "2025-01-30T09:00:15.618Z",
            reviewerName: "Grace Lee",
            reviewerEmail: "grace.lee@example.com"
          },
          {
            rating: 4,
            comment: "The design is simple yet elegant. Very happy with it.",
            date: "2025-01-29T10:30:05.618Z",
            reviewerName: "Jack White",
            reviewerEmail: "jack.white@example.com"
          }
        ],
        images: [
          "images/dinnerware7.webp",
          "images/dinnerware7.1.webp",
          "images/dinnerware7.2.webp"
        ]
      }
    ],

  102: [
    {
      id: 10001,
      name: "TORNADO Blender With 2 Mills",
      description: "Blender / Mixer Type: Countertop Blender Number Of Speeds: 2 Speeds Capacity: 1.5 Litre Power Consumption: 250 Watt Product Color: White Dishwasher Safe: No Non-Slip Feet: Yes Attachments: Mini Chopper/Mill Included Easy Food Preparation For Hard-To-Cut Ingredients The Sleek And Compact Design Makes It A Perfect Match For Your Kitchen Strong & Sharp Blades Give You An Effortless Blending Experience",
      category: "Appliances",
      price: 1238,
      discountPercentage: 5,
      rating: 4,
      stock: 10,
      tags: [
        "Appliances",
        "Blander"
    ],   
       brand: "Comfort Living",
    
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Amazing sofa! Very comfortable and stylish.",
          date: "2025-02-10T08:56:21.618Z",
          reviewerName: "Alice Green",
          reviewerEmail: "alice.green@example.com"
        },
        {
          rating: 4,
          comment: "Great quality, but a bit firm for my taste.",
          date: "2025-02-09T08:56:21.618Z",
          reviewerName: "John Smith",
          reviewerEmail: "john.smith@example.com"
        },
        {
          rating: 3,
          comment: "The color is different from what I expected, but it's still nice.",
          date: "2025-02-08T08:56:21.618Z",
          reviewerName: "Emily Davis",
          reviewerEmail: "emily.davis@example.com"
        }
      ],
      images: [
        "images/BLENDER1.webp",
        "images/BLENDER1.1.webp",
        "images/BLENDER1.2.webp"

      ]    }
     ,

     {
      id: 10002,
      name: "Moulinex Electric Blender",
      description: "Brand: Moulinex Type: Electric Blender Capacity: 1.25 Liter Electric Power: 400 Watt Speed: 1 Color: White Easy Food Preparation For Hard-To-Cut Ingredients The Sleek And Compact Design Makes It A Perfect Match For Your Kitchen Strong & Sharp Blades Give You An Effortless Blending Experience",
      category: "Electric Blender",
      price: 1738,
      discountPercentage: 5,
      rating: 5,
      stock: 4,
      tags: [
        "Appliances",
        "Blander"
    ],   
       brand: "Moulinex",
    
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 2,
          comment: "Amazing sofa! Very comfortable and stylish.",
          date: "2025-02-10T08:56:21.618Z",
          reviewerName: "Alice Green",
          reviewerEmail: "alice.green@example.com"
        },
        {
          rating: 4,
          comment: "Great quality, but a bit firm for my taste.",
          date: "2025-02-09T08:56:21.618Z",
          reviewerName: "John Smith",
          reviewerEmail: "john.smith@example.com"
        }],
      images: [
        "images/Blender2.webp",
        "images/Blender2.1.webp",
        "images/Blender2.2.webp"]   
       }

      ,
       {
        id: 10003,
        name: "Braun Countertop Blender",
        description: "Brand: Braun Blender Type: Countertop Blender Capacity: 1.5 Liter Power: 500 Watt Speeds: 2 Speeds Model Number: JB0123WH Color: White",
        category: "Braun Blender",
        price: 2338,
        discountPercentage: 2,
        rating: 5,
        stock: 1,
        tags: [
          "Appliances",
          "Blander"
      ],   
         brand: "Moulinex",
      
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Amazing sofa! Very comfortable and stylish.",
            date: "2025-02-10T08:56:21.618Z",
            reviewerName: "Alice Green",
            reviewerEmail: "alice.green@example.com"
          },
          {
            rating: 4,
            comment: "Great quality, but a bit firm for my taste.",
            date: "2025-02-09T08:56:21.618Z",
            reviewerName: "John Smith",
            reviewerEmail: "john.smith@example.com"
          }],
        images: [
          "images/blender3.webp",
          "images/blender3.1.webp",
          "images/blender3.2.webp"]   
         }


         ,
         {
          id: 10004,
          name: "Braun TributeCollection Glass Blender",
          description: "Braun TributeCollection Glass Blender, Black - JB3060 With the TributeCollection, Braun brings back remastered, technically improved versions of its most popular appliance creations. Powerful 800 Watt motor Enjoy the power you need to mix, puree, crush ice, and more. The highly efficient 800 Watt motor makes preparing your favourite food and beverages fast and easy. Unique triangular jug For efficient blending circulation – creates both a horizontal and vertical flow, which increases efficiency and delivers best blending results. Turbo function Provides short bursts of maximum power for more texture control. Thermo resistant glass No blending limits - easily blend sauces, hot soups, icy drinks and more without the risk of thermal cracking. Easy to clean All parts are easy to disassemble and can be placed directly into dishwasher, including goblet, lid and even blades.",
          category: "Braun Blender",
          price: 4338,
          discountPercentage: 8,
          rating: 4,
          stock: 12,
          tags: [
            "Appliances",
            "Blander"
        ],   
           brand: "Moulinex",
        
          availabilityStatus: "In Stock",
          reviews: [
            {
              rating: 2,
              comment: "Amazing sofa! Very comfortable and stylish.",
              date: "2025-02-10T08:56:21.618Z",
              reviewerName: "Alice Green",
              reviewerEmail: "alice.green@example.com"
            },
            {
              rating: 3,
              comment: "Great quality, but a bit firm for my taste.",
              date: "2025-02-09T08:56:21.618Z",
              reviewerName: "John Smith",
              reviewerEmail: "john.smith@example.com"
            }],
          images: [
            "images/blender4.webp",
            "images/blender4.1.webp",
            "images/blender4.2.webp"]   
           }

           ,
           {
            id: 10005,
            name: "Fresh Hand Blender",
            description: "Power: 800 Watt / Provide with 2 Speed / Provide with Turbo Feature / Accessories: / Plastic Cup 700 M / Stainless steel egg racket / Chopper 500 M / Stainless steel knife /",
            category: "Braun Blender",
            price: 1138,
            discountPercentage: 4,
            rating: 3,
            stock: 1,
            tags: [
              "Appliances",
              "Blander"
          ],   
             brand: "Moulinex",
          
            availabilityStatus: "In Stock",
            reviews: [
              {
                rating: 4,
                comment: "Amazing sofa! Very comfortable and stylish.",
                date: "2025-02-10T08:56:21.618Z",
                reviewerName: "Alice Green",
                reviewerEmail: "alice.green@example.com"
              },
              {
                rating: 2,
                comment: "Great quality, but a bit firm for my taste.",
                date: "2025-02-09T08:56:21.618Z",
                reviewerName: "John Smith",
                reviewerEmail: "john.smith@example.com"
              }],
            images: [
              "images/blender5.webp",
              "images/blender5.webp",
              "images/blender5.webp"]   
             }

             


,  ],
103:[
  
    {
      id: 300001,
      name: "Tornado Microwave Oven",
      description: "A compact and efficient microwave oven with 5 power levels. Perfect for heating food quickly and evenly with a sleek design.",
      category: "Appliances",
      price: 1200,
      discountPercentage: 10,
      rating: 4.5,
      stock: 15,
      tags: [
        "Appliances",
        "Microwave",
        "Compact"
      ],
      brand: "Tornado",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Excellent microwave! Heats food fast and evenly.",
          date: "2025-02-10T10:15:21.618Z",
          reviewerName: "Lucas White",
          reviewerEmail: "lucas.white@example.com"
        }
      ],
      images: [
        "images/microwave1.webp",
        "images/microwave1_1.webp"
      ]
    },
    {
      id: 300002,
      name: "Samsung Solo Microwave",
      description: "A solo microwave oven with 800W power output. It has a simple, user-friendly interface and various cooking presets for your convenience.",
      category: "Appliances",
      price: 1500,
      discountPercentage: 8,
      rating: 4.2,
      stock: 12,
      tags: [
        "Appliances",
        "Microwave",
        "Solo"
      ],
      brand: "Samsung",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great microwave with easy controls and fast heating.",
          date: "2025-02-09T09:30:25.618Z",
          reviewerName: "Anna Brooks",
          reviewerEmail: "anna.brooks@example.com"
        }
      ],
      images: [
        "images/microwave2.webp",
        "images/microwave2_1.webp"
      ]
    },
    {
      id: 300003,
      name: "LG Convection Microwave",
      description: "A powerful convection microwave oven with multiple cooking modes. Ideal for baking, grilling, and defrosting with precision.",
      category: "Appliances",
      price: 1800,
      discountPercentage: 5,
      rating: 4.7,
      stock: 10,
      tags: [
        "Appliances",
        "Microwave",
        "Convection"
      ],
      brand: "LG",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Amazing for baking and grilling. Highly recommended!",
          date: "2025-02-08T08:40:15.618Z",
          reviewerName: "John Carter",
          reviewerEmail: "john.carter@example.com"
        }
      ],
      images: [
        "images/microwave3.webp",
        "images/microwave3_1.webp"
      ]
    },
    {
      id: 300004,
      name: "Panasonic Inverter Microwave",
      description: "This inverter microwave allows for consistent cooking with even heat distribution. It features advanced technology that adapts power levels based on the food type.",
      category: "Appliances",
      price: 1600,
      discountPercentage: 12,
      rating: 4.8,
      stock: 20,
      tags: [
        "Appliances",
        "Microwave",
        "Inverter"
      ],
      brand: "Panasonic",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "The inverter technology makes a huge difference in even cooking.",
          date: "2025-02-07T07:55:10.618Z",
          reviewerName: "Sophia Taylor",
          reviewerEmail: "sophia.taylor@example.com"
        }
      ],
      images: [
        "images/microwave4.webp",
        "images/microwave4_1.webp"
      ]
    },
    {
      id: 300005,
      name: "Sharp Carousel Microwave",
      description: "A versatile microwave with a carousel rotating system for even cooking. Features 1000W power and a modern digital control panel.",
      category: "Appliances",
      price: 1400,
      discountPercentage: 7,
      rating: 4.3,
      stock: 18,
      tags: [
        "Appliances",
        "Microwave",
        "Carousel"
      ],
      brand: "Sharp",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great value for the price. Cooks food evenly.",
          date: "2025-02-06T06:45:15.618Z",
          reviewerName: "Emma Miller",
          reviewerEmail: "emma.miller@example.com"
        }
      ],
      images: [
        "images/microwave5.webp",
        "images/microwave5_1.webp"
      ]
    },
    {
      id: 300006,
      name: "Whirlpool Over-the-Range Microwave",
      description: "This over-the-range microwave offers ample space, a 1000W output, and advanced cooking features like sensor cooking and steam cooking.",
      category: "Appliances",
      price: 2100,
      discountPercentage: 15,
      rating: 4.6,
      stock: 5,
      tags: [
        "Appliances",
        "Microwave",
        "Over-the-Range"
      ],
      brand: "Whirlpool",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Excellent microwave, fits perfectly over my stove and saves space.",
          date: "2025-02-05T05:30:25.618Z",
          reviewerName: "James Green",
          reviewerEmail: "james.green@example.com"
        }
      ],
      images: [
        "images/microwave6.webp",
        "images/microwave6_1.webp"
      ]
    }
  ]
  ,
  201: [

      {
        id: 20001,
        name: "Ceramic Dinner Plate Set",
        description: "A beautifully crafted ceramic dinner plate set, ideal for everyday meals and special occasions. The elegant design adds sophistication to any dining table.",
        category: "Tableware",
        price: 500,
        discountPercentage: 10,
        rating: 4.5,
        stock: 15,
        tags: ["Tableware", "Dinnerware", "Ceramic"],
        brand: "ElegantWare",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Beautiful set, very durable and stylish.",
            date: "2025-02-10T08:30:21.618Z",
            reviewerName: "Alice Green",
            reviewerEmail: "alice.green@example.com"
          }
        ],
        images: ["images/dinnerware1.webp", "images/dinnerware1_1.webp"]
      },
      {
        id: 20002,
        name: "Porcelain Dinner Set",
        description: "This porcelain dinner set offers a sleek and elegant design, perfect for both casual and formal dining. Its fine finish and durability make it a must-have for your table.",
        category: "Tableware",
        price: 800,
        discountPercentage: 5,
        rating: 4.8,
        stock: 10,
        tags: ["Tableware", "Dinnerware", "Porcelain"],
        brand: "Royal Table",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Very elegant and perfect for family dinners.",
            date: "2025-02-09T07:15:35.618Z",
            reviewerName: "John Smith",
            reviewerEmail: "john.smith@example.com"
          }
        ],
        images: ["images/dinnerware2.webp", "images/dinnerware2_1.webp"]
      },
      {
        id: 20003,
        name: "Glass Dinner Plate Set",
        description: "A modern and sleek glass dinner plate set. These plates are not only visually appealing but also durable and perfect for any occasion.",
        category: "Tableware",
        price: 450,
        discountPercentage: 7,
        rating: 4.3,
        stock: 20,
        tags: ["Tableware", "Dinnerware", "Glass"],
        brand: "Clear Glassware",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 4,
            comment: "Great for casual dinners, looks great.",
            date: "2025-02-08T06:45:21.618Z",
            reviewerName: "Emily Davis",
            reviewerEmail: "emily.davis@example.com"
          }
        ],
        images: ["images/dinnerware3.webp", "images/dinnerware3_1.webp"]
      },
      {
        id: 20004,
        name: "Stoneware Dinner Plate Set",
        description: "These stoneware dinner plates provide a rustic and natural feel, perfect for casual dining. The durable stone construction makes them ideal for everyday use.",
        category: "Tableware",
        price: 600,
        discountPercentage: 12,
        rating: 4.6,
        stock: 12,
        tags: ["Tableware", "Dinnerware", "Stoneware"],
        brand: "Rustic Stoneware",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "I love the rustic look of this set. Perfect for casual meals.",
            date: "2025-02-07T05:30:12.618Z",
            reviewerName: "Sophia Taylor",
            reviewerEmail: "sophia.taylor@example.com"
          }
        ],
        images: ["images/dinnerware4.webp", "images/dinnerware4_1.webp"]
      },
      {
        id: 20005,
        name: "Bamboo Dinnerware Set",
        description: "This eco-friendly bamboo dinnerware set is lightweight and sturdy. A perfect alternative to traditional dinnerware, ideal for outdoor dining or casual gatherings.",
        category: "Tableware",
        price: 350,
        discountPercentage: 15,
        rating: 4.4,
        stock: 25,
        tags: ["Tableware", "Dinnerware", "Bamboo"],
        brand: "Green Earth",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 4,
            comment: "Love this bamboo set. Eco-friendly and great for outdoor meals.",
            date: "2025-02-06T04:20:10.618Z",
            reviewerName: "Michael Brown",
            reviewerEmail: "michael.brown@example.com"
          }
        ],
        images: ["images/dinnerware5.webp", "images/dinnerware5_1.webp"]
      },
      {
        id: 20006,
        name: "Vintage Dinner Plate Set",
        description: "A vintage-style dinner plate set that brings an old-world charm to your table. Perfect for dinner parties or adding a classic touch to your kitchen.",
        category: "Tableware",
        price: 700,
        discountPercentage: 8,
        rating: 4.7,
        stock: 10,
        tags: ["Tableware", "Dinnerware", "Vintage"],
        brand: "Classic Elegance",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "These vintage plates are so charming! They are perfect for special occasions.",
            date: "2025-02-05T03:10:01.618Z",
            reviewerName: "Olivia White",
            reviewerEmail: "olivia.white@example.com"
          }
        ],
        images: ["images/dinnerware6.webp", "images/dinnerware6_1.webp"]
      },
      {
        id: 20007,
        name: "Elegant Bone China Set",
        description: "This elegant bone china dinnerware set adds a touch of luxury to your dining experience. Perfect for formal dinners, it features intricate designs and a smooth finish.",
        category: "Tableware",
        price: 900,
        discountPercentage: 5,
        rating: 4.9,
        stock: 8,
        tags: ["Tableware", "Dinnerware", "Bone China"],
        brand: "Luxury Collection",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Absolutely stunning bone china set! Perfect for formal events.",
            date: "2025-02-04T02:55:25.618Z",
            reviewerName: "James Black",
            reviewerEmail: "james.black@example.com"
          }
        ],
        images: ["images/dinnerware7.webp", "images/dinnerware7_1.webp"]
      },
      {
        id: 20008,
        name: "Melamine Dinnerware Set",
        description: "This melamine dinnerware set is perfect for casual dining and outdoor events. Lightweight and durable, it resists breaking and chipping.",
        category: "Tableware",
        price: 400,
        discountPercentage: 20,
        rating: 4.2,
        stock: 30,
        tags: ["Tableware", "Dinnerware", "Melamine"],
        brand: "Outdoor Living",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 4,
            comment: "Great for outdoor meals. Strong, durable, and easy to clean.",
            date: "2025-02-03T01:40:11.618Z",
            reviewerName: "Emma White",
            reviewerEmail: "emma.white@example.com"
          }
        ],
        images: ["images/dinnerware8.webp", "images/dinnerware8_1.webp"]
      },
      {
        id: 20009,
        name: "Luxury Gold-Plated Dinnerware Set",
        description: "A luxury gold-plated dinnerware set with a refined, elegant design. Ideal for high-end dining, it will impress your guests and elevate your meals.",
        category: "Tableware",
        price: 1500,
        discountPercentage: 10,
        rating: 4.9,
        stock: 6,
        tags: ["Tableware", "Dinnerware", "Luxury"],
        brand: "Golden Elegance",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "This set is pure luxury! Great for formal dinners and gatherings.",
            date: "2025-02-02T00:25:15.618Z",
            reviewerName: "Liam Clark",
            reviewerEmail: "liam.clark@example.com"
          }
        ],
        images: ["images/dinnerware9.webp", "images/dinnerware9_1.webp"]
      }
    ]
,
  202: [
    
    {
        id: 2002,
        name: "Stainless Steel Knife Set",
        description: "A high-quality 5-piece knife set made with stainless steel for durability and precision cutting. Includes a chef's knife, utility knife, paring knife, and more.",
        category: "Kitchen Accessories",
        price: 150,
        discountPercentage: 10,
        rating: 4.8,
        stock: 20,
        tags: [
          "Kitchen Accessories",
          "Knife Set",
          "Stainless Steel"
        ],
        brand: "SharpEdge",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "The knives are incredibly sharp and comfortable to use.",
            date: "2025-02-10T09:30:10.618Z",
            reviewerName: "John Smith",
            reviewerEmail: "john.smith@example.com"
          }
        ],
        images: [
          "images/knifeSet1.webp",
          "images/knifeSet2.webp"
        ]
      },
      {
        id: 2003,
        name: "Cutting Board Set",
        description: "A set of three durable cutting boards made from bamboo. Ideal for food preparation and resistant to knife marks, helping to keep your knives sharp.",
        category: "Kitchen Accessories",
        price: 40,
        discountPercentage: 15,
        rating: 4.5,
        stock: 30,
        tags: [
          "Kitchen Accessories",
          "Cutting Board",
          "Bamboo"
        ],
        brand: "EcoKitchen",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Great quality, eco-friendly, and perfect for meal prep.",
            date: "2025-02-09T08:45:30.618Z",
            reviewerName: "Sarah Johnson",
            reviewerEmail: "sarah.johnson@example.com"
          }
        ],
        images: [
          "images/cuttingBoard1.webp",
          "images/cuttingBoard2.webp"
        ]
      },
      {
        id: 2004,
        name: "Adjustable Dish Rack",
        description: "A sturdy and adjustable dish rack to help organize your plates, bowls, and utensils. Made from rust-resistant stainless steel, it provides ample space for drying dishes.",
        category: "Kitchen Accessories",
        price: 55,
        discountPercentage: 8,
        rating: 4.7,
        stock: 15,
        tags: [
          "Kitchen Accessories",
          "Dish Rack",
          "Stainless Steel"
        ],
        brand: "KitchenPro",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Perfect size for my kitchen and very durable!",
            date: "2025-02-08T07:25:45.618Z",
            reviewerName: "Emily Davis",
            reviewerEmail: "emily.davis@example.com"
          }
        ],
        images: [
          "images/dishRack1.webp",
          "images/dishRack2.webp"
        ]
      },
      {
        id: 2005,
        name: "Silicone Oven Mitts",
        description: "A pair of heat-resistant silicone oven mitts that provide protection while handling hot pots and pans. Designed with a non-slip surface for a secure grip.",
        category: "Kitchen Accessories",
        price: 18,
        discountPercentage: 5,
        rating: 4.9,
        stock: 50,
        tags: [
          "Kitchen Accessories",
          "Oven Mitts",
          "Silicone"
        ],
        brand: "CookMaster",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "The mitts are very comfortable and provide great protection.",
            date: "2025-02-07T06:15:30.618Z",
            reviewerName: "Anna Green",
            reviewerEmail: "anna.green@example.com"
          }
        ],
        images: [
          "images/ovenMitts1.webp",
          "images/ovenMitts2.webp"
        ]
      },
      {
        id: 2006,
        name: "Spice Rack Organizer",
        description: "A space-saving spice rack organizer that holds up to 20 spice jars. Perfect for keeping your kitchen counters neat and organized.",
        category: "Kitchen Accessories",
        price: 25,
        discountPercentage: 12,
        rating: 4.6,
        stock: 40,
        tags: [
          "Kitchen Accessories",
          "Spice Rack",
          "Organizer"
        ],
        brand: "OrganizePro",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "This spice rack is a lifesaver! It helps me organize my spices easily.",
            date: "2025-02-06T05:05:15.618Z",
            reviewerName: "Michael Harris",
            reviewerEmail: "michael.harris@example.com"
          }
        ],
        images: [
          "images/spiceRack1.webp",
          "images/spiceRack2.webp"
        ]
      }
    
    

       
  
  
  ],

  203: [
    {
      id: 200033,
      name: "Glass Water Bottle",
      description: "A sleek and durable glass water bottle with a silicone sleeve for added protection. Ideal for keeping your beverages cold or hot for hours.",
      category: "Drinkware",
      price: 25,
      discountPercentage: 10,
      rating: 4.5,
      stock: 30,
      tags: [
        "Drinkware",
        "Glass Bottle",
        "Eco-friendly"
      ],
      brand: "PureGlass",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great design and very durable. I love using it for my water.",
          date: "2025-02-10T08:20:10.618Z",
          reviewerName: "Rachel Adams",
          reviewerEmail: "rachel.adams@example.com"
        }
      ],
      images: [
        "images/glassBottle1.webp",
        "images/glassBottle2.webp"
      ]
    },
    {
      id: 200034,
      name: "Stainless Steel Travel Mug",
      description: "A high-quality stainless steel travel mug that keeps your beverages hot or cold for up to 12 hours. Features a spill-proof lid and ergonomic design.",
      category: "Drinkware",
      price: 18,
      discountPercentage: 5,
      rating: 4.7,
      stock: 25,
      tags: [
        "Drinkware",
        "Travel Mug",
        "Stainless Steel"
      ],
      brand: "ThermoTech",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Perfect travel mug! Keeps my coffee hot all morning.",
          date: "2025-02-09T07:45:30.618Z",
          reviewerName: "Daniel Thompson",
          reviewerEmail: "daniel.thompson@example.com"
        }
      ],
      images: [
        "images/travelMug1.webp",
        "images/travelMug2.webp"
      ]
    },
    {
      id: 200035,
      name: "Ceramic Coffee Mug",
      description: "A stylish ceramic coffee mug with a large handle for easy grip. Ideal for enjoying your favorite hot beverages with a modern, minimalist design.",
      category: "Drinkware",
      price: 12,
      discountPercentage: 15,
      rating: 4.8,
      stock: 50,
      tags: [
        "Drinkware",
        "Coffee Mug",
        "Ceramic"
      ],
      brand: "CeramiCo",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "This mug is perfect for my morning coffee. I love the feel and design.",
          date: "2025-02-08T06:55:25.618Z",
          reviewerName: "Olivia Martin",
          reviewerEmail: "olivia.martin@example.com"
        }
      ],
      images: [
        "images/coffeeMug1.webp",
        "images/coffeeMug2.webp"
      ]
    }
  ]
  ,
  301: [
    {
      id: 30011,
      name: "Luxury King Size Bed",
      description: "A luxurious king-size bed made with high-quality wood and upholstered with soft leather. Features a sleek design and durable frame, perfect for any modern bedroom.",
      category: "Bed",
      price: 2500,
      discountPercentage: 12,
      rating: 4.8,
      stock: 15,
      tags: [
        "Bed",
        "King Size",
        "Luxury"
      ],
      brand: "DreamSleep",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Amazing bed! Very comfortable and looks great in the room.",
          date: "2025-02-10T08:30:10.618Z",
          reviewerName: "Sophia Lee",
          reviewerEmail: "sophia.lee@example.com"
        }
      ],
      images: [
        "images/kingSizeBed1.webp",
        "images/kingSizeBed2.webp"
      ]
    },
    {
      id: 30012,
      name: "Modern Queen Size Bed",
      description: "A sleek and modern queen-size bed with a wooden frame and soft fabric upholstery. Provides comfort and style for smaller bedrooms or guest rooms.",
      category: "Bed",
      price: 1800,
      discountPercentage: 8,
      rating: 4.6,
      stock: 20,
      tags: [
        "Bed",
        "Queen Size",
        "Modern"
      ],
      brand: "StyleSleep",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great bed for the price! Comfortable and looks beautiful.",
          date: "2025-02-09T07:15:30.618Z",
          reviewerName: "James White",
          reviewerEmail: "james.white@example.com"
        }
      ],
      images: [
        "images/queenSizeBed1.webp",
        "images/queenSizeBed2.webp"
      ]
    },
    {
      id: 30013,
      name: "Twin Size Platform Bed",
      description: "A compact and practical twin-size platform bed with a sturdy frame. Ideal for smaller spaces like dorms or guest rooms. Easy to assemble and maintain.",
      category: "Bed",
      price: 950,
      discountPercentage: 5,
      rating: 4.4,
      stock: 25,
      tags: [
        "Bed",
        "Twin Size",
        "Platform"
      ],
      brand: "SpaceSaver",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Perfect for my small apartment. Sturdy and simple design.",
          date: "2025-02-08T06:40:25.618Z",
          reviewerName: "Emily Harris",
          reviewerEmail: "emily.harris@example.com"
        }
      ],
      images: [
        "images/twinSizeBed1.webp",
        "images/twinSizeBed2.webp"
      ]
    },
    {
      id: 30014,
      name: "Rustic Full Size Bed",
      description: "A rustic full-size bed with a distressed wood frame. Features a classic design with a natural wood finish, ideal for a cozy, farmhouse-style bedroom.",
      category: "Bed",
      price: 1200,
      discountPercentage: 10,
      rating: 4.7,
      stock: 18,
      tags: [
        "Bed",
        "Full Size",
        "Rustic"
      ],
      brand: "WoodWorks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Beautifully made with great attention to detail. Fits perfectly in my farmhouse-style room.",
          date: "2025-02-07T05:10:20.618Z",
          reviewerName: "David Clark",
          reviewerEmail: "david.clark@example.com"
        }
      ],
      images: [
        "images/fullSizeBed1.webp",
        "images/fullSizeBed2.webp"
      ]
    },
    {
      id: 30015,
      name: "Adjustable Bed with Memory Foam",
      description: "An adjustable bed frame with built-in memory foam. Allows you to adjust the head and foot of the bed for ultimate comfort. Perfect for those who need extra support.",
      category: "Bed",
      price: 2200,
      discountPercentage: 15,
      rating: 4.9,
      stock: 10,
      tags: [
        "Bed",
        "Adjustable",
        "Memory Foam"
      ],
      brand: "RelaxPro",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "The adjustable features make it super comfortable. The memory foam is amazing!",
          date: "2025-02-06T04:35:10.618Z",
          reviewerName: "Liam Moore",
          reviewerEmail: "liam.moore@example.com"
        }
      ],
      images: [
        "images/adjustableBed1.webp",
        "images/adjustableBed2.webp"
      ]
    }
  ]
  ,
  302:
  [
    {
      id: 3022,
      name: "Classic 6-Drawer Dresser",
      description: "A stylish 6-drawer dresser made from solid wood with a smooth finish. Perfect for organizing clothes, accessories, and other essentials in your bedroom.",
      category: "Dresser",
      price: 500,
      discountPercentage: 10,
      rating: 4.7,
      stock: 15,
      tags: [
        "Dresser",
        "Wood",
        "6-Drawer"
      ],
      brand: "HomeElegance",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "This dresser is not only functional but also adds a nice touch to my bedroom decor.",
          date: "2025-02-10T08:30:10.618Z",
          reviewerName: "Sophia Carter",
          reviewerEmail: "sophia.carter@example.com"
        }
      ],
      images: [
        "images/dresser1.webp",
        "images/dresser2.webp"
      ]
    },
    {
      id: 3023,
      name: "Modern 5-Drawer Chest",
      description: "A modern 5-drawer chest made from durable MDF with a sleek lacquered finish. Great for storing smaller items and keeping your bedroom neat and organized.",
      category: "Dresser",
      price: 350,
      discountPercentage: 8,
      rating: 4.5,
      stock: 20,
      tags: [
        "Dresser",
        "Chest",
        "5-Drawer"
      ],
      brand: "UrbanLiving",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Sleek design and plenty of space for all my clothes. Highly recommend!",
          date: "2025-02-09T07:15:30.618Z",
          reviewerName: "James Morgan",
          reviewerEmail: "james.morgan@example.com"
        }
      ],
      images: [
        "images/dresser3.webp",
        "images/dresser4.webp"
      ]
    },
    {
      id: 3024,
      name: "Rustic 4-Drawer Dresser",
      description: "A rustic 4-drawer dresser crafted from reclaimed wood, perfect for adding a vintage touch to your bedroom. Features a distressed finish and antique-style handles.",
      category: "Dresser",
      price: 600,
      discountPercentage: 15,
      rating: 4.8,
      stock: 18,
      tags: [
        "Dresser",
        "Rustic",
        "Wood"
      ],
      brand: "RusticCraft",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Beautiful rustic design, and very sturdy. Adds charm to my room!",
          date: "2025-02-08T06:45:25.618Z",
          reviewerName: "Liam Turner",
          reviewerEmail: "liam.turner@example.com"
        }
      ],
      images: [
        "images/dresser5.webp",
        "images/dresser6.webp"
      ]
    },
    {
      id: 3025,
      name: "Contemporary 3-Drawer Dresser",
      description: "A contemporary 3-drawer dresser made from high-quality engineered wood. Features modern design with clean lines and ample storage for small spaces.",
      category: "Dresser",
      price: 280,
      discountPercentage: 5,
      rating: 4.3,
      stock: 30,
      tags: [
        "Dresser",
        "Contemporary",
        "3-Drawer"
      ],
      brand: "ModernLiving",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Perfect for my small bedroom. Simple and stylish.",
          date: "2025-02-07T05:25:10.618Z",
          reviewerName: "Megan Adams",
          reviewerEmail: "megan.adams@example.com"
        }
      ],
      images: [
        "images/dresser7.webp",
        "images/dresser8.webp"
      ]
    },
    {
      id: 3026,
      name: "Luxury 7-Drawer Dresser",
      description: "A luxurious 7-drawer dresser with a high-gloss finish and elegant gold-tone handles. Perfect for large bedrooms and those who need extra storage space.",
      category: "Dresser",
      price: 950,
      discountPercentage: 12,
      rating: 4.9,
      stock: 12,
      tags: [
        "Dresser",
        "Luxury",
        "7-Drawer"
      ],
      brand: "EliteFurniture",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "The dresser looks stunning and provides a lot of storage space. Worth every penny!",
          date: "2025-02-06T04:15:30.618Z",
          reviewerName: "Olivia White",
          reviewerEmail: "olivia.white@example.com"
        }
      ],
      images: [
        "images/dresser9.webp",
        "images/dresser10.webp"
      ]
    },
    {
      id: 3027,
      name: "Compact 2-Drawer Dresser",
      description: "A compact 2-drawer dresser designed for small spaces. Made from durable MDF and features minimalist handles for a sleek and modern look.",
      category: "Dresser",
      price: 180,
      discountPercentage: 10,
      rating: 4.6,
      stock: 40,
      tags: [
        "Dresser",
        "Compact",
        "2-Drawer"
      ],
      brand: "SpaceSaver",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Perfect for my apartment. Small but functional and stylish.",
          date: "2025-02-05T03:45:20.618Z",
          reviewerName: "Lucas Scott",
          reviewerEmail: "lucas.scott@example.com"
        }
      ],
      images: [
        "images/dresser11.webp",
        "images/dresser12.webp"
      ]
    }
  ],
  303:[
    {
      id: 300333,
      name: "Modern 4-Door Wardrobe",
      description: "A sleek modern wardrobe with four spacious doors, ideal for organizing clothes and accessories. Features a minimalist design with a smooth finish and sturdy frame.",
      category: "Wardrobe",
      price: 800,
      discountPercentage: 10,
      rating: 4.6,
      stock: 20,
      tags: [
        "Wardrobe",
        "4-Door",
        "Modern"
      ],
      brand: "StyleWood",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Great wardrobe! Lots of space and looks amazing in my bedroom.",
          date: "2025-02-10T08:40:10.618Z",
          reviewerName: "Olivia Green",
          reviewerEmail: "olivia.green@example.com"
        }
      ],
      images: [
        "images/wardrobe1.webp",
        "images/wardrobe2.webp"
      ]
    },
    {
      id: 300334,
      name: "Classic 3-Door Wardrobe",
      description: "A classic 3-door wardrobe made of solid wood with a timeless design. Features ample storage with adjustable shelves and a hanging rail.",
      category: "Wardrobe",
      price: 600,
      discountPercentage: 8,
      rating: 4.5,
      stock: 15,
      tags: [
        "Wardrobe",
        "3-Door",
        "Classic"
      ],
      brand: "WoodCraft",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Good quality and sturdy. Fits perfectly in my space.",
          date: "2025-02-09T07:30:25.618Z",
          reviewerName: "James Cooper",
          reviewerEmail: "james.cooper@example.com"
        }
      ],
      images: [
        "images/wardrobe3.webp",
        "images/wardrobe4.webp"
      ]
    },
    {
      id: 300335,
      name: "Rustic Wooden Wardrobe",
      description: "A rustic wooden wardrobe with a vintage design. Features two large doors and an internal hanging rail. Perfect for a farmhouse-style room.",
      category: "Wardrobe",
      price: 750,
      discountPercentage: 12,
      rating: 4.7,
      stock: 10,
      tags: [
        "Wardrobe",
        "Rustic",
        "Wooden"
      ],
      brand: "RusticWood",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Beautiful and rustic! Exactly what I was looking for.",
          date: "2025-02-08T06:15:30.618Z",
          reviewerName: "Liam Brooks",
          reviewerEmail: "liam.brooks@example.com"
        }
      ],
      images: [
        "images/wardrobe5.webp",
        "images/wardrobe6.webp"
      ]
    },
    {
      id: 300336,
      name: "Contemporary Sliding Wardrobe",
      description: "A contemporary wardrobe with sliding doors for easy access. Features multiple compartments, a large mirror, and a clean design that fits in modern interiors.",
      category: "Wardrobe",
      price: 950,
      discountPercentage: 15,
      rating: 4.8,
      stock: 12,
      tags: [
        "Wardrobe",
        "Sliding Doors",
        "Contemporary"
      ],
      brand: "ContempoDesign",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Love the sliding doors! Perfect for saving space in my apartment.",
          date: "2025-02-07T05:25:20.618Z",
          reviewerName: "Emma White",
          reviewerEmail: "emma.white@example.com"
        }
      ],
      images: [
        "images/wardrobe7.webp",
        "images/wardrobe8.webp"
      ]
    },
    {
      id: 300337,
      name: "Minimalist 2-Door Wardrobe",
      description: "A minimalist 2-door wardrobe with a modern design. Features ample space with an internal hanging rail and a clean finish to fit into any bedroom decor.",
      category: "Wardrobe",
      price: 500,
      discountPercentage: 10,
      rating: 4.3,
      stock: 25,
      tags: [
        "Wardrobe",
        "2-Door",
        "Minimalist"
      ],
      brand: "PureStyle",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "A simple yet functional wardrobe. Very easy to assemble.",
          date: "2025-02-06T04:35:10.618Z",
          reviewerName: "John Harris",
          reviewerEmail: "john.harris@example.com"
        }
      ],
      images: [
        "images/wardrobe9.webp",
        "images/wardrobe10.webp"
      ]
    },
    {
      id: 300338,
      name: "Luxury Walk-In Wardrobe",
      description: "A luxurious walk-in wardrobe with a full-length mirror and premium finishing. Features ample space for hanging clothes, shelves, and drawers for accessories.",
      category: "Wardrobe",
      price: 2000,
      discountPercentage: 20,
      rating: 5.0,
      stock: 5,
      tags: [
        "Wardrobe",
        "Walk-In",
        "Luxury"
      ],
      brand: "EliteSpaces",
      availabilityStatus: "Limited Stock",
      reviews: [
        {
          rating: 5,
          comment: "Absolutely stunning! The walk-in wardrobe has made my room feel so much more spacious.",
          date: "2025-02-05T03:50:20.618Z",
          reviewerName: "Charlotte Lee",
          reviewerEmail: "charlotte.lee@example.com"
        }
      ],
      images: [
        "images/wardrobe11.webp",
        "images/wardrobe12.webp"
      ]
    },
    {
      id: 300339,
      name: "Space-Saving Wardrobe with Drawers",
      description: "A space-saving wardrobe with both hanging sections and drawers for storing smaller items. Ideal for compact spaces while still providing ample storage capacity.",
      category: "Wardrobe",
      price: 650,
      discountPercentage: 7,
      rating: 4.4,
      stock: 30,
      tags: [
        "Wardrobe",
        "Space-Saving",
        "With Drawers"
      ],
      brand: "CompactLiving",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Perfect for my small room. The drawers are really helpful for storing accessories.",
          date: "2025-02-04T02:20:10.618Z",
          reviewerName: "Megan Scott",
          reviewerEmail: "megan.scott@example.com"
        }
      ],
      images: [
        "images/wardrobe13.webp",
        "images/wardrobe14.webp"
      ]
    }
  ]
  ,
  
  401: [
    {
      id: 4001,
      name: "Abstract Landscape Painting",
      description: "A vibrant abstract landscape painting featuring bold strokes and vivid colors. Perfect for adding an artistic touch to any room.",
      category: "Artwork",
      price: 300,
      discountPercentage: 5,
      rating: 4.7,
      stock: 20,
      tags: ["Abstract", "Landscape", "Painting"],
      brand: "ArtVibe",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Stunning piece of art! It brings life to my living room.",
          date: "2025-02-10T08:40:10.618Z",
          reviewerName: "Emily Brown",
          reviewerEmail: "emily.brown@example.com"
        }
      ],
      images: [
        "images/artwork1.webp",
        "images/artwork2.webp"
      ]
    },
    {
      id: 4002,
      name: "Modern Minimalist Artwork",
      description: "A modern minimalist artwork with clean lines and subtle tones. A perfect addition to a contemporary home or office.",
      category: "Artwork",
      price: 220,
      discountPercentage: 10,
      rating: 4.6,
      stock: 18,
      tags: ["Modern", "Minimalist", "Art"],
      brand: "PureDesign",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Love the simplicity and elegance of this artwork!",
          date: "2025-02-09T07:25:20.618Z",
          reviewerName: "John Smith",
          reviewerEmail: "john.smith@example.com"
        }
      ],
      images: [
        "images/artwork3.webp",
        "images/artwork4.webp"
      ]
    },
    {
      id: 4003,
      name: "Black and White Abstract Art",
      description: "A striking black and white abstract art piece that complements modern and industrial interiors. Its sharp contrasts add character to any wall.",
      category: "Artwork",
      price: 180,
      discountPercentage: 15,
      rating: 4.8,
      stock: 22,
      tags: ["Black and White", "Abstract", "Art"],
      brand: "UrbanArt",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Perfect addition to my loft-style apartment!",
          date: "2025-02-08T06:30:15.618Z",
          reviewerName: "Sophia Williams",
          reviewerEmail: "sophia.williams@example.com"
        }
      ],
      images: [
        "images/artwork5.webp",
        "images/artwork6.webp"
      ]
    },
    {
      id: 4004,
      name: "Botanical Watercolor Painting",
      description: "A beautifully detailed botanical watercolor painting featuring various plant species, ideal for nature lovers and adding a touch of serenity to any space.",
      category: "Artwork",
      price: 250,
      discountPercentage: 7,
      rating: 4.5,
      stock: 15,
      tags: ["Watercolor", "Botanical", "Painting"],
      brand: "NatureArts",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Absolutely beautiful! The colors are so vibrant.",
          date: "2025-02-07T05:20:00.618Z",
          reviewerName: "Liam Turner",
          reviewerEmail: "liam.turner@example.com"
        }
      ],
      images: [
        "images/artwork7.webp",
        "images/artwork8.webp"
      ]
    },
    {
      id: 4005,
      name: "Vintage Pop Art Poster",
      description: "A vintage-inspired pop art poster featuring a bold, graphic design that evokes the spirit of the 60s. Perfect for a retro or eclectic interior.",
      category: "Artwork",
      price: 150,
      discountPercentage: 20,
      rating: 4.3,
      stock: 30,
      tags: ["Pop Art", "Poster", "Vintage"],
      brand: "RetroArt",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Great retro vibes. It gives my room a fun, energetic feel.",
          date: "2025-02-06T04:10:25.618Z",
          reviewerName: "Olivia Scott",
          reviewerEmail: "olivia.scott@example.com"
        }
      ],
      images: [
        "images/artwork9.webp",
        "images/artwork10.webp"
      ]
    },
    {
      id: 4006,
      name: "Golden Abstract Sculpture",
      description: "A modern golden abstract sculpture designed to add elegance and sophistication to your living or dining area.",
      category: "Artwork",
      price: 400,
      discountPercentage: 5,
      rating: 4.9,
      stock: 10,
      tags: ["Sculpture", "Golden", "Abstract"],
      brand: "EliteSculpt",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Gorgeous sculpture! It's the centerpiece of my room.",
          date: "2025-02-05T03:50:30.618Z",
          reviewerName: "Aiden Harris",
          reviewerEmail: "aiden.harris@example.com"
        }
      ],
      images: [
        "images/artwork11.webp",
        "images/artwork12.webp"
      ]
    },
    {
      id: 4007,
      name: "Geometric Wall Art",
      description: "A geometric wall art piece that features sharp, intersecting lines and bold colors. Its striking design is perfect for modern and minimalist interiors.",
      category: "Artwork",
      price: 270,
      discountPercentage: 10,
      rating: 4.4,
      stock: 25,
      tags: ["Geometric", "Wall Art", "Modern"],
      brand: "SharpLines",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Amazing design! The perfect modern touch to my apartment.",
          date: "2025-02-04T02:40:10.618Z",
          reviewerName: "Mason Clark",
          reviewerEmail: "mason.clark@example.com"
        }
      ],
      images: [
        "images/artwork13.webp",
        "images/artwork14.webp"
      ]
    },
    {
      id: 4008,
      name: "Ocean Waves Canvas Art",
      description: "A calming ocean waves canvas art, featuring soft blues and greens. Ideal for creating a relaxing atmosphere in any room.",
      category: "Artwork",
      price: 350,
      discountPercentage: 5,
      rating: 4.6,
      stock: 18,
      tags: ["Canvas", "Ocean", "Art"],
      brand: "SeaScape",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "So soothing! It brings peace and tranquility to my home.",
          date: "2025-02-03T01:25:40.618Z",
          reviewerName: "Isabella Turner",
          reviewerEmail: "isabella.turner@example.com"
        }
      ],
      images: [
        "images/artwork15.webp",
        "images/artwork16.webp"
      ]
    },
    {
      id: 4009,
      name: "Street Art Mural",
      description: "A bold street art mural inspired by urban graffiti. It adds a pop of color and urban edge to any room or office space.",
      category: "Artwork",
      price: 450,
      discountPercentage: 8,
      rating: 4.8,
      stock: 12,
      tags: ["Street Art", "Mural", "Graffiti"],
      brand: "UrbanMasterpieces",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "This mural brings a lot of character to my space!",
          date: "2025-02-02T00:30:30.618Z",
          reviewerName: "Ethan Williams",
          reviewerEmail: "ethan.williams@example.com"
        }
      ],
      images: [
        "images/artwork17.webp",
        "images/artwork18.webp"
      ]
    },
    {
      id: 4010,
      name: "Nature Photography Print",
      description: "A nature photography print showcasing breathtaking landscapes. Ideal for adding a calming, natural element to any room.",
      category: "Artwork",
      price: 180,
      discountPercentage: 15,
      rating: 4.7,
      stock: 30,
      tags: ["Photography", "Nature", "Print"],
      brand: "NatureClicks",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Incredible photo! Makes my living room feel more connected to nature.",
          date: "2025-02-01T00:15:40.618Z",
          reviewerName: "Avery Davis",
          reviewerEmail: "avery.davis@example.com"
        }
      ],
      images: [
        "images/artwork19.webp",
        "images/artwork20.webp"
      ]
    }
  ]
  ,
  402: [
    

      {
        id: 40022,
        name: "Artificial Fern Plant",
        description: "A lush artificial fern plant, perfect for adding a touch of greenery to any space. Its realistic look and vibrant green leaves will brighten up any room.",
        category: "Artificial Plants",
        price: 40,
        discountPercentage: 5,
        rating: 4.6,
        stock: 30,
        tags: ["Artificial", "Fern", "Greenery"],
        brand: "GreenDecor",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Looks incredibly realistic! Adds a natural touch to my home.",
            date: "2025-02-10T08:45:10.618Z",
            reviewerName: "Sarah Clark",
            reviewerEmail: "sarah.clark@example.com"
          }
        ],
        images: [
          "images/fern1.webp",
          "images/fern2.webp"
        ]
      },
      {
        id: 40023,
        name: "Artificial Succulent Plant",
        description: "A modern and chic artificial succulent plant, perfect for small spaces or as a centerpiece on a coffee table. Its low-maintenance nature makes it a great addition to any room.",
        category: "Artificial Plants",
        price: 25,
        discountPercentage: 10,
        rating: 4.8,
        stock: 50,
        tags: ["Artificial", "Succulent", "Small Plant"],
        brand: "SucculentEase",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Love it! It's a great little plant for my office.",
            date: "2025-02-09T07:30:25.618Z",
            reviewerName: "John Thompson",
            reviewerEmail: "john.thompson@example.com"
          }
        ],
        images: [
          "images/succulent1.webp",
          "images/succulent2.webp"
        ]
      },
      {
        id: 40024,
        name: "Artificial Palm Tree",
        description: "A tall and elegant artificial palm tree that brings the tropical vibes to your home. Its realistic fronds and sleek design make it a perfect addition to any modern decor.",
        category: "Artificial Plants",
        price: 100,
        discountPercentage: 12,
        rating: 4.9,
        stock: 20,
        tags: ["Artificial", "Palm", "Tropical"],
        brand: "TropiDecor",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "A beautiful addition to my living room! Very realistic.",
            date: "2025-02-08T06:15:30.618Z",
            reviewerName: "Emma Harris",
            reviewerEmail: "emma.harris@example.com"
          }
        ],
        images: [
          "images/palm_tree1.webp",
          "images/palm_tree2.webp"
        ]
      },
      {
        id: 40025,
        name: "Artificial Snake Plant",
        description: "This artificial snake plant is perfect for any modern home or office. Known for its sleek, vertical design, this plant brings both style and easy maintenance to your space.",
        category: "Artificial Plants",
        price: 45,
        discountPercentage: 7,
        rating: 4.7,
        stock: 40,
        tags: ["Artificial", "Snake Plant", "Modern"],
        brand: "ModernGreens",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "This snake plant looks stunning! It's the perfect plant for my minimalist decor.",
            date: "2025-02-07T05:30:15.618Z",
            reviewerName: "Oliver Martin",
            reviewerEmail: "oliver.martin@example.com"
          }
        ],
        images: [
          "images/snake_plant1.webp",
          "images/snake_plant2.webp"
        ]
      },
      {
        id: 40026,
        name: "Artificial Lavender Plant",
        description: "A beautiful artificial lavender plant that adds a touch of calm and tranquility to your home. Its soft purple flowers and lush green leaves make it a perfect decor piece.",
        category: "Artificial Plants",
        price: 30,
        discountPercentage: 15,
        rating: 4.5,
        stock: 25,
        tags: ["Artificial", "Lavender", "Flowering"],
        brand: "CalmGardens",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 4,
            comment: "Lovely lavender! It smells nice too, even though it's artificial.",
            date: "2025-02-06T04:25:00.618Z",
            reviewerName: "Isabella Young",
            reviewerEmail: "isabella.young@example.com"
          }
        ],
        images: [
          "images/lavender1.webp",
          "images/lavender2.webp"
        ]
      },
      {
        id: 40027,
        name: "Artificial Ivy Plant",
        description: "A lush artificial ivy plant that mimics the beauty of real ivy vines. It’s perfect for hanging in decorative pots or draping over shelves and railings.",
        category: "Artificial Plants",
        price: 35,
        discountPercentage: 8,
        rating: 4.6,
        stock: 35,
        tags: ["Artificial", "Ivy", "Vines"],
        brand: "GreenHaven",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Looks amazing! Adds the perfect touch of greenery to my home.",
            date: "2025-02-05T03:45:20.618Z",
            reviewerName: "Sophia Miller",
            reviewerEmail: "sophia.miller@example.com"
          }
        ],
        images: [
          "images/ivy1.webp",
          "images/ivy2.webp"
        ]
      },
      {
        id: 40028,
        name: "Artificial Cactus Plant",
        description: "A small and stylish artificial cactus plant, ideal for those who love desert plants but don’t have the time for maintenance. Perfect for small spaces.",
        category: "Artificial Plants",
        price: 15,
        discountPercentage: 20,
        rating: 4.4,
        stock: 50,
        tags: ["Artificial", "Cactus", "Small Plant"],
        brand: "DesertGreens",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 4,
            comment: "Very cute cactus! It's perfect for my desk.",
            date: "2025-02-04T02:35:25.618Z",
            reviewerName: "Liam Davis",
            reviewerEmail: "liam.davis@example.com"
          }
        ],
        images: [
          "images/cactus1.webp",
          "images/cactus2.webp"
        ]
      },
      {
        id: 40029,
        name: "Artificial Bamboo Plant",
        description: "A tall and elegant artificial bamboo plant. Perfect for creating a peaceful, zen atmosphere in your home or office. Easy to maintain and looks stunning.",
        category: "Artificial Plants",
        price: 60,
        discountPercentage: 10,
        rating: 4.8,
        stock: 15,
        tags: ["Artificial", "Bamboo", "Zen"],
        brand: "ZenGreens",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "This bamboo plant looks amazing and creates a relaxing atmosphere.",
            date: "2025-02-03T01:50:40.618Z",
            reviewerName: "Amelia Johnson",
            reviewerEmail: "amelia.johnson@example.com"
          }
        ],
        images: [
          "images/bamboo1.webp",
          "images/bamboo2.webp"
        ]
      }
    ]
      
  ,
  501: [

      {
        id: 50011,
        name: "Modern LED Ceiling Light",
        description: "A sleek and modern LED ceiling light that brings a bright and energy-efficient lighting option to your living space. The minimal design fits in with a variety of interior styles.",
        category: "Lighting",
        price: 150,
        discountPercentage: 5,
        rating: 4.7,
        stock: 30,
        tags: ["LED", "Ceiling Light", "Modern"],
        brand: "LightWave",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Very stylish and bright! The perfect light for my living room.",
            date: "2025-02-10T08:56:21.618Z",
            reviewerName: "Michael Brown",
            reviewerEmail: "michael.brown@example.com"
          }
        ],
        images: [
          "images/led_ceiling1.webp",
          "images/led_ceiling2.webp"
        ]
      },
      {
        id: 50012,
        name: "Crystal Pendant Ceiling Light",
        description: "This elegant crystal pendant light adds a touch of luxury to any room. Its shimmering crystals reflect light beautifully, creating a glamorous atmosphere.",
        category: "Lighting",
        price: 300,
        discountPercentage: 10,
        rating: 4.5,
        stock: 20,
        tags: ["Crystal", "Pendant", "Ceiling Light"],
        brand: "GlamourLights",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 4,
            comment: "Absolutely beautiful light! It adds so much elegance to my dining room.",
            date: "2025-02-09T08:30:21.618Z",
            reviewerName: "Sophia Green",
            reviewerEmail: "sophia.green@example.com"
          }
        ],
        images: [
          "images/crystal_pendant1.webp",
          "images/crystal_pendant2.webp"
        ]
      },
      {
        id: 50013,
        name: "Industrial Ceiling Light",
        description: "An industrial-style ceiling light with a matte black finish and exposed bulbs. It is perfect for adding a vintage and trendy touch to any modern space.",
        category: "Lighting",
        price: 120,
        discountPercentage: 15,
        rating: 4.6,
        stock: 25,
        tags: ["Industrial", "Ceiling Light", "Vintage"],
        brand: "UrbanLighting",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Such a great addition to my office! Love the vintage vibe.",
            date: "2025-02-08T07:25:21.618Z",
            reviewerName: "Daniel King",
            reviewerEmail: "daniel.king@example.com"
          }
        ],
        images: [
          "images/industrial_ceiling1.webp",
          "images/industrial_ceiling2.webp"
        ]
      },
      {
        id: 50014,
        name: "Flush Mount Ceiling Light",
        description: "A simple and elegant flush mount ceiling light that offers a bright light source while maintaining a sleek look. Perfect for rooms with low ceilings.",
        category: "Lighting",
        price: 80,
        discountPercentage: 8,
        rating: 4.4,
        stock: 40,
        tags: ["Flush Mount", "Ceiling Light", "Simple"],
        brand: "ClearGlow",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 4,
            comment: "Nice, clean look. Works perfectly in my hallway.",
            date: "2025-02-07T06:15:21.618Z",
            reviewerName: "Olivia Taylor",
            reviewerEmail: "olivia.taylor@example.com"
          }
        ],
        images: [
          "images/flush_mount1.webp",
          "images/flush_mount2.webp"
        ]
      },
      {
        id: 50015,
        name: "Smart Ceiling Light",
        description: "A smart ceiling light that is compatible with smart home systems. Adjust the brightness and color temperature with your phone or voice assistant.",
        category: "Lighting",
        price: 200,
        discountPercentage: 12,
        rating: 4.8,
        stock: 15,
        tags: ["Smart", "Ceiling Light", "Tech"],
        brand: "SmartLight Co.",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Love how I can control the light with my phone. Very convenient!",
            date: "2025-02-06T05:45:21.618Z",
            reviewerName: "Ethan Harris",
            reviewerEmail: "ethan.harris@example.com"
          }
        ],
        images: [
          "images/smart_ceiling1.webp",
          "images/smart_ceiling2.webp"
        ]
      },
      {
        id: 50016,
        name: "Vintage Chandelier Ceiling Light",
        description: "A stunning vintage chandelier ceiling light with intricate detailing. Ideal for adding a touch of grandeur to any dining room or living space.",
        category: "Lighting",
        price: 500,
        discountPercentage: 5,
        rating: 4.9,
        stock: 10,
        tags: ["Chandelier", "Vintage", "Ceiling Light"],
        brand: "GrandDesigns",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "This chandelier is breathtaking! It really makes my dining room look elegant.",
            date: "2025-02-05T04:30:21.618Z",
            reviewerName: "Ava Davis",
            reviewerEmail: "ava.davis@example.com"
          }
        ],
        images: [
          "images/vintage_chandelier1.webp",
          "images/vintage_chandelier2.webp"
        ]
      },
      {
        id: 50017,
        name: "Outdoor Ceiling Light",
        description: "A durable outdoor ceiling light designed for use in patios or gardens. Built to withstand the elements while providing bright and energy-efficient lighting.",
        category: "Lighting",
        price: 90,
        discountPercentage: 7,
        rating: 4.3,
        stock: 50,
        tags: ["Outdoor", "Ceiling Light", "Weatherproof"],
        brand: "OutdoorLights",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 4,
            comment: "Perfect for my patio! It’s weather-resistant and looks great.",
            date: "2025-02-04T03:15:21.618Z",
            reviewerName: "Lucas Scott",
            reviewerEmail: "lucas.scott@example.com"
          }
        ],
        images: [
          "images/outdoor_ceiling1.webp",
          "images/outdoor_ceiling2.webp"
        ]
      }
    ]
      
  ,
  502: [
    {
      id: 50212,
      name: "Modern Touch Side Lamp",
      description: "A sleek and modern touch-activated side lamp that adds a soft glow to your living room or bedroom. Its minimalistic design and touch function make it an ideal bedside companion.",
      category: "Lighting",
      price: 50,
      discountPercentage: 10,
      rating: 4.6,
      stock: 30,
      tags: ["Side Lamp", "Touch", "Modern"],
      brand: "LumeLight",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "The touch function is so convenient! It looks stylish in my bedroom.",
          date: "2025-02-10T08:56:21.618Z",
          reviewerName: "Emily Brown",
          reviewerEmail: "emily.brown@example.com"
        }
      ],
      images: [
        "images/modern_side_lamp1.webp",
        "images/modern_side_lamp2.webp"
      ]
    },
    {
      id: 50213,
      name: "Crystal Side Lamp",
      description: "A beautifully designed crystal side lamp with an elegant base. It brings a touch of luxury to your living space, with a warm and inviting glow that enhances the room's ambiance.",
      category: "Lighting",
      price: 80,
      discountPercentage: 15,
      rating: 4.7,
      stock: 25,
      tags: ["Side Lamp", "Crystal", "Elegant"],
      brand: "LuxDecor",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Such a classy piece! It adds so much elegance to my living room.",
          date: "2025-02-09T08:30:21.618Z",
          reviewerName: "Charlotte Smith",
          reviewerEmail: "charlotte.smith@example.com"
        }
      ],
      images: [
        "images/crystal_side_lamp1.webp",
        "images/crystal_side_lamp2.webp"
      ]
    },
    {
      id: 50214,
      name: "Industrial Side Lamp",
      description: "This industrial-style side lamp features a metal base and exposed bulb, perfect for those who love a vintage or rustic look. A great addition to modern and minimalist decor.",
      category: "Lighting",
      price: 60,
      discountPercentage: 8,
      rating: 4.5,
      stock: 40,
      tags: ["Side Lamp", "Industrial", "Vintage"],
      brand: "UrbanLights",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Perfect for my office. It’s sturdy and has a great vintage look.",
          date: "2025-02-08T07:25:21.618Z",
          reviewerName: "James Wilson",
          reviewerEmail: "james.wilson@example.com"
        }
      ],
      images: [
        "images/industrial_side_lamp1.webp",
        "images/industrial_side_lamp2.webp"
      ]
    },
    {
      id: 50215,
      name: "Tabletop Side Lamp",
      description: "A versatile tabletop side lamp with adjustable brightness levels. Its contemporary design fits perfectly on a nightstand, providing soft lighting for reading or relaxation.",
      category: "Lighting",
      price: 40,
      discountPercentage: 5,
      rating: 4.4,
      stock: 50,
      tags: ["Side Lamp", "Tabletop", "Adjustable"],
      brand: "CozyLights",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Exactly what I needed for my desk. The adjustable brightness is very useful.",
          date: "2025-02-07T06:15:21.618Z",
          reviewerName: "Lucas Taylor",
          reviewerEmail: "lucas.taylor@example.com"
        }
      ],
      images: [
        "images/tabletop_side_lamp1.webp",
        "images/tabletop_side_lamp2.webp"
      ]
    },
    {
      id: 50216,
      name: "Antique Side Lamp",
      description: "A vintage-inspired side lamp with a distressed metal base and a soft lampshade. This lamp brings a warm, nostalgic feel to any room, ideal for vintage or traditional interior styles.",
      category: "Lighting",
      price: 70,
      discountPercentage: 12,
      rating: 4.8,
      stock: 35,
      tags: ["Side Lamp", "Antique", "Vintage"],
      brand: "VintageLights",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "This lamp adds a lot of character to my home. Love the antique design!",
          date: "2025-02-06T05:45:21.618Z",
          reviewerName: "Grace Evans",
          reviewerEmail: "grace.evans@example.com"
        }
      ],
      images: [
        "images/antique_side_lamp1.webp",
        "images/antique_side_lamp2.webp"
      ]
    },
    {
      id: 50217,
      name: "LED Modern Side Lamp",
      description: "This energy-efficient LED side lamp offers a bright and clear light while consuming very little power. Its sleek and modern design makes it a perfect choice for any contemporary space.",
      category: "Lighting",
      price: 55,
      discountPercentage: 10,
      rating: 4.6,
      stock: 45,
      tags: ["LED", "Side Lamp", "Modern"],
      brand: "BrightLighting",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Very bright and looks great in my living room! Also love that it's LED.",
          date: "2025-02-05T04:30:21.618Z",
          reviewerName: "John Harrison",
          reviewerEmail: "john.harrison@example.com"
        }
      ],
      images: [
        "images/led_modern_side_lamp1.webp",
        "images/led_modern_side_lamp2.webp"
      ]
    },
    {
      id: 50218,
      name: "Minimalist Side Lamp",
      description: "A minimalist side lamp with a sleek, straight-line design. Ideal for modern and clean home interiors, this lamp adds an elegant touch without overpowering the room.",
      category: "Lighting",
      price: 45,
      discountPercentage: 7,
      rating: 4.4,
      stock: 30,
      tags: ["Side Lamp", "Minimalist", "Sleek"],
      brand: "PureLights",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "Great design, but would love more color options.",
          date: "2025-02-04T03:15:21.618Z",
          reviewerName: "Zoe Martinez",
          reviewerEmail: "zoe.martinez@example.com"
        }
      ],
      images: [
        "images/minimalist_side_lamp1.webp",
        "images/minimalist_side_lamp2.webp"
      ]
    },
    {
      id: 50219,
      name: "Luxury Side Lamp",
      description: "A luxurious side lamp designed with an opulent gold-plated base and a rich fabric lampshade. Perfect for adding glamour and sophistication to any room.",
      category: "Lighting",
      price: 120,
      discountPercentage: 18,
      rating: 4.9,
      stock: 20,
      tags: ["Side Lamp", "Luxury", "Gold"],
      brand: "LuxuraLights",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "This lamp looks so elegant! Adds a touch of class to my living room.",
          date: "2025-02-03T02:00:21.618Z",
          reviewerName: "Olivia Scott",
          reviewerEmail: "olivia.scott@example.com"
        }
      ],
      images: [
        "images/luxury_side_lamp1.webp",
        "images/luxury_side_lamp2.webp"
      ]
    },
    {
      id: 50220,
      name: "Geometric Side Lamp",
      description: "A geometric side lamp with a unique, modern design that looks great in contemporary spaces. Its bold and edgy look makes it a perfect statement piece for your home.",
      category: "Lighting",
      price: 75,
      discountPercentage: 5,
      rating: 4.3,
      stock: 50,
      tags: ["Side Lamp", "Geometric", "Modern"],
      brand: "EdgeLighting",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "The design is stunning! It really makes my living room stand out.",
          date: "2025-02-02T01:30:21.618Z",
          reviewerName: "Jackson Lee",
          reviewerEmail: "jackson.lee@example.com"
        }
      ],
      images: [
        "images/geometric_side_lamp1.webp",
        "images/geometric_side_lamp2.webp"
      ]
    },
    {
      id: 50221,
      name: "Art Deco Side Lamp",
      description: "A stunning art deco side lamp that blends geometric shapes with elegant detailing. This lamp makes a statement in any room, adding vintage flair with a modern twist.",
      category: "Lighting",
      price: 90,
      discountPercentage: 6,
      rating: 4.7,
      stock: 18,
      tags: ["Side Lamp", "Art Deco", "Vintage"],
      brand: "ArturaLights",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Absolutely love this! It’s the perfect art deco piece for my living room.",
          date: "2025-02-01T00:10:21.618Z",
          reviewerName: "Grace Wilson",
          reviewerEmail: "grace.wilson@example.com"
        }
      ],
      images: [
        "images/art_deco_side_lamp1.webp",
        "images/art_deco_side_lamp2.webp"
      ]
    }
  ]
  ,
  601: [
    {
      id: 6001,
      name: "Persian Area Rug",
      description: "A classic Persian area rug featuring intricate patterns and rich colors. Perfect for adding warmth and elegance to any room, this rug is made from high-quality wool for durability and comfort.",
      category: "Rugs",
      price: 350,
      discountPercentage: 10,
      rating: 4.8,
      stock: 20,
      tags: ["Area Rug", "Persian", "Wool", "Elegant"],
      brand: "RugMasters",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Such a beautiful rug! The quality is amazing, and it looks perfect in my living room.",
          date: "2025-02-12T10:00:21.618Z",
          reviewerName: "Sophia Miller",
          reviewerEmail: "sophia.miller@example.com"
        }
      ],
      images: [
        "images/persian_rug1.webp",
        "images/persian_rug2.webp"
      ]
    },
    {
      id: 6002,
      name: "Modern Geometric Rug",
      description: "A modern geometric area rug with bold patterns and a minimalist design. Ideal for contemporary interiors, this rug is made from high-quality synthetic fibers that are easy to maintain and clean.",
      category: "Rugs",
      price: 150,
      discountPercentage: 15,
      rating: 4.5,
      stock: 25,
      tags: ["Area Rug", "Geometric", "Modern", "Synthetic"],
      brand: "HomeRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "The rug fits perfectly in my office space. Love the modern design!",
          date: "2025-02-11T09:30:21.618Z",
          reviewerName: "John Green",
          reviewerEmail: "john.green@example.com"
        }
      ],
      images: [
        "images/modern_geometric_rug1.webp",
        "images/modern_geometric_rug2.webp"
      ]
    },
    {
      id: 6003,
      name: "Bohemian Area Rug",
      description: "A bohemian-style area rug that features vibrant colors and unique patterns. Perfect for adding a touch of eclectic style to your living room or bedroom, this rug is crafted with soft, plush fibers for comfort and style.",
      category: "Rugs",
      price: 200,
      discountPercentage: 5,
      rating: 4.7,
      stock: 30,
      tags: ["Area Rug", "Bohemian", "Colorful", "Plush"],
      brand: "BohoRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Love the vibrant colors and the softness of this rug. It really brightens up my room.",
          date: "2025-02-10T08:45:21.618Z",
          reviewerName: "Isabella Williams",
          reviewerEmail: "isabella.williams@example.com"
        }
      ],
      images: [
        "images/bohemian_rug1.webp",
        "images/bohemian_rug2.webp"
      ]
    }
  ]
  
    
    ,
  602: [
    {
      id: 6022,
      name: "Outdoor Waterproof Rug",
      description: "A durable outdoor rug designed to withstand the elements. Waterproof and UV-resistant, perfect for patios, gardens, and other outdoor spaces. Made from high-quality polypropylene material for easy cleaning.",
      category: "Rugs",
      price: 120,
      discountPercentage: 10,
      rating: 4.5,
      stock: 25,
      tags: ["Indoor-Outdoor", "Waterproof", "Patio", "UV Resistant"],
      brand: "SunRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Perfect for my patio! It’s easy to clean and holds up well in the rain.",
          date: "2025-02-12T11:00:21.618Z",
          reviewerName: "Olivia Johnson",
          reviewerEmail: "olivia.johnson@example.com"
        }
      ],
      images: [
        "images/outdoor_waterproof_rug1.webp",
        "images/outdoor_waterproof_rug2.webp"
      ]
    },
    {
      id: 6023,
      name: "Geometric Indoor-Outdoor Rug",
      description: "A modern geometric rug that can be used both indoors and outdoors. Made with synthetic fibers, it’s designed to resist fading, stains, and wear. Great for a stylish, functional addition to your space.",
      category: "Rugs",
      price: 95,
      discountPercentage: 12,
      rating: 4.6,
      stock: 30,
      tags: ["Indoor-Outdoor", "Geometric", "Modern", "Synthetic"],
      brand: "GeoRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "The design is vibrant, and it’s durable enough for outdoor use.",
          date: "2025-02-10T10:30:21.618Z",
          reviewerName: "James Brown",
          reviewerEmail: "james.brown@example.com"
        }
      ],
      images: [
        "images/geometric_indoor_outdoor_rug1.webp",
        "images/geometric_indoor_outdoor_rug2.webp"
      ]
    },
    {
      id: 6024,
      name: "Striped Indoor-Outdoor Rug",
      description: "A classic striped rug perfect for both indoor and outdoor spaces. Made with a blend of cotton and polyester, it’s soft to the touch but durable enough to handle outdoor conditions.",
      category: "Rugs",
      price: 80,
      discountPercentage: 8,
      rating: 4.4,
      stock: 40,
      tags: ["Indoor-Outdoor", "Striped", "Cotton", "Durable"],
      brand: "StripeRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Such a simple yet stylish rug! Works perfectly both on my balcony and living room.",
          date: "2025-02-09T09:15:21.618Z",
          reviewerName: "Sophia Wilson",
          reviewerEmail: "sophia.wilson@example.com"
        }
      ],
      images: [
        "images/striped_indoor_outdoor_rug1.webp",
        "images/striped_indoor_outdoor_rug2.webp"
      ]
    },
    {
      id: 6025,
      name: "Traditional Indoor-Outdoor Rug",
      description: "This traditional rug features intricate designs, making it an ideal choice for adding a touch of elegance to any space, whether indoors or outdoors. Made from durable, weather-resistant material.",
      category: "Rugs",
      price: 150,
      discountPercentage: 15,
      rating: 4.7,
      stock: 35,
      tags: ["Indoor-Outdoor", "Traditional", "Elegant", "Weather-Resistant"],
      brand: "ClassicRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "The design is gorgeous and it adds a touch of class to my patio.",
          date: "2025-02-08T08:45:21.618Z",
          reviewerName: "Ethan Harris",
          reviewerEmail: "ethan.harris@example.com"
        }
      ],
      images: [
        "images/traditional_indoor_outdoor_rug1.webp",
        "images/traditional_indoor_outdoor_rug2.webp"
      ]
    },
    {
      id: 6026,
      name: "Round Indoor-Outdoor Rug",
      description: "A round-shaped rug ideal for both indoor and outdoor use. Made from UV-resistant fibers, this rug resists fading and is perfect for round tables or as a decorative piece in any room or garden.",
      category: "Rugs",
      price: 110,
      discountPercentage: 7,
      rating: 4.3,
      stock: 50,
      tags: ["Indoor-Outdoor", "Round", "UV Resistant", "Decorative"],
      brand: "CircleRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 4,
          comment: "I love the round shape! It looks great under my dining table outside.",
          date: "2025-02-07T07:30:21.618Z",
          reviewerName: "Mia Clark",
          reviewerEmail: "mia.clark@example.com"
        }
      ],
      images: [
        "images/round_indoor_outdoor_rug1.webp",
        "images/round_indoor_outdoor_rug2.webp"
      ]
    },
    {
      id: 6027,
      name: "Boho Style Indoor-Outdoor Rug",
      description: "A boho-style rug featuring earthy tones and unique patterns, perfect for creating a laid-back, artistic vibe in any space. Ideal for both indoor and outdoor areas with durable material.",
      category: "Rugs",
      price: 130,
      discountPercentage: 10,
      rating: 4.9,
      stock: 20,
      tags: ["Indoor-Outdoor", "Boho", "Earthy", "Artistic"],
      brand: "BohoRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Absolutely love this rug! It’s the perfect addition to my outdoor lounge area.",
          date: "2025-02-06T06:00:21.618Z",
          reviewerName: "Charlotte Adams",
          reviewerEmail: "charlotte.adams@example.com"
        }
      ],
      images: [
        "images/boho_indoor_outdoor_rug1.webp",
        "images/boho_indoor_outdoor_rug2.webp"
      ]
    },
    {
      id: 6028,
      name: "Outdoor Patio Rug",
      description: "An outdoor patio rug designed to provide comfort and style in your outdoor spaces. Made with durable synthetic materials that can withstand harsh weather conditions.",
      category: "Rugs",
      price: 100,
      discountPercentage: 5,
      rating: 4.6,
      stock: 40,
      tags: ["Indoor-Outdoor", "Patio", "Comfort", "Weather-Resistant"],
      brand: "PatioRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "This rug is perfect for my patio. It stays in great condition despite the rain.",
          date: "2025-02-05T05:10:21.618Z",
          reviewerName: "Ava Nelson",
          reviewerEmail: "ava.nelson@example.com"
        }
      ],
      images: [
        "images/outdoor_patio_rug1.webp",
        "images/outdoor_patio_rug2.webp"
      ]
    },
    {
      id: 6029,
      name: "Abstract Indoor-Outdoor Rug",
      description: "An abstract-patterned rug that can be used indoors or outdoors. Its vibrant design brings a splash of color to any space, while its durable construction makes it resistant to fading and damage.",
      category: "Rugs",
      price: 125,
      discountPercentage: 13,
      rating: 4.8,
      stock: 30,
      tags: ["Indoor-Outdoor", "Abstract", "Vibrant", "Durable"],
      brand: "ArtRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "The design is beautiful, and it holds up really well outside.",
          date: "2025-02-04T04:20:21.618Z",
          reviewerName: "Lucas Walker",
          reviewerEmail: "lucas.walker@example.com"
        }
      ],
      images: [
        "images/abstract_indoor_outdoor_rug1.webp",
        "images/abstract_indoor_outdoor_rug2.webp"
      ]
    },
    {
      id: 6030,
      name: "Beach Style Indoor-Outdoor Rug",
      description: "A beach-style rug that’s perfect for outdoor spaces like decks and patios. Made with weather-resistant fibers, this rug provides comfort and a relaxed beach vibe to your space.",
      category: "Rugs",
      price: 90,
      discountPercentage: 9,
      rating: 4.7,
      stock: 15,
      tags: ["Indoor-Outdoor", "Beach Style", "Relaxed", "Weather-Resistant"],
      brand: "BeachRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Such a perfect rug for my beach house! It looks amazing on the deck.",
          date: "2025-02-03T03:30:21.618Z",
          reviewerName: "Amelia Moore",
          reviewerEmail: "amelia.moore@example.com"
        }
      ],
      images: [
        "images/beach_indoor_outdoor_rug1.webp",
        "images/beach_indoor_outdoor_rug2.webp"
      ]
    }
  ]
  ,
  603:[
    {
      id: 60333,
      name: "Coir Doormat",
      description: "A durable coir doormat that effectively scrapes dirt off shoes. Made from natural coconut fibers, it's ideal for use at the entrance of your home or office. Its classic design adds a welcoming touch to any doorstep.",
      category: "Doormats",
      price: 20,
      discountPercentage: 5,
      rating: 4.7,
      stock: 50,
      tags: ["Doormat", "Coir", "Natural", "Durable"],
      brand: "EcoRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "This doormat is sturdy and does a great job of cleaning off dirt. Love the natural look!",
          date: "2025-02-12T12:30:21.618Z",
          reviewerName: "Emma Davis",
          reviewerEmail: "emma.davis@example.com"
        }
      ],
      images: [
        "images/coir_doormat1.webp",
        "images/coir_doormat2.webp"
      ]
    },
    {
      id: 60334,
      name: "Rubber Doormat",
      description: "A weather-resistant rubber doormat designed to withstand the harshest outdoor conditions. With a non-slip backing and durable construction, it's perfect for high-traffic areas. Ideal for keeping dirt and debris outside.",
      category: "Doormats",
      price: 25,
      discountPercentage: 8,
      rating: 4.5,
      stock: 40,
      tags: ["Doormat", "Rubber", "Weather-Resistant", "Non-Slip"],
      brand: "SolidMat",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "Perfect for the front porch. It doesn’t slip, and it looks great!",
          date: "2025-02-11T11:15:21.618Z",
          reviewerName: "Liam Walker",
          reviewerEmail: "liam.walker@example.com"
        }
      ],
      images: [
        "images/rubber_doormat1.webp",
        "images/rubber_doormat2.webp"
      ]
    },
    {
      id: 60335,
      name: "Welcome Doormat",
      description: "A charming doormat with a 'Welcome' message, perfect for greeting guests at the door. Made from high-quality fabric, it offers great absorbency and a soft feel underfoot while keeping dirt at bay.",
      category: "Doormats",
      price: 18,
      discountPercentage: 10,
      rating: 4.8,
      stock: 60,
      tags: ["Doormat", "Welcome", "Absorbent", "Fabric"],
      brand: "WelcomeRugs",
      availabilityStatus: "In Stock",
      reviews: [
        {
          rating: 5,
          comment: "It’s the perfect addition to my home’s entrance. Guests always compliment it!",
          date: "2025-02-10T10:00:21.618Z",
          reviewerName: "Ava Smith",
          reviewerEmail: "ava.smith@example.com"
        }
      ],
      images: [
        "images/welcome_doormat1.webp",
        "images/welcome_doormat2.webp"
      ]
    }
  ]
  

};

// API Endpoint: Get all furniture types
app.get('/api/furniture_types', (req, res) => {
  res.json(furnitureTypes);
});

// API Endpoint: Get parts of a specific furniture type
app.get('/api/furniture_types/:id/parts', (req, res) => {
  const furnitureTypeId = parseInt(req.params.id);
  if (!furnitureParts[furnitureTypeId]) {
    return res.status(404).send({ message: `Furniture type with ID ${furnitureTypeId} not found.` });
  }
  const parts = furnitureParts[furnitureTypeId];
  res.json(parts);
});

// API Endpoint: Get products of a specific part
app.get('/api/parts/:id/products', (req, res) => {
  const partId = parseInt(req.params.id);
  if (!products[partId]) {
    return res.status(404).send({ message: `No products found for partId ${partId}` });
  }
  const filteredProducts = products[partId];
  res.json(filteredProducts);
});

// API Endpoint: Get details of a specific product
app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  let productFound = null;
  for (const part in products) {
    productFound = products[part].find(product => product.id === productId);
    if (productFound) break;
  }

  if (!productFound) {
    return res.status(404).send({ message: `Product with ID ${productId} not found.` });
  }

  res.json(productFound);
});

// API Endpoint: Get all products
app.get('/api/products', (req, res) => {
  let allProducts = [];

  // Iterate through all parts and collect the products
  for (const part in products) {
    allProducts = allProducts.concat(products[part]);
  }

  // Return all products
  res.json(allProducts);
});



// In-memory wishlist (this would be stored in a database in a real app)
let wishlist = [];

// API Endpoint: Add product to wishlist
app.post('/api/wishlist', (req, res) => {
  const { productId } = req.body;

  // تحقق من إذا كان الـ productId موجود في البيانات
  if (!productId) {
    return res.status(400).send({ message: 'Product ID is required' });
  }

  // تحقق إذا كان المنتج موجود في قائمة المنتجات
  let productToAdd = null;
  for (const part in products) {
    productToAdd = products[part].find(product => product.id === productId);
    if (productToAdd) break;
  }

  if (!productToAdd) {
    return res.status(404).send({ message: `Product with ID ${productId} not found.` });
  }

  // إضافة المنتج إلى الـ wishlist
  wishlist.push(productToAdd);
  res.status(200).json({ message: 'Product added to wishlist', wishlist });
});

// API Endpoint: Remove product from wishlist
app.delete('/api/wishlist/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // Find the product in the wishlist
  const index = wishlist.findIndex(item => item.id === productId);

  if (index === -1) {
    return res.status(404).send({ message: 'Product not found in wishlist' });
  }

  // Remove the product from the wishlist
  wishlist.splice(index, 1);
  res.status(200).json({ message: 'Product removed from wishlist', wishlist });
});

// API Endpoint: Get all products in the wishlist
app.get('/api/wishlist', (req, res) => {
  res.status(200).json(wishlist);
});


// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
