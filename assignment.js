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
   let deleteFarm=this.farm.find(item=>item.farmId===farmId);
   let farmIndex=this.farm.indexOf(deleteFarm);
   this.farm.splice(farmIndex,1)  
}
this.updateFarm=(farmId,newfarmId,newfarmname,newfarmer,newphone,newaddress)=>{
  let Farmupdate=this.farm.find(item=>item.farmId===farmId)
  Farmupdate.farmId = newfarmId
  Farmupdate.farmname = newfarmname
  Farmupdate.farmer = newfarmer
  Farmupdate.phone = newphone
  Farmupdate.address = newaddress
}
this.getFarm=(farmId)=>{
  let getFarms=this.farm.find(item=>item.farmId===farmId);
  return getFarms
 
}
this.addProduct=(productId,productname,pricefields)=>{
  this.groceryproducts.push({
    productId:productId,
    productname:productname,
    pricefields:pricefields
  })
}

this.removeProduct=(productId)=>{
  let deleteproduct=this.groceryproducts.find(item=>item.productId===productId);
  let productIndex=this.groceryproducts.indexOf(deleteproduct);
  this.groceryproducts.splice(productIndex,1)
}
this.updateProduct=(productId,newproductId,newproductname,newpricefields)=>{
  let productupdate=this.groceryproducts.find(item=>item.productId===productId);
  productupdate.productId=newproductId
  productupdate.productname=newproductname
  productupdate.pricefields=newpricefields
}
this.getProduct=(productId)=>{
  let getProducts=this.groceryproducts.find(item=>item.productId===productId);
  return getProducts
 }
}
}

let mkulima1=new Mkulima();
mkulima1.addFarm(3465,"NapierValley","john","0756046099","p.oBox28244");
console.log(mkulima1)
mkulima1.addFarm(1115,"NapierValley","john","0756046099","p.oBox28244");
console.log(mkulima1.farm)
mkulima1.removeFarm(1115);
console.log(mkulima1.farm)
mkulima1.addFarm(0015,"keyValley","elaxi","07724344325","p.oBox01244");
console.log(mkulima1.farm)
mkulima1.updateFarm(0015,6678,"Kentonfarm","deogracious","075432113","p.obox4322")
console.log(mkulima1.farm)
console.log(mkulima1.getFarm(3465))



let product1=new Mkulima();
product1.addProduct(9994,"Cabbages","2000ugx");
console.log(product1)
product1.addProduct(5555,"Bananas","1000ugx");
console.log(product1.groceryproducts)
product1.removeProduct(5555);
console.log(product1.groceryproducts)
product1.addProduct()
product1.addProduct(1222,"onions","300ugx");
console.log(product1.groceryproducts)
product1.updateProduct(1222,3456,"ginger","9000ugx")
console.log(product1.groceryproducts)
console.log(product1.getProduct(9994))









// let mkulima2=new Mkulima();
// mkulima2.addFarm(823889,"StoneValley","Siara","0772434325","p.oBox2345");
// console.log(mkulima2.farm)
// 
// 







