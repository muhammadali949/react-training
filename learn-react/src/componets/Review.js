import React, { Component } from 'react'
import axios from 'axios';
import Table from './Table';

export class Review extends Component {

    state = {
        data: []
    }
    componentDidMount() {
        const moviesId = this.props.match.params.id
        console.log(moviesId)
        axios.get(`https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=742ad2778f4a03c2219378998891964f&language=en-US&page=1`)
            .then(res => {
                console.log(res.data.results)
                const data = res.data.results;
                this.setState({ data });
            })

    }
    render() {
        return (
            <div>
                <Table data={this.state.data} />
            </div>
        )
    }
}

export default Review;
