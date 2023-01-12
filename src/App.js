import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [hello, setHello] = useState('')
    useEffect(function() {
        axios.get('/api/hello')
            .then(function(response){
                setHello(response.data)
            })
            .catch(function(error){
                console.log("error :: " + error)
            })
    },[]);

    return (
        <div>
            서버 데이터 : {hello}
        </div>
    );
}

export default App;