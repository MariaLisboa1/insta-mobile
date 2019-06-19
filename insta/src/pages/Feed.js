import React, { Component } from 'react'
import { Text, Image, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import camera from '../assets/camera2.png';
import api from '../services/api';

export default class Feed extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('New')}>
                <Image style={{ height: 30, width: 30 }} source={camera} />
            </TouchableOpacity>
        ),
    });

    state = {
        feed: []
    };

    async componentDidMount() {
        //this.registerToSocket();
        console.log('response')
        const response = await api.get('posts');
      
        
        this.setState({ feed: response.data });
    }

    render() {
        return ( 
            <View style={styles.container}>
                <FlatList
                data={this.state.feed}
                keyExtractor={post => post._id}
                renderItem={({ item })=> (
                    <View style={styles.feedItem}>
                       
                        <View style={styles.feedItemHeader}>
                            <View style={styles.userInfor}>
                                <Text style={styles.name}>{item.author}</Text>
                                <Text style={styles.place}>{item.place}</Text>
                            </View>
                        </View>

                    </View>
                )}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({

});