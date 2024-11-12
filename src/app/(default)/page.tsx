import { Metadata } from "next";
import { APIYoutube } from "@/shared/services/api-youtube";

import { Section } from "@/components/section/Section";
import { KeepWatching } from "@/components/KeepWatching";

export const metadata: Metadata = {
  title: "CodarSe - Página Inicial",
};

export default async function PageHome() {

  const courses = await APIYoutube.course.getAll();

  return (
    <main className='mt-8 flex justify-center'>

      <div className='max-w-full min-[880px]:max-w-[880px] flex flex-col gap-4'>

        <KeepWatching />

        <Section
          title={'Veja mais cursos'}
          variant='h-list'
          items={
            courses.map((course) => ({
              title: course.title,
              description: course.description,
              image: course.thumbnail,
              href: `/cursos/${course.id}`,
            }))
          }
        />

      </div>

    </main>
  );
}
