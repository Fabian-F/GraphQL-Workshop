package forster.fabian.REST.azubi;

import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class AzubiController {
    private final AzubiRepository repository;

    AzubiController(AzubiRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/azubis")
    List<Azubi> all() {
        return repository.findAll();
    }

    @PostMapping("/azubis")
    Azubi addAzubi(@RequestBody Azubi azubi) {
        return repository.save(azubi);
    }

    @GetMapping("/azubis/{id}")
    Azubi getOne(@PathVariable long id) {
        return repository.findById(id).orElseThrow(() -> new RuntimeException("Error: Azubi not found"));
    }

    @PutMapping("/azubis/{id}")
    Azubi updateAzubi(@RequestBody Azubi newAzubi, @PathVariable long id) {
        return repository.findById(id).map(azubi -> {
            azubi.setName(newAzubi.getName());
            azubi.setLastname(newAzubi.getLastname());
            azubi.setBetreuer_id(newAzubi.getBetreuer_id());
            return repository.save(azubi);
        }).orElseGet(() -> {
            newAzubi.setId(id);
            return repository.save(newAzubi);
        });
    }

    @DeleteMapping("/employees/{id}")
    void deleteAzubi(@PathVariable long id) {
        repository.deleteById(id);
    }
}