import { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox'
import './URLShortenerBox.css'
import { ClipboardFill } from 'react-bootstrap-icons';
import jwt from 'jwt-decode';

const URLShortenerBox = () => {

    const [urlInput, setUrlInput] = useState('')
    const [shortUrl, setShortUrl] = useState('')

    function onUrlChange(value){
        setUrlInput(value);
    }

    async function onURLSubmit(){
        fetch('https://url-shortener-api-chi.vercel.app/url', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    url: urlInput,
                    userId: jwt(document.cookie.slice(4)).id
                })
            })
        .then(response => response.json())
        .then(result => setShortUrl(result.short_url))
        .catch(e => console.log('Unable to fetch API'))
    }

    return(
        <>
            <SearchBox />
            <div className="urlShortenerBox">
                <label htmlFor="url">Enter the URL here :</label>
                <input type="text" name='url' id='url' onChange={(event) => onUrlChange(event.target.value)} placeholder='Enter URL'/>
                <button className='submitButton' onClick={onURLSubmit}>Submit URL</button>
                <div className="results">
                    <a href={shortUrl ? shortUrl : null} target="_blank" rel="noreferrer">{shortUrl ? shortUrl : 'Short link here'}</a>
                    <button class='copyButton' onClick={() => {navigator.clipboard.writeText(shortUrl)}}>
                        Copy link
                        <ClipboardFill />
                    </button>
                </div>
            </div>
        </>
    );
}

export default URLShortenerBox;