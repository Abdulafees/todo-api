# Todo API

A simple Node.js-based to-do list API.

## 📦 Features

- Add, view, and delete to-do items
- Built with Node.js and Express

---

## 🚀 How to Run This Project (Beginner-Friendly)

### 1. Clone this Repository

```bash
git clone https://github.com/asalami/todo-api.git
cd todo-api

npm install

node index.js

Test It in Browser or Postman
View tasks: http://localhost:3000/todos

Add tasks: Use Postman with POST to http://localhost:3000/todos

Delete tasks: Use DELETE to http://localhost:3000/todos/:id

Technologies
Node.js

Express

sql
Copy
Edit

5. Save the file.

6. Open Command Prompt in that folder and run:

```bash
git add README.md
git commit -m "add README with usage instructions"
git push
✅ Done! Your README is now on GitHub.


✅ PART 2: Update the To-Do List in index.js
Open your index.js file in a text editor (like Notepad or VS Code).

Find the line that defines the todos array. Replace it with this:

js
Copy
Edit
let todos = [
  { id: 1, task: "Wake up early" },
  { id: 2, task: "Brush teeth" },
  { id: 3, task: "Eat breakfast" },
  { id: 4, task: "Read emails" },
  { id: 5, task: "Work on Node.js project" },
  { id: 6, task: "Attend Zoom meeting" },
  { id: 7, task: "Lunch break" },
  { id: 8, task: "Continue project tasks" },
  { id: 9, task: "Review team progress" },
  { id: 10, task: "Plan for tomorrow" }
];
Save the file.

In the terminal, run:

bash
Copy
Edit
git add index.js
git commit -m "add 10 sample to-do items"
git push
✅ Now your list is updated on GitHub.

✅ PART 3: Deploy the App for Free Using Render
Let’s put your app online for free.

🪜 Step-by-step:
Go to https://render.com

Click Sign Up (or Log in if you already have a GitHub account).

Choose "Sign up with GitHub" – this is important!

Authorize Render to access your GitHub.

Once logged in, click:
"New + > Web Service"

Select your todo-api repo from the list.

Configure the service:

Field	Value
Name	todo-api (or anything)
Branch	master
Runtime	Node
Build Command	npm install
Start Command	node index.js

Click Create Web Service.

Wait for the build to finish. After 1–2 minutes, it will give you a Live URL like:

arduino
Copy
Edit
https://todo-api.onrender.com
Test this in your browser:

arduino
Copy
Edit
https://todo-api.onrender.com/todos
✅ Your app is now LIVE on the internet!

🚀 Summary:
Action	Status
Add README	✅ Done
Update to-do list	✅ Done
Deploy online	✅ Almost there (you’re doing it!)