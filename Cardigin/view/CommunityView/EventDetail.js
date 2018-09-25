import React from 'react';
// Linking library lets react interface with other apps.
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Just showing data to the user so can be a functional component instead of a class-based component 
// as it doesn't need lifecycle methods or access to state

const EventDetail = ({ event }) => {

    // destructuring props.event and styles since they're being used more than once.
    const { id, image, title, time, host, location } = event;
    const { headerContentStyle, thumbnailStyle, thumbnailContainerStyle, headerTextStyle, bodyTextStyle } = styles;

    console.log("In EventDetail");

    // passes in an image object as the source
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text style={bodyTextStyle}>{host}</Text>
                    <Text style={bodyTextStyle}>{time.toString()}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

// the image will not expand to fill the available space by default.  
// Instead, we need to manually add in a styling rule that tells the 
// image tag exactly how big the image should be.
// to make sure that the image takes up the full width available, use flex: 1 and a null width
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    headerTextStyle: {
        fontSize: 16,
        marginRight: 90,
        numberOfLines: 2
    },
    bodyTextStyle: {
        fontSize: 12,
        marginRight: 90,
        numberOfLines: 2
    },
    thumbnailStyle: {
        height: 90,
        width: 90
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        overflow: 'hidden'
    }
};

export default EventDetail;