import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';
import { UrlMatcher } from 'interweave-autolink';
const Interweave = dynamic(() => import('interweave').then(result => result.Interweave), { ssr: false });

interface IPlayerClassHeaderProps {
    title: string;
    description: string;
}

export const PlayerClassHeader: React.FC<IPlayerClassHeaderProps> = ({ title, description }) => {

    const urlMatcher = useMemo(() => {
        return new UrlMatcher('urlMatcher', { validateTLD: false }, ({ url }) => (<a href={url} target='_blank' className='text-primary'>{url}</a>));
    }, []);

    return (
        <div className='flex gap-2 flex-col'>
            <h3 className='font-extrabold text-xl'>
                {title}
            </h3>
            <Interweave
                content={description}
                matchers={[urlMatcher]}
            />
        </div>
    );
};
