const { Router } = require('express');
const { createRole } = require('../controllers/RolesController');

const router = Router();

router.post('/',[], createRole)

module.exports = router