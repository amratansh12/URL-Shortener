import { useState } from 'react';
import './SearchBox.css'
// import { Search } from 'react-bootstrap-icons';
import jwt from 'jwt-decode'

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('')
    const [responseUrls, setResponseUrls] = useState([])
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    // const handleClick = (link) => {
    //     window.location.href = link
    // }

    const onSearch = (event) => {
        setSearchValue(event.target.value);
        fetch('https://url-shortener-api-chi.vercel.app/search', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userId: jwt(document.cookie.slice(4)).id,
                    urlSearch: searchValue
                })
            })
        .then(response => response.json())
        .then(result => {
            setResponseUrls([...result])
        })
        .catch(e => console.log('Unable to fetch API'))
    }
 
    return(
        <div className='searchBox'>
            <input type='text' placeholder='Search' onFocus={handleFocus} onBlur={handleBlur} onChange={(e)=>onSearch(e)}/>
            {
                isFocused && responseUrls.map((item, index) => (
                    <>
                        <div className='options' key={index}>
                            <p>{item.url}</p>
                            <p>{item.shortUrl}</p>
                        </div>
                    </>
                )) 
            }
        </div>
    );
}

export default SearchBox;