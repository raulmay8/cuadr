import { TipoTablero } from "../models/TipoTablero.js";
import { Tablero } from "../models/Tablero.js";

export const getTipoTableros = async (req, res) => {
    try {
        const tipos = await TipoTablero.findAll()
        res.json(tipos)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getTipoTablero = async (req, res) =>{
    try {
        const {id} = req.params;
        const tipos = await TipoTablero.findOne({
            where: {
                id,
            },
        });
        if (!tipos)
            return res.status(404).json({message: "El tipo de tablero no existe"})
        res.json(tipos)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createTipoTablero = async (req, res) =>{
    const {name} = req.body
    try {
    
        const newTipos = await TipoTablero.create({
            name
        })
        res.json(newTipos) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateTipoTablero = async (req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;

        const tipo = await TipoTablero.findByPk(id);
        tipo.name=name;
        await tipo.save();
        res.json(tipo)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}

export const deleteTipoTablero = async (req, res) =>{
    try {
        const {id} = req.params;
        await TipoTablero.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
export const getTipoTableroTablero = async(req, res) =>{
    try {
        const {id} =req.params
        const tableros = await Tablero.findAll({
            where: {tipoTableroId: id},
        });
        res.json(tableros)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}