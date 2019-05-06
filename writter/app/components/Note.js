import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Container, Header, Content, SwipeRow, Icon, Button } from 'native-base';

export default class Note extends React.Component {
    render() {
      return (
          
    <Content scrollEnabled={false}>
        <SwipeRow
                leftOpenValue={75}
                rightOpenValue={-75}
                left={
                <Button success onPress={() => alert('Add')}>
                    <Icon active name="add" />
                </Button>
                }
        body={
            <View key={this.props.keyval} style={styles.note}>
                <Text style= {styles.noteText}>{this.props.val.date}</Text>
                <Text style= {styles.noteText}>{this.props.val.title}</Text>
                <Text style= {styles.noteText}>{this.props.val.note}</Text>
            </View>
        }
        right={
            <Button danger onPress={this.props.deleteMethod}>
            <Icon active name="trash" />
            </Button>
        }
        />
    </Content>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: 'white',
    }
});
    