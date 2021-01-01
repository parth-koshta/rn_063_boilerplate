import React from 'react'
import { View, Text } from 'react-native'
import Image from '../../Components/Atoms/Image';
import { Images } from '../../Shared/Images';
import styles from "./styles";

const Home = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Homeeeeeeee</Text>
            <Image source={Images.completed} resizeMode='contain' style={styles.image} />
        </View>
    )
}

export default Home
