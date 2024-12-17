const express = require('express');
const router = express.Router();
const { addTags } = require('../controllers/NoteControllers')
const { validation, handleValidationErrors} = require('../utils/validator');


//tags routes
router.post('/tags',validation.tagValidation , handleValidationErrors ,addTags);
router.get('/tags', getTags);
router.get('/tags/:id', getTagById);
router.put('/tags/:id', validations.tagValidation. handleValidationErrors, updateTag);
router.delete('/tags/:Id', deleteTag);

// categories routes
router.post('/categories', validation.categoryValidation, handleValidationErrors, addCategory);
router.get('/categories', getCategories);
router.get('/categories/:id', getCategoryById);
router.put('/categories/:id', validation.categoryValidation, handleValidationErrors, updateCategory);
router.delete('/categories/:id', deleteCategory);

module.exports = router;