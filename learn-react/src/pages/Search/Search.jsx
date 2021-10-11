import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container'
import Card from '../../componets/Card';
import {ThemeContext}from '../../App'

const {REACT_APP_BASE,REACT_APP_KEY_API} = process.env

function Home() {
    const theme = useContext(ThemeContext);  
    const [movies,setMovies] = useState([])
    const [data, setData] = useState([])
    const [lang, setLang] = useState('')
    const [genre, setGenre] = useState('')
    const [genreValue, setgenreValue] = useState('')
    const [date, setDate] = useState('')
    const [vote, setvote] = useState('')
    const [queryValue,setQueryValue] = useState('')


    useEffect(() => {
        axios.get(`${REACT_APP_BASE}/search/movie?api_key=${REACT_APP_KEY_API}&language=en-US&page=1&include_adult=false&query=${queryValue}
        `)
        .then(res =>setMovies(res.data.results))
        .catch(err=>console.log(err))
        return () => {
            
        }
    }, [queryValue])
    
   
    

    useEffect(() => {
        if(lang || genreValue ){
            axios.get(`${REACT_APP_BASE}/discover/movie?api_key=${REACT_APP_KEY_API}&with_original_language=${lang}&with_genres=${genreValue}

            `)
            .then(res =>setMovies(res.data.results))
            .catch(err=>console.log(err))
            return () => {
        }
    }
    }, [lang,genreValue])
    useEffect(() => {
        if(date || vote ){
            axios.get(`${REACT_APP_BASE}/discover/movie?api_key=${REACT_APP_KEY_API}&primary_release_date.lte=${date}&vote_average.lte=${vote}

            `)
            .then(res =>setMovies(res.data.results))
            .catch(err=>console.log(err))
            return () => {
        
    }
}
    }, [date,vote])
    

    useEffect(() => {
        axios.get(`${REACT_APP_BASE}/configuration/languages?api_key=${REACT_APP_KEY_API}
        `)
       
        .then(res =>setData(res.data))
        .catch(err=>console.log(err))
        
        return () => {
          
        }
    }, [])
    useEffect(() => {
        axios.get(`${REACT_APP_BASE}/genre/movie/list?api_key=${REACT_APP_KEY_API}&language=en-US
        `)
       
        .then(res =>setGenre(res.data))
        .catch(err=>console.log(err))
        
        return () => {
          
        }
    }, [])

    return (
        <div>
            <Container>
        <div style={{display:'flex'}}>
            <div>
              <h3>Title....</h3>
               <input style={{ width: '200px', padding: '10px', marginBottom: '20px' }} value={queryValue} onChange={e => setQueryValue(e.target.value)} />
            </div>
           <div>
            <h3 style={{marginLeft:'30px'}}>Language....</h3>
            {/* <input style={{ width: '400px', padding: '10px', marginBottom: '20px' ,marginLeft:'30px'}} value={lang} onChange={e => setLang(e.target.value)} />    */}
           <select style={{padding:'10px',width:'200px',marginLeft:'30px'}} name="" id="" value={lang} onChange={(e)=>setLang(e.target.value)} >
               {
                   data.map(d=>(<option key={d.iso_639_1}>{d.iso_639_1}</option>) )
               }
           </select>
           </div>
           <div>
            <h3 style={{marginLeft:'30px'}}>Genre....</h3>
            {/* <input style={{ width: '400px', padding: '10px', marginBottom: '20px' ,marginLeft:'30px'}} value={lang} onChange={e => setLang(e.target.value)} />    */}
           <select style={{padding:'10px',width:'200px',marginLeft:'30px'}} name="" id=""  onChange={(e)=>setgenreValue(e.target.value)} >
               {
                   genre.genres?.map(g=>(<option value={g.id} key={g.id} id={g.id}>{g.name}</option>) )
               }
           </select>
           </div>
           <div>
              <h3 style={{marginLeft:'30px'}}>Release Date....</h3>
               <input style={{ width: '200px', padding: '10px', marginBottom: '20px',marginLeft:'30px' }}  value={date} onChange={e => setDate(e.target.value)} />
            </div>
            <div>
              <h3 style={{marginLeft:'30px'}}>Vote_average....</h3>
               <input style={{ width: '200px', padding: '10px', marginBottom: '20px',marginLeft:'30px' }} type='number' value={vote} onChange={e => setvote(e.target.value)} />
            </div>
            
        </div>
                
            
             <Card movies={movies} theme={theme} />
            </Container>            
        </div>
    )
}

export default Home;
