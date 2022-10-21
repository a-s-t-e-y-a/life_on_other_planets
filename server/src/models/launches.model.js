const launches = new Map();
let latest = 100;
const launch = {
  mission: "fgfdg",
  rocket: "fdgdhjgfjdfdg",
  launchdate: new Date('Decmeber 30,2090'),
  target: "fgdf",
  flightNumber: 100,
  coustmers: ["FDgfdg", "fdgfdgfd"],
  upcoming: true,
  sucess: true,
};
launches.set(launch.flightnumber, launch);
function getAllLaunches() {
  return Array.from(launches.values());
}
function addAllLaunches(launch) {
  latest= latest+1;
  launches.set(latest, Object.assign(
    launch,{
      coustmers: ['krishna seth','ISRO'],
      flightNumber:latest,
      upcoming: true,
      success: true,
    }
  ))
}
module.exports = {
  getAllLaunches,
  addAllLaunches,
};
