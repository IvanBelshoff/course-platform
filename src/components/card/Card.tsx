import Image from "next/image";
import Link from "next/link";

export interface IcardProps {
    image: string;
    title: string;
    description: string;
    href: string;
}

export const Card = ({ title, image, href, description }: IcardProps) => {

    return (
        <Link href={href} className='hover:no-underline'>
            <article className='flex gap-2 flex-col p-2 rounded sm:hover:bg-primary'>
                <Image
                    src={image}
                    alt={title}
                    width={1000}
                    height={0}
                    draggable={false}
                    className='aspect-video object-cover rounded-2xl'
                />

                <h4 className='font-extrabold text-lg'>
                    {title}
                </h4>

                <p className='line-clamp-3 sm:line-clamp-4 md:line-clamp-5'>
                    {description}
                </p>
            </article>
        </Link>
    );
};
