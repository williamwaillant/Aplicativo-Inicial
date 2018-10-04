var React = require('react');
var Text = require('react-native').Text;
var AppRegistry = require('react-native').AppRegistry;

export default App = function(){
  console.log("to aqui")
  return (
    <Text>Meu primeiro app</Text>
  );
};

AppRegistry.registerComponent('app1', function(){ return App });