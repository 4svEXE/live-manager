import Goal from "../interfaces/Goal";

export const mockGoals: Goal[] = [
  {
    _id: "goal_1",
    name: "Learn TypeScript",
    details: "Complete a TypeScript course online",
    reward: "Certificate of Completion",
    parentId: "category_1",
    color: "orange"
  },
  {
    _id: "goal_2",
    name: "Get Fit",
    details: "Exercise 5 times a week",
    reward: "Better health",
    parentId: "category_2",
    color: "red"
  }
];
