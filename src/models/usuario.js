const usuario=(sequelize,type)=>{
    return sequelize.define('usuarios',{
        idUsuario:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username:type.STRING(99),
        apellido:type.STRING,   
        email:type.STRING,     
        contraseña: type.STRING,
        
        crearUsuario: {
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