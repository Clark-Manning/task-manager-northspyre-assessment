# Setup

### Backend setup

Navigate a terminal to `/backend` and run the following commands:

To install and start the virtual environment for ease of use across systems:

```
python3 -m venv venv
source venv/bin/activate
```

To install the backend dependencies:

```
pip install -r requirements.txt
```

To initialize the sqlite database:

```
python3 init_db.py
```

### Frontend Setup

Navigate a terminal to `/frontend`

Install dependencies:

```
npm install
```

# Running the Application

#### In /backend directory

```
python3 main.py
```

#### in /frontend/src directory

```
npm start
```

# Using the Application

`npm start` should automatically open a webpage, but if it does not the defaul server is `http://localhost:3000` Now you may add, mark complete, and delete as many tasks as you want. You may observe the changes in the sqlite server at `http://localhost:5000` or simply watch the changes in the task manager itself.

# Backend Requests

These requests can be made directly to the backend (default location is `http://localhost:5000`)

Display tasks

```
curl -X GET http://localhost:5000/getTasks
```

Add example task

```
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"title": "New Task", "description": "Description of the new task"}' \
  http://localhost:5000/addTask
```

Delete Task

```
curl -X DELETE http://localhost:5000/deleteTask/{Task_ID}
```

Complete task

```
curl -X PUT http://localhost:5000/completeTask/{Task_ID}
```

# Testing

### Backend

Make sure to have enabled the venv [(see above)](#backend-setup). Navigate to `/backend` and run:

```
python -m unittest test_tasks
```

### Frontend

Navigate to `/src` and run:

```
npm test
```

if the frontend test does not automatically run, there should be instructions to press `a` to run tests in the terminal manually

# Architecture/Design Decisions

This is a flask backend, using an sqlite database, and react frontend. The backend must first initialize a db which I chose to have as its own init file as something to run once as it never needs to be ran again. The db file may be deleted and the init ran again, but this logic did not need to be encapsulated in the main program. The sqlite database contains a table called "tasks" [id, title, description, completed]. It currently initializes the db with one example task. The rest can be added using requests to the backend directly, or using the frontend interface.

The frontend is a react frontend. I wanted to use bootstrap but my internet/browser settings would not allow me to access react-bootstrap documentation. Instead of troubleshooting that issue during this assessment, or using an alternative library such as Tailwind CSS I chose to challenge myself to see how well I could do with CSS. This created a minimalist design, but one I am quite happy with. The frontend is structured into a components folder containing the header, task manager, and associated tooling, and a utility folder containing the functions calling the backend. This was done to keep the backend logic, the page rendering logic, and the app.js entry point all separate.
