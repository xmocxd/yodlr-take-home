// REQUIREMENTS
// * Users should be able to register
// * Admin page should list all users
// * Design/layout of content

// * Signup form validation
// * Automated testing

import React, { useEffect, useState } from 'react';

function App ()
{
    const [message, setMessage] = useState('');
    
    useEffect(() => {
        fetch('/api/users')
        .then((res) => res.text())
        .then((data) => setMessage(data));
    }, []);
    
    return (
        <>
            <p>{message}</p>
        </>
    );
}

export default App;