import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BotonCalc from '../Components/BotonCalc';
import { styles } from '../theme/appTheme';

const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>1,500.00</Text>
            <Text style={styles.resultado}>1,500.00</Text>

            {/* fila de botones */}
            <View style={styles.fila}>
                <BotonCalc color="#9B9B9B" texto="C" />
                <BotonCalc color="#9B9B9B" texto="+/-" />
                <BotonCalc color="#9B9B9B" texto="del" />
                <BotonCalc color="#FF9427" texto="/" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="7" />
                <BotonCalc texto="8" />
                <BotonCalc texto="9" />
                <BotonCalc color="#FF9427" texto="x" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="4" />
                <BotonCalc texto="5" />
                <BotonCalc texto="6" />
                <BotonCalc color="#FF9427" texto="-" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="1" />
                <BotonCalc texto="2" />
                <BotonCalc texto="3" />
                <BotonCalc color="#FF9427" texto="+" />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="C" ancho={true}/>
                <BotonCalc texto="+/-" />
                <BotonCalc color="#FF9427" texto="=" />
            </View>
        </View>
    )
}

export default CalculadoraScreen


