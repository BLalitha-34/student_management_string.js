let studentName = "Rahul Kumar";
let studentId = "ST101";
let course = "BCA";
let email = "rahul@gmail.com";
console.log("===== Student Management System =====");
console.log("Student ID : " + studentId);
console.log("Student Name : " + studentName);
console.log("Course : " + course);
console.log("Email : " + email);
console.log("\n===== String Operations =====");
console.log("Name in Uppercase : " + studentName.toUpperCase());
console.log("Name in Lowercase : " + studentName.toLowerCase());
console.log("Name Length : " + studentName.length);
console.log("Course Length : " + course.length);
if (course.includes("BCA")) {
    console.log("Course Status : Student is enrolled in BCA");
} else {
    console.log("Course Status : Course not found");
}
OUTPUT:
===== Student Management System =====
Student ID : ST101
Student Name : Rahul Kumar
Course : BCA
Email : rahul@gmail.com
===== String Operations =====
Name in Uppercase : RAHUL KUMAR
Name in Lowercase : rahul kumar
Name Length : 11
Course Length : 3
Course Status : Student is enrolled in BCA
