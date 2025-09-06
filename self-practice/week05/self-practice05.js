const getProductSummary = (products) => {
    const filterElectronics = products.filter(product => product.category === 'Electronics');
    const totalElectronics = filterElectronics.reduce((sum, product) => sum + product.price, 0);
    const filterApparel = products.filter(product => product.category === 'Apparel').map(product => product.name);
    const averageElectronics = totalElectronics / filterElectronics.length;
    const sortProduct = [...products].sort((a, b) => a.price - b.price);
    return totalElectronics, filterApparel, averageElectronics, sortProduct
}

const products = [
  { id: 101, name: 'Laptop', price: 25000, category: 'Electronics' },
  { id: 102, name: 'Mouse', price: 800, category: 'Electronics' },
  { id: 103, name: 'T-shirt', price: 350, category: 'Apparel' },
  { id: 104, name: 'Headphones', price: 1500, category: 'Electronics' },
  { id: 105, name: 'Jeans', price: 1200, category: 'Apparel' },
  { id: 106, name: 'Keyboard', price: 1800, category: 'Electronics' },
];

console.log(getProductSummary(products));

function removeFalsyValues(arr) {
    return arr.filter(value => Boolean(value));
}

console.log(removeFalsyValues([0, 1, false, 2, '', 3]));
console.log(removeFalsyValues(['a', '', 'b', null, 'c']));
console.log(removeFalsyValues([null, undefined, 'A']));

function doubleAndFilterEvenNumbers(arr) {
    return arr.filter(even => even % 2 === 0).map(even => even * 2);
}

console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4]));
console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8]));