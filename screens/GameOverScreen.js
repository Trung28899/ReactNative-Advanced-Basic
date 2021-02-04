import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game Is Over !</TitleText>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          // source={require("../assets/success.png")}
          source={{
            uri:
              "https://trung-portfolio.web.app/static/media/avatar.1f986e34.jpg",
          }}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontWeight: "800",
  },
  resultContainer: {
    marginHorizontal: 20,
    width: "80%",
  },
});

export default GameOverScreen;
