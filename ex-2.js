/*ห้ Declare ตัว Function ชื่อ get5CharWords ทำหน้าที่ในการกรอง Value แต่ละอันใน Array ที่มีความยาวตัวอักษร 5 ตัวขึ้นไป
Function get5CharWords มี Parameter 1 อัน คือ Array ของข้อความ ชื่อว่า words
Function อันนี้จะ Return ตัว Array ของ Value ที่มีความยาวตัวอักษร 5 ตัวขึ้นไป
จากนั้นให้ลอง Execute ตัว Function get5CharWords เพื่อทดสอบผลลัพธ์
กำหนดให้ใช้ Built-in Array Function (Array.filter) ในการแก้โจทย์ข้อนี้*/
let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  const filterWords = words.filter((word) => word.length >= 5);
  return filterWords;
}

const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
