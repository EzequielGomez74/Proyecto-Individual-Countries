const { Router } = require( 'express' );
const axios = require ( 'axios' );
const { Country, Activities } = require ( '..//db' );
require ('dotenv').config();


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getCountries = async() => {
    try{
        const allCountries = await axios.get('https://restcountries.com/v3/all');
        const dbCountries = await Country.findAll({
            include: {model: Activities,
             attributes: ['name', 'difficulty', 'duration', 'season'],
             through: { atributes: {}}
         } 
         });

        if (!dbCountries.length){
        Country.bulkCreate( 
            allCountries.data.map((c) => {
                return{
                    id: c.cca3,
                    name: c.name.official,
                    flag: c.image[0],
                    continent: c.region,
                    subregion: c.subregion,
                    capital: c.capital ? c.capital[0] : "Not Capital reported",
                    extension: c.area,
                    population: c.population,
                    maps: c.maps.googleMaps || ["Map not found"],
                }

            })
        );
    }

    } catch (err) {
        console.log(err)
    }
};

router.get("/countries", async (req, res) => {
    const { name } = req.query;
    const createDb = await getCountries();
    const allCountries =  await Country.findAll({
        include: {model: Activities,
         attributes: ['name', 'difficulty', 'duration', 'season'],
         through: { atributes: {}}
     } 
     });
    
    try{
            if (name) {
            let country = await allCountries.filter(
                (c) => c.name.toLowerCase().includes(name.toLocaleLowerCase())
            );
            if (country.length){
                return res.status(200).json(country);
            }else {
                return res.status(400).json("Not existing country")
            }
            } else {
            return  res.status(200).json(allCountries);
            }
            
        } catch (err) {
        console.log(err)
        }
});

router.get("/countries/:id", async (req, res) => {
    try{
        // const { id } = req.params;
        // const country =  await Country.findByPk(id)
        const { id } = req.params;
        const country =  await Country.findByPk(id, { 
            include: {model: Activities,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: { atributes: {}}
        }         
        })



        if (country){
            res.status(200).json(country)
        } else {
            res.status(400).json("Not country available which such ID")
        }
    } catch (err) {
        console.log(err)
    }
});

router.get("/activities", async (req, res) => {
    const allActivities = await Activities.findAll();
    try {
        return res.status(200).json(allActivities)
    } catch (error) {
    return res.status(400).json(error)}
});

router.post("/activity", async (req, res) => {
    const {
        name,
        difficulty,
        duration,
        season,
        countries
    }  = req.body

    try {
        const [createActivity, boolean] = await Activities.findOrCreate({ 
            where:{
                name,
            }, defaults:{
                difficulty, duration, season
            }
        });
  
        const findCountry = await Country.findAll({
           where: {
              name: countries,
           }
        });
        
  
        await createActivity.setCountries(findCountry);
        return res.status(200).json(createActivity)
  
     } catch (error) {
        console.log(error)
        res.status(400).json( error )
     } 
  });

  router.delete("/activities/:id", async (req, res) => {
    const { id } = req.params;
    
    try{   
    await Activities.destroy({
        where: {id: id}
    });
    return res.status(200).json('Activity delete') 
    } catch (error){
       return res.status(400).json(error)
    }   
})


module.exports = router;
