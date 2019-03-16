import React, { Component } from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import ButtonSection from "./Button";

const AlbumDetail = ({ album }) => {
  const { title, thumbnail_image, artist, image, url } = album;
  console.log("album-------", album);
  return (
    <Card>
      <CardSection style={styles.cardHeader}>
        <View>
          <Image
            style={styles.thumbnail_image}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.thumbnailText}> {title} </Text>
          <Text> {artist} </Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.imageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <ButtonSection
          onPress={() =>
            Linking.openURL(url).catch(err =>
              console.error("An error occurred", err)
            )
          }
        >
          Buy Now
        </ButtonSection>
      </CardSection>
    </Card>
  );
};

const styles = {
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  thumbnail_image: {
    height: 50,
    width: 50
  },
  thumbnailText: {
    fontSize: 20
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 10
  },
  imageStyle: {
    flex: 1,
    height: 300
  }
};

export default AlbumDetail;
