const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');


// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
  // find all categories
  const categoryData = await Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
    },
  });
    return res.status(200).json(categoryData);
  } catch (err) {
    // 500 status
    res.status(500).json(err);
  }
  });
  // be sure to include its associated Products


router.get('/:id', async (req, res) => {
  try{
  // find one category by its `id` value
 const categoryData = await Category.findByPk(req.params.id, {
  include: {
    model: Product,
    attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
  },
 });
    return res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
  });
  // be sure to include its associated Products


router.post('/',async (req, res) => {
  try{
  // create a new category
  const categoryData = await Category.create({
    category_name: req.body.category_name,
  });
    return res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  });


router.put('/:id', async (req, res) => {
  try {
  // update a category by its `id` value
  const categoryData = await Category.update(
    {
      category_name: req.body.category_name
    },
    {
    where: {
      id: req.params.id,
    },
  }
  );

  const getCategoryData = await Category.findByPk(req.params.id, {
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
    },
   });
    return res.status(200).json(getCategoryData);
} catch (err) {
  res.status(500).json(err);
}
  });


router.delete('/:id', async (req, res) => {
  try{
  // delete a category by its `id` value
 const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
    return res.status(200).json('Category Deleted!');
} catch (err) {
  res.status(500).json(err);
}
  });

module.exports = router;
