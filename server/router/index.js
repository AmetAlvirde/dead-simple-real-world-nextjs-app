const express = require('express');

const router = express.Router();

router.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    const user = {
      id: 1,
      username: 'Admin',
      permissions: ['admin']
    };
    req.session.user = user;
    res.send(user);
  } else {
    res.status(401).send({
      error: 'Invalid user or password'
    });
  }
});

router.get('/api/logout', (req, res) => {
  req.session = null;
  res.send({});
});

router.get('/api/whoami', (req, res) => {
  res.send(req.session.user);
});

module.exports = router;
