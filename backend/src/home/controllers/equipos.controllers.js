import {Equipo} from '../models/Equipo.js'
import { Tablero } from '../models/Tablero.js'

export const getEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.findAll()
        res.json(equipos)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getEquipo = async (req, res) =>{
    try {
        const {id} = req.params;
        const equipos = await Equipo.findOne({
            where: {
                id,
            },
        });
        if (!equipos)
            return res.status(404).json({message: "El equipo no existe"})
        res.json(equipos)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createEquipo = async (req, res) =>{
    const {nombre, cantidad, factorDemanda, factorDemandaVA, tableroId} = req.body
    try {
        const newEquipo = await Equipo.create({
            nombre, cantidad, factorDemanda, factorDemandaVA, tableroId
        })
        res.json(newEquipo) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateEquipo = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, cantidad, factorDemanda, factorDemandaVA, tableroId} = req.body;

        const equipo = await Equipo.findByPk(id);
        equipo.nombre=nombre;
        equipo.cantidad=cantidad;
        equipo.factorDemanda=factorDemanda;
        equipo.factorDemandaVA=factorDemandaVA;
        equipo.tableroId=tableroId
        await equipo.save();
        res.json(equipo)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}

export const deleteEquipo = async (req, res) =>{
    try {
        const {id} = req.params;
        await Equipo.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getEquipoTablero = async(req, res) =>{
    try {
        const {id} =req.params
        const tableros = await Tablero.findAll({
            where: {tableroId: id},
        });
        res.json(tableros)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}