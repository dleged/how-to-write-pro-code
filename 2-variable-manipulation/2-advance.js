const TAX_RATE = 1.5;
const SHIPPING_DEFAULT = 5;

function calculateTotal(items,options){
  let total = 0;

  if(!items.length) return total;
  
  total = items.reduce((t,{price,quan}) => t + price * quan,0);

  total = total - total * (options.discount || 0)
  total = total * TAX_RATE;
  if(options.shipping !== 0){
    total = total + (options.shipping || SHIPPING_DEFAULT);
  }
  
  return total;
  
}

const testItems = [
  { price: 4, quan: 2 },
  { price: 3, quan: 1 },
  { price: 2, quan: 3 }
]

// console.log(calculateTotal())
// console.log(calculateTotal(testItems))
// console.log(calculateTotal(undefined, {}))
console.log(calculateTotal([], {}))
console.log(calculateTotal(testItems, {}))
console.log(calculateTotal(testItems, { shipping: 0 }))
console.log(calculateTotal(testItems, { discount: .75 }))
console.log(calculateTotal(testItems, { shipping: 12 }))