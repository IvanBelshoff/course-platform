import { CourseHeader } from "../couser-header/CourseHeader";
import { ClassGroup, IClassGroupProps } from "./components/ClassGroup";

interface ICourseContentProps {
    classGroups: IClassGroupProps[];
}


export const CourseContent: React.FC<ICourseContentProps> = ({ classGroups }) => {
    return (
        <div className='flex flex-col gap-4'>
          
          <h2 className='text-lg font-extrabold'>Conteúdo do curso</h2>

            <ol className='flex flex-col rounded-lg overflow-clip'>
                {classGroups.map((classGroup) => (
                    <li key={classGroup.courseId} className='flex flex-col'>
                        <ClassGroup {...classGroup} />
                    </li>
                ))}
            </ol>



        </div>

    );
};
