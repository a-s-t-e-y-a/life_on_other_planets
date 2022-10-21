const launches=require('../../models/launches.model')
function getAllLaunches(req,res){
    return res.status(200).json(launches.getAllLaunches())
}
function addnew(req,res){
    const launch = req.body;
    if(!launch.mission|| !launch.rocket || !launch.launchdate || !launch.target){
        return res.status(400).json({
            error: 'mission require prroperty'
        })
    }
    launch.launchdate = new Date(launch.launchdate)
    launches.addAllLaunches(launch) 
    return res.status(200).json(launch)
}
module.exports ={
    getAllLaunches,
    addnew
}
