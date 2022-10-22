const { Router } = require("express");
const axios = require("axios");
const { Op } = require("sequelize");
const { Country, Activities } = require("../db.js");

const router = Router();

const getAllCountries = async () => { // esta funcion trae la info de la api
  const apiUrl = await axios.get("https://restcountries.com/v3/all");
  const apiInfo = await apiUrl.data.map((el) => {
    return {
      id: el.cca3,
      name: el.name.common,
      image: el.flags != null ? el.flags[1] : "no hay imagen",
      continent: el.continents[0],
      capital: el.capital != null ? el.capital : "No hay capital",
      subregion: el.subregion,
      area: el.area,
      population: el.population,
    };
  });
  return apiInfo;
};


const countriesToDb = async () => {
  try {
    let countriesDb = await Country.findAll({
      include: { model: Activities },
    });
    if (!countriesDb.length) {
      const apiInfo = await getAllCountries();
      await Country.bulkCreate(apiInfo);
    }
  } catch (error) {
    console.log(error);
  }
};


router.get("/countries", async (req, res) => { // esta ruta trae la info de la api y la guarda en la db
  const name = req.query.name; // si hay un query, busca el pais por nombre
 
    countriesToDb(); // guarda la info de la api en la db
    if (name) {
      const countries = await Country.findAll({ // busca el pais por nombre
        where: {
          name: {[Op.iLike]: `%${name}%`},
        },
      });
      countries.length // si el pais existe, lo devuelve
        ? res.status(200).send(countries)
        : res.status(404).json("err");
    } else {
      const names = await Country.findAll({ // si no hay query, devuelve todos los paises
        include: {
          model: Activities,
        }, // incluye las actividades
      }); 
      res.status(200).send(names);
    }
});

router.get("/countries/:id", async (req,res) => { // esta ruta trae la info de un pais por id
  const { id } = req.params; // busca el pais por id
  const apiId = await getAllCountries(); // trae la info de la api
  if(id){
    const idFilter = await apiId.filter((e) => e.id == id ) // filtra el pais por id
    idFilter.length ? res.status(200).send(idFilter) : res.status(404).send("Id not found") // si el pais existe, lo devuelve
  }
})


module.exports = router;