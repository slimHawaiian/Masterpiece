import React, {Component } from 'react';
import {Switch,Route,Redirect,withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import { fetchArtists } from '../redux/actionCreators';
import Home from '../pages/home';
import Artists from '../pages/artists';
import Landing from '../pages/landing';

const mapStateToProps = state => {
    console.log('state',state);
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
    
        const ArtistPage = () =>{
            console.log('artist page',this.props.artists);
            return(
                <Artists Artists={this.props.artists}
                    artistsLoading={this.props.artists && this.props.artists.isLoading}
                    artistsErrMess={this.props.artists && this.props.artists.errMess}/>
            )
        }
        return (
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/artists' component={ArtistPage} />
                <Route path='/' component={LandingPage} />

                <Redirect to='/'/>
            </Switch>
        );
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));