const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const axios = require('axios');
const bodyParser = require('body-parser');
//const path = require('Path');

const app = express();
//app.use(express.json());

app.use( bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost/cleaner',{ useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true })
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err));


        const StaffSchema = new Schema({
                name: {
                    type: String,
                    required: true
                },
                surname: {
                    type: String,
                    required: true
                }
            });
            
            Staff = mongoose.model('members', StaffSchema);


         app.get('/staff', (req, res ) => {

                // res.send("Hello up");
           
                Staff.find().then(staff => res.json(staff)); 
               
           });

           app.get('/', (req, res ) => {

            rst = "<form action='http://localhost:5000/' method='post'>" +
                    "<input name='est'></input>" +
                    "<button type='submit'>Pressme</button>" +
                  "</form>";
            res.send(rst);
       
          
           
       });

            app.post('/',(req, res) => {
                const newStaff = new Staff({
                    name: 'Janelle',
                    surname: 'Samuels'
                });
                newStaff.save();

                 res.send(rst + "<br><h3>POST Request Called</h3>");
                console.log("POST Request");
            })

        

        //  app.use('/staff',require('./routes/staff'));

          

app.listen(5000);

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server started on port ${port}`))

