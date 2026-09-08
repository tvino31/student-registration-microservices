package com.example.registrationservice.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Map;

@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {

    @PostMapping
    public ResponseEntity<Map<String, Object>> register(@RequestBody Map<String, Object> payload) {
        // In a real setup we'd persist. For this scaffold just echo back with an id
        payload.put("registrationId", System.currentTimeMillis());
        return ResponseEntity.created(URI.create("/api/registrations/" + payload.get("registrationId"))).body(payload);
    }
}
