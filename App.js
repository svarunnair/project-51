import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/Home';
import Header from './src/components/Header';
import Routes from './src/Routes';


export default function App() {
  return (
   <>
<Routes/>
 {/* <Home/> */}
 

   </>
     

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


