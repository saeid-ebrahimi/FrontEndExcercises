import Section from '../UI/Section';
import TaskForm from './TaskForm';
import {useEffect, useState} from "react";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
    const {isLoading, error, sendRequest:sendTaskRequest}= useHttp()
    const createTask = (taskText, taskData) => {
        const generatedId = taskData.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskData[taskText] };
        props.onAddTask(createdTask);
    }
    const enterTaskHandler = async (taskText) => {
        sendTaskRequest({url:'https://react-http-intro-50d18-default-rtdb.firebaseio.com/tasks.json',
            method: 'POST',
            body: { text: taskText },
            headers: {'Content-Type': 'application/json',}
        },createTask.bind(null,  taskText))

    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
