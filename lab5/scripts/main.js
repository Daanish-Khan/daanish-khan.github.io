function validatePhone(id) {
    var num = document.getElementById(id).value;
    var filter = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/ //regex obtained from https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript

    if (filter.test(num))
        return true;
    else
        return false;

}

function validateCard(id) {
    var cardNum = document.getElementById(id).value;
    var filter = /^([0-9]{4}\s){3}[0-9]{4}$/
    
    if (filter.test(cardNum))
        return true;
    else
        return false;
}

function validateEmail(id) {
    var email = document.getElementById(id).value;
    // regex obtained from https://emailregex.com/
    var filter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if (filter.test(email))
        return true;
    else
        return false;
}


var unavailableDates = ["06/29/2021","07/07/2021","07/10/2021"];
const setDateFormat = "mm/dd/yy";

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

const currentDate = mm + '/' + dd + '/' + yyyy;

function disableDates(date) {

    var vet = $('#vet-select').val();

    console.log(vet);

    if (vet == 1) {
        if (date.getDay() == 0)
            return [false];
    } else if (vet == 2) {
        if (date.getDay() == 3)
            return [false];
    } else if (vet == 3) {
        if (date.getDay() == 5)
            return [false];
    } else if (vet == null)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]

}

$(document).ready(function(){

    $("#inputEmail").on("change", function(){
        if (!validateEmail("inputEmail")){
            alert("Wrong format for Email!");
            $("#inputEmail").val("");
            $("#inputEmail").addClass("error");
        }
        else {
            $("#inputEmail").removeClass("error");
        }
    });

    $("#inputCredit").on("change", function(){
        if (!validateCard("inputCredit")){
            alert("Wrong format for credit card!");
            $("#inputCredit").val("");
            $("#inputCredit").addClass("error");
        }
        else {
            $("#inputCredit").removeClass("error");
        }
    });

    $("#inputNum").on("change", function(){
        if (!validatePhone("inputNum")){
            alert("Wrong format for phone number!");
            $("#inputNum").val("");
            $("#inputNum").addClass("error");
        }
        else {
            $("#inputNum").removeClass("error");
        }
    });

    $("#inputDate").datepicker(
        {
            dateFormat: setDateFormat,
            minDate: currentDate,
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

    $("#inputEmail").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#inputNum").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    $("#inputCredit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

});

$(document).scroll(function () {

    var $nav = $(".sticky-top");

    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

});