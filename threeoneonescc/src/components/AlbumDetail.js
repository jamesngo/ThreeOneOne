import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            //header would go here
            source={{
              uri:
                "https://images.newrepublic.com/4aa3c4e7c6c23682dff17fd422749bcd840a822b.jpeg?w=1200&q=65&dpi=2.625&fm=pjpg&h=496"
            }}
          />
        </View>
        <View style = {headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
          <Image
            style = {imageStyle}
            source={{
              uri:
                "https://cdn.planespotters.net/photo/801000/original/11-5038-usaf-united-states-air-force-lockheed-martin-f-35a-lightning-ii_PlanespottersNet_801757_e2ad486047.jpg"
            }}
          />
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
        fontSize: 50
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
