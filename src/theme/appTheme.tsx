import { StyleSheet } from 'react-native'




export const styles = StyleSheet.create({
    fondo: {
        backgroundColor: "black",
        flex: 1
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "black",
        justifyContent: "flex-end",
    }, 
    resultado: {
        color: "white",
        fontSize: 60,
        textAlign: 'right',
    },
    resultadoPequeno: {
        color: "white",
        fontSize: 30,
        textAlign: 'right'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    boton: {
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: "center",
        backgroundColor: "#2D2D2D",
        marginHorizontal: 10
    },
    botonTexto: {
        textAlign: "center",
        color: "white",
        fontSize: 30,
    },

})
