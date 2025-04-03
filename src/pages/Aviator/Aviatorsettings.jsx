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
              </div>
            ):(null)}
    </div>
  )
}

export default Aviatorsettings