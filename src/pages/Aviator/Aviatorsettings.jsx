import React, { useEffect, useState } from 'react'

function Aviatorsettings() {
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
              await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/aviator.json", {
                  method: "PUT",
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ ...data, file_id: result.fileName })
              })
              const responses = await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/aviator.json")
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
                  const response = await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/aviator.json")
                  const data = await response.json()
                  setData(data)
              } catch (error) {
                  console.log(error)
              }
          }
          fetchData()
      }, [])
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
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            await handlecheck()

        } catch (error) {
            console.log(error)
        }

    }
    const handlecheck = async () => {
        try{
            if(isNaN(Number(data.aviator_1)) || isNaN(Number(data.aviator_2)) || isNaN(Number(data.aviator_3)) || isNaN(Number(data.aviator_4)) || isNaN(Number(data.aviator_5))){
                setAlert("❌ Doğru Ədəd Daxil Et!")
                setTimeout(() => {
                    setAlert(null)
                }, 3000);
            }else{
                await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/aviator.json", {
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
            }
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div className='settings'>
      {alert ? (<div className='alert-danger alert'>{alert}</div>) : (null)}
            {success ? (<div className='alert-success alert'>{success}</div>) : (null)}
            <h2 className='mt-2'>Aviator</h2>
            {data?(
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
                            <label htmlFor="aviator_1" className='form-label'>1 Ci Uçuş</label>
                            <input type="text" value={data.aviator_1} name='aviator_1' id='aviator_1' className='form-control' onChange={handleChange} />
                        </div>
                        <div className='mb-3 border p-2'>
                            <label htmlFor="aviator_2" className='form-label'>2 Ci Uçuş</label>
                            <input type="text" value={data.aviator_2} name='aviator_2' id='aviator_2' className='form-control' onChange={handleChange} />
                        </div>
                        <div className='mb-3 border p-2'>
                            <label htmlFor="aviator_3" className='form-label'>3 Cü Uçuş</label>
                            <input type="text" value={data.aviator_3} name='aviator_3' id='aviator_3' className='form-control' onChange={handleChange} />
                        </div>
                        <div className='mb-3 border p-2'>
                            <label htmlFor="aviator_4" className='form-label'>4 Cü Uçuş</label>
                            <input type="text" value={data.aviator_4} name='aviator_4' id='aviator_4' className='form-control' onChange={handleChange} />
                        </div>
                        <div className='mb-3 border p-2'>
                            <label htmlFor="aviator_5" className='form-label'>5 Ci Uçuş</label>
                            <input type="text" value={data.aviator_5} name='aviator_5' id='aviator_5' className='form-control' onChange={handleChange} />
                        </div>
                        <button className='mt-3 btn btn-primary'>Yadda Saxla</button>
                        
                    </form>
              </div>
            ):(null)}
    </div>
  )
}

export default Aviatorsettings