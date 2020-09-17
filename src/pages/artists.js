import React from 'react';
import Navigation from '../components/navigation';

const Artists = props =>{   
    const artists = props.Artists.artists;
    console.log(artists);
    return(
        <>
            <Navigation/>
            <div className='container'>
                {
                    artists.artists && artists.artists.map((x,i)=> 
                        <div className= 'row' key={i}>
                             <div className='col mb-5'>
                                <div className='row text-center'>
                                    <div className='col mb-2'> 
                                        <h3>{x.name}</h3>
                                    </div> 
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>
                                        <img className='rounded-circle' height='200' src={require('../img/artist/rembrant.jpg')} alt={x.name}/>   
                                    </div>   
                                    <div className='col-md-6'>
                                        <p>{x.bio}</p>
                                        <p>{x.nationality}</p>
                                        <p>{x.genre}</p>
                                        <p>{x.years}</p>
                                    </div>  
                                </div> 
                            </div> 
                            <hr/>
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default Artists;