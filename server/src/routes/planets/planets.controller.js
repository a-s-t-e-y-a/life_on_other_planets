const {planets}= require('../../models/planets.model')
function getallplanets(req,res){
    return res.status(200).json(planets);
}
module.exports = getallplanets;