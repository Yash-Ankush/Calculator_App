// // Application is Created by Yash Ankush

import {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';  // Use FontAwesome for different icons
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';

export default function App(){
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return(
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        
        {/* Custom smaller theme toggle button */}
        <TouchableOpacity style={styles.toggleButton} onPress={toggleTheme}>
          <Icon 
            name={theme === 'light' ? 'sun-o' : 'moon-o'}  // Sun for light mode, Moon for dark mode
            size={24}  // Smaller icon size
            color={theme === 'light' ? 'black' : 'white'}  // Color changes based on theme
          />
        </TouchableOpacity>

        <MyKeyboard />
        
        <View style={styles.footer}>
          <Text style={[styles.footerText, {color: theme === 'light' ? 'black' : 'white'}]}>Calc by Yash Ankush</Text>
        </View>
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
  },
  toggleButton: {
    position: 'absolute',
    top: 40,  // Slightly moved down from top
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',  // Semi-transparent background
    borderRadius: 20,  // Slightly smaller circular button
    padding: 8,  // Reduced padding for a smaller button
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

