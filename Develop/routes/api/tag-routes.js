const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
 const tagData = await Tag.findAll();
    return res.json(tagData)
  });
  // be sure to include its associated Product data


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  const tagData = await Tag.findOne(req.params.id);
   return res.json(tagData)
  });
  // be sure to include its associated Product data


router.post('/', async (req, res) => {
  // create a new tag
 const tagData = await Tag.create({
    id: req.body.id,
    tag_name: req.body.tag_name
  });
   return res.json(newTag);
  });

router.put('/:id', async (req, res) => {
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
    return res.json(updatedTag);
  });

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const tagData = await Tag.destroy(req.params.id);

   return res.json(deletedTag);
  });

module.exports = router;
