(maybe)
pip install requirements.txt

# Setup

### Backend setup

navigate to `/backend` and run the following commands:

To start the virtual environment for ease of use across systems:

```
source venv/bin/activate
```

To install the backend dependencies:

```
pip install -r requirements.txt
```

To initialize the sqlite database:

```
python3 init_db_py
```

### Frontend Setup

Install dependencies:

```
npm install
```

# Running the Application

#### In /backend directory

```
python3 server.py
```

#### in /frontend/src directory

```
npm start
```

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
curl -X DELETE http://localhost:5000/deleteTask/{insert task ID}
```

Complete task

```
curl -X PUT http://localhost:5000/completeTask/1
```

# Architecture/Design Decisions
