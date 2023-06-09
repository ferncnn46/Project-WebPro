const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const Plants = require('../models/plantModel');
const { auth, adminCheck } = require("../middleware/auth");

router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

//Get Plant
router.get('/get-all-plants', async (req, res) => {
  try {
    const plants = await Plants.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//GET /api/plants/:id
router.get('/get-plant/:id', async (req, res) => {
  try {
    const plants = await Plants.findById(req.params.id);
    if (!plants) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.json(plants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Upload Plant
router.post('/upload-plant' , async (req, res) => {
  const plants = new Plants({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    image: req.body.image
    });
  try {
    const newPlants = await plants.save();
    res.status(201).json(newPlants);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Delete Plant
router.delete('/delete-plant/:id', async (req, res) => {
  try {
    const plants = await Plants.findByIdAndDelete(req.params.id);
    if (!plants) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.json({ message: 'Plant deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Delete all plants
router.delete('/delete-all-plants', async (req, res) => {
  try {
    await Plants.deleteMany();
    res.json({ message: 'All plants deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Update Plant
router.put('/update-plant/:id', async (req, res) => {
  try {
    const plant = await Plants.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!plant) {
      return res.status(404).json({ message: 'Plant not found' });
    }
    res.json(plant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
