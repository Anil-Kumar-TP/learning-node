const express = require('express');
const router = express.Router();
const { getPeople, createPerson, createPersonThunder, updatePerson, deletePerson } = require('../controllers/people');

router.get('/', getPeople)
router.post('/', createPerson)
router.post('/thunder', createPersonThunder)
router.put('/:id',updatePerson)
router.delete('/:id',deletePerson)

module.exports = router;