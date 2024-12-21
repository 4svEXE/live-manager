import Task from "../interfaces/Task";

export const mockTasks: Task[] = [
  {
    _id: "task_1",
    name: "Watch TypeScript tutorial",
    details: "Watch the first module of the course",
    priority: 3,
    createdDate: "2024-01-01",
    categoryId: "category_1"
  },
  {
    _id: "task_2",
    name: "Do 20 push-ups",
    details: "Part of the fitness goal",
    priority: 4,
    createdDate: "2024-01-02",
    categoryId: "category_2"
  }
];
