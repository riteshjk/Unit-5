export function Show ({da}){
    return(
        <>
        <tr >
            <td>{da.username}</td>
            <td>{da.age}</td>
            <td>{da.address}</td>
            <td>{da.dept}</td>
            <td>{da.salary}</td>
            <td>{da.ismarried?"Yes":"No"}</td>
        </tr>
        </>
    )
  }