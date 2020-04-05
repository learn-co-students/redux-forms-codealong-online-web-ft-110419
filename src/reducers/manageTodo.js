export default function manageTodo(state = {
  todos: [],
}, action) {
	console.log("reducer received this action:", action);
	switch (action.type) {

	case 'ADD_TODO':
		console.log("state:", state)
		let newTodos = state.todos.slice()
		newTodos.push(action.payload)
		return {todos: newTodos}

	default: 
		return state
	}

  
}
