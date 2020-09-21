import React from 'react';
import Navigation from '../components/navigation';
var bioImages = require.context('../img/artist', true);
var galleryImages = require.context('../img/thumb', true);

const Artists = props =>{   
    const artists = props.Artists.artists;
    
    return(
        <>
            <Navigation/>
            <div className='container'>
                {
                    artists && artists.slice(0, 5).map((x,i)=> {
                       const imageLink = bioImages(`./${x.name}.jpg`);
                       const galleryLink = galleryImages(`./${x.name}.jpg`);
                       console.log('name',x.name);
                       return(
                        <div className= 'row' key={i}>
                                <div className='col mb-5 p-2 pb-3 pl-3 border rounded-lg border-dark border-bottom-5 '>
                                <div className='row text-center'>
                                    <div className='col mb-2 pt-2'> 
                                        <h2>{x.name}</h2>
                                    </div> 
                                </div>
                                <div className='row'>
                                    <div className='col-md-3 text-center'>
                                        <img className='rounded-circle' height='250' src={imageLink} alt={x.name}/>   
                                    </div>   
                                    <div className='col-md-8'>
                                        <p>{x.bio}</p>
                                    </div>  
                                </div> 
                                <div className='row'>
                                    <div className='col-md-3'></div>
                                    <div className='col-md-4'>
                                        <p>{x.nationality}</p>
                                        <p>{x.genre}</p>
                                        <p>{x.years}</p>
                                        <p><a target = '_blank' href={x.wikipedia}>Learn more</a></p>
                                    </div>
                                    <div className='col-md-4 text-right'>
                                        <a href='#' ><img className='rounded' height='150' width='150' src={galleryLink} alt={x.name} /></a> 
                                    </div>
                                </div>
                            </div> 
                        </div>
                    )})
                }
            </div>
        </>
    )
}
export default Artists;