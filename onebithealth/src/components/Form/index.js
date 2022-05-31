import React, {useState} from "react"
import { View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration,
    Keyboard,
    Pressable 
    } from "react-native"
import ResultImc from "../Result";
import styles from "./style";

        
    export default function Form() {

        const [height, setHeight]= useState(null)
        const [weight, setWeight]= useState(null)
        const [messageImc, setMessageImc]= useState("preencha o peso e altura")
        const [imc, setImc]= useState(null)
        const [textButton, setTextButton]= useState("Calcular")
        const [errorMessenger, setErroMessenger] = useState(null);


        function imcCalculator(){
          let heightFormat = height.replace(",",".")
            return setImc((weight/(height*height)).toFixed(2))
        }


        function verificationImc(){
            if(imc == null){
                Vibration.vibrate();
                setErroMessenger("campo obrigatório*")
            }
          }

          function validationImc() {
            if (weight != null && height != null) {
              imcCalculator()
              setHeight(null)
              setWeight(null)
              setMessageImc("Seu imc é igual:")
              setTextButton("Calcular Novamente")
              setErroMessenger(null)
              return
            }
            verificationImc()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("preencha o peso e altura") 
          }

        return (
          <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
             <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessenger}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75"
                keyboardType="numeric"/>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessenger}</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.365"
                keyboardType="numeric"/>
                
                <TouchableOpacity style={styles.buttonCalculator}
                onPress={() => validationImc()} onPressIn={Keyboard.dismiss}>
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
             </View>
             <ResultImc messageResultImc ={messageImc} resultImc={imc} /> 
          </Pressable>
        );
      }
      
