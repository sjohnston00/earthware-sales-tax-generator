const TYPES = {
  BOOK: "book",
  FOOD: "food",
  MEDICAL_PRODUCT: "medical product",
  OTHER: "other"
};

const scenario1 = [
  {
    name: "Book",
    price: 12.49,
    imported: false,
    type: TYPES.BOOK
  },
  {
    name: "Music CD",
    price: 14.99,
    imported: false,
    type: TYPES.OTHER
  },
  {
    name: "Chocolate Bar",
    price: 0.85,
    imported: false,
    type: TYPES.FOOD
  }
];

const scenario2 = [
  {
    name: "Imported Box of Chocolates",
    price: 10.0,
    imported: true,
    type: TYPES.FOOD
  },
  {
    name: "Imported Bottle of Perfume",
    price: 47.5,
    imported: true,
    type: TYPES.OTHER
  }
];

const scenario3 = [
  {
    name: "Imported Bottle of Perfume",
    price: 27.99,
    imported: true,
    type: TYPES.OTHER
  },
  {
    name: "Bottle of Perfume",
    price: 18.99,
    imported: true,
    type: TYPES.OTHER
  },
  {
    name: "Headache Pills",
    price: 9.75,
    imported: false,
    type: TYPES.MEDICAL_PRODUCT
  },
  {
    name: "Imported Chocolates",
    price: 11.25,
    imported: true,
    type: TYPES.FOOD
  }
];

module.exports = {
  TYPES,
  scenario1,
  scenario2,
  scenario3
};
