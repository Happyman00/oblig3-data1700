package oslomet.webprog;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class TicketRepository {

    private final ArrayList<Ticket> tickets = new ArrayList<>();

    public void addTicket(Ticket ticket)
    {
        tickets.add(ticket);
    }

    public ArrayList<Ticket> getTickets()
    {
        return tickets;
    }

    public void deleteAll()
    {
        tickets.clear();
    }
}
