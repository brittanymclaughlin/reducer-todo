export const initialState = [{
    task: 'Learn about Redux',
    completed: false,
    id: 4
  },
  {
      task: 'Read a book',
      completed: false,
      id: 3
  },
  {
      task: 'Learn more about React',
      completed:false,
      id: 1
  },
  {
      task:'Call grandparents',
      completed:false,
      id: 2
  }
]
export const ADD_ITEM = "ADD_ITEM";
export const MARK_COMPLETE = "MARK_COMPLETE";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const todoReducer = (state, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return [...state, action.payload]

        case MARK_COMPLETE:
            return[
                ...state.map(item => action.payload === item.id ? {...item, completed: !item.completed} : item)
            ];

        case CLEAR_COMPLETED:
            return[...state.filter(task => task.completed === false)];
        
        default:
            return state;
    }
 }