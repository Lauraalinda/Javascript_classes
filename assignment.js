class Mkulima{
    constructor(){
        this.farm=[];
        this.groceryproducts=[];
        this.vendors=[]
    
this.addFarm=(farmId,farmname,farmer,phone,address)=>{
  this.farm.push({
    farmId:farmId,
    farmname:farmname,
    farmer:farmer,
    phone:phone,
    address:address
  })
 }
this.removeFarm=(farmId)=>{
   let deleteFarm=this.farm.find(item=item.farmId===farmId);
   let farmIndex=this.farm.indexOf(deleteFarm);
   this.farms.splice(farmIndex,1)  
}
this.updateFarm=(farmId,newfarmId,newfarmname,newfarmer,newphone,newaddress)=>{
  let deleteFarm=this.farm.find(item=item.farmId===farmId)
  deleteFarm.farmId = newfarmId
  deleteFarm.farmname = newfarmname
  deleterFarm.farmer = newfarmer
  deleterFarm.phone = newphone
  deleteFarm.address = newaddress
}
this.getFarm=(farmId)=>{
  let getFarms=this.farm.find(item=item.farmId===farmId);
  return getFarms
}
this.addProduct=(productId,productname,pricefields)=>{
  this.farm.push({
    productId:productId,
    productname:productname,
    pricefields:pricefields
  })
}

this.removeProduct=(productId)=>{
  let deleteproduct=this.groceryproducts(item=item.productId===productId);
  let productIndex=this.groceryproducts.indexOf(deleteproduct);
  this.groceryproducts.splice(productIndex,1)
}
this.updateProduct=(productId,newproductId,newproductname,newpricefields)=>{
  let productupdate=this.groceryproducts(item=item.productId===productId);
  productupdate.productId=newproductId
  productupdate.productname=newproductname
  productupdate.pricefields=newpricefields
}
this.getProduct=(productId)=>{
  let getProducts=this.groceryproducts(item=item.Id===productId);
  return getProducts
 }
}
}

let mkulima1=new Mkulima();
mkulima1.addFarm("3465","NapierValley","john","0756046099","p.oBox28244");
mkulima1.removeFarm("3465");
console.log(mkulima1.farm)

// let mkulima2=new Mkulima();
// mkulima2.addFarm(823889,"StoneValley","Siara","0772434325","p.oBox2345");
// console.log(mkulima2.farm)
// 
// 







