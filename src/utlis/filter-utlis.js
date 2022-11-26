
/* pricerange filter */
const priceRangeFilter = (priceList,filterPriceList) =>
{
    return priceList.filter((item) => Number(item.price) <= filterPriceList);
};
/*stockFilter */
const stockFilter = (stockList,filterStockList) =>
{
    return stockList.filter( (item) => filterStockList ? item.inStock === true : item)
}
/* fast delivery filter */

const fastDelivery = (fastDeliveryList)=>
{
    
  
}
//sort data
const sortData = (prodList,sortByList) =>
{
   if(sortByList === "LOW_TO_HIGH")
   {
   return [...prodList].sort( (a,b) => a.price-b.price);
   }
   if(sortByList === "HIGH_TO_LOW")
   {
//    console.log(prodList)

   return [...prodList].sort( (a,b) => b.price - a.price );
   }
   return prodList;
}

//category filter

const sortByCategory = (All,
    office,
    livingroom,
    kitchen,
    bedroom,
    dining,
    kids) =>
    {  
        
        const newArray = [];
        if(office===false&&livingroom=== false && kitchen ===false&& bedroom===false &&dining===false &&kids===false)
        { 
            
            return All;
        }
        if(office === true)
        {
            let newList = All.filter((item)=> item.categoryName==="office")
              newArray.push(...newList);
        }
        if(livingroom === true)
        {
            let newList = All.filter((item)=> item.categoryName==="livingroom")
              newArray.push(...newList);
        }
        if(kitchen ===true)
        {
            console.log(kitchen)
            let newList =All.filter((item) => item.categoryName==="kitchen")
             newArray.push(...newList);
        }
        if(bedroom===true)
        {
            let newList =All.filter ((item)=> item.categroyName === "bedroom")
             newArray.push(...newList)

        }
        if(dining===true)
        {
           let newList = All.filter((item) => item.categoryName === "dining")
            newArray.push(...newList);
        }
        if(kids ===true)
        {
          let newList = All.filter((item)=> item.categoryName ==="kids")
          
             newArray.push(...newList);
          
        }
        console.log(newArray)
        return newArray;
    }
    export{
        priceRangeFilter,
        stockFilter,
        fastDelivery,
        sortData,
        sortByCategory
    }