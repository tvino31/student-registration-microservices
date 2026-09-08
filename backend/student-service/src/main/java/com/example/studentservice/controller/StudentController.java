package com.example.studentservice.controller;

import com.example.studentservice.model.Student;
import com.example.studentservice.repository.StudentRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    private final StudentRepository repo;

    public StudentController(StudentRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Student> all() { return repo.findAll(); }

    @PostMapping
    public ResponseEntity<Student> create(@RequestBody Student s) {
        Student saved = repo.save(s);
        return ResponseEntity.created(URI.create("/api/students/" + saved.getId())).body(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> get(@PathVariable Long id) {
        return repo.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
}
