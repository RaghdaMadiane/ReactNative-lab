import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

import Login from './login.js'
import ToDo from './ToDo.js'
import Batterytest from './battery.js'
import ImagePickerExample from './imagePicker.js'
export default class App extends Component {
    render() {
        return (
           <View>
		  
		   <Login/>
            <ToDo/>
			<Batterytest/>
			<ImagePickerExample/>
			</View>          
        )
    }
}