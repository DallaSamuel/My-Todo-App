# My Todo App

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/Live-GitHub%20Pages-222?logo=github)

A simple to-do list app built with plain HTML, CSS and JavaScript. No frameworks, no build step.

**Live demo:** https://dallasamuel.github.io/My-Todo-App/

---

## Where it started

This was my **first assigned task in SIWES (industrial training) at Crystal EdTech**, Kaduna, Nigeria.

Instructors:
- **Bright Uto Daniel**
- **Ayodele Daniel**

> The code is kept as I first wrote it, on purpose. One must always have a beginning, and this repo is mine. My current work is in cloud and IT support (see the links at the bottom).

---

## Features

- **Add tasks** with the **Add Task** button or the **Enter** key. Empty input is ignored.
- **Mark tasks complete** with a checkbox. Completed tasks are styled differently.
- **Delete** any single task.
- **Clear Completed** removes every finished task at once.
- **Live counter** shows how many tasks are still open ("N tasks remaining").
- **Saved in the browser** with `localStorage` (key `todos`), so tasks survive a page refresh.

---

## Tech stack

| Layer | What's used |
|---|---|
| Structure | HTML5 |
| Styling | CSS3: custom properties (variables), gradient background, card layout |
| Logic | Vanilla JavaScript: DOM manipulation, event listeners, `localStorage` |
| Hosting | GitHub Pages |

---

## Run it locally

No install needed.

```bash
git clone https://github.com/DallaSamuel/My-Todo-App.git
cd My-Todo-App
# then open index.html in any browser
```

---

## Project structure

```
My-Todo-App/
├── index.html   # Page layout: input, Add button, task list, counter, Clear Completed
├── styles.css   # Theme variables, layout and task styles
└── app.js       # Add / complete / delete / clear logic and localStorage persistence
```

---

## What this project taught me

- How HTML, CSS and JavaScript fit together on one page
- Handling user events (clicks, the Enter key, checkbox changes)
- Keeping UI state in sync with data, and saving it with `localStorage`
- Publishing a static site on GitHub Pages

---

## Where I am now

I've since moved into **Azure cloud support and IT support**: Terraform, Active Directory, Splunk, Nessus and ServiceNow labs.

- GitHub profile: [@DallaSamuel](https://github.com/DallaSamuel)
- Lab portfolio: [CyberJKD-Labs](https://github.com/DallaSamuel/CyberJKD-Labs)
- LinkedIn: [dallasamuel](https://www.linkedin.com/in/dallasamuel)
