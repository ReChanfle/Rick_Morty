const getCharById = require('../controllers/getCharById');
const login = require("../controllers/login");
const {postFav,deleteFav} = require('../controllers/handleFavorites');
const { Router } = require("express");
const router = Router();

router.get('/detail/:id', getCharById);
router.post('/login', login);
router.put('/fav', postFav);
router.delete('/fav', deleteFav);


module.exports = router


