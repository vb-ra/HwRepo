var grades = [100, 45, 89, -1, 80];
var gradesSum = 0;
var counter = 0;
var exceptionalStudentFound = false;
for (var key in grades) {
    if (grades[key] == 1000) {
        console.log("Exceptional student! Average is 100!");
        exceptionalStudentFound = true;
    }
    else if (grades[key] >= 0) {
        gradesSum += grades[key];
        counter++;
    }
}
if (exceptionalStudentFound == false) {
    var Avg = gradesSum / counter;
    console.log("Average Score: ".concat(Avg));
}
