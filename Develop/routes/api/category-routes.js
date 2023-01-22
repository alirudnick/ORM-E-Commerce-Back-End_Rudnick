const router = require('express').Router();
const { Category, Product } = require('../../models');


// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
  // find all categories
  const categoryData = await Category.findAll();
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
 const categoryData = await Category.findOne(req.params.id);
    return res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err);
  }
  });
  // be sure to include its associated Products


router.post('/',async (req, res) => {
  try{
  // create a new category
  const categoryData = await Category.create(req.body.name);
    return res.status(200).json(err);
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
    return res.status(200).json(categoryData);
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
    return res.status(200).json(deletedCategory);
} catch (err) {
  res.status(500).json(err);
}
  });

module.exports = router;
