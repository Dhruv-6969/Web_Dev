let grade = prompt("Enter your grade");

if (grade >= 90 && grade <= 100) {
    console.log("Grade = A");
}
else if (grade >= 70 && grade <= 89) {
    console.log("Grade = B");
}
else if (grade >= 60 && grade <= 69) {
    console.log("Grade = C");
}
else if (grade >= 50 && grade <= 59) {
    console.log("Grade = D");
}
else if (grade >= 0 && grade <= 49) {
    console.log("Grade = F");
}
else
    console.log("Invalid Marks");