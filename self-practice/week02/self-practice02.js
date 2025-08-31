//Shallow Equality
let book1 = {
    isbn: 123456789,
    title: "JS",
}

let book2 = {
    isbn: 123456789,
    title: "JS",
}

function shallowEquality(object1, object2) {
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)

    if (keys1.length !== keys2.length) {
        return false
    }
    for (let key of keys1) {
        if(object1[key] !== object2[key]) {
            return false
        }
    }
return true;
}
console.log(shallowEquality(book1, book2))

//1. กำหนดให้ object 'student' มี property 'name', 'score', และ 'pass'
//เขียน function ที่ชื่อว่า 'checkPass' ที่รับ object student เข้ามาเป็น argument
//และใช้ if-else เพื่อตรวจสอบว่า ถ้า 'score' มากกว่าหรือเท่ากับ 50 ให้เปลี่ยนค่า 'pass' เป็น true
//ถ้าไม่ ให้เปลี่ยนเป็น false

const student1 = {
    name: "Alice",
    score: 65,
    pass: false
};

const student2 = {
    name: "Bob",
    score: 40,
    pass: false
};

function checkPass(studentObj) {
    if(studentObj.score >= 50) {
        studentObj.pass = true;
    } else {
        studentObj.pass = false;
    }
}

checkPass(student1);
console.log(`Student 1: ${student1.name}, Score: ${student1.score}, Passed: ${student1.pass}`); //Student 1: Alice, Score: 65, Passed: true
checkPass(student2);
console.log(`Student 2: ${student2.name}, Score: ${student2.score}, Passed: ${student2.pass}`); //Student 2: Bob, Score: 40, Passed: false

//2. กำหนดให้ object 'data' มี property ที่เก็บค่าประเภทต่าง ๆ
//เขียน function ที่ชื่อว่า 'countStringsAndNumbers' ที่รับ object data เข้ามา
//และใช้ for-in loop เพื่อนับจำนวน property ที่มีค่าเป็น 'string' และ 'number'
//โดยให้คืนค่าเป็น object ใหม่ที่มี property 'strings' และ 'numbers'

const data = {
    name: "John",
    age: 30,
    isStudent: false,
    city: "New York",
    id: 123
};

function countStringsAndNumbers(dataObj) {
    const counts = {
        string: 0,
        number: 0
    };

    for(let key in dataObj) {
        if (typeof dataObj[key] === 'string') {
            counts.string++;
        } else if (typeof dataObj[key] === 'number') {
            counts.number++;
        }

    }
    return counts;
}

const result = countStringsAndNumbers(data);
console.log(result); //{ strings: 2, numbers: 2 }

//3. กำหนดให้ array 'products' ซึ่งแต่ละ element เป็น object ที่มี property 'name' และ 'price'
//เขียน function ที่ชื่อว่า 'findAffordableProduct' ที่รับ array products และ number maxPrice เข้ามา
//และใช้ for loop เพื่อวนซ้ำใน array
//ให้แสดงชื่อสินค้าที่ราคา ('price') น้อยกว่าหรือเท่ากับ 'maxPrice' เท่านั้น
//ถ้าไม่มีสินค้าที่ตรงตามเงื่อนไข ให้แสดงข้อความว่า "ไม่พบสินค้าที่ราคาไม่เกิน ... บาท"

const products = [{
    name: "Laptop",
    price: 25000
  },
  {
    name: "Mouse",
    price: 800
  },
  {
    name: "Keyboard",
    price: 2500
  },
  {
    name: "Monitor",
    price: 7500
  },
  {
    name: "Webcam",
    price: 1200
  },
];

function findAffordableProduct(productsArr, maxPrice) {
    let found = false;
    for (let key of productsArr) {
        if (key.price <= maxPrice) {
            console.log(key.name);
            found = true;
        } else {
            console.log(`ไม่พบสินค้าที่ราคาไม่เกิน + ${maxPrice} + บาท`)
        }
    }
}

console.log("----------------------");
console.log("สินค้าไม่เกิน 3000 บาท:");
findAffordableProduct(products, 3000); //Mouse, Keyboard, Webcam

console.log("----------------------");
console.log("สินค้าไม่เกิน 500 บาท:");
findAffordableProduct(products, 500); //ไม่พบสินค้าที่ราคาไม่เกิน 500 บาท


// โจทย์ข้อ 1:
// กำหนดให้ array 'users' ซึ่งแต่ละ element เป็น object ที่มี property 'name' และ 'age'
// เขียน function ที่ชื่อว่า 'findOldestUser' ที่รับ array users เข้ามาเป็น argument
// และใช้ loop เพื่อหาชื่อของผู้ใช้ที่มีอายุมากที่สุด
// โดยให้คืนค่าเป็น string ที่มีชื่อของผู้ใช้คนนั้น

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 35 }
];

function findOldestUser(usersArr) {
    let maxAge = usersArr[0].age;
    let oldestName = usersArr[0].name;

    for(let user of usersArr) {
        if (user.age > maxAge) {
            maxAge = user.age;
            oldestName = user.name;
        }
    }
    return oldestName;
}

const oldest = findOldestUser(users);
console.log(`ผู้ที่มีอายุมากที่สุดคือ: ${oldest}`); // Expected: ผู้ที่มีอายุมากที่สุดคือ: David