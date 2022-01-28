const Produits = require("../models/produits");

exports.getAllProduits = (req, res, next) => {
  Produits.find()
    .then((produits) => res.status(200).json(produits))
    .catch(() => res.status(500).send(new Error("Database error!")));
};

exports.getOneProduit = (req, res, next) => {
  Produits.findById(req.params.id)
    .then((produit) => {
      if (!produit) {
        return res.status(401).json({ error: "produit non trouvé !" });
      } else {
        res.status(200).json(produit);
      }
    })
    .catch(() => res.status(500).send(new Error("Database error!")));
};
