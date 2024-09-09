
import React from 'react';

interface Props {
    params: {
        courseId: string;
        classId: string;
    }
}

export default function pagePlayer({ params: { classId, courseId } }: Props) {

    return (
        <div>
            Player {courseId} {classId}
        </div>
    );
};
