import { NavigationContainer as Nav} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Signin from './src/Screen/Signin/SigninScreen';
import Signup from './src/Screen/Signup/SignupScreen';
import Lobby from './src/Screen/Lobby/LobbyScreen';
import UserHandler from './src/Screen/UserHandler/UserHandlerScreen';
import Profile from './src/Screen/Profile/ProfileScreen';
import Edt from './src/Screen/Edt/EdtScreen';


const {Navigator, Screen} = createNativeStackNavigator();


export default function App() {
  return (
    <Nav>
      <Navigator initialRouteName="Lobby">
        <Screen name="Lobby" component={Lobby}/>
        <Screen name="Signin" component={Signin}/>
        <Screen name="Signup" component={Signup}/>
        <Screen name="User Handler" component={UserHandler}/>
        <Screen name='Profile' component={Profile}/>
        <Screen name='Edt' component={Edt}/>
      </Navigator>
    </Nav>
  );
}