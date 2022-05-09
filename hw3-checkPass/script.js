
var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
var english = /^[A-Za-z0-9]*$/;

function checkUser() {
    let password = document.getElementById("Pass");
    let name = document.getElementById("UserName");

    //check if the password length is 8 or bigger
    if (password.value.length >= 8) {
        //check if there is atlest on capital letter 
        if (checkCap(password.value, password.value.length) == true) {
            if (checkLow(password.value, password.value.length) == true) {
                if(checkSpecialChar(password.value, password.value.length) == true)
                {
                    if(threeNums(password.value, password.value.length) == true)
                    {
                        if(checkEnglish(password.value, password.value.length) == true)
                        {
                            console.log("123");
                    }else console.log("it must english characters .");
                }else console.log("it must contain atleast 3 numbers in row .");
                }else console.log("it must contain special character atleast one.");
            }else console.log("it must contain lower letter atleast one.");

        } else console.log("it must contain capital letter atleast one.");
    } else console.log("it must be minimum 8 letters");

}


function checkCap(str, size) {
    if ((size - 1) == -1) return false;
    if (str[size - 1] >= "0" && str[size - 1] <= "9") return checkCap(str, size - 1);
    else if (str[size - 1].toUpperCase() == str[size - 1] && str[size-1].match(/[A-Z]/i)) return true;
    else return checkCap(str, size - 1);

}

function checkLow(str, size) {
    if ((size - 1) == -1) return false;
    if (str[size - 1] >= "0" && str[size - 1] <= "9") return checkLow(str, size - 1);
    else if (str[size - 1].toLowerCase() == str[size - 1] && str[size-1].match(/[a-z]/i)) return true;
    else return checkLow(str, size - 1);

}
function checkSpecialChar(str,size){
    if ((size - 1) == -1) return false;
    if(str.match(format)) return true;
    else return checkSpecialChar(str,size-1);
    
}
function threeNums(str,size){
    if ((size -3) == -1) return false;
    if (str[size - 1] >= "0" && str[size - 1] <= "9" && str[size - 2] >= "0" && str[size - 2] <= "9" && str[size - 3] >= "0" && str[size - 3] <= "9") return true;
    else return threeNums(str,size-1);
    
}
function checkEnglish(str,size){
    if ((size - 1) == -1) return false;
    //console.log(str[size-1].match(english));
    if(str[size-1].match(english) ) return true;
    
    else return checkEnglish(str,size-1);
    
}
var temp="aaaa"
console.log(checkSpecialChar("Aa132!",8));
