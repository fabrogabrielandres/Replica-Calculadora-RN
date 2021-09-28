import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BotonCalc from '../Components/BotonCalc';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {
    const [numeroAnterior, setnumeroAnterior] = useState("")
    const [numero, setNumero] = useState("0")

    const limpiar = () => {
        setNumero("0")
    }

    const armarNumero = (numeroTexto:string) => {
        setNumero(numero + numeroAnterior)
    }



    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
            <Text style={styles.resultado}>{numero}</Text>

            {/* fila de botones */}
            <View style={styles.fila}>
                <BotonCalc color="#9B9B9B" texto="C" accion={limpiar} />
                <BotonCalc color="#9B9B9B" texto="+/-" />
                <BotonCalc color="#9B9B9B" texto="del" />
                <BotonCalc color="#FF9427" texto="/" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="7" accion={armarNumero}/>
                <BotonCalc texto="8" accion={armarNumero}/>
                <BotonCalc texto="9" accion={armarNumero}/>
                <BotonCalc color="#FF9427" texto="x" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="4" accion={armarNumero}/>
                <BotonCalc texto="5" accion={armarNumero}/>
                <BotonCalc texto="6" accion={armarNumero}/>
                <BotonCalc color="#FF9427" texto="-" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="1" accion={armarNumero}/>
                <BotonCalc texto="2" accion={armarNumero}/>
                <BotonCalc texto="3" accion={armarNumero}/>
                <BotonCalc color="#FF9427" texto="+" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="C" ancho={true} />
                <BotonCalc texto="+/-" />
                <BotonCalc color="#FF9427" texto="=" />
            </View>
        </View>
    )
}

export default CalculadoraScreen


