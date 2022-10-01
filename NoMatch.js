import { View, Text } from "react-native-web";
import AppHeaderComp from './AppHeaderComp'

const NoMatch = () => {
    return (<View>
        <AppHeaderComp/>
        <Text style={{color: 'red'}}>Wrong route provided!</Text>
    </View>)
}

export default NoMatch