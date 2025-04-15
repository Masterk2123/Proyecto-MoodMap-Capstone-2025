package com.springboot.springboot_chatgpt.controller;

import com.springboot.springboot_chatgpt.dto.request.login.LoginRequest;
import com.springboot.springboot_chatgpt.dto.response.auth.AuthResponse;
import com.springboot.springboot_chatgpt.entity.User;
import com.springboot.springboot_chatgpt.repository.UserRepository;
import com.springboot.springboot_chatgpt.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class AuthController {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final JwtUtil jwtUtil;

    @Autowired
    public AuthController(UserRepository userRepository,
                          BCryptPasswordEncoder bCryptPasswordEncoder,
                          JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        User user = userRepository.findByUsername(request.getUsername());

        if (user == null || !bCryptPasswordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new BadCredentialsException("Usuario o contraseña incorrecta");
        }

        String token = jwtUtil.generateToken(user);
        return ResponseEntity.ok(new AuthResponse(token));
    }
}
