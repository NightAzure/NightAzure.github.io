var difmsg = document.getElementById("differencemsg");
var calcbutton = document.getElementById("calcbutton")

calcbutton.addEventListener('click',()=>{
    var startdate = new Date(document.getElementById("startdate").value).getTime();
    var enddate = new Date(document.getElementById("enddate").value).getTime();
    let dateDifference = enddate - startdate;
    let dayDifference = dateDifference / (1000 * 60 * 60 * 24);
    if(dayDifference <0 || isNaN(enddate) || isNaN(startdate)) {
        alert("Select Valid Date!");
    }
    else {
        difmsg.innerHTML = `The difference is ${dayDifference} days.`
    }
});