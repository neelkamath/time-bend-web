import {TaskData} from '../storage';
import {OnUpdate} from './App';
import React, {ReactElement} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import DraggableTask from './DraggableTask';

export interface DroppableTaskProps {
    readonly task: TaskData
    /** The index denotes the task's position. */
    readonly index: number
    readonly onUpdate: OnUpdate
}

export default function DroppableTask(props: DroppableTaskProps): ReactElement {
    return (
        <Droppable key={props.task.created} droppableId={props.task.created.toString()}>
            {
                (droppableProvided) => (
                    <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps}>
                        <DraggableTask task={props.task} index={props.index} onUpdate={props.onUpdate}/>
                        {droppableProvided.placeholder}
                    </div>
                )
            }
        </Droppable>
    );
}