import { Route , Switch } from 'react-router-dom';
import './App.css';

//Components
import LogIn from './Components/LogIn';
import Navbar from './Components/Navbar';
import Chat from './Components/Chat';

//Context
import AuthContextProvider from './Context/AuthContextProvider';


function App() {
  return (
      <>
        <AuthContextProvider>
          <Switch>
            <Route path='/chat' component={Chat}/>
            <Route path='/' component={LogIn}/>
          </Switch>
        </AuthContextProvider>
      </>
  );
}

export default App;
