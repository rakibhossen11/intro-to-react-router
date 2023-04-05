import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend =  useLoaderData();
    console.log(friend);
    return (
        <div>
            <h5>Everything about this person</h5>
            <p>Name: {friend.name}</p>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;