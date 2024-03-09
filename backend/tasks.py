import sqlite3
from flask import abort

DATABASE = "database.db"


def get_db_connection(database=DATABASE):
    conn = sqlite3.connect(database)
    conn.row_factory = sqlite3.Row
    return conn


def get_tasks(database=DATABASE):
    conn = get_db_connection(database)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tasks")
    rows = cursor.fetchall()
    conn.close()
    tasks = [{"id": row["id"], "title": row["title"], "description": row["description"],
              "completed": bool(row["completed"])} for row in rows]
    return tasks


def add_task(title, description, database=DATABASE):
    if not title:
        abort(400, "Title is required")

    conn = get_db_connection(database)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)", (title, description, 0))
    conn.commit()
    conn.close()

    return {"message": "Task added successfully"}


def delete_task(task_id, database=DATABASE):
    conn = get_db_connection(database)
    cursor = conn.cursor()
    cursor.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    conn.commit()
    conn.close()

    return {"message": "Task deleted successfully"}


def complete_task(task_id, completed, database=DATABASE):
    conn = get_db_connection(database)
    cursor = conn.cursor()
    if completed:
        cursor.execute(
            "UPDATE tasks SET completed = 1 WHERE id = ?", (task_id,))
    else:
        cursor.execute(
            "UPDATE tasks SET completed = 0 WHERE id = ?", (task_id,))

    conn.commit()
    conn.close()

    return {"message": "Task completion updated"}
