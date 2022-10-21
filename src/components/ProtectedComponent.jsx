import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedComponent = ({ children }) => {
    return (
        <div className=''>
        {children}
        </div>
    )
}

export default ProtectedComponent;