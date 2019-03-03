//import express from 'express'
//import cors from 'cors';
//import bodyParser from 'body-parser';
//import mongoose from 'mongoose';
//import { isBuffer } from 'util';
//import { runInNewContext } from 'vm';
const express       = require("express");
const cors          = require("cors");
const bodyParser    = require("body-parser");
const mongoose      = require("mongoose");
var Materiel      = require("./models/Materiel");
var Categorie      = require("./models/Categorie");

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

//connexion on mongoDB
mongoose.connect('mongodb://localhost:27017/ongProject');
//conxion on mongoose
const connection = mongoose.connection;
//connexion on mongoDB when we start server
connection.once('open', () =>{
    console.log('MongoDB dia mandeha soa amatsara');
});

router.route('/materiels').get((req, res)=>{
    Materiel.find((err, materiels)=> {
        if(err)
            console.log(err);
        else
            res.json(materiels);
    });

});

router.route('/materiels/:id').get((req, res)=>{
    Materiel.findById(req.params.id, (err, materiel)=>{
        if(err)
            console.log(err);
        else
            res.json(materiel);
    });
});

router.route('/materiels/add').post((req, res)=>{
    let materiel = new Materiel(req.body);
    materiel.save()
        .then(materiel=>{
            res.status(200).json({'materiel':'Fanampiana vita'});
      })
        .catch(err=>{
            res.status(400).send('ts nety ilay ajout');
        });
});

router.route('/materiels/update/:id').post((req, res)=>{
    Materiel.findById(req.params.id, (err, materiel)=>{
        if(!materiel)
            return next(new Error('tsy azo ilay document'));
        else
        materiel.nom = req.body.nom;
        materiel.categorie = req.body.categorie;
        materiel.model = req.body.model;
        materiel.marque = req.body.marque;
        materiel.fournisseur = req.body.fournisseur;
        materiel.etat = req.body.etat;
        materiel.prixValeur = req.body.prixValeur;

        materiel.save().then(materiel=>{
                res.json('Update dia vita');
            }).catch(err=>{
                res.status(400).send('Update ts nety');
            });   
    });
});



router.route('/materiels/delete/:id').get((req, res)=>{
    Materiel.findByIdAndRemove({_id: req.params.id},(err, materiel)=>{
        if (err)
            res.json(err);
        else    
            res.json('Delete nety');
    });
});

//Categorie
router.route('/categorie').get((req, res)=>{
    Categorie.find((err, categories)=> {
        if(err)
            console.log("very e");
        else
            res.json(categories);
    });

});

//default route
app.use('/',router);
//listing port
app.listen(4000,()=>console.log('Express mande amin ny port 4000')); 
