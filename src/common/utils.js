// In a real-life app, we would call an endpoint to create a task,
// and use the ID value returned to us in the response to save it in state.
export const generateID = () => Math.floor(Math.random() * 100);
