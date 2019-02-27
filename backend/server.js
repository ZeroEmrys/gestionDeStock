import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './models/Issue';
import { isBuffer } from 'util';
import { runInNewContext } from 'vm';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

//connexion on mongoDB
mongoose.connect('mongodb://localhost:27017/issues');
//conxion on mongoose
const connection = mongoose.connection;
//connexion on mongoDB when we start server
connection.once('open', () =>{
    console.log('MongoDB dia mandeha soa amatsara');
});

router.route('/issues').get((req, res)=>{
    Issue.find((err, issues)=> {
        if(err)
            console.log(err);
        else
            res.json(issues);
    });

});

router.route('/issues/:id').get((req, res)=>{
    Issue.findById(req.params.id, (err, issue)=>{
        if(err)
            console.log(err);
        else
            res.json(issues);
    });
});

router.route('/issues/add').post((req, res)=>{
    let issue = new Issue(req.body);
    issue.save()
    .then(issue=>{
        res.status(200).json({'issue':'Fanampiana vita'})
    })
    .catch(err=>{
        res.status(400).send('ts nety ilay ajout')
    });
});

router.route('/issues/update/:id').post((req, res)=>{
    Issue.findById(req.params.id, (err, issue)=>{
        if(!issue)
            return runInNewContext(new Error('tsy azo ilay document'));
        else
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.descripion = req.body.descripion;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then(issue=>{
                res.json('Update dia vita');
            }).catch(err=>{
                res.status(400).send('Update ts nety');
            });
    });
});


router.route('/issues/delete/:id').get((req, res)=>{
    Issue.findByIdAndRemove({_id: req.params.id},(err, issue)=>{
        if (err)
            res.json(err);
        else    
            res.json('Delete nety');
    });
});

//default route
app.use('/',router);
//listing port
app.listen(4000,()=>console.log('Express mande amin ny port 4000')); cd 