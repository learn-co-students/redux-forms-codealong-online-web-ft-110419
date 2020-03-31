const initState = { todos: [] };

export default function manageTodo(state = initState, action) {
  switch (action.type) {
    case "ADD-TODO":
      console.log({ todos: [...state.todos, action.payload.text] });
      return { todos: [...state.todos, action.payload.text] };

    default:
      return state;
  }
}
