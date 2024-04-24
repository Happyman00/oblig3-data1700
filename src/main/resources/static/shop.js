//Prevents the form from refreshing the page, while also clearing it out, when a submission attempt is made
$(function (){
    $("#billettForm").submit(function (e){
        e.preventDefault();
        document.getElementById("billettForm").reset();
    })
})

let ticketArray = [];
//Adds the ticket sale to the Array and updates the displayed list
function addTickets(){
    let form = document.getElementById("billettForm");
    let ticket = {
        "movie":form.elements[0].value,
        "amount":form.elements[1].value,
        "fname":form.elements[2].value,
        "lname":form.elements[3].value,
        "telefon":form.elements[4].value,
        "email":form.elements[5].value
    }
    ticketArray.push(ticket);
    updateList();
}

function removeAllTickets()
{
    ticketArray = [];
    updateList();
}

function updateList(){
    document.getElementById("tickets").innerHTML="";
    for (let i = 0; i < ticketArray.length; i++) {
        let listItem = document.createElement("li");
        let ticket = ticketArray[i];
        let ticketDetails = document.createElement("p");
        ticketDetails.innerHTML="<b>Film:</b>"+ticket.movie+" - <b>Antall:</b>"+ticket.amount+" - <b>Navn:</b>"+ticket.fname+" "+ticket.lname+" - <b>Telefon-nummer:</b>"+ticket.telefon+" - <b>Epost:</b>"+ticket.email;
        listItem.appendChild(ticketDetails);
        document.getElementById("tickets").appendChild(listItem);
    }
}

