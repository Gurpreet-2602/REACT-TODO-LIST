import React, { useState } from 'react'

 function TodoList() {
    const [activity, setactivity] = useState("");
    const [listData, setlistData] =useState([])
    function addActivity(){
            //  setlistData([...listData, activity])
            //  console.log(listData)
            setlistData((listData)=>{
                const updatedList = [...listData, activity];
                console.log(updatedList)
                return updatedList
               

            })
           
    }
    function removeActivity(i){
        const updatedListData = listData.filter((elem, id)=>{
            return i!=id;
        })
        setlistData(updatedListData)
    }
    function removeAll(){
        setlistData([])
    }
  return (
        <>
        <div className='container'>
            <div className='header'>TODO LIST</div>
            <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setactivity(e.target.value)}></input>
            <button onClick={addActivity}>Add</button>
            <p className='List-heading'>Here is your List : {")"}</p>
            {listData!=[] && listData.map((data, i)=>{
                return(
                    <>
                    <p key={i}>
                        <div className='listData'>{data}</div>
                       <div className='btn-position'><button onClick={()=>removeActivity(i)}>delete</button></div> 
                        
                    </p>
                    </>
                )
            })}
             {listData.length>=1 &&  <button onClick={removeAll}>REMOVE ALL</button>}
           
        </div>
        </>
  )
}
export default TodoList;
