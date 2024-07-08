import { Metadata } from 'next';
import React from 'react';

interface Props {
    params: { id: string }
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: "CodarSe - Curso de API Rest, Node e Typescript",
    };
};

export default function pageCourseDetail({ params }: Props) {
    return (
        <main className='mt-8 flex justify-center'>
            Detalhe do Curso {params.id}
        </main>
    );
};
