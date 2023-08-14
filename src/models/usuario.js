const usuario=(sequelize,type)=>{
    return sequelize.define('usuarios',{
        idUsuarioS:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username:type.STRING(99),
        contraseña: type.STRING,
        
        creacionUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = usuario;