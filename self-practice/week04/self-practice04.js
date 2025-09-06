// addNumbers: รับอาร์เรย์ของตัวเลขแล้วคืนค่าผลรวม
const addNumbers = (number) => {
    let total = 0
    for(i of number){
        total += i;
    }
    return total
}

const Numbers = [1,2,3,4,5];
console.log(addNumbers(Numbers));

// doubleValues: รับอาร์เรย์ของตัวเลขแล้วคืนค่าอาร์เรย์ใหม่ที่มีค่าเป็นสองเท่าของแต่ละตัว
const multiply = (number) => {
    let total = number.map(doubleValues => doubleValues * 2);
    return total;
}

const doubleValue = [1,2,3,4,5];
console.log(multiply(doubleValue));

// calculateFinalScore: รับอาร์เรย์ของ students แล้วคืนค่าเป็นค่าเฉลี่ย ที่หารด้วยคะแนนทั้งหมดของเด็กนักเรียนในคลาส science และจำนวนของเด็กนักเรียนในคลาส science
const students = [
  { name: 'Alice', class: 'Science', score: 85 },
  { name: 'Bob', class: 'Art', score: 70 },
  { name: 'Charlie', class: 'Science', score: 90 },
  { name: 'David', class: 'Math', score: 65 }
];

const calculateFinalScore = (students) => {
    const scienceStudents = students.filter(student => student.class === 'Science');
    
    const totalScore = scienceStudents.reduce((sum, student) => sum + student.score, 0);

    return totalScore / scienceStudents.length;
};

console.log(calculateFinalScore(students));