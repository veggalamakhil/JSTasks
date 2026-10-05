function displayFullName() {

    let fname = document.getElementById("firstName").value;
    let mname = document.getElementById("middleName").value;
    let lname = document.getElementById("lastName").value;

    let full_name = fname + " " + mname + " " + lname;

    document.getElementById("fullNameResult").value = full_name;
}

function addValues() {

    let a = document.getElementById("valueA").value;
    let b = document.getElementById("valueB").value;

    console.log(a + b);

    document.getElementById("additionResult").value = a + b;
}
//b is converted into string

function calculateOperations() {

    let a = document.getElementById("arithmeticA").value;
    let b = document.getElementById("arithmeticB").value;

    document.getElementById("subtractionResult").value = a - b;

    document.getElementById("multiplicationResult").value = a * b;

    document.getElementById("divisionResult").value = a / b;
}
//a is converted into a number
function checkDataType() {

    let n = document.getElementById("dataValue").value;

    document.getElementById("originalType").value = typeof n;

    let n2 = parseInt(n);

    document.getElementById("convertedType").value = typeof n2;
}
function convertNumberType() {

    let n = document.getElementById("convertNumber").value;

    document.getElementById("parseIntResult").value = parseInt(n);

    document.getElementById("parseFloatResult").value = parseFloat(n);

    document.getElementById("numberResult").value = Number(n);
}
function convertValue() {

    let n = document.getElementById("valueConvert").value;

    document.getElementById("numberResult2").value = Number(n);

    document.getElementById("parseIntResult2").value = parseInt(n);

    document.getElementById("parseFloatResult2").value = parseFloat(n);
}