import { FormContext } from "../Context/FormContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

export const Page1 = () => {
  const { name, age, date_of_birth, dispatch } = useContext(FormContext);
    const navigate = useNavigate();

  const disable = name.length === 0 || age.length === 0 || date_of_birth.length === 0;

  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=>dispatch({type:"UPDATE_NAME",payload:e.target.value})} required  />
        <label>Age:</label>
        <input type="text" value={age} onChange={(e)=>dispatch({type:"UPDATE_AGE",payload:e.target.value})} required />
        <label>Date of Birth:</label>
        <input
          type="date"
          value={date_of_birth}
          onChange={(e)=>dispatch({type:"UPDATE_DOB",payload:e.target.value})}
          required
         
        />
        <button onClick={() => navigate("/registration/two")} disabled={disable}  type="submit">Next</button>
      </form>
    </div>
  );
};