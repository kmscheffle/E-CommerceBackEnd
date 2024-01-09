const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const categoryData = await Category.findAll({
    include: [Product]
  })
  res.json(categoryData)

});

router.get('/:id', async (req, res) => {
  const categoryData = await Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
  res.json(categoryData)
  // find one category by its `id` value

  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  
    const categoryData = await Category.create({
      category_id: req.body.category_id,
    });
    res.status(200).json(categoryData);
  
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
