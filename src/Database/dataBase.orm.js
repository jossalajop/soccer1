const { Sequelize } = require("sequelize");

const { MYSQLHOST, MYSQLUSER, MYSQLPASSWORD, MYSQLDATABASE, MYSQLPORT, MYSQL_URI, } = require("../keys");

const sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
	host: MYSQLHOST,
	port: MYSQLPORT,
	dialect: 'mysql'
});

//const sequelize = new Sequelize(MYSQL_URI);

sequelize.authenticate()
	.then(() => {
		console.log("conectado");
	})
	.catch((err) => {
		console.log("no se conecto");
	});

sequelize.sync({ force: false })
	.then(() => {
		console.log("tablas sincronizadas");
	});

	const usuarioModelo =require('../models/usuario')
	const jugadorModelo =require('../models/jugador')
	const vocalModelo =require('../models/vocal')
    const paginaModelo = require("../models/paginaPrincipal");

//sincronia
const usuario =usuarioModelo(sequelize,Sequelize)
const jugador =jugadorModelo(sequelize,Sequelize)
const vocal =vocalModelo(sequelize,Sequelize)
const paginaPrincipal =paginaModelo(sequelize,Sequelize)

usuario.hasMany(paginaPrincipal)
paginaPrincipal.belongsTo(usuario)

module.exports = {
	usuario,
	jugador,
	vocal,
	paginaPrincipal,

};