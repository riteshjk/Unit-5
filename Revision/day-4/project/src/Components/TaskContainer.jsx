import styled from "styled-components";
import { TaskItem } from "./TaskItem";

const Wrapper = styled.div`

`
const HeadWrapper = styled.div`
text-align:center;
background-color: ${(props)=>props.color};
padding:20px;
font-size:20px;`

export const TaskContainer =({tasks,color,heading})=>{
    console.log(tasks)
    return(
            <Wrapper>
                <HeadWrapper color={color}>{heading}</HeadWrapper>
                {tasks.map((task)=>(<TaskItem key={task.id} {...task}/>))}
            </Wrapper>
    )
}