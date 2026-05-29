
# AI Dashboard

A modern, AI-powered note-taking application built with Next.js and MongoDB.

## Features

- 🔐 **User Authentication** - Secure login/signup with JWT tokens
- 📝 **Note Management** - Create, read, update, delete notes with timestamps
- 🤖 **AI Features** - Summarize notes and generate content from prompts
- 👤 **User Profile** - View and edit profile information
- 📎 **File Uploads** - Attach images to notes
- 📊 **Dashboard** - View statistics (users, notes count)
- 🎨 **Modern UI** - Responsive design with Tailwind CSS
- ⏰ **Timestamps** - Track note creation and updates
- 🔍 **Search** - Search notes by title or content
- 📌 **Sticky Sidebar** - Fixed navigation sidebar

## Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend:** Node.js, Next.js API Routes
- **Database:** MongoDB
- **AI:** Groq API (LLaMA 3.3)
- **Authentication:** JWT (JSON Web Tokens)
- **File Storage:** Cloudinary

## Installation

1. Clone the repository
   ```bash
   git clone <repo-url>
   cd nextjs
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create `.env.local` file with:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GROQ_API_KEY=your_groq_api_key
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   ```

4. Run development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

- **Sign up** - Create a new account
- **Create Notes** - Write notes manually or generate from AI prompts
- **AI Features** - Summarize notes or generate content
- **Upload Files** - Attach images to notes
- **Manage Profile** - Update your name and bio
- **Search & Organize** - Find notes quickly with search

## Project Structure

```
app/
├── (auth)/          # Authentication pages (login, signup)
├── (main)/          # Main app pages (dashboard, notes, profile, about)
├── api/             # API routes (auth, notes, AI, etc)
└── layout.tsx       # Root layout

components/         # Reusable components (Navbar, Sidebar, Card)
lib/                # Utilities (JWT, MongoDB, AI)
public/             # Static assets
```

## API Routes

- `POST /api/signup` - User registration
- `POST /api/login` - User login
- `GET/POST/PUT/DELETE /api/notes` - Note CRUD operations
- `GET/PUT /api/profile` - User profile
- `POST /api/ai/summarize` - Summarize note content
- `POST /api/ai/generate` - Generate content from prompt
- `POST /api/upload` - Upload files

## Key Features Explained

### Authentication
- JWT-based authentication for secure sessions
- Password stored with proper security practices
- Token stored in localStorage for client-side validation

### AI Integration
- Uses Groq API for fast AI responses
- Summarize: Condenses notes to 2-3 sentences
- Generate: Creates detailed notes from user prompts

### Notes Management
- Full CRUD operations
- Timestamps for created/updated tracking
- File attachment support
- Search functionality

## Live Demo

[Deployment link coming soon]

## License

MIT

## Author

Created as a learning project to master full-stack Next.js development.