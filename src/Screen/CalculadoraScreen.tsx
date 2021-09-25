import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BotonCalc from '../Components/BotonCalc';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>1,500.00</Text>
            <Text style={styles.resultado}>1,500.00</Text>
            <View style={styles.fila}>

                <BotonCalc color="#9B9B9B" texto="C" />
                <BotonCalc texto="+/-" />
                <BotonCalc color="#9B9B9B" texto="del" />
                <BotonCalc color="#FF9427" texto="/" />

            </View>

        </View>
    )
}

export default CalculadoraScreen


