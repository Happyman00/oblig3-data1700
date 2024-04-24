package oslomet.webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MainController {

    @Autowired
    TicketRepository repo;

    @GetMapping("/tickets")
    public List<Ticket> getTickets()
    {
        return repo.getTickets();
    }

    @PostMapping("/register")
    public void addTicket(Ticket ticket)
    {
        repo.addTicket(ticket);
    }

    @DeleteMapping("/deleteAll")
    public void deleteAll()
    {
        repo.deleteAll();
    }
}
