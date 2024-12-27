import {useState} from 'react';
import {SafeAreaView, StyleSheet, Switch, Text} from "react-native";
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';

export default function App(){
  const [theme, setTheme] = useState('light');
  return(
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch 
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          ios_backgroundColor="black"
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Calculator App</Text>
//       <Text style={styles.description}>React Native First project</Text>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   heading:{
//     textTransform: 'uppercase',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   description:{
//     fontSize: 15
//   }
// });