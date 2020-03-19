import {TaskData} from '../storage';
import {OnUpdate} from './App';
import React, {ReactElement} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import Task from './Task';

export interface DraggableTaskProps {
    readonly task: TaskData
    /** The index denotes the task's position. */
    readonly index: number
    readonly onUpdate: OnUpdate
}

export default function DraggableTask(props: DraggableTaskProps): ReactElement {
    return (
        <Draggable draggableId={props.task.created.toString()} index={props.index}>
            {
                (draggableProvided) => (
                    <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                    >
                        <Task taskData={props.task} onUpdate={props.onUpdate}/>
                    </div>
                )
            }
        </Draggable>
    );
}