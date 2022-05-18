import './task-card.scss';
import clsx from 'clsx';

export const TaskCard = ({task, onClick}) => {
    const {title, completed} = task;

    return <div
        className={clsx('task', {'task-completed': completed})}
        onClick={(e) => onClick(e, task)}
    >
        {title}
    </div>
}