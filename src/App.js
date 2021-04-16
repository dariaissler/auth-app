import Login from './components/Login';
import {useState} from 'react';
import Table from './components/Table';
import {Route, Switch} from 'react-router-dom';

function App () {
  const [isAuth, setIsAuth] = useState(false);
  const [data, setData] = useState([]);

  const login =  async (userdata) => {
     const response = await fetch('https://agile-garden-50413.herokuapp.com/api/token/login/', 
     {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': '0Ne4uFIgSMdSksmdGnl6Sj1PY9PUzt2vgwEn1XiY7OVhPlaD7bhCfAVpOIhAjyl9',

      },
      method: "POST",
      body: JSON.stringify(userdata)
     })

     if(response.status === 200){
         setIsAuth(true);
     }
  }

  const getUsers = async () => {
    const response = await fetch('https://agile-garden-50413.herokuapp.com/api/users/',
    {
        headers: {
            'accept': 'application/json',
            'Authorization': 'Token 54f6846f093227d515ea9b333fef8d16faff957b',
            'X-CSRFToken': '0Ne4uFIgSMdSksmdGnl6Sj1PY9PUzt2vgwEn1XiY7OVhPlaD7bhCfAVpOIhAjyl9',
        }}
    )
    const data = await response.json()
   setData(data);
   console.log(data);
}

 

  return (
   
    <div className="App">
      <Switch>
     <Route path='/login' render={(props) => <Login isAuth={isAuth} login={login}/> }/> 
     <Route path='/' render={(props) => <Table data={data} getUsers={getUsers} isAuth={isAuth}/>}/>
      </Switch>
      </div>
  
  );
}

export default App;
