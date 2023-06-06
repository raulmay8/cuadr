import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    'cuadrosDeCargaDB',
    'postgres',
    'admin',
    {
    host: 'localhost',
    dialect: 'postgres',
}
); 