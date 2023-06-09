var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Collection = require('../models/collectionModel');
const Users = require('../models/userModel.js');
const Plants = require('../models/plantModel.js');


router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

// Create Collection:
// POST /api/collections
router.post('/createCollection', async (req, res) => {
  try {
    const { name, owner } = req.body;

    const collection = new Collection({
      name,
      owner
    });
    const savedCollection = await collection.save();

    res.status(201).json(savedCollection);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the collection' });
  }
});


//GET all collection
router.get('/getAllCollection', async (req, res) => {
  try {
    const collections = await Collection.find();
    res.json(collections);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE all collections
router.delete('/deleteAllCollection', async (req, res) => {
  try {
    await Collection.deleteMany({});
    res.json({ message: 'All collection deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

//Add plant
router.post('/:collectionId/plants', async (req, res) => {
  try {
    const { collectionId } = req.params;
    const { plantId } = req.body;

    const collection = await Collection.findById(collectionId);
    if (!collection) {
      return res.status(404).json({ message: 'Collection not found' });
    }
    
    const plant = await Plant.findById(plantId);
    if (!plant) {
      return res.status(404).json({ message: 'Plant not found' });
    }

    // Check if the plant is already in the collection
    if (collection.plantInCollection.includes(plantId)) {
      return res.status(400).json({ message: 'Plant already exists in the collection' });
    }

    // Add the plant to the collection
    collection.plantInCollection.push(plantId);
    await collection.save();

    res.status(201).json({ message: 'Plant added to the collection' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



module.exports = router;
