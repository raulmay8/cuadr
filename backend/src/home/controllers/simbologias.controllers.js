import {Simbologia} from '../models/Simbologia.js'

export const getSimbologias = async (req, res) => {
    try {
        const simbolo = await Simbologia.findAll()
        res.json(simbolo)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getSimbologia = async (req, res) =>{
    try {
        const {id} = req.params;
        const simbolo = await Simbologia.findOne({
            where: {
                id,
            },
        });
        if (!simbolo)
            return res.status(404).json({message: "El tipo de simbología no existe"})
        res.json(simbolo)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createSimbologia = async (req, res) =>{
    const {name} = req.body
    try {
    
        const newSimbolo = await Simbologia.create({
            name
        })
        res.json(newSimbolo) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateSimbologia = async (req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;

        const simbolo = await Simbologia.findByPk(id);
        simbolo.name=name;
        await simbolo.save();
        res.json(simbolo)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}

export const deleteSimbologia = async (req, res) =>{
    try {
        const {id} = req.params;
        await Simbologia.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}