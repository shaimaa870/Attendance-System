var forms = document.getElementsByClassName('needs-validation');
var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
        if (this.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.classList.add('was-validated');
    }, false);
});
//---------------------------------------------------------------------

var arrOfRequests = [];
var ajaxreq = function() { // data from empolyee(username and password) file

    $.ajax({
        url: './Requests.json',
        type: "get",
        success: function(res) {
            arrOfRequests = res;
        },
        error: function(ErrorMessage) {
            console.log(ErrorMessage);
        }
    })
    return arrOfRequests;
}
ajaxreq();

var reqOb = {};
$('#regist').on('click', function() {

    alert("thank you for registeration and we will inform you details");
    pushing();

});

function pushing() {


    reqOb["firstName"] = $('#fname').val();
    reqOb["lastName"] = $('#sname').val();
    reqOb["address"] = $('#add').val();
    reqOb["email"] = $('#email').val();
    reqOb["age"] = $('#age').val();
    reqOb["userName"] = $('#username').val();
    reqOb["password"] = $('#password').val();
    arrOfRequests.push(reqOb);
    saveData();
}

function saveData() {
    var _StoreData = new Blob([JSON.stringify(arrOfRequests)], { type: "appliction/json" });
    var Linkelement = document.createElement("a");
    Linkelement.href = window.webkitURL.createObjectURL(_StoreData);
    Linkelement.setAttribute("download", "Requests.json");
    document.body.appendChild(Linkelement);
    Linkelement.click();
    document.body.removeChild(Linkelement);

}

let arr = [];
var ajaxemp = function() { // data from empolyee(username and password) file

    $.ajax({
        url: './empdata_month.json',
        type: "get",
        success: function(res) {
            arr = res;
        },
        error: function(ErrorMessage) {
            console.log(ErrorMessage);
        }
    })
    return arr;
}
ajaxemp();
console.table(arr);


$('#logemp').on('click', function() {


    username = $('#uname').val();
    password = $('#pwd').val();
    //console.log(username===arr[0].userName );
    if (username === arr[0].userName && password === arr[0].password) { //login form ----->id logform
        $('#logform').attr('action', 'Admin.html');

    } else if (username == arr[1].userName && password == arr[1].password) {
        $('#logform').attr('action', 'subAdmin.html');

    } else

        for (var i = 2; i < arr.length; i++) {
        if (username == arr[i].userName && password == arr[i].password)
            $('#logform').attr('action', 'empolyee.html');
        localStorage.setItem('userN', username);


    }
});