import React from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';

import Note from './Note';


export default class Main extends React.Component {

    constructor(props) {
                super(props);
                this.state = {
                    noteArray: [],
                    noteText: '',
                    noteTitle: '',
            }
        }

    componentWillMount() {
        this.GetAllNotes()
    }
    GetAllNotes() {
        var IPAddr = '192.168.33.10'
        var root = 'http://' + IPAddr + ':3000'
        var allNotes = root + '/Note'
        fetch(allNotes, { 
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    notes: responseJson
                })
            }).catch(function (error) { 
                console.log(error.message);
                throw error;
            });
    }

    deleteOneNote() {
        var IPAddr = '192.168.33.10'
        var root = 'http://' + IPAddr + ':3000' 
        var allNotes = root + '/Note' + id
        fetch(allNotes, { 
            method: 'delete',
            credentials: 'same-origin',
            headers: {
                'content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    notes: responseJson
                })
            }).catch(function (error) { 
                console.log(error.message);
                throw error;
            });
    }


    createOneNote() {
        var IPAddr = '192.168.33.10'
        var root = 'http://' + IPAddr + ':3000' 
        var allNotes = root + '/Note' + id
        fetch(allNotes, { 
            method: 'put',
            credentials: 'same-origin',
            headers: {
                'content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    notes: responseJson
                })
            }).catch(function (error) { 
                console.log(error.message);
                throw error;
            });
    }




    render() {

        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
            deleteMethod={ ()=> this.deleteNote(key)} />
        })

      return (
        <View style={styles.container}>
        
          <View style={styles.header}>
            <Text style={styles.headerText}>BLOCK-NOTE</Text>
          </View>

            <ScrollView  style={styles.scrollContainer}>
                {notes}
            </ScrollView>
        
            <View style={styles.footer}>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={(noteTitle) => this.setState({noteTitle})}
                    value={this.state.noteTitle}
                    placeholder='Titre' 
                    placeholderTextColor='white' 
                    underlineColorAndroid='transparent'>
                </TextInput>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={(noteText) => this.setState({noteText})}
                    value={this.state.noteText}
                    placeholder='Note' 
                    placeholderTextColor='white' 
                    underlineColorAndroid='transparent'>
                </TextInput>
            </View>

            <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                    <Text style= {styles.addButtonText}>+</Text>
            </TouchableOpacity>
        
        </View>
      );
    }

    addNote() {
       
        if (this.state.noteText) {

            var d = new Date();
            this.state.noteArray.push({
                'date': d.getFullYear() +
                "/" + (d.getMonth() + 1) +
                "/" + d.getDate(),
                'title' : this.state.noteTitle,
                'note' : this.state.noteText
            });
            this.setState({ noteArray: this.state.noteArray})
            this.setState({ noteTitle: ''})
            this.setState({ noteText: '' })
        }

    }

    deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 10,
        borderBottomColor: "#ddd"
      },
      headerText: {
        color: "white",
        fontSize: 18,
        padding: 26
      },
      scrollContainer: {
        flex: 1,
        marginBottom: 100
      },
      footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
      },
      textInput: {
        alignSelf: "stretch",
        color: "#fff",
        padding: 20,
        backgroundColor: "#252525",
        borderTopWidth: 2,
        borderTopColor: "#ededed"
      },
      addButton: {
        position: "absolute",
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: "green",
        width: 90,
        height: 90,
        borderRadius: 59,
        alignItems: "center",
        justifyContent: "center",
        elevation: 8
      },
      addButtonText: {
        color: "#fff",
        fontSize: 24
      }
    });
