import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
const bioImages = require.context('../img/artist', true);
const galleryImages = require.context('../img/thumb', true);


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
                       return(
                        <div className= 'row' key={i}>
                                <div className='col my-2 bg-white p-2 pb-2 pl-3 border rounded-lg border-dark border-bottom-5 '>
                                <div className='row text-center'>
                                    <div className='col mb-2 pt-2'> 
                                        <h2>{x.name}</h2>
                                    </div> 
                                </div>
                                <div className='row'>
                                    <div className='col-md-2 text-center'>
                                        <a target = '_blank' rel="noopener noreferrer" href={x.wikipedia}><img className='rounded-circle' height='180' src={imageLink} alt={x.name}/>  </a> 
                                    </div>   
                                    <div className='col-md-10 pr-4'>
                                        <p>{x.bio}</p>
                                    </div> 
                                </div> 
                                <div className='row'>
                                    <div className='col-md-2'></div>
                                    <div className='col-md-5'>
                                        <p>{x.nationality}</p>
                                        <p>{x.genre}</p>
                                        <p>{x.years}</p>
                                    </div>
                                    <div className='col-md-5 text-right pr-4'>
                                        <Link to={`/images/${x._id}`}><img className='rounded' height='150' width='150' src={galleryLink} alt={x.name} /></Link> 
                                    </div>
                                </div>
                            </div> 
                        </div>
                    )})
                }
            </div>
            <Footer/>
        </>
    )
}
export default Artists;