let grades = [100, 45, 89, -1, 80];
let gradesSum: number = 0;
let counter: number = 0;
let exceptionalStudentFound: boolean = false;

for (let key in grades){
    if (grades[key] == 1000){
        console.log(`Exceptional student! Average is 100!`);
        exceptionalStudentFound = true;
    } else if (grades[key] >= 0){
        gradesSum += grades[key];
        counter++;
    }
}
if (exceptionalStudentFound == false){
    let Avg: number = gradesSum/counter;
    console.log(`Average Score: ${Avg}`);
}