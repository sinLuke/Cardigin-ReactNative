import React from 'react';
import { View } from 'react-native';

// Functional component
const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

// offset is which side we want the shadow to be on, so no shadow on left/right but do want a hight on the bottom
const styles = {
    containerStyle: {
        borderWidth: 0,
        borderRadius: 8,
        borderColor: '#ddd',
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        overflow: 'hidden'
    }
};

export default Card;