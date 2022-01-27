const Produits = require("../models/produits");

exports.getOneProduit = (req, res, next) => {
  Produits.findById(req.params.id)
    .then((produit) => {
      if (!produit) {
        return res.status(404).send(new Error("Produit not found!"));
      }
      produit.imageUrl =
        req.protocol + "://" + req.get("host") + "/images/" + produit.imageUrl;
      res.status(200).json(produit);
    })
    .catch(() => {
      res.status(500).send(new Error("Database error!"));
    });
};
