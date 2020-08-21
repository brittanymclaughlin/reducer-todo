export const initialState = [{
    item: 'Learn about Redux',
    completed: false,
    id: 4
  },
  {
      item: 'Read a book',
      completed: false,
      id: 3
  },
  {
      item: 'Learn more about React',
      completed:false,
      id: 1
  },
  {
      item:'Call grandparents',
      completed:false,
      id: 2
  }
]


export const todoReducer = (state, action) => {

    switch(action.type) {
        case 'ADD_TODO':
            return [...state, { item: action.payload, id:Date.now(), completed: false }]

        case 'MARK_COMPLETE':
            state.map(item => {
                if (item.id === action.payload){
                return item.completed = !item.completed;
                }
            })
            return [...state]

        case 'CLEAR_COMPLETE':
            const newList = state.filter(item => {
            return item.completed !== true
            })
            return [...newList]
        
        default:
            return state;
    }
 }