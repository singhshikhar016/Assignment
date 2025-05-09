const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json()); 


let { varieties } = require("./data");


const calculateHarvestDate = (sowingDate, expectedHarvestDays) => {
  const date = new Date(sowingDate);
  date.setDate(date.getDate() + expectedHarvestDays);
  return date.toISOString().split('T')[0]; 
};


app.get("/api/varieties", (req, res) => {
  res.json(varieties); 
});


app.post("/api/varieties", (req, res) => {
  const { crop, variety, yield: expectedYield, sowingDate, expectedHarvestDays, healthRating } = req.body;

  
  if (!crop || !variety || !expectedYield || !sowingDate || !expectedHarvestDays || !healthRating) {
    return res.status(400).json({ message: "All fields are required." });
  }

 
  if (expectedYield < 0) {
    return res.status(400).json({ message: "Expected yield must be greater than or equal to 0." });
  }


  const harvestDate = calculateHarvestDate(sowingDate, expectedHarvestDays);

 
  const newVariety = {
    id: uuidv4(),  
    crop,
    variety,
    yield: expectedYield,
    harvestDate,
    healthRating
  };

  varieties.push(newVariety); 
  res.status(201).json(newVariety); 
});


app.patch("/api/varieties/:id", (req, res) => {
  const { id } = req.params; 
  const { crop, variety, yield: expectedYield, sowingDate, expectedHarvestDays, healthRating } = req.body;

  
  const index = varieties.findIndex((v) => v.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Variety not found." }); 
  }

 
  if (crop) varieties[index].crop = crop;
  if (variety) varieties[index].variety = variety;
  if (expectedYield !== undefined) varieties[index].yield = expectedYield;
  if (sowingDate) varieties[index].harvestDate = calculateHarvestDate(sowingDate, expectedHarvestDays);
  if (healthRating !== undefined) varieties[index].healthRating = healthRating;

  res.json(varieties[index]);
});


app.delete("/api/varieties/:id", (req, res) => {
  const { id } = req.params; 
  const prevLength = varieties.length;

 
  varieties = varieties.filter((v) => v.id !== id);


  if (varieties.length < prevLength) {
    return res.json({ success: true }); 
  } else {
    return res.status(404).json({ message: "Variety not found." }); 
  }
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
