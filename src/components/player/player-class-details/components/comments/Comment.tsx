import Image from 'next/image';
import React from 'react';
import { MdArrowDropDown, MdThumbUp } from 'react-icons/md';

export const Comment = () => {
    return (
        <div className='flex gap-2 items-start'>
            <Image
                className='rounded'
                src={'http://10.86.177.250:5020/uploads/fotos/usuarios/0f79baea79a7-IVAN%20LUIZ%20BELSHOFF%20RODRIGUES%20PINTO%20-%202.jpg'}
                alt='Imagem de Perfil'
                width={40}
                height={40}
                draggable={false}
            />

            <div className='bg-paper flex-1 flex flex-col gap-4 p-2 rounded'>
                <div className='flex gap-2 items-center'>
                    <span className='font-bold'>User name</span>
                    <span className='font-extrabold text-xs opacity-50'>25/07/2024 às 14:00</span>
                </div>
                <p>Comment</p>
                <div className='flex gap-4'>
                    <div className='flex gap-1 items-center'>
                        <MdThumbUp />
                        <span>5</span>
                    </div>
                    <button className='flex gap-1 items-center text-primary'>
                        <MdArrowDropDown size={24} />
                        <span>Ver respostas (5)</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
