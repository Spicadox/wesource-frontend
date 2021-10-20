import { Box } from '@mui/system'
import {  TextField, Typography } from '@mui/material'
import React, {useState} from 'react'
import { PrimaryButton } from '../../components/Buttons'

const SignUp = ({useRegister}) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    return (
        <Box 
            sx={{
                flex:1,
                borderRadius:"0px",
                height:"100vh",
                maxHeight:"900px",
                }}
            >
               
                <Box sx={{
                    paddingTop:"7rem",
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    '& .MuiTextField-root': { m: 2, maxWidth: '45ch', width:"90%" },
                    '& .MuiButton-root': { m: 1, maxWidth: '45ch', width:"90%" },
                }}>
                    <Typography variant="h5" sx={{paddingBottom:"10px", fontWeight:200}}>Hello new user!</Typography>
                    <Typography variant="h6" sx={{paddingBottom:"20px"}}>Register</Typography>
                    <TextField label="First Name" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <TextField label="Last Name" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <TextField label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <TextField label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <PrimaryButton>Register</PrimaryButton>
                    <PrimaryButton onClick={e => useRegister(false)} >Already a user?</PrimaryButton>
                </Box>
        </Box>
    )
}

export default SignUp
