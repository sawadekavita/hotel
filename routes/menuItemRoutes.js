const express =require('express')
const router =express.Router() 
const MenuItem = require('./../models/MenuItem')

// POST method to the menu items
router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
// get method for the mune items
router.get("/", async (req, res) => {
    try {
      const data = await MenuItem.find();
      console.log("data fetched");
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
//   taste options
router.get('/:tasteType', async (req,res)=>{
    try {
       const tasteType = req.params.tasteType
       if(tasteType == "sweet" || tasteType == "sour" || tasteType == "spicy"){
        const response =await MenuItem.find({taste:tasteType})
        res.status(200).json(response)
        console.log('data fetched')
       }else{
        res.status(400).json({error:'Invalid taste'})
       }
    } catch (error) {
        console.log(error)
        response.status(400).json({error:'Internal server error'})
    }
})
  module.exports = router
  