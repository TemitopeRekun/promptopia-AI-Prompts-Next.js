# Promptopia - AI Prompt Sharing Platform

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=for-the-badge&logo=tailwindcss)
![NextAuth](https://img.shields.io/badge/NextAuth.js-Auth-purple?style=for-the-badge)

Promptopia is a full-stack AI prompt sharing platform built with **Next.js 14 (App Router)**, **MongoDB**, and **NextAuth.js**. Users can discover, create, edit, and share creative prompts for AI tools like ChatGPT — all with Google OAuth authentication.

---

## Features

- **Google OAuth Authentication** via NextAuth.js
- **Create, Read, Update & Delete (CRUD)** AI prompts
- **Tag-based prompt discovery** — click any tag to filter related prompts
- **User profile pages** — view all prompts by a specific creator
- **Search functionality** — search prompts by content, tag, or username
- **Responsive design** with TailwindCSS
- **RESTful API routes** using Next.js App Router API handlers
- **MongoDB Atlas** integration via Mongoose ODM

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 (App Router) | Full-stack React framework |
| JavaScript (ES6+) | Primary language |
| MongoDB Atlas | Cloud NoSQL database |
| Mongoose | MongoDB ODM |
| NextAuth.js | Google OAuth authentication |
| TailwindCSS | Utility-first styling |
| Vercel | Deployment |

---

## Project Structure

```
promotopia-AI-Prompts-Next.js/
├── app/
│   ├── api/                  # Next.js API route handlers
│   ├── Create-prompt/        # Create new prompt page
│   ├── profile/              # User profile page
│   ├── update-prompt/        # Edit existing prompt page
│   ├── layout.jsx            # Root layout with Nav
│   └── page.jsx              # Home feed page
├── components/               # Reusable UI components
├── models/                   # Mongoose schemas (User, Prompt)
├── public/assets/            # Static assets and images
├── styles/                   # Global CSS styles
├── utils/                    # Database connection utility
├── .env                      # Environment variables
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # TailwindCSS configuration
└── jsconfig.json             # Path aliases
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- A MongoDB Atlas account
- A Google Cloud project with OAuth credentials

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/TemitopeRekun/promptopia-AI-Prompts-Next.js.git
cd promptopia-AI-Prompts-Next.js
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
GOOGLE_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/prompt` | Fetch all prompts |
| POST | `/api/prompt/new` | Create a new prompt |
| GET | `/api/prompt/[id]` | Get a single prompt |
| PATCH | `/api/prompt/[id]` | Update a prompt |
| DELETE | `/api/prompt/[id]` | Delete a prompt |
| GET | `/api/users/[id]/posts` | Get all prompts by a user |

---

## Deployment

This app is optimized for deployment on **Vercel**.

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy

---

## Author

**Temitope Rekun**
- GitHub: [@TemitopeRekun](https://github.com/TemitopeRekun)
- LinkedIn: [linkedin.com/in/temitoperekun](https://linkedin.com/in/temitoperekun)

---

## License

This project is open source and available under the [MIT License](LICENSE).
