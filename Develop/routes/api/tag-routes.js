const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
  // find all tags
 const tagData = await Tag.findAll({
  include: {
    model: Product,
    attributes: ['product_name', 'price', 'stock', 'category_id' ],
  },
 });
    return res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
  });
  // be sure to include its associated Product data


router.get('/:id', async (req, res) => {
  try{
  // find a single tag by its `id`
  const tagData = await Tag.findByPk(req.params.id, {
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id'],
    },
  });
   return res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
  });
  // be sure to include its associated Product data


router.post('/', async (req, res) => {
  try{
  // create a new tag
 const tagData = await Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name
  });
   return res.status(200).json(newTag);
} catch (err) {
  res.status(500).json(err);
}
  });

router.put('/:id', async (req, res) => {
  try{
  // update a tag's name by its `id` value
  const tagData = await Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
    where: {
      id: req.params.id,
    },
  }
  );
    return res.status(200).json(updatedTag);
} catch (err) {
  res.status(500).json(err);
}
  });

router.delete('/:id', async (req, res) => {
  try {
  // delete on tag by its `id` value
  const tagData = await Tag.destroy(req.params.id);

   return res.status(200).json(deletedTag);
  } catch (err) {
    res.status(500).json(err);
  }
  });

module.exports = router;
