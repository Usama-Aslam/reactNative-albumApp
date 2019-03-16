import React, { Component } from "react";
import { Text, View } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = props => {
  return (
    <Card>
      <CardSection>
        <Text> textInComponent </Text>
      </CardSection>
      <CardSection>
        <Text> textInComponent </Text>
      </CardSection>
      <CardSection>
        <Text> textInComponent </Text>
      </CardSection>
      <CardSection>
        <Text> textInComponent </Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
