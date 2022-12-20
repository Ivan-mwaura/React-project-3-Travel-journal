import React from 'react'
import './style.css'

function App(props){
    return(
        <div className='card'>
            <div className='card--content'>
                <div className='card-img'>
                    <img src={`/images/${props.image}`} className="card--image" alt={"Missing"}/>
                </div>
                <div className='card--prop'>
                    <div>{props.location}<a href={props.googleMapsUrl} className="location-link">&nbsp;&nbsp;view on Google Maps</a></div>
                    <div className='card--title'><h1>{props.title}</h1></div>
                    <div><p className='card--date'>{props.startDate}{props.endDate}</p></div>
                    <div>{props.description}</div>
                    <div>{props.imageurl}</div>
                </div>
               
            </div>
        </div>
    )
}
export default App;