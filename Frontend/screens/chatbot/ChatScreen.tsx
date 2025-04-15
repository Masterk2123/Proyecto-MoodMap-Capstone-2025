//C:\Users\fabio\OneDrive\Escritorio\Proyecto-APT\Frontend\screens\chatbot\ChatScreen.tsx

import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Platform, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { styles as headerStyles } from '../../styles/header.styles';
import { styles as chatStyles } from '../../styles/chat.styles';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '@/styles/login.styles';

{/* FUNCIONES DE CHAT*/}

export default function NeoChat() {
  const scrollViewRef = useRef<ScrollView>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(true);

  const fecha = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

{/*weaas del bot*/ }

  // Mensaje inicial (bot)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hola, ¿en qué puedo ayudarte?', time: fecha(new Date()) },
  ]);

{/* weaas del usuario */}

  // Almacenar el mensaje del usuario
  const [userMessage, setUserMessage] = useState('');

  const manejoInput = (text: string) => {
    setUserMessage(text);
  };  

  // Enviar el mensaje del usuario
  const enviar = async () => {
    if (userMessage.trim() === '') return; // No enviar mensajes vacíos

    // Agregar el mensaje del usuario a la lista de mensajes
    console.log("Enviando a backend:", userMessage);

    try {
      //IMPORTANTE: colocar ip local del computador
      const response = await fetch('http://192.168.0.7:8080/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userMessage}),
      });

      const data = await response.text();
        console.log("respuesta backend", data);
        } 
      catch (error) {
        // Manejo de errores
        console.error("Error al conectar con backend", error);
      }

      setUserMessage(''); // Limpiar el campo de entrada
    }

  // Manejo del scroll para auto-scroll
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    setIsAutoScroll(isAtBottom);
  };

  return (
    <View style={chatStyles.ChatScreen} accessibilityLabel='Chat-Screen'>
      <View style={{ flex: 1 }} accessibilityLabel='Chat-Area'>
        <View style={chatStyles.ChatArea} accessibilityLabel='Chat-Area'>
          <View style={chatStyles.Header} accessibilityLabel='Header'>
            <View style={headerStyles.header}>
              <Text style={headerStyles.icon}>⚙️</Text>
              <Text style={headerStyles.icon}>Buenos dias Mandy👤</Text>
              <Text style={headerStyles.avatar}>😆</Text>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <ScrollView
              ref={scrollViewRef}
              onContentSizeChange={() => {
                if (isAutoScroll) {
                  scrollViewRef.current?.scrollToEnd({ animated: true });
                }
              }}
              onScroll={handleScroll}
              scrollEventThrottle={16}
              style={{ flex: 1, height: '100%', overflow: 'scroll' }}
              accessibilityLabel='Scrollable'
              contentContainerStyle={{ paddingBottom: 24 }}
              showsVerticalScrollIndicator={true}
              keyboardShouldPersistTaps="handled"
            >
              {messages.map((msg, index) => (
                <View key={index} style={{
                  alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: msg.from === 'user' ? '#d58b69' : '#fff',
                  borderRadius: 20,
                  margin: 8,
                  padding: 10,
                  maxWidth: '80%',
                }}>
                  <Text style={{ color: msg.from === 'user' ? '#fff' : '#000' }}>{msg.text}</Text>
                  <Text style={{ fontSize: 10, textAlign: 'right', color: '#666' }}>{msg.time}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

          <View style={chatStyles.InputContainer} accessibilityLabel='Input-container'>
            <View style={chatStyles.InputArea} accessibilityLabel='Input-Area'>
              <View style={chatStyles.InputField} accessibilityLabel='Input-Field'>
                <TextInput
                  style={chatStyles.InputText} accessibilityLabel='Input-Text'
                  placeholder="Type your message here..."
                  multiline
                  value={userMessage}
                  onChangeText={manejoInput}
                  onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === 'Enter') {
                      enviar();
                    }
                  }}
                  blurOnSubmit={false}
                />
                <TouchableOpacity style={chatStyles.SendButton} accessibilityLabel='Send-Button'>
                  <FontAwesome name="paper-plane" size={24} color="black" onPress={enviar} />
                </TouchableOpacity>
              </View>
              <Text style={chatStyles.Disclamer} accessibilityLabel='Disclaimer'>
                MoodMap puede equivocarse. solicita ayuda psicologica real.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
