export const getTasks = async () => {
  try {
    const response = await fetch(`/getTasks`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const addTask = async (title, description) => {
  try {
    const response = await fetch(`/addTask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to add task');
    }
  } catch (error) {
    console.error('Error adding task:', error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`/deleteTask/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};

export const completeTask = async (id, completed) => {
  try {
    const response = await fetch(`/completeTask/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });
    if (!response.ok) {
      throw new Error('Failed to mark task as complete');
    }
  } catch (error) {
    console.error('Error marking task as complete:', error);
    throw error;
  }
};
