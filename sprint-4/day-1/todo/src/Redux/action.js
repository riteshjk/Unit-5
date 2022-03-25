// export const ADD_COUNT = "ADD_COUNT"
// export const SUB_COUNT = "SUB_COUNT"

// export const addcount=(payload)=>({type:ADD_COUNT, payload})
// export const subcount=(payload)=>({type:SUB_COUNT, payload})

export const TODO = "TODO"
export const DELETE = "DELETE"

export const addtodo =(todo)=>({type:TODO , payload:todo});
export const deletetodo = (id)=>({type:DELETE , payload:id});