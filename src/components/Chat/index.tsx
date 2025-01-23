import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Typography,
  IconButton,
  TextField,
  Tooltip,
  Alert,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ChatMessage } from '../../types/chat';
import { CustomColors, theme } from '../../theme';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useMediaQuery } from '@mui/material';
import './chat.css';
import { getChatGptResponse } from '../../mutations';

const ChatWidget = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollToBottom = () => {
      if (messageContainerRef.current) {
        const container = messageContainerRef.current;

        if (container.scrollHeight > container.clientHeight) {
          container.scrollTop = container.scrollHeight;
        }
      }
    };

    setTimeout(scrollToBottom, 100);
  }, [messages]);

  const handleToggleChat = () => setIsOpen((prev) => !prev);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const userMessage: ChatMessage = { role: 'user', content: newMessage };
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);

      setNewMessage('');

      setIsTyping(true);

      try {
        let secret = process.env.REACT_APP_SECRET || '';
        const response = await getChatGptResponse(updatedMessages, secret);
        if (response && response.length > 0) {
          const chatGptMessage: ChatMessage = {
            role: 'assistant',
            content: response[0].message.content,
          };
          setMessages((prevMessages) => [...prevMessages, chatGptMessage]);
          setIsTyping(false);
        }
      } catch (error) {
        console.log('Error fetching response from ChatGPT', error);
        setIsTyping(false);
      }
    }
  };

  return (
    <>
      <Tooltip
        title={isOpen ? 'Close chat' : 'Open chat'}
        placement="top-start"
      >
        <IconButton
          onClick={handleToggleChat}
          size="large"
          style={{
            backgroundColor: CustomColors.primary,
            marginLeft: 2,
            marginBottom: 5,
          }}
        >
          {isOpen ? (
            <CommentsDisabledIcon style={{ color: CustomColors.white }} />
          ) : (
            <ChatIcon style={{ color: CustomColors.white }} />
          )}
        </IconButton>
      </Tooltip>
      {isOpen && (
        <Paper
          elevation={3}
          style={{
            position: 'fixed',
            bottom: 50,
            right: 20,
            width: isSmallScreen ? '90%' : isMediumScreen ? '75%' : '400px',
            height: 550,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="10px 20px"
            bgcolor="primary.main"
            color="white"
          >
            <Typography variant="h6">Uztic AI</Typography>
            <IconButton size="small" color="inherit" onClick={handleToggleChat}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            ref={messageContainerRef}
            flex={1}
            padding="8px"
            overflow="auto"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              backgroundColor: CustomColors.white,
              scrollBehavior: 'smooth',
            }}
          >
            {messages.length === 0 ? (
              <Alert
                icon={<AutoAwesomeIcon fontSize="inherit" />}
                severity="info"
              >
                Hi! How can I help you today?
              </Alert>
            ) : (
              messages.map((message, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent={
                    message.role === 'user' ? 'flex-end' : 'flex-start'
                  }
                >
                  <Paper
                    style={{
                      padding: '12px 16px',
                      borderRadius: 10,
                      backgroundColor:
                        message.role === 'user'
                          ? CustomColors.primary
                          : CustomColors.fog,
                      color: message.role === 'user' ? '#fff' : '#333',
                      maxWidth: '60%',
                      wordBreak: 'break-word',
                      boxShadow:
                        message.role === 'user'
                          ? '0 4px 6px rgba(0, 120, 212, 0.2)'
                          : '0 4px 6px rgba(0, 0, 0, 0.1)',

                      textAlign: message.role === 'user' ? 'right' : 'left',
                    }}
                  >
                    {message.content}
                  </Paper>
                </Box>
              ))
            )}

            {isTyping && (
              <Box
                display="flex"
                justifyContent="flex-start"
                padding="8px"
                style={{
                  padding: '12px 16px',
                  borderRadius: 10,
                  backgroundColor: CustomColors.fog,
                  color: '#333',
                  maxWidth: '60%',
                  wordBreak: 'break-word',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  textAlign: 'left',
                }}
              >
                <div className="typing-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </Box>
            )}
          </Box>

          <Box
            display="flex"
            padding="8px"
            style={{
              backgroundColor: CustomColors.white,
            }}
            borderTop="1px solid #ddd"
          >
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              onClick={handleSendMessage}
              style={{ marginLeft: 8 }}
            >
              Send
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default ChatWidget;
