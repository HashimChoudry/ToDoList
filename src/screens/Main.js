import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import mainStyle from "../../stylesheets/main_style";

const MainScreen= () => {
    const [task,setTask] = useState("");
    const taskArr = []

    const addTask = (newTask) => {
        taskArr.push(newTask)
        console.log(taskArr)
    };

    return(
        <View style={mainStyle.container}>
            <TextInput
            style={styles.input}
            placeholder="Task"
            placeholderTextColor={'grey'}
            value={task}
            onChangeText={setTask}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={()=>{addTask(task)}}>
                <Text>Add Task</Text>
            </TouchableOpacity>
        </View>
    );
    
};

const styles = StyleSheet.create({
    
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