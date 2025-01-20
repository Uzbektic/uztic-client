import axios from 'axios';
import { ChatMessage } from '../types/chat';

export const getChatGptResponse = async (messages: ChatMessage[]) => {
  try {
    const response = await axios.post(
      `https://api.openai.com/v1/chat/completions`,
      {
        model: 'gpt-3.5-turbo',
        messages: messages,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_CHATGPT_KEY}`,
        },
      }
    );

    return response.data.choices;
  } catch (error) {
    console.log('error', error);
    return '';
  }
};
