import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'


interface Props {
    texto: string,
    color?:string,
    ancho?:boolean
}


const BotonCalc = (props: Props) => {
const {texto,color="#2D2D2D", ancho} = props

//"#9B9B9B" gris claro

    return (
        <View style={{
            ...styles.boton,
            backgroundColor: color,
            width: (ancho) ? 180  :  80
        }}>
            <Text style={{...styles.botonTexto,
            color: (color==="#9B9B9B") ? "black" :  "white"            
            }}> {texto} </Text>
        </View>
    )
}

export default BotonCalc

