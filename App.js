import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from
'react-native'

import Login  from './login.js'
import ToDo from './ToDo.js'

export default class App extends Component {
render(){
return(
<div>
<Login />
<ToDo />
</div>
)
}
}