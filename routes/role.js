const express = require('express')
const { getRole, createRole, deleteRole } = require('../controllers/roleController')

const router = express.Router()

router.get('/', getRole)
router.post('/', createRole)
router.delete('/:id', deleteRole)




module.exports = router