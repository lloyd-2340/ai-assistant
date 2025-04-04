import React, { useEffect, useRef } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SmartToyIcon from '@mui/icons-material/SmartToy';

function App() {
  // Using useRef to store vapiInstance so that it doesn't trigger re-renders
  const vapiInstanceRef = useRef(null);
  const assistant = "d7eacab2-e657-4f29-9840-c6188501c3af"; 
  const apiKey = "9d5b5375-1873-4504-9197-529af26ab5a5"; 
  const buttonConfig = {
    position: "bottom-right", 
    offset: "10px", 
    width: "50px", 
    height: "50px", 
  };

  useEffect(() => {
    // Create script only once when the component mounts
    const script = document.createElement("script");
    script.src = "/assets/static/assistant-cdn.js";
    script.defer = true;
    script.async = true;

    script.onload = () => {
      if (window.vapiSDK && !vapiInstanceRef.current) {
        // Create instance only once and save it in the ref
        vapiInstanceRef.current = window.vapiSDK.run({
          apiKey,
          assistant,
          config: buttonConfig,
        });
      }
    };

    // Append the script tag to the body
    document.body.appendChild(script);

    // Cleanup the script tag when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
      >
        <SmartToyIcon style={{ fontSize: 80, color: '#3f51b5' }} />
        <Typography variant="h2" gutterBottom>
          AI Assistant Sample Page
        </Typography>
        <Typography variant="h5" gutterBottom>
          Discover the power of AI in assisting your daily tasks
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Our AI Assistant leverages advanced machine learning algorithms to help streamline your workflow, manage tasks, answer questions, and more. Whether you're looking for assistance with scheduling, content generation, or data analysis, our AI is designed to make your life easier.
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
}

export default App;
