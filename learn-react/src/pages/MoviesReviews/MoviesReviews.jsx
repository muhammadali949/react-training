import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams} from 'react-router';
import ReviewsTable from '../../componets/ReviewsTable';

const {REACT_APP_BASE,REACT_APP_KEY_API} = process.env


function MoviesReviews() {
    const [data, setdata] = useState([])
    const {id}=useParams()

    useEffect(() => {
        axios.get(`${REACT_APP_BASE}/movie/${id}/reviews?api_key=${REACT_APP_KEY_API}&language=en-US&page=1`)
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
