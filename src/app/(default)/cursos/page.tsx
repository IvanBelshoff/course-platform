import { Metadata } from "next";

import { APIYoutube } from "@/shared/services/api-youtube";
import { Section } from "@/components/section/Section";

export const metadata: Metadata = {
  title: "CodarSe - Todos os cursos",
};

export default async function pageCursos() {

  const courses = await APIYoutube.course.getAll();

  return (
    <main className='mt-8 flex justify-center'>

      <div className='w-full min-[880px]:max-w-[880px]'>
        <Section
          title={'Todos os cursos'}
          variant='grid'
          items={
            courses.map((course) => ({
              title: course.title,
              description: course.description,
              image: course.thumbnail,
              href: `/cursos/${course.id}`,
            }))
          } />

      </div>

    </main>
  );
};
