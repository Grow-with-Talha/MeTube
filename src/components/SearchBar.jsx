import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';
const SearchBar = () => { 
    const [searchterm, setsearchterm] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(searchterm){
            navigate(`/search/${searchterm}`)

            setsearchterm('');
        }
    }
    
    return(
    <Paper 
    component="form"
    onSubmit={handleSubmit}
    sx={{
        borderRadius: 20,
        border: "2px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 }}}>
            <input name= "searchterm" className='search-bar' type="text" placeholder='search...' value={searchterm} onChange={(e) => setsearchterm(e.target.value)} />
            
            <IconButton type='submit' sx={{p:"10px", color:"red"}}>
                <Search />
            </IconButton>
        </Paper>
  )}


export default SearchBar