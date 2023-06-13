import {Cabecera} from '../models/Cabecera.js'

export const getCabeceras = async (req, res) => {
    try {
        const cabeceras = await Cabecera.findAll()
        res.json(cabeceras)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getCabecera = async (req, res) =>{
    try {
        const {id} = req.params;
        const cabeceras = await Cabecera.findOne({
            where: {
                id,
            },
        });
        if (!cabeceras)
            return res.status(404).json({message: "El dato no existe"})
        res.json(cabeceras)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createCabecera = async (req, res) =>{
    const {nombre, tableroId} = req.body
    try {
        const newCabecera = await Cabecera.create({
            nombre, tableroId
        })
        res.json(newCabecera) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateCabecera = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, tableroId} = req.body;

        const cabecera = await Cabecera.findByPk(id);
        cabecera.nombre=nombre
        cabecera.tableroId=tableroId
        await cabecera.save();
        res.json(cabecera)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}

export const deleteCabecera = async (req, res) =>{
    try {
        const {id} = req.params;
        await Cabecera.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}