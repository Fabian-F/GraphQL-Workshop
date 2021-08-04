package forster.fabian.REST.azubi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Azubi {
    private @Id @GeneratedValue long id;
    private String name, lastname, betreuer_id;

    public Azubi() {}

    public Azubi(String name, String lastname, String betreuer_id) {
        this.name = name;
        this.lastname = lastname;
        this.betreuer_id = betreuer_id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getBetreuer_id() {
        return betreuer_id;
    }

    public void setBetreuer_id(String betreuer_id) {
        this.betreuer_id = betreuer_id;
    }

    public boolean equals(Object object) {
        if (this == object) return true;
        if (object == null || getClass() != object.getClass()) return false;
        if (!super.equals(object)) return false;
        Azubi azubi = (Azubi) object;
        return id == azubi.id &&
                java.util.Objects.equals(name, azubi.name) &&
                java.util.Objects.equals(lastname, azubi.lastname) &&
                java.util.Objects.equals(betreuer_id, azubi.betreuer_id);
    }

    public int hashCode() {
        return Objects.hash(super.hashCode(), id, name, lastname, betreuer_id);
    }

    @java.lang.Override
    public java.lang.String toString() {
        return "Azubi{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastname='" + lastname + '\'' +
                ", betreuer_id='" + betreuer_id + '\'' +
                '}';
    }
}
