function tinh_tong() {
    let first_number = parseInt(document.getElementById("first_number").value)
    let second_number = parseInt(document.getElementById("second_number").value)
    let res = first_number + second_number;

    // show result in 3 ways
    console.log(res);
    alert(res);
    document.write(res.toString());
}
