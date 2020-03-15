import {Time} from './timeFormatter';

export interface DayTimes {
    readonly dayStart: Time
    readonly dayEnd: Time
}

export function saveDayTimes(dayTimes: DayTimes): void {
    saveStartTime(dayTimes.dayStart);
    saveEndTime(dayTimes.dayEnd);
}

export function saveStartTime(time: Time): void {
    saveStartHour(time.hour);
    saveStartMinute(time.minute);
}

export function saveStartHour(hour: number): void {
    saveTime('startHour', hour);
}

export function saveStartMinute(minute: number): void {
    saveTime('startMinute', minute);
}

export function saveEndTime(time: Time): void {
    saveEndHour(time.hour);
    saveEndMinute(time.minute);
}

export function saveEndHour(hour: number,): void {
    saveTime('endHour', hour);
}

export function saveEndMinute(minute: number): void {
    saveTime('endMinute', minute);
}

function saveTime(key: string, time: number): void {
    localStorage.setItem(key, time.toString());
}

export function getStartTime(): Time {
    return {hour: getStartHour(), minute: getStartMinute()};
}

export function getStartHour(): number {
    return getTime('startHour');
}

export function getStartMinute(): number {
    return getTime('startMinute');
}

export function getEndTime(): Time {
    return {hour: getEndHour(), minute: getEndMinute()};
}

export function getEndHour(): number {
    return getTime('endHour');
}

export function getEndMinute(): number {
    return getTime('endMinute');
}

function getTime(key: string): number {
    const time = localStorage.getItem(key);
    return parseInt(time === null ? '0' : time);
}

export interface TaskData {
    readonly task: string
    /** An integer in the range of 1 and 60 which denotes the number of minutes the taskData is planned for. */
    readonly duration: number
    readonly completed: boolean
    /** The time (`Date.now()`) at which this taskData was created (unique to every taskData). */
    readonly created: number
}

export function saveTask(task: TaskData): void {
    if (taskExists(task)) throw 'Task already exists';
    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
}

export function taskExists(task: TaskData): boolean {
    return getTasks().filter((value: TaskData) => value.created === task.created).length !== 0;
}

export function saveTasks(tasks: TaskData[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function updateTask(task: TaskData): void {
    const tasks = getTasks();
    const filteredTasks = tasks.filter((value: TaskData) => value.created === task.created);
    switch (filteredTasks.length) {
        case 0:
            throw "The taskData doesn't exist.";
        case 1:
            const index = tasks.indexOf(filteredTasks[0]);
            tasks[index] = task;
            break;
        default:
            throw 'The tasks have been corrupted since there is more than one taskData with the same timestamp.';
    }
    saveTasks(tasks);
}

export function getTasks(): TaskData[] {
    const tasks = localStorage.getItem('tasks');
    return tasks === null ? [] : JSON.parse(tasks);
}

export function deleteTask(task: TaskData): void {
    if (!taskExists(task)) throw "Task doesn't exist";
    saveTasks(getTasks().filter((value: TaskData) => value.created !== task.created));
}