import React,{useState,useEffect} from 'react';
import {withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import Navigation from '../components/navigation';
import {Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import {Carousel,CarouselItem,CarouselControl} from 'reactstrap';

const galleryImages = require.context('../img/art/', true);

const mapStateToProps = state => {
    return {
        artists: state.artists
    }
};

const Images = props =>{   
  const [artist,setArtist] = useState({});
  const [items,setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(()=> {
    setArtist(props.Artist)
    setImageLinks(artist)
  },[artist]);

  const setImageLinks = artist =>{
    const name = artist && artist.name;
    if(name){
      const nameArray = name.split(' ');
      const nameFormatted = `${nameArray[0]}_${nameArray[1]}`;
      const tempItems = [];

      for(let i=1;i<40;i++){
        const imageloc = `${nameFormatted}/${nameFormatted}_${i}.jpg`;
        const image = {src:imageloc,altText:nameFormatted};
        tempItems.push(image);
      }
      setItems(tempItems);
    }
  } 
 
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

  const slides = items.map(item => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <img src={galleryImages(`./${item.src}`)} height='700' alt={item.altText} />
      </CarouselItem>
    );
  });
    return(
        <>
          <Navigation/>
            <div className='container-fluid bg-secondary mb-2'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                      <Breadcrumb>
                        <BreadcrumbItem><Link to="/artists">Artists</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{artist && artist.name}</BreadcrumbItem>
                      </Breadcrumb>
                      <h2 className='text-center mb-2 bg-secondary text-white'>{artist && artist.name}</h2>
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