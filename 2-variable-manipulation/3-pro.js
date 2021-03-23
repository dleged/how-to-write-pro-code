const TAX_RATE = 1.5;
const SHIPPING_DEFAULT = 5;

function calculateTotal(items,{ shipping = SHIPPING_DEFAULT, taxRate = TAX_RATE,discount = 0} = {}){
  
  if(items === null || items.length === 0) return 0;
  
  let total = 0;
  total = items.reduce((t,{price,quan}) => t + price * quan,0);
  
  const discountRate = 1 - discount;

  return total * discountRate * taxRate + shipping;
  
}

const testItems = [
  { price: 4, quan: 2 },
  { price: 3, quan: 1 },
  { price: 2, quan: 3 }
]

console.log(calculateTotal([], {}))
console.log(calculateTotal(testItems, {}))
console.log(calculateTotal(testItems, { shipping: 0 }))
console.log(calculateTotal(testItems, { discount: .75 }))
console.log(calculateTotal(testItems, { shipping: 12 }))