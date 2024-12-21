export default interface Task {
  _id?: string;
  name: string;
  details: string;
  priority: 1 | 2 | 3 | 4 | 5;
  createdDate: string;
  categoryId: string;
}
