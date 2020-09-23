import React, {Component } from 'react';
import {Switch,Route,Redirect,withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { fetchArtists } from '../redux/actionCreators';
import Home from '../pages/home';
import Artists from '../pages/artists';
import Landing from '../pages/landing';
import Settings from '../pages/settings';
import Images from '../pages/images';
import Carousel from '../pages/carousel';

const mapStateToProps = state => {
    return {
        artists: state.artists
    }
};

const mapDispatchToProps = {
    fetchArtists:(() => fetchArtists())
};


class  Main extends Component{

    componentDidMount() {
        this.props.fetchArtists();
    }
    
    render(){

        const HomePage = () =>{
            return(
                <Home />
            )
        }
    
        const LandingPage = () =>{
            return(
                <Landing />
            )
        }

        const SettingsPage = () =>{
            return(
                <Settings />
            )
        }
        const ImagesPage = ({match}) =>{
            const id = match.params.artistId;
            const artist = this.props.artists.artists.find(x  => x._id === id);
            console.log('artist',id,artist);
            return(
                <Images Artist={artist} />
            )
        }
    
        const ArtistPage = () =>{
            return(
                <Artists Artists={this.props.artists}
                    artistsLoading={this.props.artists && this.props.artists.isLoading}
                    artistsErrMess={this.props.artists && this.props.artists.errMess}/>
            )
        }

        const CarouselPage = () =>{
            return <Carousel/>

        }

        return (
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/artists' component={ArtistPage} />
                <Route path='/settings' component={SettingsPage} />
                <Route path='/images/:artistId' component={ImagesPage} />
                <Route path='/' component={LandingPage} />
                <Redirect to='/'/>
            </Switch>
        );
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));