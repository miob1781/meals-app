import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export function IconButton(props) {
    const { icon, color, onPress } = props

    return <Pressable style={({pressed}) => pressed ? styles.pressed : null} onPress={onPress}>
        <Ionicons name={icon} size={24} color={color} />
    </Pressable>
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})