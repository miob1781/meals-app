import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

export function CategoryGridTile(props) {
    const { title, color, onPress } = props

    return <View style={styles.gridItem}>
        <Pressable
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
            android_ripple={{ color: "CCC" }}
            onPress={onPress}
        >
            <View style={[styles.innerContainer, { backgroundColor: color }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    }
})