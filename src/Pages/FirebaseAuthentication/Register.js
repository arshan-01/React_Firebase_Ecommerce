import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../FirebaseAuthentication/Firebase"
import { setDoc,doc } from "firebase/firestore/lite"; 
import { firestore_db } from '../FirebaseAuthentication/Firebase';
import { useNavigate , Link  } from 'react-router-dom';

const theme = createTheme();


export default function SignUp() {
  const [IsProcessing,setIsProcessing] = useState(false)
  const navigate = useNavigate();
  const [Input,setInput] = useState({
    fname: "",
    sname: "",
    email: "",
    password: "",
  })
  
  function HandleInput(e) {
    setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    
  }

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsProcessing(true);
    try {
  const {fname,sname,email,password} = Input
  await createUserWithEmailAndPassword(auth,email,password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log("Successfull")
  console.log("user",user)
      const id = auth.currentUser.uid
          const docRef =  setDoc(doc(firestore_db, "users",id),{id,fname,sname,email,password});
          console.log("Document written with ID: ", docRef);
          setIsProcessing(false);
          navigate('/');
})

.catch((error) => {
  // const errorCode = error.code;
  // const errorMessage = error.message;
  console.error(error)
});

    }
    
    catch (e) {
      console.error("Error adding document: ", e);
    }
  };
// console.log(Input)
  return (
    <ThemeProvider theme={theme}>
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField onChange={HandleInput}
                  autoComplete="given-name"
                  name="fname"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField onChange={HandleInput}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="sname"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={HandleInput}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField onChange={HandleInput}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >

        { !IsProcessing? "Sign Up" : "Loading..."   }


              
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    
  );
}