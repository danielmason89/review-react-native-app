import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { globalStyles, images } from "../styles/globalStyles";
import Card from "../shared/card";

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam("rating");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <View style={styles.rating}>
          <Text>VGames rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
        <Text>{navigation.getParam("body")}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
});
