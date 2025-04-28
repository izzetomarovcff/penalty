import React, { useEffect, useState } from 'react'
function Penaltysettings() {
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
      await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/shoots.json", {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...data,file_id:result.fileName})
      })
      const responses = await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/shoots.json")
        const data1 = await responses.json()
        setData(data1)
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/shoots.json")
        const data = await response.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  const handlecheck = async () => {
    try {
      
        await fetch("https://moccha77-fbe81-default-rtdb.firebaseio.com/shoots.json", {
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
      
    } catch (error) {
      console.log(error)
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  const removeVideo = ()=>{
    setData(prevState => ({
      ...prevState,
      file_id:""
    }))
    setUploaded(false)
    setUploading(false)
  }
  return (
    <div className='settings'>
      {alert ? (<div className='alert-danger alert'>{alert}</div>) : (null)}
      {success ? (<div className='alert-success alert'>{success}</div>) : (null)}
      <h2 className='mt-2'>Penalty</h2>
      {data ? (
        <div className='container'>
          {data.file_id != ""?(
            <div className=' shadow mt-2 video'>
            <div className='close' onClick={removeVideo}>
              <img src="../../icon/close.svg" alt="" />
            </div>
            <video className="fullscreen-video" autoPlay muted loop>
              <source src={`https://back.moccha77.com/video/${data.file_id}`} type="video/mp4" />
            </video>
          </div>
          ):(null)}
          {data.file_id == ""?(
          <form onSubmit={handleUpload} className='form form-control py-4 px-3 shadow mt-2'>
            <input type="file" accept="video/*" onChange={handleFileChange}  className='form-control'/>
            <button type="submit" className={uploaded?("btn btn-success mt-3"):("btn btn-outline-primary mt-3")} disabled={uploading} >{uploading?(uploaded?("Yükləndi"):("Yüklənir...")):("Yüklə")}</button>
          </form>
          ):(null)}
          <form onSubmit={handleSubmit} className='form form-control py-4 px-3 shadow mt-2'>
            <div className='mb-3 border p-2'>
              <label htmlFor="shoot_1" className='form-label'>1-ci Vuruş</label>
              <select value={data.shoot_1} name="shoot_1" id="shoot_1" className='form-control' onChange={handleChange}>
                <option value="5">Seçim Et</option>
                <option value="0">Sol Aşağı</option>
                <option value="1">Sol Yuxarı</option>
                <option value="2">Yuxarı</option>
                <option value="3">Sağ Yuxarı</option>
                <option value="4">Sağ Aşağı</option>
              </select>
            </div>
            <div className='mb-3 border p-2'>
              <label htmlFor="shoot_2" className='form-label'>2-ci Vuruş</label>
              <select value={data.shoot_2} name="shoot_2" id="shoot_2" className='form-control' onChange={handleChange}>
                <option value="5">Seçim Et</option>
                <option value="0">Sol Aşağı</option>
                <option value="1">Sol Yuxarı</option>
                <option value="2">Yuxarı</option>
                <option value="3">Sağ Yuxarı</option>
                <option value="4">Sağ Aşağı</option>
              </select>
            </div>
            <div className='mb-3 border p-2'>
              <label htmlFor="shoot_3" className='form-label'>3-cü Vuruş</label>
              <select value={data.shoot_3} name="shoot_3" id="shoot_3" className='form-control' onChange={handleChange}>
                <option value="5">Seçim Et</option>
                <option value="0">Sol Aşağı</option>
                <option value="1">Sol Yuxarı</option>
                <option value="2">Yuxarı</option>
                <option value="3">Sağ Yuxarı</option>
                <option value="4">Sağ Aşağı</option>
              </select>
            </div>
            <div className='mb-3 border p-2'>
              <label htmlFor="shoot_4" className='form-label'>4-cü Vuruş</label>
              <select value={data.shoot_4} name="shoot_4" id="shoot_4" className='form-control' onChange={handleChange}>
                <option value="5">Seçim Et</option>
                <option value="0">Sol Aşağı</option>
                <option value="1">Sol Yuxarı</option>
                <option value="2">Yuxarı</option>
                <option value="3">Sağ Yuxarı</option>
                <option value="4">Sağ Aşağı</option>
              </select>
            </div>
            <div className='mb-3 border p-2'>
              <label htmlFor="shoot_5" className='form-label'>5-cü Vuruş</label>
              <select value={data.shoot_5} name="shoot_5" id="shoot_5" className='form-control' onChange={handleChange}>
                <option value="5">Seçim Et</option>
                <option value="0">Sol Aşağı</option>
                <option value="1">Sol Yuxarı</option>
                <option value="2">Yuxarı</option>
                <option value="3">Sağ Yuxarı</option>
                <option value="4">Sağ Aşağı</option>
              </select>
            </div>
            <button className='mt-3 btn btn-primary'>Yadda Saxla</button>
          </form>
        </div>

      ) : (null)}

    </div>
  )
}

export default Penaltysettings