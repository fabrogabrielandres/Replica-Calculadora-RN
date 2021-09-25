import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'


interface Props {
    texto: string,
    color?:string
}


const BotonCalc = (props: Props) => {
const {texto,color="#2D2D2D"} = props
    return (
        <View style={{
            ...styles.boton,
            backgroundColor: color 
        }}>
            <Text style={styles.botonTexto}> {texto} </Text>
        </View>
    )
}

export default BotonCalc

