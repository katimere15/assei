// 계산해주는 js 파일임.

// 자바스크립트에서 더하기 함수
function frontAddNumbers() {
    console.log("frontAddNumbers 호출됨!");
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    document.getElementById("result").innerText = Number(num1) + Number(num2);
}

// 자바스크립트에서 빼기 함수
function frontSubtractNumbers() {
    console.log("frontSubtractNumbers 호출됨!");
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    
    document.getElementById("result").innerText = Number(num1) - Number(num2);
}



// 자바에서 더하기 함수
function backAddNumbers() {
    console.log("backAddNumbers 호출됨!");

    $.ajax({
        url: 'http://localhost:8080/assei/add',
        method: 'get',
        data: {
            num1: document.getElementById("num1").value,
            num2: document.getElementById("num2").value
        },
        success: function (data) {
            $("#result").html(data);
        },
        error: function () {
            alert("에러발생");
        }
});

}

// 자바에서 빼기 함수
function backSubtractNumbers() {
    console.log("backSubtractNumbers 호출됨!");

    $.ajax({
        url: 'http://localhost:8080/assei/subtract',
        method: 'get',
        data: {
            num1: document.getElementById("num1").value,
            num2: document.getElementById("num2").value
        },
        success: function (data) {
            $("#result").html(data);
        },
        error: function () {
            alert("에러발생");
        }
    });

}