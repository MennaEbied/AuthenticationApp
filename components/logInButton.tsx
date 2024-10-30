import { theme } from "../theme";
import { StyleSheet, Text, Pressable } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export function LogInButton({ title, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: theme.colorWhite,
    fontSize: 12,
    fontWeight: "bold",
    textAlign:"center",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor:theme.colorDarkBlue,
    width:200,
    height:40,
    marginBottom:10,
   
  },
});
