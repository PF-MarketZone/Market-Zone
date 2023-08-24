const tiendas = [
  {
    id: 1,
    name: "Tienda Carla 1",
    logo: "https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categories: ["Tecnología", "Celulares"],
    products: [
      {
        id: 1,
        idStore: 1,
        name: "Pantalon 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 2,
        idStore: 1,
        name: "Camiseta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "blanco",
        price: 120,
        stock: 10,
        sold: 1,
        categories: ["Ropa", "Camiseta", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 3,
        idStore: 1,
        name: "Gorra 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 4,
        sold: 2,
        categories: ["Ropa", "Gorra", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 4,
        idStore: 1,
        name: "Pantaloneta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Tienda Carla 2",
    logo: "https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categories: ["Comidas", "Ropa"],
    products: [
      {
        id: 1,
        idStore: 1,
        name: "Pantalon 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 140,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 2,
        idStore: 1,
        name: "Camiseta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "blanco",
        price: 20,
        stock: 10,
        sold: 1,
        categories: ["Ropa", "Camiseta", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 3,
        idStore: 1,
        name: "Gorra 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 80,
        stock: 4,
        sold: 2,
        categories: ["Ropa", "Gorra", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 4,
        idStore: 1,
        name: "Pantaloneta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Tienda Carla 3",
    logo: "https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categories: ["Ropa"],
    products: [
      {
        id: 1,
        idStore: 1,
        name: "Pantalon 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 2,
        idStore: 1,
        name: "Camiseta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "blanco",
        price: 120,
        stock: 10,
        sold: 1,
        categories: ["Ropa", "Camiseta", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 3,
        idStore: 1,
        name: "Gorra 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 4,
        sold: 2,
        categories: ["Ropa", "Gorra", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 4,
        idStore: 1,
        name: "Pantalon 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Tienda Carla 4",
    logo: "https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categories: ["Celulares", "Hogar"],
    products: [
      {
        id: 1,
        idStore: 1,
        name: "Pantalon 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 2,
        idStore: 1,
        name: "Camiseta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "blanco",
        price: 120,
        stock: 10,
        sold: 1,
        categories: ["Ropa", "Camiseta", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 3,
        idStore: 1,
        name: "Gorra 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 4,
        sold: 2,
        categories: ["Ropa", "Gorra", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 4,
        idStore: 1,
        name: "Pantalon 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Tienda Carla 5",
    logo: "https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categories: ["Celulares", "Ropa"],
    products: [
      {
        id: 1,
        idStore: 1,
        name: "Pantalon 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 2,
        idStore: 1,
        name: "Camiseta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "blanco",
        price: 120,
        stock: 10,
        sold: 1,
        categories: ["Ropa", "Camiseta", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 3,
        idStore: 1,
        name: "Gorra 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 4,
        sold: 2,
        categories: ["Ropa", "Gorra", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 4,
        idStore: 1,
        name: "Pantalon 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Tienda Carla 6",
    logo: "https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    categories: ["Celulares", "Comidas", "Ropa"],
    products: [
      {
        id: 1,
        idStore: 1,
        name: "Pantalon 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 2,
        idStore: 1,
        name: "Camiseta",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "blanco",
        price: 120,
        stock: 10,
        sold: 1,
        categories: ["Ropa", "Camiseta", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 3,
        idStore: 1,
        name: "Gorra 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 4,
        sold: 2,
        categories: ["Ropa", "Gorra", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
      {
        id: 4,
        idStore: 1,
        name: "Pantalon 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
        images: [
          "https://images.pexels.com/photos/3850451/pexels-photo-3850451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/5516046/pexels-photo-5516046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/4889293/pexels-photo-4889293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          "https://images.pexels.com/photos/6342782/pexels-photo-6342782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ],
        color: "rojo",
        price: 120,
        stock: 8,
        sold: 2,
        categories: ["Ropa", "Pantalon", "Nuevo"],
        reviews: [
          {
            id: 1,
            idUser: 5,
            nameUser: "Pepito",
            rating: 4.5,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
          {
            id: 2,
            idUser: 8,
            nameUser: "Julio",
            rating: 3,
            title: "Me encanto el producto",
            description:
              "Excelente producto, me encanto, lo malo es la demora del envio",
          },
        ],
      },
    ],
  },
];

export default tiendas;