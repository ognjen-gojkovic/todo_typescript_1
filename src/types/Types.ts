export type Task = {
    id: string;
    label: string;
    isComplete: boolean;
  };

export type TasksProps = {
  focusedTask?: Task;
  addTask: (task: Pick<Task, "label">) => void;
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  updateTaskCompletion: (taskId:string, isComplete:boolean) => void;
  shuffleFocusedTask: () => void;
}

export type TodosState = {
  todos: Task[];
  focusedTask: Task | null;
};

export type rootState = {
  TodosReducer: TodosState
}