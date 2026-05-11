import FriendProvider from '@/context/FriendProvider';
import React from 'react';

const Provider = ({children}) => {
    return (
        <div>
            <FriendProvider>{children}</FriendProvider>
        </div>
    );
};

export default Provider;