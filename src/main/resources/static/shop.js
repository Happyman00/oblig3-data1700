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
    $.post("/register",ticket,function() {
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
        document.getElementById("tickets").innerHTML="";
        for (let ticket of ticketArray) {
            let listItem = document.createElement("li");
            let ticketDetails = document.createElement("p");
            ticketDetails.innerHTML="<b>Film:</b>"+ticket.movie+" - <b>Antall:</b>"+ticket.amount+" - <b>Navn:</b>"+ticket.fName+" "+ticket.lName+" - <b>Telefon-nummer:</b>"+ticket.telephone+" - <b>Epost:</b>"+ticket.email;
            listItem.appendChild(ticketDetails);
            document.getElementById("tickets").appendChild(listItem);
        }
    });

}