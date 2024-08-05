import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate, onEdit }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onUpdate={onUpdate} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TaskList;
