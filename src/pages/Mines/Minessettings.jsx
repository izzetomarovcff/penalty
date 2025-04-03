import React, { useEffect, useState } from 'react'

function Minessettings() {
    const divs9 = Array.from({ length: 9 });
    const divs25 = Array.from({ length: 25 });
    const divs49 = Array.from({ length: 49 });
    const divs81 = Array.from({ length: 81 });
    const [data, setData] = useState(null)
    const [alert, setAlert] = useState(null)
    const [success, setSuccess] = useState(null)
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false)
    const [uploaded, setUploaded] = useState(false)
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleUpload = async (event) => {
        event.preventDefault();
        if (!file) {
            console.log("Please select a video file.");
            return;
        }

        const formData = new FormData();
        formData.append("video", file);
        try {
            await setUploading(true)
            const response = await fetch("https://back.moccha77.com/upload", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            await setUploaded(true)
            await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/mines.json", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, file_id: result.fileName })
            })
            const responses = await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/mines.json")
            const data1 = await responses.json()
            setData(data1)
        } catch (error) {
            console.error("Upload failed:", error);
        }
    };
    const removeVideo = () => {
        setData(prevState => ({
            ...prevState,
            file_id: ""
        }))
        setUploaded(false)
        setUploading(false)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/mines.json")
                const data = await response.json()
                setData(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await handlecheck()

        } catch (error) {
            console.log(error)
        }

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name == "resolution_count"){
            setData(prevState => ({
                ...prevState,
                [name]: value,
                mines_count:0,
                array: []
            }))
        }else{
            setData(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
        
    }
    const handlecheck = async () => {
        try {
            if (data.resolution_count == 0) {
                setAlert("❌ Xana Sayını Seç")
                setTimeout(() => {
                    setAlert(null)
                }, 3000);
            } else if (data.resolution_count == 3) {
                if (data.mines_count >= 1 && data.mines_count < 9) {
                    if(data.array.length == data.mines_count){
                        await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/mines.json", {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data)
                        })
                        setSuccess("✅ Əlavə Edildi!")
                        setTimeout(() => {
                            setSuccess(null)
                        }, 3000);
                    }else{
                        setAlert("❌ Mina Xanaları yanlışdır")
                        setTimeout(() => {
                            setAlert(null)
                        }, 3000);
                    }
                    
                } else {
                    setAlert("❌ Mina sayı yanlışdır")
                    setTimeout(() => {
                        setAlert(null)
                    }, 3000);
                }
            } else if (data.resolution_count == 5) {
                if (data.mines_count >= 1 && data.mines_count < 25) {
                    if(data.array.length == data.mines_count){
                        await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/mines.json", {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data)
                        })
                        setSuccess("✅ Əlavə Edildi!")
                        setTimeout(() => {
                            setSuccess(null)
                        }, 3000);
                    }else{
                        setAlert("❌ Mina Xanaları yanlışdır")
                        setTimeout(() => {
                            setAlert(null)
                        }, 3000);
                    }
                } else {
                    setAlert("❌ Mina sayı yanlışdır")
                    setTimeout(() => {
                        setAlert(null)
                    }, 3000);
                }
            } else if (data.resolution_count == 7) {
                if (data.mines_count >= 1 && data.mines_count < 49) {
                    if(data.array.length == data.mines_count){
                        await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/mines.json", {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data)
                        })
                        setSuccess("✅ Əlavə Edildi!")
                        setTimeout(() => {
                            setSuccess(null)
                        }, 3000);
                    }else{
                        setAlert("❌ Mina Xanaları yanlışdır")
                        setTimeout(() => {
                            setAlert(null)
                        }, 3000);
                    }
                } else {
                    setAlert("❌ Mina sayı yanlışdır")
                    setTimeout(() => {
                        setAlert(null)
                    }, 3000);
                }
            } else if (data.resolution_count == 9) {
                if (data.mines_count >= 1 && data.mines_count < 81) {
                    if(data.array.length == data.mines_count){
                        await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/mines.json", {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data)
                        })
                        setSuccess("✅ Əlavə Edildi!")
                        setTimeout(() => {
                            setSuccess(null)
                        }, 3000);
                    }else{
                        setAlert("❌ Mina Xanaları yanlışdır")
                        setTimeout(() => {
                            setAlert(null)
                        }, 3000);
                    }
                } else {
                    setAlert("❌ Mina sayı yanlışdır")
                    setTimeout(() => {
                        setAlert(null)
                    }, 3000);
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    const cellclick = (index)=>{
        const test = data.array.find((element)=>{
            if(index == element){
                return true
            }else{
                return false
            }
        })
        if(test){
            const arrindex = data.array.indexOf(test)
            data.array.splice(arrindex, 1);
            setData({...data,array:data.array})
        }else{
            setData({...data,array:[...data.array,index]})
        }
        

    }
    return (
        <div className='settings'>
            {alert ? (<div className='alert-danger alert'>{alert}</div>) : (null)}
            {success ? (<div className='alert-success alert'>{success}</div>) : (null)}
            <h2 className='mt-2'>Mines</h2>
            {data ? (
                <div className='container'>
                    {data.file_id != "" ? (
                        <div className=' shadow mt-2 video'>
                            <div className='close' onClick={removeVideo}>
                                <img src="../../icon/close.svg" alt="" />
                            </div>
                            <video className="fullscreen-video" autoPlay muted loop>
                                <source src={`https://back.moccha77.com/video/${data.file_id}`} type="video/mp4" />
                            </video>
                        </div>
                    ) : (null)}
                    {data.file_id == "" ? (
                        <form onSubmit={handleUpload} className='form form-control py-4 px-3 shadow mt-2'>
                            <input type="file" accept="video/*" onChange={handleFileChange} className='form-control' />
                            <button type="submit" className={uploaded ? ("btn btn-success mt-3") : ("btn btn-outline-primary mt-3")} disabled={uploading} >{uploading ? (uploaded ? ("Yükləndi") : ("Yüklənir...")) : ("Yüklə")}</button>
                        </form>
                    ) : (null)}
                    <form onSubmit={handleSubmit} className='form form-control py-4 px-3 shadow mt-2'>
                        <div className='mb-3 border p-2'>
                            <label htmlFor="resolution_count" className='form-label'>Xana Sayını Seçin</label>
                            <select value={data.resolution_count} name="resolution_count" id="resolution_count" className='form-control' onChange={handleChange}>
                                <option value="0">Seçim Et</option>
                                <option value="3">3x3</option>
                                <option value="5">5x5</option>
                                <option value="7">7x7</option>
                                <option value="9">9x9</option>
                            </select>
                        </div>
                        <div className='mb-3 border p-2'>
                            <label htmlFor="mines_count" className='form-label'>Mina Sayını Daxil Edin</label>
                            <input type="number" value={data.mines_count} name='mines_count' id='mines_count' className='form-control' onChange={handleChange} />

                        </div>
                        {data.resolution_count == 3?(
                            <div className='mb-3 border p-2 boxes3'>
                            {divs9.map((_, index) => (
                                <div key={index} className=" border p-2 cell3" onClick={()=>cellclick(index+1)}>
                                    {data.array.find((element)=>{
                                        if(element == index+1){
                                            return(true)
                                        }else{
                                            return(false)
                                        }
                                    })?("💣"):("💎")}
                                </div>
                                
                            ))}
                        </div>
                        ):(null)}
                        {data.resolution_count == 5?(
                            <div className='mb-3 border p-2 boxes5'>
                            {divs25.map((_, index) => (
                                <div key={index} className=" border p-2 cell5" onClick={()=>cellclick(index+1)}>
                                    {data.array.find((element)=>{
                                        if(element == index+1){
                                            return(true)
                                        }else{
                                            return(false)
                                        }
                                    })?("💣"):("💎")}
                                </div>
                                
                            ))}
                        </div>
                        ):(null)}
                        {data.resolution_count == 7?(
                            <div className='mb-3 border p-2 boxes7'>
                            {divs49.map((_, index) => (
                                <div key={index} className=" border p-2 cell7" onClick={()=>cellclick(index+1)}>
                                    {data.array.find((element)=>{
                                        if(element == index+1){
                                            return(true)
                                        }else{
                                            return(false)
                                        }
                                    })?("💣"):("💎")}
                                </div>
                                
                            ))}
                        </div>
                        ):(null)}
                        {data.resolution_count == 9?(
                            <div className='mb-3 border p-2 boxes9'>
                            {divs81.map((_, index) => (
                                <div key={index} className=" border p-2 cell9" onClick={()=>cellclick(index+1)}>
                                    {data.array.find((element)=>{
                                        if(element == index+1){
                                            return(true)
                                        }else{
                                            return(false)
                                        }
                                    })?("💣"):("💎")}
                                </div>
                                
                            ))}
                        </div>
                        ):(null)}
                        <button className='mt-3 btn btn-primary'>Yadda Saxla</button>
                    </form>
                </div>

            ) : (null)}

        </div>
    )
}

export default Minessettings