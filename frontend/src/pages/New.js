import React, { Component } from 'react'
import './New.css';
import api from '../services/api';


class New extends Component{

    state = {
        image : null,
        author: '',
        description: '',
        place: '',
        hashtags: '',
    };

    handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData();
        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('description', this.state.description);
        data.append('place', this.state.place);
        data.append('hashtags', this.state.hashtags);
        
        await api.post('posts', data);
        this.props.history.push('/');
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] })
    }

    handleChange = e => { 
        this.setState({ [e.target.name] : e.target.value })
    }
    render(){
        return(
            <form action="" id="new-post" onSubmit={ this.handleSubmit }>
                 
                    <input type="file" onChange={ this.handleImageChange }/>
                    <input 
                        name="author"
                        type="text"
                        placeholder="Autor do post"
                        onChange={this.handleChange}
                        value={this.state.author}
                    />
                  
                    <input 
                        name="place"
                        type="text"
                        placeholder="Local do post"
                        onChange={this.handleChange}
                        value={this.state.place}
                    />
                  
                    <input 
                        name="description"
                        type="text"
                        placeholder="Descrição do post"
                        onChange={this.handleChange}
                        value={this.state.description}
                    />
                    <input 
                        name="hashtags"
                        type="text"
                        placeholder="Hashtags do post"
                        onChange={this.handleChange}
                        value={this.state.hashtags}
                    />
                  
                    <button type="submit">Enviar</button>
            </form>   
        );
    }
}

export default New;