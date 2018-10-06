import React from 'react';
import {View, Text, Button, AppRegistry} from 'react-native';

const geraNumeroAleatorio = () => {
  var numeroAleatorio = Math.random();
  alert(Math.floor(numeroAleatorio*100));
}

export default App = () => {
  return (
    <View>  
      <Text>gerador de numeros randomicos</Text>
      <Button
        title ="Gerar um numero aleatorio"
        onPress={geraNumeroAleatorio} 
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App);