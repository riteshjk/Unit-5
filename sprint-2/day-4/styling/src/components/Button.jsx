import styled from 'styled-components';

const Button = styled.button`
border:${({the,then})=>
the==="red" ?  then==="ritesh" ? "2px dotted black" : "1px solid black" : "none"
};
background-color: ${({the,back,themp})=>
    the==="red" || back==="border" || themp==="themp" ? "white" : "blue"
};

border-radius: 5px;
padding:10px;
margin:10px;
color:${({the,back,themp,t})=>
the==="red"|| back==="border" || t=="dip" ? themp==="themp" ? "blue": "black" : "white"
};




`

export {Button};