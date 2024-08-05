import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onEdit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  const handleMarkAsDone = () => {
    onUpdate(task.id, { ...task, completed: !task.completed });
  };

  return (
    <div>
      <div>
        <h3 onClick={handleToggle}>{task.title}</h3>
        <button onClick={handleMarkAsDone}>{task.completed ? 'Undo' : 'Done'}</button>
        <button onClick={() => onEdit(task)}>Edit</button>
      </div>
      {isExpanded && (
        <div>
          <p>{task.description}</p>
          <small>{new Date(task.timestamp).toLocaleString()}</small>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
