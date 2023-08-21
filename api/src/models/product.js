const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    storeId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: [{ url: { type: String, required: true } }],
    description: { type: String, maxLength: 2500 },
    stock: Number,
    categories: [
      {
        category: {
          type: String,
          required: true
        },
        subcategories: [
          {
            type: String
          }
        ]
      }
    ],
    color: String,
  },
  { collection: 'products' }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

// db.product.drop();
// db.createCollection("product", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["_id", "name", "price", "description"],
//       properties: {
//         _id: { bsonType: "objectId" },
//         storeId: {
//           bsonType: "objectId",
//           description: "'storeId' must be an objectId and is required",
//         },

//         name: {
//           bsonType: "string",
//           description: "'name' must be a string and is required",
//         },
//         price: {
//           bsonType: "double",
//         },
//         images: {
//           bsonType: "array",
//           items: {
//             bsonType: "object",
//             required: ["url"],
//             properties: {
//               url: {
//                 bsonType: "string",
//                 description: "'url' must be a string",
//               },
//             },
//           },
//           minItems: 1,
//           maxItems: 3,
//         },

//         description: {
//           bsonType: "string",
//           maxLength: 2500,
//           description:
//             "'description' must be a string with a maximum length of 2500 characters",
//         },
//         stock: {
//           bsonType: "number",
//         },
//         tags: {
//           bsonType: "array",
//           items: {
//             bsonType: "object",
//             required: ["url"],
//             properties: {
//               url: {
//                 bsonType: "string",
//                 description: "'url' must be a string",
//               },
//             },
//           },
//           color: {
//             bsonType: "string",
//           },
//         },
//       },
//       additionalProperties: false,
//     },
//   },
// });

// var uniqueValidator = require('mongoose-unique-validator');

// var Schema = mongoose.Schema;

// var productSchema = new Schema(
//   {
//     // _id: { type: 'objectId' },
//     name: { type: String, required: true },
//     image: { type: Array, required: true },
//     description: { type: String, required: true },
//     color: { type: String, required: true },
//     price: { type: String, required: true },
//     stock: { type: Number, required: true },
//     tags: { type: Array, required: true },
//   },
//   { timestamps: true }
// );

// const Product = mongoose.model('Product', productSchema);
// db.createCollection('product', {
//   validator: {
//     $jsonSchema: {
//       bsonType: 'object',
//       required: ['storeId', 'name', 'price', 'image', 'categories'],
//       properties: {
//         storeId: {
//           bsonType: 'objectId',
//           description: 'Debe ser un ObjectId y es requerido'
//         },
//         name: {
//           bsonType: 'string',
//           description: 'Debe ser un nombre y es requerido'
//         },
//         price: {
//           bsonType: 'number',
//           description: 'Debe ser un número y es requerido'
//         },
//         image: {
//           bsonType: 'array',
//           description: 'Debe ser un array y es requerido',
//           items: {
//             bsonType: 'object',
//             required: ['url'],
//             properties: {
//               url: {
//                 bsonType: 'string',
//                 description: 'Debe ser una url y es requerido'
//               }
//             }
//           }
//         },
//         description: {
//           bsonType: 'string',
//           description: 'Puede ser una string con un máximo de 2500 caracteres'
//         },
//         stock: {
//           bsonType: 'number',
//           description: 'Puede ser un número'
//         },
//         categories: {
//           bsonType: 'array',
//           description: 'Debe ser un array y es requerido',
//           items: {
//             bsonType: 'object',
//             required: ['category', 'subcategories'],
//             properties: {
//               category: {
//                 bsonType: 'string',
//                 description: 'Debe ser una string(categoría) y es requerido'
//               },
//               subcategories: {
//                 bsonType: 'array',
//                 description: 'Debe ser un array de subcategorías',
//                 items: {
//                   bsonType: 'string'
//                 }
//               }
//             }
//           }
//         },
//         color: {
//           bsonType: 'string',
//           description: 'Puede ser una string'
//         }
//       }
//     }
//   }
// })
