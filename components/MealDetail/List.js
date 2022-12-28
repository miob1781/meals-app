import { StyleSheet, Text, View } from "react-native"

export function List(props) {
    const { data } = props


    return data.map(datum => (
        <View key={datum} style={styles.listItem}>
            <Text style={styles.itemText}>{datum}</Text>
        </View>
    ))

}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#e2b497",
    },
    itemText: {
        color: "#351401",
        textAlign: "center"
    }
})