import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Profile } from "./Profile";


const Container = styled.div`
    margin: 0;
    padding: 100px;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    height:100vh;
    gap:30px;
`;

const Grid1 = styled.div`
grid-column: 1/3;
`
const Grid2 = styled.div`
grid-column: 3/6;
`
const Grid3 = styled.div`
grid-column: 6/9;
`
const Grid4 = styled.div`
grid-column: 9/12;
`

export const Home =()=>{

    const {token, username} = useSelector((store) => store.login);
    return(
        <Container >
            <Grid1>
            <Profile token={token} username={username}/>
            </Grid1>
            <Grid2>TODO</Grid2>
            <Grid3>INPROGRESS</Grid3>
            <Grid4>DONE</Grid4>
        </Container >
    )
}