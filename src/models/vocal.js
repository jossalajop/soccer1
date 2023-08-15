const vocal=(sequelize,type)=>{
    return sequelize.define('vocales',{
        idvocal:{
            type:  type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombreVocal:type.STRING,
        apellidoVocal: type.STRING,
        
        creacionVocal: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizarVocal: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = vocal;