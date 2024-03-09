from flask import Flask, jsonify, request
from tasks import get_tasks, add_task, delete_task, complete_task

app = Flask(__name__)


@app.route("/getTasks")
def get_tasks_route():
    tasks = get_tasks()
    return jsonify(tasks)


@app.route("/addTask", methods=["POST"])
def add_task_route():
    data = request.json
    title = data.get("title")
    description = data.get("description")
    result = add_task(title, description)
    return jsonify(result), 201


@app.route("/deleteTask/<int:task_id>", methods=["DELETE"])
def delete_task_route(task_id):
    result = delete_task(task_id)
    return jsonify(result), 200


@app.route("/completeTask/<int:task_id>", methods=["PUT"])
def complete_task_route(task_id):
    data = request.json
    completed = data.get("completed")

    result = complete_task(task_id, completed)
    return jsonify(result), 200


if __name__ == "__main__":
    app.run(debug=True)
