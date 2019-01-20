import React from "react";
import { Text, View, Image, ScrollView} from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const HomeView = () => {
    //optional to put the return and ();
  
    //calling for the style
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
      } = styles;
   
  //returning the item with the style
    return (
      <ScrollView>
         {/* Logo */}
        <Card>
        <CardSection>
            <View>
            <Image
                style={imageStyle}
                //header would go here
                source={require('./logo.jpg')
                }
            />
            </View>
            
        </CardSection>
        {/* card zero */}
        </Card>
            <Card>
        <CardSection>
            <View>
            <Image
                style={thumbnailStyle}
                //header would go here
                source={require('./BeachClipart.png')
                }
            />
            </View>
            <View style = {headerContentStyle}>
            <Text style={headerTextStyle}>Beach Conditions</Text>
            <Text>Decent!</Text>
            </View>
        </CardSection>
        </Card>


        {/* card one */}
        <Card>
        <CardSection>
            <View>
            <Image
                style={thumbnailStyle}
                //header would go here
                source={require('./AirQuality.png')
            }
            />
            </View>
            <View style = {headerContentStyle}>
            <Text style={headerTextStyle}>Air Quality</Text>
            <Text>38.925 Particles - Good Quality</Text>
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
                source={require('./School.jpg')
            }
            />
            </View>
            <View style = {headerContentStyle}>
            <Text style={headerTextStyle}>School in Session</Text>
            <Text>No. Holiday.</Text>
            </View>
        </CardSection>
        </Card>

        {/* card three */}
        <Card>
        <CardSection>
            <View>
            <Image
                style={thumbnailStyle}
                //header would go here
                source={require('./car.jpg')
            }
            />
            </View>
            <View style = {headerContentStyle}>
            <Text style={headerTextStyle}>Parking Enforcment</Text>
            <Text>No enforced today, holiday</Text>
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
    flexDirection: "column",
    marginLeft: 100, 
    justifyContent: "center",
    alignItems: "center",
    resizeMode: 'contain',
      height: 200,
      flex: 1,
      width: 200
    }
  };
export default HomeView;
