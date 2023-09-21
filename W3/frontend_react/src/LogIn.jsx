import { Card,Button,TextField} from "@mui/material"

function LogIn(){
    return(
        <div style={{display:"flex",justifyContent:"center",marginTop:20}}>
         <Card sx={{p:5,maxWidth: 400}}>
            <span style={{fontSize:21,fontWeight:'bold'}}><em>Log in to your Udemy account</em></span>
             <div>
                    <TextField   sx={{mt:2,mb:3,width:300}}
                        label="Name"
                        type="Name"
                        variant="outlined"
                        />
                        <br/>
                    <TextField sx={{mb:3,width:300}}
                        label="Email"
                        type="Email"
                        variant="outlined"
                        />
                    <br/>
                <TextField sx={{mb:4,width:300}}
                label="Password"
                type="password"
                variant="outlined"
                />
        </div>
        <Button variant="contained" color="secondary"> Log In </Button>
        </Card>
        </div>
        
    )
}

export default LogIn;