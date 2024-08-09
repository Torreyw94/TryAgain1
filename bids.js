const { Model, DataTypes } =
require('sequelize');

class Bid extends Model {
    static associate(models) {
        this.belongsTo(models.User);
        this.belongsTo(models.Job);
    }
}

module.exports = ('sequelize') => {
    Bid.init({
        amount: DataTypes.DECIMAL,
    }, {
        sequelize,
        modelName: 'Bid'
});
    
return Bid;
};
