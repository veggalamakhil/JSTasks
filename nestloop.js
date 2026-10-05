```javascript
function squarePattern() {

    var pattern = "";

    for (var row = 1; row <= 5; row++) {

        for (var column = 1; column <= 5; column++) {
            pattern += "* ";
        }

        pattern += "\n";
    }

    document.getElementById("result1").innerText = pattern;
}


function rightTriangle() {

    var pattern = "";

    for (var row = 1; row <= 5; row++) {

        for (var column = 1; column <= row; column++) {
            pattern += "* ";
        }

        pattern += "\n";
    }

    document.getElementById("result2").innerText = pattern;
}


function invertedTriangle() {

    var pattern = "";

    for (var row = 5; row >= 1; row--) {

        for (var column = 1; column <= row; column++) {
            pattern += "* ";
        }

        pattern += "\n";
    }

    document.getElementById("result3").innerText = pattern;
}


function pyramidPattern() {

    var pattern = "";

    for (var row = 1; row <= 5; row++) {

        for (var space = 1; space <= 5 - row; space++) {
            pattern += " ";
        }

        for (var column = 1; column <= row; column++) {
            pattern += "* ";
        }

        pattern += "\n";
    }

    document.getElementById("result4").innerText = pattern;
}


function numberPyramid() {

    var pattern = "";

    for (var row = 1; row <= 5; row++) {

        for (var column = 1; column <= row; column++) {
            pattern += column + " ";
        }

        pattern += "\n";
    }

    document.getElementById("result5").innerText = pattern;
}


function diamondPattern() {

    var pattern = "";

    for (var row = 1; row <= 5; row++) {

        for (var space = 1; space <= 5 - row; space++) {
            pattern += " ";
        }

        for (var column = 1; column <= (2 * row - 1); column++) {
            pattern += "*";
        }

        pattern += "\n";
    }


    for (var row = 4; row >= 1; row--) {

        for (var space = 1; space <= 5 - row; space++) {
            pattern += " ";
        }

        for (var column = 1; column <= (2 * row - 1); column++) {
            pattern += "*";
        }

        pattern += "\n";
    }

    document.getElementById("result6").innerText = pattern;
}


function floydTriangle() {

    var pattern = "";
    var number = 1;

    for (var row = 1; row <= 5; row++) {

        for (var column = 1; column <= row; column++) {

            pattern += number + " ";
            number++;
        }

        pattern += "\n";
    }

    document.getElementById("result7").innerText = pattern;
}


function pascalTriangle() {

    var pattern = "";

    for (var row = 0; row < 5; row++) {

        var value = 1;

        for (var space = 0; space < 5 - row; space++) {
            pattern += " ";
        }

        for (var column = 0; column <= row; column++) {

            pattern += value + " ";

            value = value * (row - column) / (column + 1);
        }

        pattern += "\n";
    }

    document.getElementById("result8").innerText = pattern;
}
```