// TODO para MATI (O EL QUE QUIERA CONECTAR UNA API DE IA)

export const sendMessageToAI = async (message: string): Promise<string> => {
    try {
      const response = await fetch('https://api.tuservidor.com/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // otros headers si hay auth
        },
        body: JSON.stringify({ message }),
      });
  
      const data = await response.json();
      return data.reply; // <- el texto que responde el bot
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      return 'Lo siento, ocurrió un error.';
    }
  };
  