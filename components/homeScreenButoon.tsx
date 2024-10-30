import { theme } from "../theme";
import { StyleSheet, Text, Pressable } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export function HomeScreenButton({ title, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign:"center"
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor:theme.colorBlue ,
    marginTop:50,
    width:200,
  
  },
});
