package com.springboot.springboot_chatgpt.dto.request.chatAi;

import java.util.List;

public record ChatGPTResponse(List<Choice> choices) {

    public static record Choice(Message message){

        public static record Message(String role, String content){

        }
    }
}
