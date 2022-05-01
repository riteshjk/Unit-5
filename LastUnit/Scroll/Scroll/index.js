let container=document.querySelector(".container")
let limit =20
let pagecount=1
let post=1

const getpost =async () =>{

   const res=await fetch(`http://localhost:8080/users?_page=${pagecount}&_limit=25`)
const data =await res.json()

console.log(data)
append(data)

}
getpost()


function append(data){

    data.map((e)=>{

      

        let div=document.createElement("div")

        let body=document.createElement("h1")

        body.textContent=e.body

        div.append(body)

        container.append(div)


    })
}

const getpage=()=>{
    setTimeout(() => {
          getpost()
          pagecount++

        
    }, 700);
}

window.addEventListener('scroll',()=>{
    const {scrollHeight,scrollTop,clientHeight}=document.documentElement

    console.log(scrollTop+clientHeight, scrollHeight)
    if((scrollTop+clientHeight)+50>=scrollHeight){
        getpage()
        
      
    }

    
})