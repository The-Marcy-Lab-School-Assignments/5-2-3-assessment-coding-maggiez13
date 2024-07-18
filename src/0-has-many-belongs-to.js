const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel, isDone = false) {
    this.id = getId();
    this.description = description; 
    this.priorityLevel = priorityLevel;
    this.isDone = isDone; 
    this.createdAt = new Date();
  }
  updateDescription(newDescription) {
    this.description = newDescription; 
  }
  updatePriority(newPriorityLevel) {
    this.priorityLevel = newPriorityLevel;
  }
  markAsCompleted() {
    this.isDone = true; 
  }
}

class ToDoList {
  static instances = [];
  constructor(name) {
    this.id = getId();
    this.name = name; 
    this.createdAt = new Date();
    this.items = [];
    ToDoList.instances.push(this);
  }
  createItem(description, priorityLevel) {
    const newItem = new ToDoItem(description, priorityLevel);
    this.items.push(newItem);
    return newItem; 
  }
  getItems() {
    return [...this.items];
  }
  getCompletedCount() {
    return this.items.filter(item => item.isDone).length;
  }
  removeItem(idOfItem) {
    this.items = this.items.filter(item => item.id !== idOfItem);
  }
  static list() {
    return [...ToDoList.instances];
  }
  static findBy(id) {
    return ToDoList.instances.find(list => list.id === id);
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};