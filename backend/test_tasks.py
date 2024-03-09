import unittest
import sqlite3
import os
from tasks import get_tasks, add_task, delete_task, complete_task


class TestTaskFunctions(unittest.TestCase):

    DATABASE = "test_database.db"

    @classmethod
    def setUpClass(cls):
        if os.path.exists(cls.DATABASE):
            os.remove(cls.DATABASE)

        cls.conn = sqlite3.connect(cls.DATABASE)
        with open('schema.sql', 'r') as f:
            sql_script = f.read()
            cls.conn.executescript(sql_script)
        cls.conn.commit()

    def setUp(self):
        cursor = self.conn.cursor()
        cursor.execute("INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)",
                       ("Test Task", "Test Description", 0))
        self.conn.commit()

    def tearDown(self):
        cursor = self.conn.cursor()
        cursor.execute("DELETE FROM tasks")
        self.conn.commit()

    def test_get_tasks(self):
        tasks = get_tasks(database=self.DATABASE)

        print('Get tasks:')
        print(tasks)

        self.assertEqual(len(tasks), 1)
        self.assertEqual(tasks[0]["title"], "Test Task")
        self.assertEqual(tasks[0]["description"], "Test Description")
        self.assertEqual(tasks[0]["completed"], False)

    def test_add_task(self):
        add_task("New Test Task", "New Test Description",
                 database=self.DATABASE)

        tasks = get_tasks(database=self.DATABASE)
        self.assertEqual(len(tasks), 2)
        self.assertEqual(tasks[1]["title"], "New Test Task")
        self.assertEqual(tasks[1]["description"], "New Test Description")
        self.assertEqual(tasks[1]["completed"], False)

    def test_delete_task(self):
        delete_task(1,  database=self.DATABASE)

        tasks = get_tasks(database=self.DATABASE)
        self.assertEqual(len(tasks), 0)

    def test_complete_task(self):
        complete_task(1, True, database=self.DATABASE)

        tasks = get_tasks(database=self.DATABASE)
        self.assertEqual(tasks[0]["completed"], True)


if __name__ == '__main__':
    unittest.main()
