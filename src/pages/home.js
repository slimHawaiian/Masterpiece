import React from 'react';
import Navigation from '../components/navigation';

const Home = ()=>{
    return(
        <>
            <Navigation/>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <h1>Home</h1>
                </div>
            </div>
        </>
    )
}
export default Home;