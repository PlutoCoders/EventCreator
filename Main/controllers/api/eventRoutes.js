const router = require('express').Router();

const Event = require(`../../models/events`);

const withAuth = require(`../../utils/auth`);

router.post('/', withAuth, async (req, res) => {
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

// INSTRUCTOR FILE CODE (implement)

//  router.post('/login', async (req, res) => {
//     try {
//       const userData = await User.findOne({ where: { email: req.body.email } });
//       if (!userData) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password, please try again' });
//         return;
//       }

//       const validPassword = await userData.checkPassword(req.body.password);

//       if (!validPassword) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password, please try again' });
//         return;
//       }

//       req.session.save(() => {
//         req.session.user_id = userData.id;
//         req.session.logged_in = true;

//         res.json({ user: userData, message: 'You are now logged in!' });
//       });

//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

// router.post('/logout', (req, res) => {
//     if (req.session.logged_in) {
//       req.session.destroy(() => {
//         res.status(204).end();
//       });
//     } else {
//       res.status(404).end();
//     }
//   });

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const eventData = await Event.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: `Your Wrong` });
      return;
    }
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.put('/:id', withAuth, async (req, res) => {
//   try {
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
