class Mkulima{
    constructor(){
        this.farm=[];
        this.groceryproducts=[];
        this.orders=[]
    
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
this.printProduct=()=>{
  return this.groceryproducts
}
this.calculateOrderCost=(productId,quantity)=>{
let cost=this.groceryproducts.find(item=>item.productId===productId)
console.log(`Total cost of your order is ${cost.pricefields*quantity}`)
this.orders.push(cost)
}
}
}

let mkulima1=new Mkulima();
//ADDING FARM
mkulima1.addFarm(3465,"NapierValley","john","0756046099","p.oBox28244");
console.log(mkulima1)

//REMOVING FARM
mkulima1.addFarm(1115,"NapierValley","john","0756046099","p.oBox28244");
console.log(mkulima1.farm)
mkulima1.removeFarm(1115);
console.log(mkulima1.farm)

//UPDATING FARM
mkulima1.addFarm(0015,"keyValley","elaxi","07724344325","p.oBox01244");
console.log(mkulima1.farm)
mkulima1.updateFarm(0015,6678,"Kentonfarm","deogracious","075432113","p.obox4322")
console.log(mkulima1.farm)

//GETTING FARM
console.log(mkulima1.getFarm(3465))



let product1=new Mkulima();
//ADDING PRODUCT
product1.addProduct(9994,"Cabbages",2000);
console.log(product1)

//REMOVING PRODUCT
product1.addProduct(5555,"Bananas",1000);
console.log(product1.groceryproducts)
product1.removeProduct(5555);
console.log(product1.groceryproducts)
 


//UPDATING PRODUCT
product1.addProduct(1222,"onions",300);
console.log(product1.groceryproducts)
product1.updateProduct(1222,3456,"ginger",9000)
console.log(product1.groceryproducts)

//GETTING PRODUCT
console.log(product1.getProduct(9994))

//PRINTING PRODUCTS
product1.addProduct(1002,"beans",1000)
product1.addProduct(1777,"maize","700ugx")
product1.printProduct
console.log(product1)


//CALCULATE ORDER COST
console.log(product1.calculateOrderCost(1002,4))













