export interface DataType {
  id: number;
  destination: string;
  rating: number;
  reviews: { review: string; date: string; postedBy: string; like: number }[];
  authorName: string;
  imgUrl: string;
  likes: number;
  authorImg: string;
  description: string;
  title: string;
}
export const dummyData: DataType[] = [
  {
    id: 1,
    destination: "Paris",
    rating: 4.5,
    reviews: [
      {
        review: "Awesome city!",
        date: "2023-09-26",
        postedBy: "User3",
        like: 8,
      },
      {
        review: "Loved the skyscrapers!",
        date: "2023-09-26",
        postedBy: "User4",
        like: 10,
      },  
    ],
    authorName: "John Doe",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D",
    likes: 1,
    description:
      "Experience the charm of the City of Light, with its iconic landmarks and delightful cuisine. Destination Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque cumque, non illo a ullam delectus deserunt, rerum architecto veniam quam autem facere enim mollitia! Quidem esse nulla impedit culpa cupiditate repellendus laborum.\n Quo sit magni laboriosam ut a eveniet, quaerat dicta mollitia optio magnam esse nemo quod nisi consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque, nostrum dolorum officia illum ducimus voluptatibus ipsum beatae molestiae odio soluta. Dolorum et ea distinctio accusantium nam dicta, saepe fuga mollitia incidunt laudantium doloribus, dignissimos iure corporis dolores voluptas earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. \n Eos cumque eum, adipisci voluptas quasi quaerat sapiente expedita est tempore asperiores ipsam nihil dolorem, veniam enim fugiat! Maiores id minima, incidunt, ipsam consequuntur quod fuga laborum perferendis illum autem assumenda cupiditate molestiae cum quis ullam reiciendis accusantium numquam quae dolor doloribus?",
    authorImg: "",
    title: "Eternal City Adventures",
  },
  {
    id: 2,
    destination: "New York",
    rating: 4.2,
    reviews: [
      {
        review: "Awesome city!",
        date: "2023-09-26",
        postedBy: "User3",
        like: 8,
      },
      {
        review: "Loved the skyscrapers!",
        date: "2023-09-26",
        postedBy: "User4",
        like: 10,
      },
    ],
    authorName: "Jane Smith",
    imgUrl:
      "https://images.unsplash.com/photo-1519112232436-9923c6ba3d26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww",
    likes: 10,
    authorImg: "",
    description:
      "Explore the bustling streets of New York City, home to towering skyscrapers and diverse culture.    Destination Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque cumque, non illo a ullam delectus deserunt, rerum architecto veniam quam autem facere enim mollitia! Quidem esse nulla impedit culpa cupiditate repellendus laborum. Quo sit magni laboriosam ut a eveniet,\n quaerat dicta mollitia optio magnam esse nemo quod nisi consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque, nostrum dolorum officia illum ducimus voluptatibus ipsum beatae molestiae odio soluta.\n Dolorum et ea distinctio accusantium nam dicta, saepe fuga mollitia incidunt laudantium doloribus, dignissimos iure corporis dolores voluptas earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n Eos cumque eum, adipisci voluptas quasi quaerat sapiente expedita est tempore asperiores ipsam nihil dolorem, veniam enim fugiat! Maiores id minima, incidunt, ipsam consequuntur quod fuga laborum perferendis illum autem assumenda cupiditate molestiae cum quis ullam reiciendis accusantium numquam quae dolor doloribus?",
    title: "Urban Oasis Experience",
  },
  {
    id: 3,
    destination: "Tokyo",
    rating: 4.8,
    reviews: [
      {
        review: "Awesome city!",
        date: "2023-09-26",
        postedBy: "User3",
        like: 8,
      },
      {
        review: "Loved the skyscrapers!",
        date: "2023-09-26",
        postedBy: "User4",
        like: 10,
      },
    ],
    authorName: "Bob Johnson",
    imgUrl:
      "https://images.unsplash.com/photo-1551524164-7d2f9ff12c70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D",
    likes: 21,
    authorImg: "",
    description:
      "Relax on the stunning beaches and enjoy the friendly atmosphere of Sydney.Destination Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque cumque, non illo a ullam delectus deserunt, rerum architecto veniam quam autem facere enim mollitia! Quidem esse nulla impedit culpa cupiditate repellendus laborum. Quo sit magni laboriosam ut a eveniet, quaerat dicta mollitia optio magnam esse nemo quod nisi consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque, nostrum dolorum officia illum ducimus voluptatibus ipsum beatae molestiae odio soluta. Dolorum et ea distinctio accusantium nam dicta, saepe fuga mollitia incidunt laudantium doloribus, dignissimos iure corporis dolores voluptas earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos cumque eum, adipisci voluptas quasi quaerat sapiente expedita est tempore asperiores ipsam nihil dolorem, veniam enim fugiat! Maiores id minima, incidunt, ipsam consequuntur quod fuga laborum perferendis illum autem assumenda cupiditate molestiae cum quis ullam reiciendis accusantium numquam quae dolor doloribus?",
    title: "Urban Oasis Experience",
  },
  {
    id: 4,
    destination: "Rome",
    rating: 4.0,
    reviews: [
      {
        review: "Awesome city!",
        date: "2023-09-26",
        postedBy: "User3",
        like: 8,
      },
      {
        review: "Loved the skyscrapers!",
        date: "2023-09-26",
        postedBy: "User4",
        like: 10,
      },
    ],
    authorName: "Alice Anderson",
    imgUrl:
      "https://images.unsplash.com/photo-1610106109549-5813ab87ae88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww",
    likes: 24,
    authorImg: "",
    description:
      "Discover the breathtaking landscapes and rich history of Cape TownDestination Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque cumque, non illo a ullam delectus deserunt, rerum architecto veniam quam autem facere enim mollitia! Quidem esse nulla impedit culpa cupiditate repellendus laborum. Quo sit magni laboriosam ut a eveniet, quaerat dicta mollitia optio magnam esse nemo quod nisi consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque, nostrum dolorum officia illum ducimus voluptatibus ipsum beatae molestiae odio soluta. Dolorum et ea distinctio accusantium nam dicta, saepe fuga mollitia incidunt laudantium doloribus, dignissimos iure corporis dolores voluptas earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos cumque eum, adipisci voluptas quasi quaerat sapiente expedita est tempore asperiores ipsam nihil dolorem, veniam enim fugiat! Maiores id minima, incidunt, ipsam consequuntur quod fuga laborum perferendis illum autem assumenda cupiditate molestiae cum quis ullam reiciendis accusantium numquam quae dolor doloribus?",
    title: "Urban Oasis Experience",
  },
  {
    id: 5,
    destination: "Sydney",
    rating: 4.7,
    reviews: [
      {
        review: "Awesome city!",
        date: "2023-09-26",
        postedBy: "User3",
        like: 8,
      },
      {
        review: "Loved the skyscrapers!",
        date: "2023-09-26",
        postedBy: "User4",
        like: 10,
      },
    ],
    authorName: "Ella Evans",
    likes: 0,
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1668852095432-9ee22d892f7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww",
    title: "Tokyo Tranquility Escape",

    authorImg: "",
    description:
      "Immerse yourself in the vibrant culture and lively Carnival of Rio de Janeiro.Destination Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque cumque, non illo a ullam delectus deserunt, rerum architecto veniam quam autem facere enim mollitia! Quidem esse nulla impedit culpa cupiditate repellendus laborum. Quo sit magni laboriosam ut a eveniet, quaerat dicta mollitia optio magnam esse nemo quod nisi consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque, nostrum dolorum officia illum ducimus voluptatibus ipsum beatae molestiae odio soluta. Dolorum et ea distinctio accusantium nam dicta, saepe fuga mollitia incidunt laudantium doloribus, dignissimos iure corporis dolores voluptas earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos cumque eum, adipisci voluptas quasi quaerat sapiente expedita est tempore asperiores ipsam nihil dolorem, veniam enim fugiat! Maiores id minima, incidunt, ipsam consequuntur quod fuga laborum perferendis illum autem assumenda cupiditate molestiae cum quis ullam reiciendis accusantium numquam quae dolor doloribus?",
  },
  {
    id: 6,
    destination: "Cape Town",
    rating: 4.6,
    reviews: [
      {
        review: "Awesome city!",
        date: "2023-09-26",
        postedBy: "User3",
        like: 8,
      },
      {
        review: "Loved the skyscrapers!",
        date: "2023-09-26",
        postedBy: "User4",
        like: 10,
      },
    ],
    authorName: "David Davis",
    imgUrl:
      "https://images.unsplash.com/photo-1614088459293-5669fadc3448?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww",
    likes: 18,
    authorImg: "",
    description:
      "Indulge in luxury and marvel at the architectural wonders of Dubai.Destination Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque cumque, non illo a ullam delectus deserunt, rerum architecto veniam quam autem facere enim mollitia! Quidem esse nulla impedit culpa cupiditate repellendus laborum. Quo sit magni laboriosam ut a eveniet, quaerat dicta mollitia optio magnam esse nemo quod nisi consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque, nostrum dolorum officia illum ducimus voluptatibus ipsum beatae molestiae odio soluta. Dolorum et ea distinctio accusantium nam dicta, saepe fuga mollitia incidunt laudantium doloribus, dignissimos iure corporis dolores voluptas earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos cumque eum, adipisci voluptas quasi quaerat sapiente expedita est tempore asperiores ipsam nihil dolorem, veniam enim fugiat! Maiores id minima, incidunt, ipsam consequuntur quod fuga laborum perferendis illum autem assumenda cupiditate molestiae cum quis ullam reiciendis accusantium numquam quae dolor doloribus?",
    title: "Barcelona Artistic Charms",
  },
  {
    id: 7,
    destination: "Dubai",
    rating: 4.9,
    reviews: [
      {
        review: "Awesome city!",
        date: "2023-09-26",
        postedBy: "User3",
        like: 8,
      },
      {
        review: "Loved the skyscrapers!",
        date: "2023-09-26",
        postedBy: "User4",
        like: 10,
      },
    ],
    authorName: "Grace Green",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1676393904171-738ff11eceaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww",
    likes: 14,
    authorImg: "",
    description:
      "Escape to paradise on Earth with the serene beaches and lush landscapes of Bali.Destination Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque cumque, non illo a ullam delectus deserunt, rerum architecto veniam quam autem facere enim mollitia! Quidem esse nulla impedit culpa cupiditate repellendus laborum. Quo sit magni laboriosam ut a eveniet, quaerat dicta mollitia optio magnam esse nemo quod nisi consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque, nostrum dolorum officia illum ducimus voluptatibus ipsum beatae molestiae odio soluta. Dolorum et ea distinctio accusantium nam dicta, saepe fuga mollitia incidunt laudantium doloribus, dignissimos iure corporis dolores voluptas earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos cumque eum, adipisci voluptas quasi quaerat sapiente expedita est tempore asperiores ipsam nihil dolorem, veniam enim fugiat! Maiores id minima, incidunt, ipsam consequuntur quod fuga laborum perferendis illum autem assumenda cupiditate molestiae cum quis ullam reiciendis accusantium numquam quae dolor doloribus?",
    title: "Luxury Living in Dubai",
  },
  {
    id: 8,
    destination: "Rio de Janeiro",
    rating: 4.3,
    reviews: [
      {
        review: "Awesome city!",
        date: "2023-09-26",
        postedBy: "User3",
        like: 8,
      },
      {
        review: "Loved the skyscrapers!",
        date: "2023-09-26",
        postedBy: "User4",
        like: 10,
      },
    ],
    authorName: "Carlos Costa",
    imgUrl:
      "https://images.unsplash.com/photo-1620752421753-b94565211643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww",
    likes: 14,
    authorImg: "",
    description:
      "The city that never sleeps, with iconic landmarks and a fast-paced lifestyleDestination Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque cumque, non illo a ullam delectus deserunt, rerum architecto veniam quam autem facere enim mollitia! Quidem esse nulla impedit culpa cupiditate repellendus laborum. Quo sit magni laboriosam ut a eveniet, quaerat dicta mollitia optio magnam esse nemo quod nisi consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque, nostrum dolorum officia illum ducimus voluptatibus ipsum beatae molestiae odio soluta. Dolorum et ea distinctio accusantium nam dicta, saepe fuga mollitia incidunt laudantium doloribus, dignissimos iure corporis dolores voluptas earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos cumque eum, adipisci voluptas quasi quaerat sapiente expedita est tempore asperiores ipsam nihil dolorem, veniam enim fugiat! Maiores id minima, incidunt, ipsam consequuntur quod fuga laborum perferendis illum autem assumenda cupiditate molestiae cum quis ullam reiciendis accusantium numquam quae dolor doloribus?",
    title: "Rio Carnival Extravaganza",
  },
  {
    id: 9,
    destination: "Bali",
    rating: 4.4,
    reviews: [
      {
        review: "Awesome city!",
        date: "2023-09-26",
        postedBy: "User3",
        like: 8,
      },
      {
        review: "Loved the skyscrapers!",
        date: "2023-09-26",
        postedBy: "User4",
        like: 10,
      },
    ],
    authorName: "Sara Sanders",
    imgUrl:
      "https://images.unsplash.com/photo-1617170732045-80343ab14eaa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww",
    likes: 34,
    authorImg: "",
    description:
      "Indulge in luxury and marvel at the architectural wonders of DubaiDestination Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque cumque, non illo a ullam delectus deserunt, rerum architecto veniam quam autem facere enim mollitia! Quidem esse nulla impedit culpa cupiditate repellendus laborum. Quo sit magni laboriosam ut a eveniet, quaerat dicta mollitia optio magnam esse nemo quod nisi consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque, nostrum dolorum officia illum ducimus voluptatibus ipsum beatae molestiae odio soluta. Dolorum et ea distinctio accusantium nam dicta, saepe fuga mollitia incidunt laudantium doloribus, dignissimos iure corporis dolores voluptas earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos cumque eum, adipisci voluptas quasi quaerat sapiente expedita est tempore asperiores ipsam nihil dolorem, veniam enim fugiat! Maiores id minima, incidunt, ipsam consequuntur quod fuga laborum perferendis illum autem assumenda cupiditate molestiae cum quis ullam reiciendis accusantium numquam quae dolor doloribus?",
    title: "Sydney Sunsets Retreat",
  },
  {
    id: 10,
    destination: "Barcelona",
    rating: 4.6,
    reviews: [
      {
        review: "Awesome city!",
        date: "2023-09-26",
        postedBy: "User3",
        like: 8,
      },
      {
        review: "Loved the skyscrapers!",
        date: "2023-09-26",
        postedBy: "User4",
        like: 10,
      },
    ],
    authorName: "Daniel Diaz",
    imgUrl:
      "https://images.unsplash.com/photo-1598749158550-bd1b7446e043?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww",
    likes: 50,
    authorImg: "",
    description:
      "Explore the art and architecture of this enchanting city on the coast of SpainDestination Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis neque cumque, non illo a ullam delectus deserunt, rerum architecto veniam quam autem facere enim mollitia! Quidem esse nulla impedit culpa cupiditate repellendus laborum. Quo sit magni laboriosam ut a eveniet, quaerat dicta mollitia optio magnam esse nemo quod nisi consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis itaque, nostrum dolorum officia illum ducimus voluptatibus ipsum beatae molestiae odio soluta. Dolorum et ea distinctio accusantium nam dicta, saepe fuga mollitia incidunt laudantium doloribus, dignissimos iure corporis dolores voluptas earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos cumque eum, adipisci voluptas quasi quaerat sapiente expedita est tempore asperiores ipsam nihil dolorem, veniam enim fugiat! Maiores id minima, incidunt, ipsam consequuntur quod fuga laborum perferendis illum autem assumenda cupiditate molestiae cum quis ullam reiciendis accusantium numquam quae dolor doloribus?",
    title: "Rome: Pasta and History",
  },
];
