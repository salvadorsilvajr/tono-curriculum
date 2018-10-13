var express = require("express"),
    app = express(), 
    bodyParser = require("body-parser"),
    // mongoose = require("mongoose"),
    serveStatic = require('serve-static')
    
app.use(express.static('public')) 
// mongoose.connect("mongodb://localhost/yelp_camp", {useNewUrlParser: true});
app.use (bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP

// var campgroundSchema = new mongoose.Schema({
//     name: String(),
//     image: String(),
//     description: String()
// });

// var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
    
//     name:"Granite Hill",
//     image:"https://images.unsplash.com/photo-1526491109672-74740652b963?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=343c64df1b43f50769656d03c2b9f523&auto=format&fit=crop&w=500&q=60",
//     description: "This is a huge granite hill with no bathrooms, no water. beautiful granite !!!"
    
// }, function(err, campground){
//     if(err){
//         console.log(err);
//     } else {
//         console.log("newly create campground !!!!");
//         console.log(campground);
//     }
// });

app.get("/", function(req, res){
   res.render("index");
});

app.get("/spanish", function(req, res){
   res.render("spanish");
});

// INDEX ROUTE show all campgrounds !!

// app.get("/campgrounds", function(req, res){
//     // get all campgrouds from DB:
//     Campground.find({}, function(err, allCampgrounds){
//         if(err){
//             console.log(err);
//         } else {
//              res.render("index", {campgrounds:allCampgrounds});  
//         }
//     });
// });


// CREATE -- add new campgrounds to DB:
// app.post("/campgrouns", function(req, res){
//   // get data from a form and add to campgrounds array
//   var name = req.body.name;
//   var image = req.body.image;
//   var desc = req.body.description;
//   var newcampground = {name: name, image: image, description: desc};
//   // create a new campground and save to a DB:
//   Campground.create(newcampground, function(err, newlycreated){
//       if(err){
//           console.log(err)
//       } else {
//           //redirect to campgrounds page
//             res.redirect("/campgrounds");   
//       }
//   })
// });


// NEW -- show form to create a new campground 
app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs");
});

// SHOW -- show more info about one campground
// app.get("/campgrounds/:id", function(req, res) {
//     //find the campground with the provided ID
//     Campground.findById(req.params.id, function(err, foundcampground){
//         if(err){
//             console.log("err");
//         } else{
//             // render show template with that campground
//             res.render("show", {campground: foundcampground});
//         }
//     })
// });

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Jose Resume server has started !!!"); 
});