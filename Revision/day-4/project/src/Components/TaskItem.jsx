import styled from "styled-components";
import {getTodosData} from "../Redux/Todos/action";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"

const TaskWrapper = styled.div`
margin:5px;
padding:5px;
border:1px solid black;
font-size:15px;
`

const HeadSection = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
`

const SubTAsk = styled.div`
`





export const TaskItem=(props)=>{
    const navigate = useNavigate();

    const {title,description,status,subtask,taga,date,id} = props;
    const {personal,official,others} = taga;
    const dispatch =useDispatch();
    
    return(
        <TaskWrapper>
            <HeadSection>
                <div>
                    <p>{title}</p>
                    <p>{personal && "PERSONAL"} | {official && "OFFICIAL"} | {" "} {others && "OTHERS"} </p>
                   
                     <p>{description}</p>
                </div>
                <div>{date}</div>
            </HeadSection>
            <SubTAsk>
                {subtask.map((sub)=>(<p key={sub.id}>{sub.title}</p>))}
                <div>
                <label>
                    <input type="checkbox" checked={subtask.status} onChange={(e)=>{
                        const subtaskAfterToggle = subtask.map((item)=>item.id===subtask.id )
                        ? {...subtask,status:e.target.checked}
                        : subtask;
                         const payload ={
                             title,
                             description,
                             status,
                             subtask:subtaskAfterToggle,
                             taga,
                             date
                         };
                         fetch(`  http://localhost:8080/todos`,{
                                method:"PUT",
                                headers:{
                                    "Content-Type":"application/json"
                                },
                                body:JSON.stringify(payload)
                         })
                            .then(()=>props.dispatch(getTodosData()))


                    }}/>
                </label>
                {subtask.subtaskTitle}

                </div>
            </SubTAsk>
            <button onClick={()=>navigate(`/todos/${id}/edit`)}>EDIT</button>
        </TaskWrapper>
    )
}