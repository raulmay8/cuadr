import {datoPrincipal} from '../models/datoPrincipal.js'

export const getDatos = async (req, res) => {
    try {
        const datos = await datoPrincipal.findAll()
        res.json(datos)   
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getDato = async (req, res) =>{
    try {
        const {id} = req.params;
        const dato = await datoPrincipal.findOne({
            where: {
                id,
            },
        });
        if (!dato)
            return res.status(404).json({message: "El dato no existe"})
        res.json(dato)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const createDato = async (req, res) =>{
    const {btu, watts, va, hp, vnominal, volt, amp} = req.body
    try {
        const newDato = await datoPrincipal.create({
            btu, watts, va, hp, vnominal, volt, amp
        })
        res.json(newDato) 
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateDato = async (req, res) => {
    try {
        const {id} = req.params;
        const {btu, watts, va, hp, vnominal, volt, amp} = req.body;

        const dato = await datoPrincipal.findByPk(id);
        dato.btu=btu;
        dato.watts=watts;
        dato.va=va;
        dato.hp=hp;
        dato.vnominal=vnominal;
        dato.volt=volt;
        dato.amp=amp;
        await dato.save();
        res.json(dato)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

}

export const deleteDato = async (req, res) =>{
    try {
        const {id} = req.params;
        await datoPrincipal.destroy({
            where:{
                id
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}