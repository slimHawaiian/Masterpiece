import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

const Settings = ()=>{
    return(
        <>
            <Navigation/>
            <div className='container' style={{minHeight:'700px'}}>
                <div className='d-flex justify-content-center'>
                    <h1>Settings</h1>
                </div>
                <div className='row mt-4'>
                    <div className='col-md-6'>
                        col 1
                    </div>
                    <div className='col-md-6'>
                        col 2
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Settings;