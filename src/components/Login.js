import {Grid, Paper, Avatar, TextField, Button} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useState} from 'react';
import {Redirect} from 'react-router-dom';


export const Login = ({login, isAuth}) => {

  const [userdata, setUserdata] = useState({username: "", password: ""});
 

 const paperStyle = {
        padding: 20,
        height: '40%',
        width: 280,
        margin: '50px auto'
    }
    const avatarStyle = {
backgroundColor: '#3f51b5'
    }

const handlerSubmit = (e) => {
  e.preventDefault();
  login(userdata);
}

if (isAuth){
  return <Redirect to={'/'}/> 
 } 

    return (
       <Grid>
<Paper elevation={10} style={paperStyle}>
    <Grid align='center'>
    <Avatar style={avatarStyle}> <ExitToAppIcon/></Avatar>
<h2>Log In</h2>

    </Grid>
    <form onSubmit={handlerSubmit}>
<TextField value={userdata.username} onChange={e => setUserdata({...userdata, username: e.target.value})} label='Username' name='username' fullWidth required />
<TextField value={userdata.password} onChange={e => setUserdata({...userdata, password: e.target.value})} label='Password' name='password' type='password' fullWidth required/>
<FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Button type='submit' color='primary' variant='contained' fullWidth>LOG IN</Button>
      </form>
</Paper>

       </Grid>

    )
}
export default Login
