const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// IMPORTO LA LOGICA DE MIS FUNCIONES
const { getDogs } = require("./getDogs")
const getIdDogs = require("./getIdDogs")
const getTemperaments = require("./getTemperaments")
const createDog = require("./createDog")
const deleteDog = require("./deleteDog");
const { addFavorite, deleteFavorite, getFavorites } = require('./add-deleteFavorite');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// GET - /DOGS
router.get('/dogs', getDogs);

// [ ] GET /dogs/{idRaza}:
router.get('/dogs/:id', getIdDogs)

// GET /temperament:
router.get('/temperaments', getTemperaments)

// [ ] POST /dog:
router.post('/dog', createDog)

router.delete('/dog', deleteDog)


// FAVORITES
router.get('/favorites', getFavorites)
router.post('/favorites', addFavorite)
router.delete('/favorites', deleteFavorite)

module.exports = router;
