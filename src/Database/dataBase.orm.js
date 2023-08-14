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

	const usuariosModelo =require('../models/usuario')
    const paginaModelo = require("../models/paginaPrincipal");

//sincronia
const usuario =usuariosModelo(sequelize,Sequelize)
const paginaPrincipal =paginaModelo(sequelize,Sequelize)

usuario.hasMany(paginaPrincipal)
paginaPrincipal.belongsTo(usuario)

module.exports = {
	usuario,
	paginaPrincipal
};