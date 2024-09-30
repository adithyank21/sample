
import{useEffect, useState,useRef} from 'react'

function ExuseEffect(){
    const [count,setCount] = useState(0)
    const [value,setvalue] = useState(0)


    const [record,setRecord] =useState([])
    const refElement =useRef(null)
useEffect(()=>{
    console.log("useEffect")
    // refElement.current['price'].value='1234'
})
useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{console.log(json);setRecord(json)})
            // const price=refElement.current;
            // price['name'].value=record[0].price;
})

    return(
        <>
        <button onClick={()=>{
                setCount(count+1)
            }}>value</button>
        {
            
            record.length>0 &&
            record.map((item) =>{
                return(
                
                    <p key={item.id}>
                        Title:{item.title}
                        <img src={item.image} style={{width:'100px', height:'100px'}}></img>
                    </p>
                    // <input name='price' ref={refElement} type='text' ></input>
                
                )
            })
        }
        
        {/* <button onClick={()=>{
            setCount(count+1)
        }}>count</button>
        <p>
            {count}
        </p> */}
        </>
        
    )
}
export default ExuseEffect