import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedComponent = ({ children }) => {
    return (
        <div className='flex flex-col mx-2'>
        {children}
        </div>
    )
}

export default ProtectedComponent;