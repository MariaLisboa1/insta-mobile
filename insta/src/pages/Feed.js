import React, { Component } from 'react'
import { Text, Image, View, TouchableOpacity, FlatList } from 'react-native'
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
        try {
            const response = await api.get('posts');
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }

        
        this.setState({ feed: response.data });
    }

    render() {
        return ( 
            <View>
                <FlatList
                data={this.state.feed}
                keyExtractor={post => post._id}
                renderItem={({ item })=> (
                    <Text>{item.author}</Text> 
                )}
                />
            </View>
        )
    }
}
