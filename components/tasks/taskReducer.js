export function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return {
        ...tasks,
        items: [
          {
            id: action.id,
            text: action.text,
            done: false,
          },
          ...tasks.items
        ],
      };
    }
    case 'changed': {
      return {
        ...tasks,
        items: tasks.items.map(item =>
          item.id === action.task.id ? action.task : item
        )
      };
    }
    case 'deleted': {
      return {
        ...tasks,
        items: tasks.items.filter(item => item.id !== action.id)
      };
    }
    case 'select': {
      return {
        ...tasks,
        items: tasks.items.map(item =>
          item.id === action.payload ? { ...item, done: !item.done } : item
        )
      }
    }    
    case 'select-all': {
      return {
        ...tasks,
        selectAll: !tasks.selectAll,
        items: tasks.items.map(item => ({ ...item, done: !tasks.selectAll }))
      };
    }
    case 'delete-all': {
      return {
        ...tasks,
        selectAll: false,
        items: tasks.items.filter(item => !item.done)
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}