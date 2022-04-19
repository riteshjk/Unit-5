import React from 'react';
const style ={
    padding: 10,
    margin: 10,
    width: 10,
    fontSize: 10,
}


export const PinItem=React.forwardRef(({onChange,onBackspace,max},ref)=>{

    const handlevalue=(e)=>{
        console.log(e.keyCode)
        switch(e.keyCode){
            case 8:{
                if(!e.target.value) onBackspace(e.target.value)
                
                break;

            }
            case 9:{
                e.preventDefault();
                break;
            }
            default:{   
                onChange(e.target.value)
           
            }

        }
    }

    return(
       <input onKeyUp={handlevalue} ref={ref} style={style} maxlength={max}/>
    )
})