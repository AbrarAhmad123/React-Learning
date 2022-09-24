import React from 'react';
import axios from 'axios';
import Searchinput from './Searchinput';
import ImageList from './ImageList';

class App extends React.Component {
    state={images: [] }

    onSearchSubmit= async(entry)=> {
    const response=await axios.get(`https://pixabay.com/api/?key=30100149-081b0c06dfebf9b54a43c831b&q=${entry}&image_type=photo`)
    this.setState({images :response.data.hits})
   }
   


   
    render(){


        return(
        <div className='ui container' style={{marginTop:'30px'}}>
            <Searchinput onSearchSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
    )

    }
}


export default App;