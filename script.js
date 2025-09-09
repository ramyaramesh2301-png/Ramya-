/* General Styles */

body {

  font-family: Arial, sans-serif;

  margin: 0;

  padding: 0;

  line-height: 1.6;

  background: #f4f4f4;

  color: #333;

}

/* Header */

header {

  text-align: center;

  padding: 2rem;

  background: #4CAF50;

  color: white;

}

/* Navigation */

nav {

  display: flex;

  justify-content: center;

  gap: 20px;

  background: #333;

  padding: 10px;

}

nav a {

  color: white;

  text-decoration: none;

  font-weight: bold;

}

nav a:hover {

  color: #4CAF50;

}

nav button {

  background: #4CAF50;

  border: none;

  padding: 5px 10px;

  cursor: pointer;

  color: white;

  border-radius: 5px;

}

nav button:hover {

  background: #45a049;

}

/* Sections */

section {

  padding: 2rem;

  max-width: 800px;

  margin: auto;

}

h2 {

  color: #4CAF50;

  margin-bottom: 1rem;

}

/* Projects */

.project {

  background: white;

  padding: 1rem;

  margin-bottom: 1rem;

  border-radius: 8px;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

}

/* Footer */

footer {

  text-align: center;

  padding: 1rem;

  background: #333;

  color: white;

  margin-top: 2rem;

}

/* Dark Mode */

.dark-mode {

  background: #121212;

  color: #f4f4f4;

}

.dark-mode nav {

  background: #222;

}

.dark-mode .project {

  background: #1e1e1e;

}