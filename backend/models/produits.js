const produits = [
  {
    id: "000001",
    name: "Boeuf bourguigon",
    time_cooking: "2 heures",
    note: 3,
    imageUrl: "boeuf_bourguignon.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "000002",
    name: "Salade Piémontaise",
    time_cooking: "2 heures",
    note: 4,
    imageUrl: "piemontaise.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "000003",
    name: "Pizza Margherita",
    time_cooking: "2 heures",
    note: 2,
    imageUrl: "Pizza-Margherita.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "000004",
    name: "Boeuf bourguigon",
    time_cooking: "2 heures",
    note: 3,
    imageUrl: "boeuf_bourguignon.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "000005",
    name: "Salade Piémontaise",
    time_cooking: "2 heures",
    note: 4,
    imageUrl: "piemontaise.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "000006",
    name: "Boeuf bourguigon",
    time_cooking: "2 heures",
    note: 2,
    imageUrl: "boeuf_bourguignon.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "000007",
    name: "Salade Piémontaise",
    time_cooking: "2 heures",
    note: 3,
    imageUrl: "piemontaise.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "000008",
    name: "Pizza Margherita",
    time_cooking: "2 heures",
    note: 3,
    imageUrl: "Pizza-Margherita.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "000009",
    name: "Boeuf bourguigon",
    time_cooking: "2 heures",
    note: 4,
    imageUrl: "boeuf_bourguignon.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "0000010",
    name: "Salade Piémontaise",
    time_cooking: "2 heures",
    note: 4,
    imageUrl: "piemontaise.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "0000011",
    name: "Pizza Margherita",
    time_cooking: "2 heures",
    note: 3,
    imageUrl: "Pizza-Margherita.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "000012",
    name: "Boeuf bourguigon",
    time_cooking: "2 heures",
    note: 2,
    imageUrl: "boeuf_bourguignon.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "0000013",
    name: "Salade Piémontaise",
    time_cooking: "2 heures",
    note: 3,
    imageUrl: "piemontaise.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "0000014",
    name: "Pizza Margherita",
    time_cooking: "2 heures",
    note: 3,
    imageUrl: "Pizza-Margherita.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "0000015",
    name: "Pizza Margherita",
    time_cooking: "2 heures",
    note: 5,
    imageUrl: "Pizza-Margherita.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
  {
    id: "0000016",
    name: "Pizza Margherita",
    time_cooking: "2 heures",
    note: 3,
    imageUrl: "Pizza-Margherita.jpg",
    ingredients: [
      "1 kilo de viande de boeuf",
      "1/2 litre devin rouge",
      "500gr de carottes",
      "2 kilos de pommes de terre",
    ],
    preparation: [
      "faire cuire les pattates à la vapeur pendant une demi heure.",
      "saisir la viande au fond de la marmitte avec les oignons",
      "rajouter le vin et laisser réduire pendant 10 minutes",
      "ne rajouter les pattates qu'au dernier moment...",
    ],
  },
];

exports.find = () => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(produits)))
  );
};

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(
      JSON.parse(JSON.stringify(produits)).find((produit) => produit.id == id)
    )
  );
};
