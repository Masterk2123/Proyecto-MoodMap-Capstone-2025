package com.springboot.springboot_chatgpt.dto.request.chatAi;

import java.util.List;

public record ChatGPTRequest(
        String model,
        List<Message> messages
) {
    public record Message(
            String role,
            String content
    ) {}
}
