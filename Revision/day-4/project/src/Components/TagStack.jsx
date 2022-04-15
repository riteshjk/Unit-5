import styled from "styled-components";

const TagStackCard = styled.div`
padding:25;
&>*{
    text-align:center;
    padding-top:10px;
    padding-bottom:10px;
}
`

export const TagStack=({todos})=>{
    return(
        <TagStackCard>
            <div>ALL={todos.filter((item)=>item.taga.personal) && todos.filter((item)=>item.taga.official) && todos.filter((item)=>item.taga.others).length}</div>
            <div>Personal : {todos.filter((item)=>item.taga.personal).length}</div>
            <div>Official : {todos.filter((item)=>item.taga.official).length}</div>
            <div>Others : {todos.filter((item)=>item.taga.others).length}</div>
        </TagStackCard>
    )
}