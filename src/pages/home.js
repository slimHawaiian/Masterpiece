import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

const Home = ()=>{
    return(
        <>
            <Navigation/>
            <div className=" container mb-2">
                <div className='row'>
                    <div className='col text-center'>
                    <h1 className="display-4 text-center">Welcome To Masterpiece!</h1>
                    <img width='1000' src={require('../img/intro.jpeg')}></img>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center my-4'>
                            <h3>Featured Artists</h3>
                        </div>
                </div>
                <div className='row' style={{height:'200px'}}>
                    <div className='col-md-4 text-center'>
                        <a href= '/images/5f67599c11eb5e0b6ebaf33a'>
                            <img width='150' height='150' src={require('../img/artist/Diego Rivera.jpg')}></img>
                        </a>
                       
                    </div>
                    <div className='col-md-4 text-center '>
                        <a href='/images/5f67599c11eb5e0b6ebaf33c'>
                            <img width='150' height='150' src={require('../img/artist/Rene Magritte.jpg')}></img>                      
                        </a>
                        
                    </div>
                    <div className='col-md-4 text-center'>
                        <a href='/images/5f67599c11eb5e0b6ebaf339'>
                            <img width='150' height='150' src={require('../img/artist/Vasiliy Kandinskiy.jpg')}></img> 
                        </a>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h3>Featured Work</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                    <img  src={require('../img/art/Claude_Monet_12.jpg')}></img>
                    </div>
                </div>
            </div>
          <Footer/>
        </>
    )
}
export default Home;