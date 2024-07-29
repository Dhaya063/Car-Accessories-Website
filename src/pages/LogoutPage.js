import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import '../styles/pages/LogoutPage.css';

const LogoutPage = ({ handleLogout }) => {
  return (
    <Container className="logout-page" maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Logout
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout} fullWidth>
        Logout
      </Button>
    </Container>
  );
};

export default LogoutPage;
