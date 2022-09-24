import React from 'react';


class Searchinput extends React.Component{
    state={entry:''}
    
    OnFormSubmit = (event) => {

        event.preventDefault()
        this.props.onSearchSubmit(this.state.entry)
     }

    render(){
        return(
            <div className='UI segment'>
                <form onSubmit={this.OnFormSubmit} className='ui form'>
                    <div className='fields'>
                        <div className='ui massive icon input'>
                        <input 
                        type="text" 
                        placeholder='Search...' 
                         onChange={(event) => this.setState({entry:event.target.value})}
                         value ={this.state.entry}
                         /> 
                         <i className='Search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchinput; 