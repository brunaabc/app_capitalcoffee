import React, {useState} from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const CapitalCoffeeScreen = () => {
    const [buttonPressed, setButtonPressed] = useState(false);

    const handleContinuePress = () => {
        setButtonPressed(true);
        console.log('Botão continuar pressionado');
    }

    return (
        <View style={[styles.container, buttonPressed && styles.containerPressed]}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../img/logo.png')} // Imagem da logo
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={[styles.title, buttonPressed && styles.titlePressed]}>
            Capital Coffee
          </Text>
          <Text style={[styles.description, buttonPressed && styles.descriptionPressed]}>
            Aqui você encontra as melhores cafeterias de Brasília!
          </Text>
          <TouchableOpacity
            style={[styles.button, buttonPressed && styles.buttonPressed]}
            onPress={handleContinuePress}
            activeOpacity={0.8} // Feedback visual ao pressionar
          >
            <Text style={[styles.buttonText, buttonPressed && styles.buttonTextPressed]}>
              {buttonPressed ? 'Carregando...' : 'Continuar'}
            </Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#f0e6d2',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        },
        containerPressed: {
          opacity: 0.9, // Exemplo de feedback visual ao pressionar
        },
        logoContainer: {
          backgroundColor: '#d2b48c',
          borderRadius: 50,
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        },
        logoImage: {
          width: 70,
          height: 70,
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          color: '#5e4a3a',
          marginBottom: 10,
        },
        titlePressed: {
          opacity: 0.7,
        },
        description: {
          fontSize: 16,
          color: '#5e4a3a',
          textAlign: 'center',
          marginBottom: 30,
        },
        descriptionPressed: {
          opacity: 0.7,
        },
        button: {
          backgroundColor: '#d2b48c',
          borderRadius: 25,
          paddingVertical: 12,
          paddingHorizontal: 30,
        },
        buttonPressed: {
          backgroundColor: '#a08c6d', // Cor mais escura ao pressionar
        },
        buttonText: {
          color: 'white',
          fontSize: 18,
          fontWeight: 'bold',
        },
        buttonTextPressed: {
          color: '#eee',
        },
      });
      
      export default CapitalCoffeeScreen;
      