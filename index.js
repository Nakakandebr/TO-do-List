
let userContainer = document.getElementById('task');
let getToDos = async () => {
  try {
    let response = await fetch('https://dummyjson.com/todos?limit=2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
       
      })
    });
    if (response) {
      
    }
    let data = await response.json();
    return data.todos;
  } catch (error) {
    
  }
};

const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`https://dummyjson.com/todos/1`, {
      method: 'DELETE'
    });
    if (response.ok) {
     
    }
  } catch (error) {
    
  }
};
fetch('https://dummyjson.com/todos?limit=2')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  

const displaytodo = async () => {
  const users = await getToDos();
  console.log(users);
  if (Array.isArray(users)) {
    users.forEach(item => {
      let li = document.createElement('li');
      let checkbox = document.createElement('input');
      let label = document.createElement('label');
      let deleteButton = document.createElement('button');

      li.style.display = 'flex';
      li.style.alignItems = 'center';
      li.style.padding = '10px';
      li.style.border = '1px solid #ccc';
      li.style.marginBottom = '10px';

      checkbox.type = 'checkbox';
      checkbox.checked = item.completed;
      checkbox.style.marginRight = '10px';

      label.textContent = item.todo;

      deleteButton.textContent = 'remove';
      deleteButton.classList.add('delete-button');

      deleteButton.addEventListener('click', () => {
        deleteTask(item.id);
        li.remove();
      });

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteButton);
      userContainer.appendChild(li);
    });
  }
};

displaytodo();

const addNewTask = () => {
  const taskInput = document.getElementById('new');
  const newTask = taskInput.value.trim();
  taskInput.value = '';
  if (newTask) {
    let li = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    let deleteButton = document.createElement('button');

    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.padding = '10px';
    li.style.border = '1px ';
    li.style.marginBottom = '10px';

    checkbox.type = 'checkbox';
    checkbox.style.marginRight = '10px';

    label.textContent = newTask;

    deleteButton.textContent = 'remove';
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    userContainer.appendChild(li);
  }
};




















