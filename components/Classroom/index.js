const express = require('express');
const router = express.Router();
const Schemas = require('./Classroom');

// router.get('/addClassroom', async (req, res) => {
//     const tweets = Schemas.Tweets;

//     // this code will get all tweets
//     //const userTweets = await tweets.find({}, (err, tweetData) => {

//     // this code will get all tweets and join the user table
//     const userTweets = await tweets.find({}).populate("user").exec((err, tweetData) => {
//         if (err) throw err;
//         if (tweetData) {
//             res.end(JSON.stringify(tweetData));
//         } else {
//             res.end();
//         }
//     });
// });

// router.post('/addTweet', async (req, res) => {
//     const userTweet = req.body.tweetInput;
//     const user = Schemas.Users;
//     const userId = await user.findOne({username:'eaglefang'}).exec();

//     const newTweet = new Schemas.Tweets({
//         tweet: userTweet,
//         user: userId._id
//     });

//     try {
//         await newTweet.save( (err, newTweetResults) => {
//             if (err) res.end('Error Saving.');
//             res.redirect('/tweets');
//             res.end();
//         });
//     } catch(err) {
//         console.log(err);
//         res.redirect('/tweets');
//         res.end();
//     }
// });


// Uncomment to add a new user document to our users table
// To use this, run the backend server, then go to URL: localhost:4000/addUser
// router.get('/addClassroom1', async (req, res) => {
//     const classroom = {className:'LTW', section:'LTW', subject:'IT', room:'18_1' };
//     const newClassroom = new Schemas.Classroom(classroom);
//     try {
//         await newClassroom.save( async(err, newClassroomResult) => {
//             console.log('New user created!');
//             res.end('New user created!');
//         });
//     } catch(err) {
//         console.log(err);
//         res.end('User not added!');
//     }
// });

router.post('/addClassroom', async (req, res) => {
    const classroom = {
        className:req.body.className, 
        section:req.body.section, 
        subject:req.body.subject, 
        room:req.body.room 
    };
    const newClassroom = new Schemas.Classroom(classroom);
    newClassroom.save()
    .then(data=>{res.json(data)})
    .catch(error=>{res.json(error)})
});
router.get('/', (req, res)=> {
    const classroomes = Schemas.Classroom
    classroomes.find()
    .then(data=>res.json(data))
    .catch(error=>{res.json(error)})
});

module.exports = router;