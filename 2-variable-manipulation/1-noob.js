function calculateTotal(items,options){
  let total = 0;

  for(let t of items) {
    total += t.price * t.quan;
  }

  total = total - total * (options.dis || 0)
  total = total * 1.5;
  total = total + (options.ship || 5);

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
console.log(calculateTotal(testItems, { ship: 0 }))
console.log(calculateTotal(testItems, { dis: .75 }))
console.log(calculateTotal(testItems, { ship: 12 }))