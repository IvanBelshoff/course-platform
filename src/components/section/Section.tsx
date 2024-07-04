import { Card, IcardProps } from "../card/Card";

interface ISectionProps {
    title: string;
    items: IcardProps[];
    variant: 'grid' | 'h-list';
}

export const Section = ({ title, variant = 'grid', items }: ISectionProps) => {
    return (
        <section className='flex flex-col gap-4 px-4'>
            <h2 className='font-bold text-xl'>
                {title}
            </h2>

            <ul
                data-variant={variant}
                className='grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto'>

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


            </ul>
        </section>
    );
};
