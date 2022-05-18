var count = 0;
var sum = 0;

let stuName = document.getElementById("sName");
let stuGrade = document.getElementById("Grade");
function addStudent() {

    if (stuGrade.value != "") {
        if (stuGrade.value > -1 && stuGrade.value < 101) {
            if (stuName.value != "") {
                var today = new Date();
                var newTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                let table = document.getElementById("table");
                let newStudent = document.createElement("tr");
                let number = document.createElement("td");
                count++;
                sum = sum + parseInt(stuGrade.value);
                number.innerHTML = count;
                let name = document.createElement("td");
                name.innerHTML = stuName.value;
                let grade = document.createElement("td");
                grade.innerHTML = stuGrade.value;
                let time = document.createElement("td");
                time.innerHTML = newTime;
                let img = document.createElement("td");
                let newIMG = document.createElement("img");
                newIMG.src = "https://www.mcicon.com/wp-content/uploads/2020/12/Education_Student_1-copy.jpg";
                img.appendChild(newIMG);
                newStudent.appendChild(number);
                newStudent.appendChild(name);
                newStudent.appendChild(grade);
                newStudent.appendChild(time);
                newStudent.appendChild(img);
                table.appendChild(newStudent);
                stuName.value = "";
                stuGrade.value = "";
                stuName.style.borderBlockColor = "Black";
                stuGrade.style.borderBlockColor = "Black";
            } else errorMSG(1, "missing name!!");

        } else errorMSG(2, " must be a valid grade between 0 to 100");

    } else errorMSG(2, " missing grade");

}

function errorMSG(errnum, msg) {
    errnum == 1 ? stuName.style.borderBlockColor = "Red" : stuGrade.style.borderBlockColor = "Red";
    stuName.value = "";
    stuGrade.value = "";
    alert(msg);
}
function calcAvg() {
    let average = document.getElementById("avg");
    let x = (sum / count);
    average.innerHTML = x;

}
function showSum() {
    let showsum = document.getElementById("sum");
    showsum.innerHTML = sum;
}
