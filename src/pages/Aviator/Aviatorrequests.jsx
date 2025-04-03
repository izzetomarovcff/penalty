import React, { useEffect, useState } from 'react'

function Aviatorrequests() {
    const [data, setData] = useState(null)
    const [accepting,setAccepting] = useState(false)
    const [acceptingid,setAcceptingid] = useState(null)
    const put_user_data = async (user_id, data) => {
        try {
            await fetch(`https://moccha77-fbe81-default-rtdb.firebaseio.com/aviatorusers/${user_id}.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        } catch (error) {
            console.log(error)
        }
    }
    const get_user_data = async (user_id) => {
        try {
            let response = await fetch(`https://moccha77-fbe81-default-rtdb.firebaseio.com/aviatorusers/${user_id}.json`)
            let user_data = await response.json()
            return user_data;
        } catch (error) {
            console.log(error)
        }
    }
    const fetchData = async () => {
        try {
            const response = await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/aviatorusers.json")
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        
        fetchData()
    }, [])
    const accept = async (id) => {
        try{
            setAccepting(true)
            setAcceptingid(id)
            const user_data = await get_user_data(id)
            await put_user_data(id,{...user_data,accepted:true})
            setData({...data,[id]:{...data[id],accepted:true}})
            setAccepting(false)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <div className='requestpage'>
            <h2 className='mt-2'>Aviator İsəklər</h2>
            {data ? (
                <div className="reqdiv rounded shadow border">
                    {Object.entries(data).map(([index, user]) => {
                        if(!user.accepted){
                            return (
                                <div className='requestdivm border  m-3 p-2' key={index}>
                                    <div className='reqdiv1'>
                                        <div className="req">
                                            <p><b>Id:</b> <i>{user.id}</i></p>
                                            <p><b>Username:</b> <i>{user.username}</i></p>
                                            <p><b>Name:</b> <i>{user.name}</i></p>
                                            <p><b>Surname:</b> <i>{user.surname}</i></p>
                                        </div>
                                    </div>
                                    <div className='reqdiv2'>
                                        <button className={acceptingid == user.id?('btn btn-success'):('btn btn-primary')} disabled={accepting} onClick={()=>accept(user.id)}>{acceptingid == user.id?("Qəbul Edilir ..."):("Qəbul Et")}</button>
                                    </div>
                                </div>
                            );
                        }
                        
                    })}

                </div>
            ) : (null)}

        </div>
    )
}

export default Aviatorrequests