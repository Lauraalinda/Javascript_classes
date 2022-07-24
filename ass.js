class Mkulima{
    constructor(){
        this.farm=[];
        this.groceryproducts=[];
        this.vendors=[];
    }
 
 
addFarm = (farmId, farmname, farmer, phone, address
    )=>{
  this.farm.push({
    farmId:farmId,
    farmname:farmname,
    farmer:farmer,
    phone:phone,
    address:address
  })
 }
}

let mkulima1=new Mkulima();
mkulima1.addFarm(3465,"NapierValley","john","0756046099","p.oBox28244");
console.log(Mkulima.farm)
