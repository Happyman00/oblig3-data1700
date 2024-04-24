package oslomet.webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TicketRepository {

    @Autowired
    private JdbcTemplate db;

    public void addTicket(Ticket ticket)
    {
        String sql = "INSERT INTO Tickets (movie,amount,fName,lName,telephone,email) VALUES(?,?,?,?,?,?)";
        db.update(sql,ticket.getMovie(),ticket.getAmount(),ticket.getfName(),ticket.getlName(),ticket.getTelephone(),ticket.getEmail());
    }

    public List<Ticket> getTickets()
    {
        String sql = "SELECT * FROM Tickets ORDER BY lname";
        return db.query(sql, new BeanPropertyRowMapper(Ticket.class));
    }

    public void deleteAll()
    {
        String sql = "DELETE FROM Tickets";
        db.update(sql);
    }
}
