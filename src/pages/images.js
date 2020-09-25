import React,{useState} from 'react';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import Navigation from '../components/navigation';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
  } from 'reactstrap';

const mapStateToProps = state => {
    return {
        artists: state.artists
    }
};

const items = [
    {
      src: require('../img/art/Amedeo_Modigliani/Amedeo_Modigliani_1.jpg')
    },
    {
      src: require('../img/art/Amedeo_Modigliani/Amedeo_Modigliani_2.jpg')
    },
    {
      src: require('../img/art/Amedeo_Modigliani/Amedeo_Modigliani_3.jpg')
    },
    {
      src: require('../img/art/Amedeo_Modigliani/Amedeo_Modigliani_4.jpg')
    },
    {
      src: require('../img/art/Amedeo_Modigliani/Amedeo_Modigliani_6.jpg')
    },
    {
      src: require('../img/art/Amedeo_Modigliani/Amedeo_Modigliani_7.jpg')
    },
    {
      src: require('../img/art/Amedeo_Modigliani/Amedeo_Modigliani_8.jpg')
    },
    {
      src: require('../img/art/Amedeo_Modigliani/Amedeo_Modigliani_9.jpg')
    },
    {
      src: require('../img/art/Amedeo_Modigliani/Amedeo_Modigliani_10.jpg')
    },
  ];
 
const Images = props =>{   
    const artist = props.Artist;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
    return(
        <>
            <Navigation/>
             <div className='container-fluid bg-secondary '>
               
                 <div className='row'>
                     <div className='col-md-12 text-center'>
                     <Breadcrumb>
                            <BreadcrumbItem><Link to="/artists">Artists</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{artist && artist.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2 className='text-center mb-4 bg-secondary text-white'>{artist && artist.name}</h2>
                        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                        </Carousel>
                     </div>
                 </div>
            </div>
            <Footer/>
        </>
    )
}
export default withRouter(connect(mapStateToProps)(Images));