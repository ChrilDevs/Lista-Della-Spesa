const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/shopping-lists', controller.getAllLists);
router.post('/shopping-lists', controller.createList);
router.get('/shopping-lists/:id', controller.getListById);
router.put('/shopping-lists/:id', controller.updateList);
router.delete('/shopping-lists/:id', controller.deleteList);

router.post('/shopping-lists/:listId/items', controller.addItem);
router.delete('/shopping-lists/:listId/items/:itemId', controller.deleteItem);

module.exports = router;
