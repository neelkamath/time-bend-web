import TaskList from '../../components/TaskList';
import {mount} from 'enzyme';
import React from 'react';
import {saveTasks} from '../../storage';

it('displays created tasks', () => {
    const time = Date.now();
    const tasks = [
        {task: 'Task 1', duration: 30, created: time, completed: false},
        {task: 'Task 2', duration: 45, created: time + 1000, completed: true}
    ];
    saveTasks(tasks);
    expect(mount(<TaskList/>).find('Grid')).toHaveLength(tasks.length);
});