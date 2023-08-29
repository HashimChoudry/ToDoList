import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const MainScreen= () => {
    const [task,setTask] = useState("");

    return(
        <View style={styles.contanier}>
            <TextInput
            style={styles.input}
            placeholder="Task"
            placeholderTextColor={'grey'}
            value={task}
            onChangeText={setTask}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{console.warn(task)}}>
                <Text>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
    
};

const styles = StyleSheet.create({
    contanier:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    buttonContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 42,
        marginTop: 20,
        borderRadius: 4,
        backgroundColor: 'grey',
    },
    input:{
        fontSize: 15,
        borderRadius: 50,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 10,
        marginTop: 10,
        height: 10,
        borderColor: 'lightgray',
        backgroundColor: 'white',  
        
    },
});

export default MainScreen