package com.springboot.springboot_chatgpt.controller;

import com.springboot.springboot_chatgpt.dto.request.chatAi.PromptRequest;
import com.springboot.springboot_chatgpt.service.ChatGPTService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/chat")
public class ChatGPTController {

    private final ChatGPTService chatGPTService;

    public ChatGPTController(ChatGPTService chatGPTService){
        this.chatGPTService = chatGPTService;
    }
    @PostMapping
    public String chat (@RequestBody PromptRequest promptRequest){
        return chatGPTService.getChatResponse(promptRequest);
    }
}
