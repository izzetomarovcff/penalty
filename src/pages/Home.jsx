import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home '>
            <div className="technic">
                <div className="text-center">
                    <div className="spinner-border text-light mb-4">
                    </div>
                    <h2 className="fw-bold">Texniki Cəhətdən Baxış Keçirilir ...</h2>
                    <p className="lead">Zəhmət Olmasa Bir Neçə Dəqiqə Sonra Təkrar Yoxlayın</p>
                </div>
            </div>
            <div className="game card shadow imgdiv rounded">
                <img src="image/penalty.jpg" alt="" className='rounded' />

                <Link to={"/penalty/settings"} className='settings'>
                    <img src="icon/settings.svg" alt="" />
                </Link>
                <Link to={"/penalty/play"} className='play'>
                    <img src="icon/play.svg" alt="" />
                </Link>
                <div className='requests'>
                    <Link to={"penalty/requests"} className='btn btn-warning req'>
                        İstəklər
                    </Link>
                </div>


            </div>
            <div className="game card shadow imgdiv rounded">
                <img src="image/mines.webp" alt="" className='rounded' />
                <Link to={"/mines/settings"} className='settings'>
                    <img src="icon/settings.svg" alt="" />
                </Link>
                <Link to={"/mines/play"} className='play'>
                    <img src="icon/play.svg" alt="" />
                </Link>
                <div className='requests'>
                    <Link to={"/mines/requests"} className='btn btn-warning req'>
                        İstəklər
                    </Link>
                </div>
            </div>
            <div className="game card shadow imgdiv rounded">
                <img src="image/aviator.jpg" alt="" className='rounded' />
                <Link to={"/aviator/settings"} className='settings'>
                    <img src="icon/settings.svg" alt="" />
                </Link>
                <Link to={"/aviator/play"} className='play'>
                    <img src="icon/play.svg" alt="" />
                </Link>
                <div className='requests'>
                    <Link to={"/aviator/requests"} className='btn btn-warning req'>
                        İstəklər
                    </Link>
                </div>
            </div>
            <div className="game card shadow imgdiv rounded">
                <img src="image/mrthimble.jpg" alt="" className='rounded' />
                <Link to={"/mrthimble/settings"} className='settings'>
                    <img src="icon/settings.svg" alt="" />
                </Link>
                <Link to={"/mrthimble/play"} className='play'>
                    <img src="icon/play.svg" alt="" />
                </Link>
                <div className='requests'>
                    <Link to={"/mrthimble/requests"} className='btn btn-warning req'>
                        İstəklər
                    </Link>
                </div>
            </div>
            <div className="game card shadow imgdiv rounded">
                <img src="image/highflyer.png" alt="" className='rounded' />
                <Link to={"/highflyer/settings"} className='settings'>
                    <img src="icon/settings.svg" alt="" />
                </Link>
                <Link to={"/highflyer/play"} className='play'>
                    <img src="icon/play.svg" alt="" />
                </Link>
                <div className='requests'>
                    <Link to={"/highflyer/requests"} className='btn btn-warning req'>
                        İstəklər
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home