import {
  SET_CATEGORIA_FILTRO,
  SET_PRECIO_MIN_FILTRO,
  SET_PRECIO_MAX_FILTRO,
  SET_ORDEN_ALFABETICO,
  GET_PRODUCT_BY_ID
} from "./actions";

const initialState = {
  
  details: [{
    id: 1,
    idStore: 1,
    name: "Pantalon 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis non libero in ullamcorper. Proin lacinia arcu id ante porta, eu tincidunt leo luctus. Vivamus bibendum risus nec fermentum rhoncus. Sed a turpis mauris. Nunc vulputate erat et ante ullamcorper mattis. Etiam ut mi est. Cras tincidunt semper elit, vel.",
    images: [
      "https://img.freepik.com/free-photo/young-woman-stretching-street_23-2148213217.jpg?w=900&t=st=1692088842~exp=1692089442~hmac=3d072e270bc1623bcc3ef53e263452d6ab4d1d6ac18f668b71669200db77d378",
      "https://img.freepik.com/free-photo/sport-girl-s-legs_23-2147636930.jpg?w=900&t=st=1692088901~exp=1692089501~hmac=f69b7aa95c92d06be0e86d55d2adda798556c56f64690ec631c481d42e6dbd3d",
      "https://img.freepik.com/free-photo/close-up-fashion-details-young-woman-wearing-trendy-red-pants-funny-socks-ugly-fashion-sneakers-beige-elegant-coat-posing-street-near-business-centers-autumn-time_291049-1824.jpg?w=900&t=st=1692088948~exp=1692089548~hmac=caf281a1e059de698d09ccd8858423ecc559ce68e747018674cd1cd7d29a853c",
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
  detail: {},
  categoria: "",
  precioMin: 0,
  precioMax: 500,
  ordenAlfabetico: "",
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIA_FILTRO:
      return { ...state, categoria: action.payload };
    case SET_PRECIO_MIN_FILTRO:
      return { ...state, precioMin: action.payload };
    case SET_PRECIO_MAX_FILTRO:
      return { ...state, precioMax: action.payload };
    case SET_ORDEN_ALFABETICO:
      return { ...state, ordenAlfabetico: action.payload };
    case GET_PRODUCT_BY_ID:
      return { detail: action.payload };
    default:
      return state;
  }

};

export default filtersReducer;
