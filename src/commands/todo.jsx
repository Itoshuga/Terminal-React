const todoCommand = {
    description: "Manage your TODO list",
    usage: "todo [add/remove/list] [task]",
    execute: async (args) => {
      const action = args[0];
      const task = args.slice(1).join(' ');
  
      // Utilisez le userId stocké dans le localStorage
      const userId = localStorage.getItem('userId');
  
      try {
        if (action === 'add') {
          const response = await fetch(`http://localhost:3001/todos/${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task }),
          });
  
          const data = await response.json();
          return `Task added: ${task}`;
        } else if (action === 'remove') {
          const response = await fetch(`http://localhost:3001/todos/${userId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task }),
          });
  
          const data = await response.json();
          return `Task removed: ${task}`;
        } else if (action === 'list') {
          const response = await fetch(`http://localhost:3001/todos/${userId}`);
          const data = await response.json();
          return data.length ? data.map((t) => t.task).join('\n') : 'No tasks found.';
        } else {
          return 'Invalid action. Use: add, remove, or list.';
        }
      } catch (error) {
        return `Error: ${error.message}`;
      }
    }
  };
  
  export default todoCommand;
  