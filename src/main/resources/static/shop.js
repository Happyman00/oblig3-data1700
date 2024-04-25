//Prevents the form from refreshing the page, while also clearing it out, when a submission attempt is made
$(function (){
    $("#billettForm").submit(function (e){
        e.preventDefault();
        document.getElementById("billettForm").reset();
    });
    updateList();
});

//Adds the ticket sale to the Array and updates the displayed list
function addTickets(){
    let form = document.getElementById("billettForm");
    const ticket = {
        "movie":form.elements[0].value,
        "amount":form.elements[1].value,
        "fName":form.elements[2].value,
        "lName":form.elements[3].value,
        "telephone":form.elements[4].value,
        "email":form.elements[5].value
    }
    $.post("/ticket",ticket,function() {
        updateList();
    });
}

function removeAllTickets()
{
    $.get("/deleteAll");
    updateList();
}

function updateList(){
    $.get("/tickets", function (ticketArray)
    {
        document.getElementById("tickets").innerHTML="<tr><th>Movie</th><th>Amount</th><th>First Name</th><th>Last Name</th><th>Telephone</th><th>Email</th></tr>";
        for (let ticket of ticketArray) {
            let ticketDetails = document.createElement("tr");
            ticketDetails.innerHTML="<th>"+ticket.movie+"</th>"+"<th>"+ticket.amount+"</th>"+"<th>"+ticket.fName+"</th>"+"<th>"+ticket.lName+"</th>"+"<th>"+ticket.telephone+"</th>"+"<th>"+ticket.email+"</th>";
            document.getElementById("tickets").appendChild(ticketDetails);
        }
    });

}