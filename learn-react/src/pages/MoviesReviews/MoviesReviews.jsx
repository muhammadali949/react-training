import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams} from 'react-router';
import ReviewsTable from '../../componets/ReviewsTable';

function MoviesReviews() {
    const [data, setdata] = useState([])
    const {id}=useParams()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=742ad2778f4a03c2219378998891964f&language=en-US&page=1`)
        .then(res => {
            console.log(res.data.results)
            setdata(res.data.results);
            
        })
        return () => {
            
        }
    }, [])
    return (
        <div>
            <ReviewsTable data={data} />
        </div>
    )
}

export default MoviesReviews;
