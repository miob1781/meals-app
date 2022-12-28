import { useLayoutEffect } from "react"
import { Text, View, StyleSheet, Image, ScrollView } from "react-native"

import { MEALS } from "../data/dummy-data"
import { MealDetails } from "../components/MealDetails"
import { Subtitle } from "../components/MealDetail/Subtitle"
import { List } from "../components/MealDetail/List"
import { IconButton } from "../components/IconButton"

export function MealDetailScreen(props) {
    const { route, navigation } = props

    function headerButtonPressHandler() {
        console.log("Clicked!");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler])

    const mealId = route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId)

    return <ScrollView style={styles.root}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    root: {
        marginBottom: 32
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white"
    },
    detailText: {
        color: "white"
    },
    listOuterContainer: {
        alignItems: "center"
    },
    listContainer: {
        width: "80%"
    }
})