import {Redirect} from 'react-router-dom';
import {Grid, Paper, Button} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';


export const Table = ({isAuth, getUsers, data}) => {
 

    const paperStyle = {
        padding: 20,
        height: '40%',
        width: 320,
        margin: '50px auto'
    }

    if (!isAuth){
        return <Redirect to={'/login'}/> 
    } 

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'User Name', width: 130 },
        { field: 'is_superuser' , headerName: 'Super user', width: 130 },
      ];
      
    

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Button onClick={getUsers} color='primary' variant='contained' fullWidth>Show two users I was only able to get</Button>
            <div style={{ height: 400, width: '100%' }}>
          <DataGrid rows={data} columns={columns}/>
           </div>
        </Paper>
        </Grid>
    )
}

export default Table

