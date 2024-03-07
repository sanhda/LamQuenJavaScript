let a = parseInt(prompt("Input first number: "));
let b = parseInt(prompt("Input second number"));

show_result("Tong: ", a+b)
show_result("Tich: ", a*b)
show_result("Hieu: ", a-b)
show_result("Thuong: ", a/b)
function show_result(message, result) {
    let result_string = message + result.toString()
    console.log(result_string);
    alert(result_string);
    document.write(result_string);
    document.write('<br>');
}