# My Portfolio

A simple personal portfolio website built using React and Vite.

---

## Features

- Home page
- About page
- Projects page
- Contact page
- Dashboard page
- Light / Dark theme toggle
- Page transition animations
- Responsive Navbar and Footer

---

## How to Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Pages

| Page | Description |
|------|-------------|
| `Home` | Landing page |
| `About` | About me section |
| `Projects` | List of my projects |
| `Contact` | Contact form |
| `Dashboard` | Personal dashboard |

---

## Components

| Component | Description |
|-----------|-------------|
| `Navbar` | Top navigation bar |
| `Footer` | Bottom footer |
| `withAnimation` | HOC for page animations |
| `ThemeContext` | Global theme (light/dark) provider |

---

## Project Structure

```
durgesh-simple/
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   └── Footer/
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Dashboard/
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hoc/
│   │   └── withAnimation.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## Built With

- React
- React Router DOM
- Vite
- CSS Modules
