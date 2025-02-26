import React from 'react'
import './App.css'
import myImage1 from '../../public/shiva.jpg'

const App = () => {

    console.log("api url", API_URL)
    const handleFunction = () => {
        console.log("Hello Mike..")
    }
    return (
        <div className='container'>
            <div id='god-name'>
                <h3>Maha Siva Rathri...!</h3>
                <div>
                    <img src={myImage1} width={300} height={300} />
                </div>
            </div>
        </div>
    )
}

export default App
