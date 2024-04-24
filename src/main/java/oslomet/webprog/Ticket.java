package oslomet.webprog;

public class Ticket {
    private String movie;
    private int amount;
    private String fName;
    private String lName;
    private String telephone;
    private String email;

    public Ticket(String movie, int amount, String fName, String lName, String telephone, String email) {
        this.movie = movie;
        this.amount = amount;
        this.fName = fName;
        this.lName = lName;
        this.telephone = telephone;
        this.email = email;
    }

    public Ticket(){}

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
