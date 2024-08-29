import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Container, Link } from '@mui/material';
import '../styles/pages/LoginPage.css';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin({ username, password });
    setUsername('');
    setPassword('');
    navigate('/');
  };

  return (
    <Container className="login-page" maxWidth="xs">
      <Typography variant="h4" component="h1" gutterBottom>
        Login
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            sx: {
              color: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            sx: {
              color: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
              },
            },
          }}
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
          label="Remember me"
          style={{ color: 'white' }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign in
        </Button>
        <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
          Not a member? <Link href="/register" style={{ color: '#1e90ff' }}>Register</Link>
        </Typography>
        {/* <Typography variant="body2" align="center" style={{ marginTop: '10px' }}>
          or sign up with:
        </Typography>
        <div className="social-buttons">
         
        </div> */}
      </form>
    </Container>
  );
};

export default LoginPage;
