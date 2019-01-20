import React from "react";
import { Text, View, Image } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const Header = props => {
    //optional to put the return and ();
  
    //calling for the style
    const { textStyle, viewStyle } = styles;
   
  //returning the item with the style
    return (
      <ScrollView>

          
      {/* card two */}
      <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            //header would go here
            source={{
              uri:
                "././images"
            }}
          />
        </View>
      </CardSection>
      </Card>
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
          <Text style={headerTextStyle}>Beach Conditions</Text>
          <Text>{id}</Text>
        </View>
      </CardSection>
      </Card>


      {/* card two */}
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
          <Text style={headerTextStyle}>Beach Conditions</Text>
          <Text>{id}</Text>
        </View>
      </CardSection>
      </Card>

      {/* card two */}
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
          <Text style={headerTextStyle}>Beach Conditions</Text>
          <Text>{id}</Text>
        </View>
      </CardSection>
      </Card>

      {/* card two */}
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
          <Text style={headerTextStyle}>Beach Conditions</Text>
          <Text>{id}</Text>
        </View>
      </CardSection>
      </Card>
      </ScrollView>
   );
}

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
export default SquareList;
