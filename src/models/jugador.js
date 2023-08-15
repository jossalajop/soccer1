const jugador=(sequelize,type)=>{
    return sequelize.define('jugadores',{
        idJugador:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombreJugador:type.STRING,
        apellidoJugador:type.STRING,
        descripcionJugador:type.STRING(5000),        
        crearJugador: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarJugador: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = jugador;