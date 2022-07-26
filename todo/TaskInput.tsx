import React from 'react'

interface TaskInputProps {
    onEnterPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

function TaskInput({onEnterPress}: TaskInputProps) {
  return (
    <div className="add-task">
        <input className="block" onKeyDown={onEnterPress} placeholder='Type smth here...' />
    </div>
  )
}

export default TaskInput