import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Login =() =>{
    const defaultTheme = createTheme();

    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
        useEffect(()=>{
            const auth = localStorage.getItem('user');
            if(auth){
                navigate('/')
            }
        },[]);

      //   useEffect(()=>{
      //     const ad = localStorage.getItem('admin');
      //     if(ad){
      //         navigate('/')
      //     }
      // },[]);
        
    const handleLogin = async() =>{
        console.warn("email,password", email, password);
        let result = await fetch('http://localhost:5000/login',{
            method: 'post',
            body:JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json()
        console.warn(result);
        if(result.firstName){
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/')
        }else{
            // alert("Please enter correct details")
        
        //admin
        let result1 = await fetch('http://localhost:5000/admin',{
            method: 'post',
            body:JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result1 = await result1.json()
        console.warn(result1);
        if(result1.name){
            localStorage.setItem("admin",JSON.stringify(result1));
            navigate('/')
        }else{
            alert("Please enter correct details")
        }
    }}
    
    return(
    <div>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
            // type="submit"
            onClick={handleLogin}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href='/signup' variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    );
}

export default Login;