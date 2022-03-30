import React from 'react';

export const AuthGuard = ({ children }) => {
    return (
        <>
        {localStorage.getItem('jwt') && (
                children
            )}
        </>
    );
};
