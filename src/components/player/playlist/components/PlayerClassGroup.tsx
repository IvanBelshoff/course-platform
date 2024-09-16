import React from 'react';
import { IPlayerClassProps, PlayerClass } from './PlayerClass';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

export interface IPlayerClassGroupProps {
    position: number;
    open: boolean;
    title: string;
    playingClassId: string;
    classes: (Pick<IPlayerClassProps, 'title' | 'done'> & { classId: string })[];
    onToggle: () => void;
    onPlay: (classId: string) => void;
    onCheck: (classId: string) => void;
}

export const PlayerClassGroup: React.FC<IPlayerClassGroupProps> = ({ classes, position, title, open, onToggle, onPlay, onCheck, playingClassId }) => {
    return (
        <div className='flex flex-col' >

            <button className='flex gap-2 p-4 bg-paper items-center active:opacity-80' onClick={onToggle}>
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
                            plyaing={classItem.classId === playingClassId}
                            onCheck={() => onCheck(classItem.classId)}
                            onPlay={() => onPlay(classItem.classId)}
                        />
                    </li>
                ))}
            </ol>

        </div>
    );
};
