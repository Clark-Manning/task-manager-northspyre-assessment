import sqlite3
from flask import abort

DATABASE = "database.db"


def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


def get_tasks():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM tasks")
    rows = cursor.fetchall()
    conn.close()
    tasks = [{"id": row["id"], "title": row["title"], "description": row["description"],
              "completed": bool(row["completed"])} for row in rows]
    return tasks


def add_task(title, description):
    if not title:
        abort(400, "Title is required")

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)", (title, description, 0))
    conn.commit()
    conn.close()

    return {"message": "Task added successfully"}


def delete_task(task_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    conn.commit()
    conn.close()

    return {"message": "Task deleted successfully"}

# TODO: FIX COMPLETED FUNCTIONALITY


def complete_task(task_id, completed):
    conn = get_db_connection()
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
