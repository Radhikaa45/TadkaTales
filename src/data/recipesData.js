// src/data/recipesData.js

const featuredRecipes = [
  // Breakfast Recipes
  {
    id: 1,
    name: "Masala Dosa",
    category: "breakfast",
    image: "https://vanitascorner.com/wp-content/uploads/2018/01/Mysore-Masala-Dosa-1024x1024.jpg",
    prepTime: "30 mins",
    cookTime: "20 mins",
    difficulty: "Medium",
    rating: 4.8,
    description: "Crispy rice crepe filled with spiced potato filling, served with coconut chutney and sambar.",
    ingredients: [
      "2 cups dosa rice",
      "1/2 cup urad dal",
      "1 tsp fenugreek seeds",
      "4 medium potatoes",
      "1 onion, chopped",
      "2 green chilies",
      "1 tsp mustard seeds",
      "Curry leaves",
      "Turmeric powder",
      "Salt to taste"
    ],
    instructions: [
      "Soak rice and dal separately for 6 hours",
      "Grind to smooth batter and ferment overnight",
      "Prepare potato filling with spices",
      "Spread batter on hot tawa, cook until crispy",
      "Add filling and fold dosa"
    ]
  },
  {
    id: 2,
    name: "Poha",
    category: "breakfast",
    image: "https://images.healthshots.com/healthshots/en/uploads/2022/07/11123921/Poha.jpg",
    prepTime: "15 mins",
    cookTime: "10 mins",
    difficulty: "Easy",
    rating: 4.5,
    description: "Flattened rice cooked with onions, peanuts, and mild spices - a popular Maharashtrian breakfast.",
    ingredients: [
      "2 cups thick poha",
      "1 onion, finely chopped",
      "2 tbsp peanuts",
      "1 tsp mustard seeds",
      "1 tsp turmeric powder",
      "2 green chilies",
      "Lemon juice",
      "Fresh coriander",
      "Salt to taste"
    ]
  },
  {
    id: 3,
    name: "Aloo Paratha",
    category: "breakfast",
    state: "Punjab",
    image: "https://www.sanjanafeasts.co.uk/wp-content/uploads/2020/01/Amazing-Aloo-Paratha-recipe-Indian.jpg",
    prepTime: "25 mins",
    cookTime: "15 mins",
    difficulty: "Medium",
    rating: 4.7,
    description: "Whole wheat flatbread stuffed with spiced potato mixture, best served with butter and pickle.",
    ingredients: [
      "For the dough: 2 cups whole wheat flour, 1 tsp oil, salt, water.",
      "For the filling: 3 medium potatoes (boiled and mashed), 1/2 tsp garam masala, 1/2 tsp red chili powder, 1/2 tsp amchur (dry mango powder), chopped green chilies, chopped coriander leaves, salt to taste."
    ],
    instructions: [
      "Knead a soft dough with whole wheat flour, oil, salt, and water. Cover and let it rest.",
      "For the filling, combine the mashed potatoes with all the spices, green chilies, and coriander. Mix well.",
      "Divide the dough and the filling into equal-sized balls.",
      "Flatten a dough ball into a small disc. Place the potato filling in the center and seal it by bringing the edges together.",
      "Gently roll the stuffed ball into a flatbread (paratha) using a rolling pin.",
      "Cook the paratha on a hot tawa with a little ghee or oil until golden-brown spots appear on both sides. Serve hot."
    ]
  },
  {
    id: 16,
    name: "Puttu",
    category: "breakfast",
    state: "Kerala",
    image: "https://i.pinimg.com/originals/40/3d/ae/403dae5cad66bf31868f937bca4f78a7.jpg",
    prepTime: "15 mins",
    cookTime: "20 mins",
    difficulty: "Medium",
    rating: 4.6,
    description: "A steamed breakfast dish of cylindrical rice flour and grated coconut layers, served with kadala curry or ripe bananas.",
    ingredients: [
      "1 cup rice flour",
      "1/2 cup grated coconut",
      "1/4 tsp salt",
      "Water"
    ],
    instructions: [
      "Mix rice flour and salt. Sprinkle water to form a crumbly mixture.",
      "In a puttu maker, layer grated coconut and the rice mixture.",
      "Steam for 5-7 minutes until cooked.",
      "Serve hot with kadala curry or bananas."
    ]
  },

  // Lunch Recipes
  {
    id: 4,
    name: "Butter Chicken",
    category: "lunch",
    image: "https://wallpaperaccess.com/full/5912737.jpg",
    prepTime: "20 mins",
    cookTime: "40 mins",
    difficulty: "Medium",
    rating: 4.9,
    description: "Creamy tomato-based curry with tender chicken pieces, rich in flavor and aroma.",
    ingredients: [
      "500g chicken breast",
      "2 cups tomato puree",
      "1/2 cup fresh cream",
      "2 tbsp butter",
      "1 tbsp ginger-garlic paste",
      "1 tsp garam masala",
      "1 tsp kasuri methi",
      "1/2 tsp red chili powder",
      "Salt to taste"
    ],
    instructions: [
      "Marinate chicken with yogurt and spices for 30 mins",
      "Grill or pan-fry chicken pieces",
      "Prepare tomato-based gravy with spices",
      "Add chicken to gravy and simmer for 10 mins",
      "Finish with cream and butter"
    ]
  },
  {
    id: 5,
    name: "Dal Makhani",
    category: "lunch",
    state: "Punjab",
    image: "https://shwetainthekitchen.com/wp-content/uploads/2019/11/IMG_6917_1-scaled.jpg",
    prepTime: "10 mins",
    cookTime: "45 mins",
    difficulty: "Easy",
    rating: 4.6,
    description: "Creamy black lentils slow-cooked with butter and spices, a North Indian classic.",
    ingredients: [
      "1 cup whole black lentils (urad dal), soaked overnight",
      "1/4 cup kidney beans (rajma), soaked overnight",
      "2 tbsp butter or ghee",
      "1 onion, finely chopped",
      "2 tomatoes, pureed",
      "1 tbsp ginger-garlic paste",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "1/2 cup fresh cream",
      "Salt to taste"
    ],
    instructions: [
      "Pressure cook the soaked lentils and beans with 4 cups of water and a pinch of salt until they are very soft.",
      "In a pan, melt butter or ghee. Add chopped onion and sauté until golden.",
      "Add ginger-garlic paste and cook for one minute.",
      "Stir in the tomato puree, red chili powder, and salt. Cook until the oil separates.",
      "Add the cooked lentils and beans to the pan. Simmer for at least 20 minutes on low heat, mashing some of the lentils to make the curry creamy.",
      "Stir in the garam masala and fresh cream. Serve hot with naan or rice."
    ]
  },
  {
    id: 6,
    name: "Vegetable Biryani",
    category: "lunch",
    state: "Hyderabad, Telangana and Lucknow, Uttar Pradesh",
    image: "https://kannanskitchen.com/wp-content/uploads/2021/04/DSC_1079_1.jpg",
    prepTime: "30 mins",
    cookTime: "40 mins",
    difficulty: "Hard",
    rating: 4.8,
    description: "Fragrant rice layered with mixed vegetables and aromatic spices, cooked to perfection.",
    ingredients: [
      "1.5 cups basmati rice",
      "1 cup mixed vegetables (carrots, beans, peas, cauliflower)",
      "1/2 cup yogurt",
      "1 onion, thinly sliced and fried until crispy (birista)",
      "1 tbsp ginger-garlic paste",
      "1 tsp biryani masala powder",
      "1/2 tsp turmeric powder",
      "Whole spices (bay leaf, cloves, cardamom, cinnamon)",
      "Saffron strands soaked in milk",
      "Mint and coriander leaves, chopped",
      "Ghee or oil",
      "Salt to taste"
    ],
    instructions: [
      "Marinate the mixed vegetables with yogurt, ginger-garlic paste, turmeric, and biryani masala for 30 minutes.",
      "Parboil the basmati rice with whole spices and salt until it is 70% cooked. Drain and set aside.",
      "In a heavy-bottomed pot, spread a layer of the marinated vegetables.",
      "Top with a layer of the parboiled rice. Sprinkle with fried onions, chopped mint, and coriander. Drizzle with saffron milk and ghee.",
      "Cover the pot with a tight lid (or seal with dough) and cook on a very low flame (dum method) for 20-25 minutes.",
      "Gently mix the biryani before serving."
    ]
  },
  {
    id: 17,
    name: "Litti Chokha",
    category: "lunch",
    state: "Bihar",
    image: "https://i.pinimg.com/originals/c7/30/e1/c730e1d29ef4a5cef9b07486edd31b60.jpg",
    prepTime: "30 mins",
    cookTime: "25 mins",
    difficulty: "Medium",
    rating: 4.7,
    description: "A traditional dish from Bihar, Litti are baked whole wheat balls stuffed with sattu (roasted gram flour) and served with chokha (mashed vegetables).",
    ingredients: [
      "2 cups whole wheat flour",
      "1 cup sattu",
      "1 tsp ajwain (carom seeds)",
      "1 onion, finely chopped",
      "2 green chilies, chopped",
      "2 tbsp mustard oil",
      "Salt to taste",
      "1 brinjal, roasted",
      "2 potatoes, boiled",
      "2 tomatoes, roasted"
    ],
    instructions: [
      "Knead a stiff dough with wheat flour and water.",
      "Mix sattu, chopped onion, chilies, mustard oil, and salt to make the filling.",
      "Stuff small balls of dough with the sattu mixture.",
      "Roast the littis over coal or in an oven until golden brown.",
      "Mash roasted brinjal, potatoes, and tomatoes with chopped onion, green chilies, and mustard oil to make chokha.",
      "Serve hot littis with chokha and ghee."
    ]
  },
  {
    id: 18,
    name: "Goan Fish Curry",
    category: "lunch",
    state: "Goa",
    image: "https://3.bp.blogspot.com/-KsRGzI4i1mg/VV_lcJxLJMI/AAAAAAAABFk/LUG-83opyd0/s1600/GFC1.jpg",
    prepTime: "20 mins",
    cookTime: "25 mins",
    difficulty: "Medium",
    rating: 4.8,
    description: "A tangy and spicy fish curry made with coconut, red chilies, and kokum, a staple of Goan cuisine.",
    ingredients: [
      "500g fish fillets",
      "1 cup grated coconut",
      "6-8 dried red chilies",
      "1 tsp turmeric powder",
      "1/2 tsp cumin seeds",
      "4-5 cloves of garlic",
      "1-inch ginger piece",
      "1 onion, chopped",
      "2 pieces kokum",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Grind coconut, red chilies, turmeric, cumin, garlic, and ginger into a smooth paste with water.",
      "Heat oil and sauté chopped onion until golden.",
      "Add the ground masala paste and cook until the oil separates.",
      "Add water to make a gravy, then add kokum and salt.",
      "Bring to a boil, then add the fish fillets.",
      "Simmer until the fish is cooked through. Serve hot with rice."
    ]
  },
  {
    id: 23,
    name: "Chana Masala",
    category: "lunch",
    state: "Punjab",
    image: "https://vegecravings.com/wp-content/uploads/2017/01/chole-recipe-step-by-step-instructions-13.jpg",
    prepTime: "15 mins",
    cookTime: "30 mins",
    difficulty: "Easy",
    rating: 4.7,
    description: "A classic Punjabi curry made with chickpeas simmered in a tangy and spicy onion-tomato gravy.",
    ingredients: [
      "1 can (15 oz) chickpeas, drained and rinsed",
      "2 tbsp oil",
      "1 onion, finely chopped",
      "2 tomatoes, pureed",
      "1 tbsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1 tsp coriander powder",
      "1 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tbsp chana masala powder",
      "Salt to taste",
      "Fresh coriander for garnish"
    ],
    instructions: [
      "Heat oil in a pan and add cumin seeds. Let them splutter.",
      "Add chopped onion and sauté until golden brown.",
      "Add ginger-garlic paste and cook for one minute until the raw smell disappears.",
      "Stir in the tomato puree and all the dry spices (coriander, turmeric, red chili, and chana masala powder). Cook until the oil separates from the masala.",
      "Add the chickpeas and mix well, coating them with the gravy.",
      "Pour in about 1 cup of water, add salt, and bring to a simmer.",
      "Cover and cook for 15-20 minutes, allowing the flavors to meld.",
      "Garnish with fresh coriander before serving."
    ]
  },
  {
    id: 24,
    name: "Hyderabadi Biryani",
    category: "lunch",
    state: "Telangana",
    image: "https://www.licious.in/blog/wp-content/uploads/2022/06/mutton-hyderabadi-biryani-01.jpg",
    prepTime: "45 mins",
    cookTime: "60 mins",
    difficulty: "Hard",
    rating: 4.9,
    description: "A world-famous and aromatic rice dish where basmati rice and marinated meat are slow-cooked in a 'dum' style.",
    ingredients: [
      "500g chicken or mutton, cut into pieces",
      "2 cups basmati rice",
      "1 cup yogurt",
      "2 onions, sliced and fried until golden (birista)",
      "1/2 cup fresh mint and coriander leaves, chopped",
      "2 tbsp ginger-garlic paste",
      "Whole spices: cinnamon sticks, cloves, cardamom pods, bay leaves",
      "Biryani masala powder",
      "Saffron strands soaked in milk",
      "Ghee or oil",
      "Salt to taste"
    ],
    instructions: [
      "Marinate the chicken or mutton with yogurt, ginger-garlic paste, half of the fried onions, half of the mint and coriander, biryani masala, and salt.",
      "Parboil the basmati rice to 70% doneness with whole spices and salt.",
      "In a heavy-bottomed pot, spread a layer of the marinated meat.",
      "Top with a layer of the parboiled rice. Sprinkle the remaining fried onions, mint, and coriander. Drizzle with the saffron milk and ghee.",
      "Seal the pot with a tight-fitting lid and cook on low heat for 45-60 minutes (dum method).",
      "Gently fluff the biryani with a fork before serving."
    ]
  },

  // Dinner Recipes
  {
    id: 7,
    name: "Rogan Josh",
    category: "dinner",
    image: "https://img.taste.com.au/TFQ_zAsZ/taste/2017/06/lamb-rogan-josh-127388-1.jpg",
    prepTime: "25 mins",
    cookTime: "50 mins",
    difficulty: "Medium",
    rating: 4.7,
    description: "Aromatic Kashmiri lamb curry with deep red color and rich flavors."
  },
  {
    id: 8,
    name: "Palak Paneer",
    category: "dinner",
    image: "https://allwaysdelicious.com/wp-content/uploads/2019/10/palak-paneer-oh-sq-scaled.jpg",
    prepTime: "15 mins",
    cookTime: "25 mins",
    difficulty: "Easy",
    rating: 4.5,
    description: "Soft paneer cubes in creamy spinach gravy, packed with nutrients and flavor."
  },
  {
    id: 9,
    name: "Chicken Tikka Masala",
    category: "dinner",
    state: "Punjab and the UK",
    image: "https://indisch-kochen.com/wp-content/uploads/2022/03/chicken-tikka-masala-haehnchen-tikka-masala.png",
    prepTime: "20 mins",
    cookTime: "35 mins",
    difficulty: "Medium",
    rating: 4.8,
    description: "Grilled chicken chunks in rich, creamy tomato sauce with authentic Indian spices.",
    ingredients: [
      "500g boneless chicken, cubed",
      "1 cup yogurt",
      "1 tbsp ginger-garlic paste",
      "1 tsp turmeric powder",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "2 tbsp oil",
      "2 cups tomato puree",
      "1/2 cup fresh cream",
      "1 tsp kasuri methi (dried fenugreek leaves)",
      "Salt to taste"
    ],
    instructions: [
      "Marinate the chicken with yogurt, half of the ginger-garlic paste, turmeric, red chili powder, and salt for at least 30 minutes.",
      "Cook the marinated chicken in an oven or on a pan until it's slightly charred.",
      "In a separate pan, heat oil and add the remaining ginger-garlic paste. Sauté for a minute.",
      "Add the tomato puree, garam masala, and salt. Cook until the oil separates.",
      "Stir in the cream and kasuri methi.",
      "Add the cooked chicken tikka pieces and simmer for 5-7 minutes. Serve hot."
    ]
  },
  {
    id: 19,
    name: "Dal Baati Churma",
    category: "dinner",
    state: "Rajasthan",
    image: "https://kannanskitchen.com/wp-content/uploads/2021/07/DSC_8173-5-768x1152.jpg",
    prepTime: "40 mins",
    cookTime: "50 mins",
    difficulty: "Hard",
    rating: 4.9,
    description: "A complete Rajasthani meal with baked wheat flour dumplings (Baati) served with a spicy lentil curry (Dal) and a sweet crumble (Churma).",
    ingredients: [
      "For Dal: 1/2 cup chana dal, 1/2 cup toor dal, 1/2 cup moong dal, spices, onions, tomatoes.",
      "For Baati: 2 cups whole wheat flour, 1/2 cup semolina, 1/4 cup ghee, salt, water.",
      "For Churma: 1 cup coarsely ground wheat, 1/2 cup ghee, 1/2 cup jaggery or sugar powder, cardamom powder."
    ],
    instructions: [
      "Prepare a thick dough for the baatis and bake them until golden brown.",
      "Cook the three dals with onions, tomatoes, and spices to make a thick curry.",
      "Fry the churma mixture in ghee until fragrant, then add powdered jaggery and cardamom.",
      "Crush the hot baatis and pour generous amounts of ghee over them.",
      "Serve the baatis with the dal and churma."
    ]
  },
  {
    id: 22,
    name: "Rajma Chawal",
    category: "dinner",
    state: "Punjab",
    image: "https://wordpress.kpu.ca/foodhistory/files/2023/04/IMG_1375.jpeg",
    prepTime: "10 mins",
    cookTime: "45 mins",
    difficulty: "Medium",
    rating: 4.7,
    description: "A popular comfort food from North India, consisting of red kidney bean curry (rajma) served with steamed rice (chawal).",
    ingredients: [
      "1 cup dry rajma (kidney beans), soaked overnight",
      "2 onions, finely chopped",
      "2 tomatoes, pureed",
      "1 tbsp ginger-garlic paste",
      "1 tsp cumin seeds",
      "1 tsp coriander powder",
      "1 tsp red chili powder",
      "1 tsp garam masala",
      "1 tsp rajma masala (optional)",
      "Salt to taste",
      "2 tbsp oil"
    ],
    instructions: [
      "Pressure cook the soaked rajma with salt and a bay leaf for 6-7 whistles until soft.",
      "Heat oil in a pan and add cumin seeds. Let them splutter.",
      "Add chopped onions and sauté until golden brown.",
      "Add ginger-garlic paste and cook until the raw smell is gone.",
      "Stir in the tomato puree, coriander powder, red chili powder, and salt. Cook until the oil separates.",
      "Add the cooked rajma along with its water to the gravy. Mix well.",
      "Simmer for 15-20 minutes, allowing the flavors to combine.",
      "Finally, stir in garam masala and rajma masala. Garnish with fresh coriander.",
      "Serve hot with steamed basmati rice."
    ]
  },

  // Snack Recipes
  {
    id: 10,
    name: "Paneer Tikka",
    category: "snack",
    image: "https://danamandi.ca/wp-content/uploads/2022/08/Tandoori-Paneer-Tikka.jpeg",
    prepTime: "20 mins",
    cookTime: "15 mins",
    difficulty: "Easy",
    rating: 4.6,
    description: "Marinated paneer cubes grilled to perfection with bell peppers and onions.",
    ingredients: [
      "250g paneer cubes",
      "1 cup yogurt",
      "1 tbsp ginger-garlic paste",
      "1 tsp chaat masala",
      "1 tsp garam masala",
      "1 bell pepper, cubed",
      "1 onion, cubed",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Prepare marinade with yogurt and spices",
      "Marinate paneer and vegetables for 1 hour",
      "Skewer paneer and vegetables alternately",
      "Grill or bake until slightly charred",
      "Serve with mint chutney"
    ]
  },
  {
    id: 11,
    name: "Samosa",
    category: "snack",
    state: "Widespread across India, particularly in Mumbai, Delhi, and Kolkata",
    image: "https://tasteofmissions.com/wp-content/uploads/2021/07/Samosas-on-plate.jpeg",
    prepTime: "40 mins",
    cookTime: "20 mins",
    difficulty: "Hard",
    rating: 4.9,
    description: "Crispy pastry filled with spiced potatoes and peas, perfect with chutney.",
    ingredients: [
      "For the dough: 2 cups all-purpose flour, 1/4 cup oil or ghee, water, salt.",
      "For the filling: 3 medium potatoes (boiled and mashed), 1/2 cup green peas, 1 tbsp oil, 1 tsp cumin seeds, 1/2 tsp ginger paste, 1/2 tsp green chili paste, 1 tsp coriander powder, 1/2 tsp red chili powder, 1/2 tsp garam masala, salt to taste.",
      "Oil for deep-frying."
    ],
    instructions: [
      "Prepare the dough by mixing flour, salt, and oil. Add water gradually and knead into a stiff dough. Cover and let it rest for 30 minutes.",
      "For the filling, heat oil and add cumin seeds. Once they splutter, add ginger-chili paste and sauté.",
      "Add the mashed potatoes, peas, and all the dry spices. Mix well and cook for 5 minutes. Let the filling cool completely.",
      "Divide the dough into small balls. Roll each ball into an oval shape and cut it in half.",
      "Form a cone from each half, fill with the potato mixture, and seal the edges.",
      "Deep-fry the samosas on low to medium heat until they are golden brown and crispy."
    ]
  },
  {
    id: 12,
    name: "Bhel Puri",
    category: "snack",
    state: "Mumbai, Maharashtra",
    image: "https://asiasociety.org/sites/default/files/styles/1200w/public/B/bhelpuri_0.jpg",
    prepTime: "15 mins",
    cookTime: "0 mins",
    difficulty: "Easy",
    rating: 4.4,
    description: "A popular Mumbai street food made with puffed rice, vegetables, and tangy chutneys.",
    ingredients: [
      "2 cups puffed rice (murmura)",
      "1/4 cup sev (fried gram flour vermicelli)",
      "1/4 cup chopped onions",
      "1/4 cup chopped tomatoes",
      "1 boiled potato, cubed",
      "2 tbsp green chutney",
      "2 tbsp sweet tamarind chutney",
      "1 tsp chaat masala",
      "Salt to taste",
      "Fresh coriander for garnish",
      "Crushed papdi (flat puri) for crunch"
    ],
    instructions: [
      "In a large bowl, combine the puffed rice, chopped onions, tomatoes, and boiled potato.",
      "Add the green and sweet chutneys, chaat masala, and salt.",
      "Toss everything gently until well combined.",
      "Finally, add the sev and crushed papdi for a crunchy texture just before serving.",
      "Serve immediately to prevent the puffed rice from becoming soggy."
    ]
  },
  {
    id: 20,
    name: "Dhokla",
    category: "snack",
    state: "Gujarat",
    image: "https://cdn2.foodviva.com/static-content/food-images/snacks-recipes/khaman-dhokla-recipe/khaman-dhokla-recipe-1.jpg",
    prepTime: "10 mins",
    cookTime: "20 mins",
    difficulty: "Easy",
    rating: 4.7,
    description: "A fluffy, steamed savory cake made from fermented rice and chickpea flour batter, tempered with mustard seeds and curry leaves.",
    ingredients: [
      "1 cup besan (gram flour)",
      "1/2 cup yogurt",
      "1 tbsp ginger-green chili paste",
      "1 tsp turmeric powder",
      "1 tsp sugar",
      "1 tsp eno fruit salt",
      "2 tbsp oil",
      "1 tsp mustard seeds",
      "Curry leaves",
      "Green chilies",
      "Water"
    ],
    instructions: [
      "Mix besan, yogurt, ginger-chili paste, turmeric, sugar, and salt with water to make a smooth batter.",
      "Add eno fruit salt and whisk vigorously until frothy.",
      "Pour batter into a greased tin and steam for 15-20 minutes.",
      "Prepare the tempering by heating oil and adding mustard seeds and curry leaves.",
      "Pour the tempering over the steamed dhokla and cut into pieces. Serve with chutney."
    ]
  },
  {
    id: 25,
    name: "Vada Pav",
    category: "snack",
    state: "Maharashtra",
    image: "https://altomerge.com/wp-content/uploads/2024/06/Vada-Pav-4.jpg",
    prepTime: "20 mins",
    cookTime: "20 mins",
    difficulty: "Medium",
    rating: 4.5,
    description: "A popular street food from Mumbai, it's a deep-fried potato dumpling (vada) seasoned with spices, placed inside a soft bread bun (pav), and served with various chutneys.",
    ingredients: [
      "4-5 medium potatoes, boiled and mashed",
      "1 tsp mustard seeds",
      "1/2 tsp asafoetida (hing)",
      "Curry leaves",
      "1 tsp ginger-garlic-green chili paste",
      "1/2 tsp turmeric powder",
      "Salt to taste",
      "1 cup gram flour (besan)",
      "Vada Pav buns (pav)",
      "Dry garlic chutney",
      "Green chutney"
    ],
    instructions: [
      "For the vada filling, heat a little oil and add mustard seeds, hing, and curry leaves.",
      "Add ginger-garlic-chili paste and sauté for a minute.",
      "Add the mashed potatoes, turmeric, and salt. Mix well and let it cool.",
      "Shape the potato mixture into small balls.",
      "Make a thick batter with gram flour, a pinch of turmeric, salt, and water.",
      "Dip the potato balls in the batter and deep-fry until golden brown and crispy.",
      "Slit the pav, apply some green and dry garlic chutney, place the vada inside, and serve hot."
    ]
  },

  // Dessert Recipes
  {
    id: 13,
    name: "Gulab Jamun",
    category: "dessert",
    image: "https://masalaandchai.com/wp-content/uploads/2021/11/Gulab-Jamun-with-Syrup-Pour.jpg",
    prepTime: "20 mins",
    cookTime: "25 mins",
    difficulty: "Medium",
    rating: 4.8,
    description: "Soft, melt-in-mouth milk solids dumplings soaked in sugar syrup.",
    ingredients: [
      "1 cup milk powder",
      "1/4 cup all-purpose flour",
      "1/4 tsp baking soda",
      "2 tbsp ghee",
      "Milk for kneading",
      "2 cups sugar",
      "2 cups water",
      "4-5 cardamom pods",
      "Oil for frying"
    ],
    instructions: [
      "Mix milk powder, flour, baking soda and ghee",
      "Knead soft dough with milk",
      "Shape into smooth balls without cracks",
      "Fry on low heat until golden brown",
      "Soak in warm sugar syrup for 2 hours"
    ]
  },
  {
    id: 14,
    name: "Rasgulla",
    category: "dessert",
    image: "https://img.freepik.com/premium-photo/spongy-rasgulla_57665-22029.jpg",
    prepTime: "30 mins",
    cookTime: "30 mins",
    difficulty: "Hard",
    rating: 4.7,
    description: "Soft, spongy cottage cheese balls soaked in light sugar syrup."
  },
  {
    id: 15,
    name: "Kheer",
    category: "dessert",
    state: "Odisha, Punjab, and West Bengal",
    image: "https://masalaandchai.com/wp-content/uploads/2021/08/Kheer.jpg",
    prepTime: "10 mins",
    cookTime: "40 mins",
    difficulty: "Easy",
    rating: 4.5,
    description: "Creamy rice pudding with nuts and cardamom, a traditional Indian dessert.",
    ingredients: [
      "1/4 cup basmati rice",
      "1 liter full-fat milk",
      "1/2 cup sugar (adjust to taste)",
      "1/2 tsp cardamom powder",
      "A handful of chopped nuts (almonds, pistachios, cashews)",
      "A few strands of saffron (optional)"
    ],
    instructions: [
      "Wash the rice and soak it for 30 minutes. Drain the water and crush the rice lightly.",
      "In a heavy-bottomed pot, bring the milk to a boil. Add the crushed rice and cook on a low flame, stirring frequently to prevent it from sticking.",
      "Cook until the rice is soft and the milk has thickened to a creamy consistency. This will take about 25-30 minutes.",
      "Add sugar, cardamom powder, and saffron strands (if using). Stir until the sugar dissolves.",
      "Add the chopped nuts and cook for another 5 minutes.",
      "Serve hot or chilled."
    ]
  },
  {
    id: 21,
    name: "Puran Poli",
    category: "dessert",
    state: "Maharashtra",
    image: "https://images.slurrp.com/prod/recipe_images/transcribe/dinner/Puran-Poli.webp",
    prepTime: "30 mins",
    cookTime: "20 mins",
    difficulty: "Medium",
    rating: 4.6,
    description: "A sweet flatbread stuffed with a filling of boiled Bengal gram (chana dal) and jaggery, flavored with cardamom and nutmeg.",
    ingredients: [
      "1 cup all-purpose flour",
      "1 cup chana dal",
      "1 cup jaggery, grated",
      "1/2 tsp cardamom powder",
      "1/4 tsp nutmeg powder",
      "Ghee for frying"
    ],
    instructions: [
      "Knead a soft dough with flour, a pinch of salt, and water. Set aside.",
      "Boil chana dal until soft, then drain and mash.",
      "Cook mashed dal with jaggery on low heat until it forms a thick, sticky mass.",
      "Add cardamom and nutmeg powder and let it cool.",
      "Stuff the dough with the sweet filling and roll it into a flatbread.",
      "Cook on a hot tawa with ghee until golden brown spots appear on both sides.",
      "Serve hot with a dollop of ghee or milk."
    ]
  },
  {
    id: 26,
    name: "Rasmalai",
    category: "dessert",
    state: "West Bengal",
    image: "https://www.cookclickndevour.com/wp-content/uploads/2017/08/rasmalai-recipe-b-683x1024.jpg",
    prepTime: "30 mins",
    cookTime: "40 mins",
    difficulty: "Hard",
    rating: 4.8,
    description: "Soft, pillowy cheese patties (rasgulla) soaked in a creamy, sweetened, and flavored milk (ras) with saffron and pistachios.",
    ingredients: [
      "1 liter milk",
      "2 tbsp lemon juice or vinegar",
      "1/2 cup sugar",
      "2 cups water",
      "1/2 tsp cardamom powder",
      "A few saffron strands",
      "Chopped pistachios and almonds for garnish"
    ],
    instructions: [
      "Boil 1 liter of milk. Once it comes to a boil, add lemon juice to curdle it. Strain the curdled milk to get chenna (cottage cheese).",
      "Knead the warm chenna until it is smooth and lump-free.",
      "Divide the chenna into small, flat patties.",
      "In a pressure cooker, prepare sugar syrup by boiling sugar and water. Add the chenna patties and pressure cook for 10-15 minutes on low heat.",
      "In another pan, boil the remaining milk. Add sugar, saffron, and cardamom powder. Simmer until the milk thickens slightly.",
      "Once the patties are cooked and spongy, gently add them to the sweetened milk.",
      "Let it cool and chill in the refrigerator for a few hours before serving, garnished with nuts."
    ]
  }
];

// Export categories for easy filtering
export const categories = [
  { id: 'all', name: 'All Recipes' },
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'lunch', name: 'Lunch' },
  { id: 'dinner', name: 'Dinner' },
  { id: 'snack', name: 'Snacks' },
  { id: 'dessert', name: 'Desserts' }
];

export default featuredRecipes;