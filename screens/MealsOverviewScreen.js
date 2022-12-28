import { useLayoutEffect } from "react"
import { View, FlatList, StyleSheet } from "react-native"
import { MealItem } from "../components/MealItem"

import { MEALS, CATEGORIES } from "../data/dummy-data"

export function MealsOverviewScreen(props) {
    const { route, navigation } = props

    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(category => category.id === categoryId).title
        navigation.setOptions({ title: categoryTitle })
    }, [categoryId, navigation])

    function renderMealItem(itemData) {
        return <MealItem
            id={itemData.item.id}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
        />
    }

    return <View style={styles.container}>
        <FlatList
            data={displayedMeals}
            keyExtractor={item => item.id}
            renderItem={renderMealItem}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})