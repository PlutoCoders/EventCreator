const router = require('express').Router();
const { Event }  = require('../../models');
const withAuth = require(`../../utils/auth`);

router.post('/post', withAuth, async (req, res) => {
  try {
    const eventData = await Event.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: `You're Wrong`, errorMessage: `Event not found` });
      return;
    }
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
	try {
		const eventData = await Blogpost.update(req.body, {
			where: {
				id: req.params.id,
			},
		});

		if (!eventData) {
			res.status(404).json({ message: 'not correct id' });
		}
		res.status(200).json(eventData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
