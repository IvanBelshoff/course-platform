import React from 'react';
import { IPlayerClassProps, PlayerClass } from './PlayerClass';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

interface IPlayerClassGroupProps {
    position: number;
    open: boolean;
    title: string;
    classes: Omit<IPlayerClassProps, 'onPlay' | 'onCheck'>[];
    onToggle: () => void;
}

export const PlayerClassGroup: React.FC<IPlayerClassGroupProps> = ({ classes, position, title, open, onToggle }) => {
    return (
        <div className='flex flex-col' >

            <button className='flex gap-2 p-4 bg-paper items-center' onClick={onToggle}>
                <div className='bg-background h-12 w-12 items-center justify-center flex rounded-full'>
                    {position}
                </div>
                <div className='flex flex-col flex-1 items-start'>
                    <span className='font-bold line-clamp-1 text-start'>{title}</span>
                    <span className='text-sm font-light line-clamp-1 text-start'>
                        {classes.filter((classItem) => classItem.done).length}/{classes.length} aulas
                    </span>
                </div>

                {open ? (<MdKeyboardArrowDown size={28} />) : (<MdKeyboardArrowRight size={28} />)}

            </button>

            <ol data-open={open} className='flex flex-col data-[open=false]:hidden'>
                {classes.map((classItem) => (
                    <li key={classItem.title}>
                        <PlayerClass
                            {...classItem}
                            onCheck={() => console.log('check')}
                            onPlay={() => console.log('play')}
                        />
                    </li>
                ))}
            </ol>

        </div>
    );
};
