import React from "react";
import { useSelector,useDispatch } from "react-redux";
import styled from "styled-components";
import { Profile } from "./Profile";
import { Sidebar } from "./Sidebar";
import { TaskContainer } from "./TaskContainer";
import {getTodosData} from "../Redux/Todos/action";



const Container = styled.div`
    margin: 0;
    padding: 25px;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    height:100vh;
    gap:20px;
`;

const Grid1 = styled.div`
width:350px;
grid-column: 1/3;
border:1px solid black;
`
const Grid2 = styled.div`
width:350px;
grid-column: 3/6;
border:1px solid black;

`
const Grid3 = styled.div`
width:350px;
grid-column: 6/9;
border:1px solid black;

`
const Grid4 = styled.div`
width:350px;
grid-column: 9/12;
border:1px solid black;
border:1px solid black;


`

export const Home =()=>{

    const {token, username} = useSelector((store) => store.login);
    const {todos} = useSelector((store)=>store.todos);
    const dispatch= useDispatch();

    React.useEffect(()=>{
        dispatch(getTodosData())
    },[])


    return(
        <Container >
            <Grid1>
            <Sidebar token={token} username={username} todos={todos}/>
            </Grid1>
            <Grid2><TaskContainer tasks={todos.filter((item)=>item.status==="Pending")} color="gray" heading="TODOS"/></Grid2>
            <Grid3><TaskContainer tasks={todos.filter((item)=>item.status==="inprogress")} color="teal" heading="IN PROGRESS"/></Grid3>
            <Grid4><TaskContainer tasks={todos.filter((item)=>item.status==="done")} color="purple" heading="DONE"/></Grid4>
        </Container >
    )
}