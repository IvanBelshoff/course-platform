'use client';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Card, IcardProps } from "../card/Card";
import { UIEvent, useRef, useState } from "react";

interface ISectionProps {
    title: string;
    items: IcardProps[];
    variant: 'grid' | 'h-list';
}

export const Section = ({ title, variant = 'grid', items }: ISectionProps) => {

    const scrollRef = useRef<HTMLUListElement>(null);

    const [scrollAlt, setScrollAt] = useState<'start' | 'middle' | 'end'>('start');

    const handleScroll = (event: UIEvent<HTMLUListElement, globalThis.UIEvent>) => {
        if (event.currentTarget.scrollLeft === 0) {
            setScrollAt('start');
        } else if ((event.currentTarget.scrollWidth - event.currentTarget.clientWidth) === event.currentTarget.scrollLeft) {
            setScrollAt('end');
        } else {
            setScrollAt('middle');
        }
    };

    const handleSetScroll = (scroll: number) => {
        const currentScrollLeft = scrollRef.current?.scrollLeft || 0;

        scrollRef.current?.scrollTo({ behavior: 'smooth', left: currentScrollLeft + scroll });
    };


    return (
        <section className='flex flex-col gap-4 px-4'>
            <h2 className='font-bold text-xl'>
                {title}
            </h2>

            <ul
                ref={scrollRef}
                data-variant={variant}
                onScroll={handleScroll}
                className='grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto'
            >

                {variant === 'h-list' && (
                    <button
                        disabled={scrollAlt == 'start'}
                        onClick={() => handleSetScroll(-350)}
                        className='h-14 w-14 bg-primary rounded-full hidden sm:flex items-center justify-center sticky my-auto left-0 -ml-14 transition-opacity disabled:opacity-0 active:opacity-80'>
                        <MdKeyboardArrowLeft size={32} />
                    </button>
                )}

                {items.map((card) => (
                    <li key={card.title} data-variant={variant} className='w-full data-[variant=h-list]:sm:w-72'>
                        <Card
                            image={card.image}
                            title={card.title}
                            description={card.description}
                            href={card.href}
                        />
                    </li>
                ))}

                {variant === 'h-list' && (
                    <button
                        disabled={scrollAlt == 'end'}
                        onClick={() => handleSetScroll(350)}
                        className='h-14 w-14 bg-primary rounded-full hidden sm:flex items-center justify-center sticky my-auto right-0 -ml-14 transition-opacity disabled:opacity-0 active:opacity-80'>
                        <MdKeyboardArrowRight size={32} />
                    </button>
                )}

            </ul>
        </section>
    );
};
