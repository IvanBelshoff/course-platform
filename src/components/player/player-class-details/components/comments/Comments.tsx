import React from 'react';
import { Comment } from './Comment';

export const Comments = () => {
    return (
        <div className='flex gap-2 flex-col'>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    );
};
