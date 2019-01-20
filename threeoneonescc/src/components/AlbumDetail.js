import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { status, date , description, pictureurls, id  } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    //   console.log(status)
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            //header would go here
            source={require("./tu.png")}
          />
        </View>
        <View style = {headerContentStyle}>
          <Text style={headerTextStyle}>{date}</Text>
          <Text>Current Status: {status}</Text>
          <Text>Ticket #: {id}</Text>
        </View>
      </CardSection>
      <CardSection>
          <Image
            style = {imageStyle}
            source={{
              uri: pictureurls[0]
            }}
          />
      </CardSection>
      <CardSection>
      <Text>{description}</Text>
      </CardSection>
      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
    headerTextStyle: {
        fontSize: 30
    },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    // flex: 1,
    width: 300
  }
};

export default AlbumDetail;
