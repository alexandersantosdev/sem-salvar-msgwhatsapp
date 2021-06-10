import React, {useState} from 'react';
import {Linking, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { StyleSheet, TouchableOpacity,Text, TextInput, View, Image  } from 'react-native';

export default function App() {

  const [numero, setnumero] = useState('');


  const handleGeraConversa = () => {
    if (numero != '' && numero != null && numero.length >= 10)
      Linking.openURL(`https://api.whatsapp.com/send?phone=55${numero}`);
    else
      alert(`Número inválido`);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>

        <Image 
        source={require('./WhatsApp.png')}
        style={styles.logo}
        />
      <Text style={styles.title}>Inicie uma conversa no whatsapp sem precisar salvar o número</Text>
      <TextInput style={styles.input} value={numero} onChangeText={(text) => setnumero(text)}
      placeholder="ex: 41999999999"
      />
      <TouchableOpacity style={styles.button} onPress={handleGeraConversa}>
        <Text style={[styles.buttonText, {marginBottom: 20}]}>Iniciar conversa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, {backgroundColor: "#F39C12"}]} onPress={()=>setnumero('')}>
        <Text style={styles.buttonText}>Limpar</Text>
      </TouchableOpacity>
</TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27ae60'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title:{
    fontSize: 30,
    color: '#fff',
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom: 40
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 7,
    height: 60,
    fontSize: 20,
    color: '#2c3e50',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom:40,
    backgroundColor: '#bdc3c7',
    borderWidth: 0
  },
  button:{
    width: '90%',
    height: 60,
    backgroundColor: '#ecf0f1',
    borderRadius: 7,
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 20,
    textAlign: 'center'
  }
})