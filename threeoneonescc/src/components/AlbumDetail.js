import React from 'react';
import{ Text , View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
    const{title, artist, thumbnail_image} = album;
    const {thumbnailStyle, headerContentStyle } = styles;
       return(

            <Card>
                <CardSection>
                <View>
                    <Image 
                    style = {thumbnailStyle}
                    //header would go here
                    source={{uri: "https://images.newrepublic.com/4aa3c4e7c6c23682dff17fd422749bcd840a822b.jpeg?w=1200&q=65&dpi=2.625&fm=pjpg&h=496"}}/>
                </View>
                <View>
                <Text>{title}</Text>
                <Text>{artist}</Text>
                </View>
                </CardSection>
             </Card>
            );

};

const styles = {
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent:'space-around'
    },
    thumbnailStyle:{
        height: 50,
        width: 50
    }
};



export default AlbumDetail;
