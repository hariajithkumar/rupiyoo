import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../Component/login"
import Register from "../Component/Register"
import Home from "../Component/Home"


const Stack = createNativeStackNavigator()

const IndexUser = () =>{
    return(
        <>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
            {/* <Stack.Navigator> 
                <Stack.Screen name="LoginScreen" component={Register} />
            </Stack.Navigator> */}
        </>
    )
}

export default IndexUser