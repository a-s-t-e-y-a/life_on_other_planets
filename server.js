
const { parse } = require('csv-parse');
const fs = require('fs');
const live =[];

const parser = parse({
    comment:'#',
    columns: true,
})
function habital(planet){
    return planet['koi_disposition']==='CONFIRMED' && planet['koi_insol']>0.36 && planet['koi_insol']<1.11 && planet['koi_prad']<1.6;
}
//importing the files in node js
fs.createReadStream('kepler_csv_data.csv')
.pipe(parser)
.on ('data',(data)=>{
    if(habital(data)){
        live.push(data);
    }
})
.on('error',(err)=>{
    console.log(err);
})
.on('end',()=>{
    console.log(`${live.length} habitabale planet`);
});


