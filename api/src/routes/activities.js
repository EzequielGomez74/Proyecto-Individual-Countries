const { Router } = require("express");
const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Activities } = require("../db.js");

const router = Router();

router.post('/activities', async (req, res,) => { // pide un body con name, difficulty, duration, season y countries
  
  const {
name, 
difficulty, 
duration, 
season, 
country //Id
} = req.body 
if(name && difficulty && duration && season && country){ // si no hay alguno de estos datos, no se crea la actividad
const activity = await Activities.create({ // crea la actividad
        name,
        difficulty,
        duration,
        season         
    }); // si no hay un pais con esta info, no se crea la actividad

countries.forEach(async (id) => { // recorre el array de paises
    const country = await Country.findOne({ // busca el pais
        where: {id: {[Op.iLike]:`%${id}%`}} // busca el pais por id
            })
    await country?.addActivities(activity); // si el pais existe, se le agrega la actividad
})

return res.send(activity)
} else {
return res.status(404).json('Missing data')
}

}
)

  router.get('/activities', async (req, res) => {

    const activities = await Activities.findAll();
    if(activities.length) {
      return res.status(200).json(activities);
    }
    return res.status(200).send([]);


});

module.exports = router;