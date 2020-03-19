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

export interface ActionData {
    /** The action to be performed (e.g., `"Workout"`). */
    readonly action: string
    /** An integer in the range of 1 and 60 which denotes the number of minutes the taskData is planned for. */
    readonly duration: number
    readonly completed: boolean
}

export interface TaskData extends ActionData {
    /** The time (`Date.now()`) at which this task was created (unique to every `TaskData`). */
    readonly created: number
}

export function saveTask(data: ActionData): void {
    const tasks = getTasks();
    tasks.push({...data, created: Date.now()});
    saveTasks(tasks);
}

/** Overwrites the tasks with the supplied value. */
export function saveTasks(tasks: TaskData[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function updateTask(task: TaskData): void {
    const tasks = getTasks();
    const index = tasks.findIndex((value: TaskData) => value.created === task.created);
    tasks[index] = task;
    saveTasks(tasks);
}

/** Swaps the indices of the tasks at `index1` and `index2`. */
export function swapTasks(index1: number, index2: number): void {
    const tasks = getTasks();
    const task1 = tasks[index1];
    tasks[index1] = tasks[index2];
    tasks[index2] = task1;
    // One of the values will be `undefined` if a task was moved to the end of the list.
    saveTasks(tasks.filter((value: TaskData) => value !== undefined));
}

export function getTasks(): TaskData[] {
    const tasks = localStorage.getItem('tasks');
    return tasks === null ? [] : JSON.parse(tasks);
}

export function deleteTask(task: TaskData): void {
    saveTasks(getTasks().filter((value: TaskData) => value.created !== task.created));
}

export function deleteTasks(): void {
    saveTasks([]);
}