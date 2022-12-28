import { StyleSheet, View, Text, Pressable, Image, Platform } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { MealDetails } from "./MealDetails"

export function MealItem(props) {
    const { id, title, imageUrl, duration, complexity, affordability } = props

    const navigation = useNavigation()

    function selectMealItemHandler() {
        navigation.navigate("MealDetail", {
            mealId: id
        })
    }

    return <View style={styles.mealItem}>
        <Pressable
            android_ripple={{ color: "#ccc" }}
            style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={selectMealItemHandler}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
            <MealDetails
                duration={duration}
                complexity={complexity}
                affordability={affordability}
            />
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 2, height: 0 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible"
    },
    image: {
        width: "100%",
        height: 200
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    }
})