const express =require('express')
const router =express.Router()
const person = require("./../models/person");

// POST route to add a person
router.post("/", async (req, res) => {
    try {
      const data = req.body; //assuming the request body contain the person data
  
      // create new person document using mongoose model
      const newPerson = new person(data);
  
      // save the new person to the database
      const response = await newPerson.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // get method to get the person
  router.get("/", async (req, res) => {
    try {
      const data = await person.find();
      console.log("data fetched");
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });


//   workType
router.get("/:workType", async (req, res) => {
    try {
      const workType = req.params.workType;
      if (workType == "chef" || workType == "waiter" || workType == "manager") {
        const response = await person.find({work:workType});
        console.log("response fetched");
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: "Invalid work type" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
// put method
  router.put('/:id', async (req,res)=>{
    try {
      const personId =req.params.id;
      const updatedPersonData = req.body;
      const response =await person.findByIdAndUpdate(personId, updatedPersonData,{
        new:true,
        runValidators:true,
      })

      if(!response){
        return res.status(404).json({error:'person not found'})
      }
      console.log("data updated")
      res.status(200).json(response)
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }

  })

// delete method
router.delete('/:id', async (req,res)=>{
  try {
    const personId =req.params.id;
    const response  =await person.findByIdAndDelete(personId)


if(!response){
  return res.status(404).json({error:'person not found'})
}
console.log("data delete")
res.status(200).json({message:'person deleted successfully'})

  } catch (error) {
    console.log(error);
      res.status(500).json({ error: "Internal server error" });
  }
})
  module.exports = router