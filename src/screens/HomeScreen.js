import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentScreen from "./componentScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello Tashfeen</Text>
      <Button
        style={styles.margin}
        title="Go to Component Screen"
        onPress={() => navigation.navigate("ComponentScreen")}
      />
      <Button
        style={styles.margin}
        onPress={() => navigation.navigate("ListScreen")}
        title="Go To List Component"
      />
      <Button
        style={styles.margin}
        onPress={() => navigation.navigate("ImageScreen")}
        title="Go To Image Screen"
      />
      <Button
        style={styles.margin}
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter"
      />
      <Button
        style={styles.margin}
        onPress={() => navigation.navigate("ColorComp")}
        title="Go to ColorComp"
      />
      <Button
        style={styles.margin}
        onPress={() => navigation.navigate("SquareDemo")}
        title="Go to SquareDemo"
      />
      <Button
        style={styles.margin}
        onPress={() => navigation.navigate("SquareWithReducer")}
        title="Go to SquareWithReducer"
      />
      <Button
        style={styles.margin}
        onPress={() => navigation.navigate("TextScreen")}
        title="Go to TextScreen"
      />
      <Button
        style={styles.margin}
        onPress={() => navigation.navigate("Box")}
        title="Go to Box Demo"
      />
      <Button
        style={styles.margin}
        onPress={() => navigation.navigate("Layout")}
        title="Go to Layout Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  margin: {
    marginTop: 30,
  },
});

export default HomeScreen;
