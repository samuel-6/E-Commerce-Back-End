const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { getAllInc, getOneInc, addNewModel, editModelById, deleteModelById} = require('./api-utils');

const includeProducts = [

  {

    model: Product,
    as: 'tagged_products',
    attributes: [

      'id',
      'product_name',
      'price',
      'stock',
      'category_id'

    ]

  }

];

// The `/api/tags` endpoint

// /api/tags
router.get('/', (req, res) => {
  
  getAllInc(Tag, includeProducts, res);

});

// /api/tags/1
router.get('/:id', (req, res) => {

  // find a single tag by its `id`
  getOneInc(Tag, includeProducts, req.params.id, res);
  
});

// /api/tags
router.post('/', (req, res) => {

  // create a new tag
  addNewModel(Tag, {tag_name: req.body.tag_name}, res);

});

// /api/tags/1
router.put('/:id', (req, res) => {

  // update a tag's name by its `id` value
editModelById(Tag, {tag_name: req.body.tag_name}, req.params.id, res);

});

// /api/tags/1
router.delete('/:id', (req, res) => {

  // delete on tag by its `id` value
  deleteModelById(Tag, req.params.id, res);

});

module.exports = router;
