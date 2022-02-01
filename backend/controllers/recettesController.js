const Recette = require("../models/recettesModels");
const fs = require("fs");

exports.createRecette = (req, res) => {
  const recetteObject = JSON.parse(req.body.recette);
  delete recetteObject._id;
  const recette = new Recette({
    ...recetteObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  recette
    .save()
    .then(() =>
      res.status(201).json({ message: "Recette enregistrée !", recette })
    )
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.modifyRecette = (req, res) => {
  const recetteObject = req.file
    ? {
        ...JSON.parse(req.body.recette),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Recette.updateOne(
    { _id: req.params.id },
    { ...recetteObject, _id: req.params.id }
  )
    .then(() =>
      res.status(200).json({ message: "Recette modifiée !", recetteObject })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.likeRecette = async (req, res) => {
  const recette = await Recette.findOne({ _id: req.params.id });
  const recetteLikes = recette.usersLiked;
  const recetteDislikes = recette.usersDisliked;
  let message;
  try {
    if (req.body.like === 1) {
      if (!recetteLikes.includes(req.userId)) {
        if (!recetteDislikes.includes(req.userId)) {
          recetteLikes.push(req.userId);
          recette.likes++;
          message = "Recette likée !";
        } else {
          res
            .status(400)
            .json({ error: "impossible, la recette est dislikée !" });
        }
      } else {
        res.status(400).json({ error: "Erreur, la recette est déja likée !" });
      }
    }
    if (req.body.like === -1) {
      if (!recetteDislikes.includes(req.userId)) {
        if (!recetteLikes.includes(req.userId)) {
          recetteDislikes.push(req.userId);
          recette.dislikes++;
          message = "Recette Dislikée !";
        } else {
          res.status(400).json({ error: "impossible, la recette est likée !" });
        }
      } else {
        res
          .status(400)
          .json({ error: "Erreur, la recette est déja dislikée !" });
      }
    }
    if (req.body.like === 0) {
      if (recetteLikes.includes(req.userId)) {
        let indexUser = recetteLikes.indexOf(req.userId);
        recetteLikes.splice(indexUser, 1);
        recette.likes--;
        message = "Like annulé !";
      } else {
        if (recetteDislikes.includes(req.userId)) {
          let indexUser = recetteDislikes.indexOf(req.userId);
          recetteDislikes.splice(indexUser, 1);
          recette.dislikes--;
          message = "Dislike annulé !";
        } else {
          res.status(400).json({
            error: "impossible d'annuler le like ou le dislike",
          });
        }
      }
    }
    recette.save();
    res.status(200).json({ message: message, recette });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.deleteRecette = (req, res) => {
  Recette.findOne({ _id: req.params.id })
    .then((recette) => {
      const filename = recette.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Recette.deleteOne({ _id: req.params.id })
          .then(() =>
            res.status(200).json({ message: "Recette supprimée !", recette })
          )
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getOneRecette = (req, res) => {
  Recette.findOne({ _id: req.params.id })
    .then((recettes) => res.status(200).json(recettes))
    .catch((error) => res.status(400).json({ error: error }));
};

exports.getAllRecette = (req, res) => {
  Recette.find()
    .then((recettes) => res.status(200).json(recettes))
    .catch((error) => res.status(400).json({ error: error }));
};
