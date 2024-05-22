//Function to Calculate Total Sales of the Product in the Array of Object.
function CalculateTotalSales(sales){
    let Total=0;
    // iterating over sales Array
    for(let i=0;i<sales.length;i++){
        let sale=sales[i].original;

        //Applying Discount if Exists and adding sale key in the Array.
        if(sales[i].discount){
            sale=sale*(1 - sales[i].discount)
            sales[i].sale=sale
        }
        else{
            sales[i].sale=sale;
        }

        //Calculates the Total sale and adding Total key in the Array.
        sales[i].Total=sale*sales[i].stock;
    }
    //returns the Modified Array of Objects.
    return(sales)
}

//Taking the input Array of Objects.
var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];

  //Calling the Function of CalculateTotalSales().
  let TotalSales=CalculateTotalSales(sales)

  //Printing the Modified Array of Objects.
  console.log(TotalSales)