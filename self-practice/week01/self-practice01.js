//1. หาผลรวมของเลขคู่ในอาเรย์
let sumEvenNumbers = [1, 2, 3, 4, 5, 6];  // ผลลัพธ์คือ 12 (2+4+6)
let result = 0;
for (let i = 0; i < sumEvenNumbers.length; i++) {
    if (sumEvenNumbers[i] % 2 === 0) {
        result += sumEvenNumbers[i];
    }
}
console.log("1. :", result);

//2. สร้างสตริงซ้ำ
function repeatString(str, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += str;
    }
    return result;
}
console.log(repeatString("2. :", "hi", 3));

//3. แสดงเลข 10 ถึง 1 (ถอยหลัง)
for (let i = 10; i >= 1; i--) {
    console.log("3. :", i);
}

//4. แสดงเลขที่หารด้วย 3 ลงตัว ตั้งแต่ 1 ถึง 50
for (let i = 3; i <= 50; i += 3) {
    console.log("4. :", i);
}

//or
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log('if: ', i);
    }
}

//5. ตารางคูณ (แม่ 2 ถึง 12)
for (let i = 2; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("--------")
}

//6. หาผลรวมเลขคู่ตั้งแต่ 1 ถึง 100
let sum = 0
for (let i = 2; i <= 100; i += 2) {
    sum += i;
}
console.log("6. :", sum);

//7. วาดตารางคูณแม่ 5
for (i = 1; i <= 12; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

//8. หาจำนวน "apple" ที่อยู่ใน array
const fruits = ["apple", "banana", "apple", "orange", "apple", "grape"];
let count = 0;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "apple") {
        count++;
    }
}
console.log("8. :", count);

//9. หาค่ามากที่สุดใน array (โดยไม่ใช้ Math.max)
const numbers = [3, 18, 9, 21, 6];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]
    }
}
console.log("9. :", max);

//10. หาผลรวมของตัวเลขใน array ที่มากกว่า 10
const nums = [4, 11, 32, 7, 9, 15];
let total = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
        total += nums[i];
    }
}
console.log("10. :", total);


//11. ทดลองสร้างสามเหลี่ยม
let height = 5;

for (let i = 1; i <= height; i++) {
    let space = " ".repeat(height - i);
    let star = "*".repeat((i * 2) - 1);
    console.log(space + star);
}

const colors = ["red", "green", "blue"];

//for...in
for (let index in colors) {
  console.log(index, colors[index]);
}

//for...of ได้ค่า value โดยตรง
for (let color of colors) {
  console.log(color);
}