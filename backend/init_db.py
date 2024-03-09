import sqlite3

DATABASE = 'database.db'
conn = sqlite3.connect(DATABASE)


with open('schema.sql', 'r') as f:
    sql_script = f.read()
    conn.executescript(sql_script)

with conn:
    cur = conn.cursor()
    cur.execute("INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)",
                ('Example Task', 'This is an example task description', 0))


conn.commit()
conn.close()
