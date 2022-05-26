import React from "react"
import { View, Text } from "react-native"
import Form from '../Form/'

        
    export default function ResultImc(props) {
        return (
          <View>
              <Text>{props.messageResultImc}</Text>
               <Text>{props.resultImc}</Text>
          </View>
        );
      }
      