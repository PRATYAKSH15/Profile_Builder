# 🚀 Elevatr - AI Profile Builder

### *Create Smart, Professional Profiles Using AI*

AI Profile Builder is a modern profile-enhancing platform that helps users generate AI-crafted professional content including profile summaries, skill suggestions, cold emails, cover letters, and comprehensive resume analysis.

Built with **Next.js 15**, **PostgreSQL**, **Prisma**, **Clerk**, and **Google Gemini AI** — featuring a clean, responsive UI powered by **TailwindCSS**, **ShadCN**, and **Framer Motion**.

![App Screenshot](hero.png "AI Profile Builder")
![App Screenshot](feature.png "Impactful Features")

---

## ✨ Features

### 🎯 **Profile Summary Generator**
Generate polished, professional summaries tailored to your background and career goals.

### 💡 **AI Skill Suggestion**
Discover missing keywords and trending skills relevant to your field with intelligent recommendations.

### 📧 **Cold Email Generator**
Create professional outreach emails for recruiters, companies, or clients with personalized templates.

### 📝 **Cover Letter Generator**
Generate structured, personalized cover letters instantly for any job application.

### 📊 **Resume Analyzer**
- AI-powered score out of 100
- Animated score visualization
- Comprehensive strengths analysis
- Actionable improvement suggestions
- Beautiful markdown rendering

### 🔐 **Authentication (Clerk)**
Secure sign-in/sign-up with Clerk UI components and session-based protection for API routes.

### 🎨 **Modern UI/UX**
- Clean light theme with gradient accents
- Smooth animations and transitions
- Beautiful homepage with hero section
- Testimonials and FAQ sections
- Fully responsive design
- Interactive components

---

## 🛠️ Tech Stack

| Category        | Technologies                                             |
| --------------- | -------------------------------------------------------- |
| **Frontend**    | Next.js 15, React 19, TypeScript, TailwindCSS, ShadCN/UI |
| **Auth**        | Clerk                                                    |
| **Backend**     | Next.js API Routes, Prisma ORM                           |
| **Database**    | PostgreSQL (NeonDB)                                      |
| **AI**          | Google Gemini 1.5 / 2.5                                  |
| **Animations**  | Framer Motion                                            |
| **Icons**       | Lucide React                                             |

---

## 📁 Project Structure

```
ai-profile-builder/
├── app/
│   ├── api/
│   │   ├── generate-summary/
│   │   ├── suggest-skills/
│   │   ├── generate-cold-email/
│   │   ├── generate-cover-letter/
│   │   └── analyze-resume/
│   ├── dashboard/
│   ├── resume-analyzer/
│   ├── cold-email/
│   ├── cover-letter/
│   └── page.tsx (Home)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ui/
├── prisma/
│   └── schema.prisma
├── public/
└── lib/
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-profile-builder.git
cd ai-profile-builder
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key
```

### Where to get the keys:

- **Clerk**: Sign up at [clerk.com](https://clerk.com) and create a new application
- **NeonDB**: Create a free PostgreSQL database at [neon.tech](https://neon.tech)
- **Gemini API**: Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

---

## 🗃️ Database Setup

### 1. Push the Prisma schema to your database

```bash
npx prisma db push
```

### 2. Generate Prisma Client

```bash
npx prisma generate
```

### 3. (Optional) Open Prisma Studio to view your data

```bash
npx prisma studio
```

---

## ▶️ Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

> **Note**: If you encounter Prisma issues with Turbo, use `npm run dev -- --no-turbo`

---

## 🚀 Deployment

### Recommended Platforms

- **Frontend & API**: [Vercel](https://vercel.com)
- **Database**: [NeonDB](https://neon.tech) or [Supabase](https://supabase.com)
- **Authentication**: [Clerk](https://clerk.com)

### Deployment Steps

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Import your GitHub repository
   - Add environment variables
   - Deploy

3. **Configure Database**
   - Copy your NeonDB connection string
   - Add to Vercel environment variables
   - Run Prisma migrations if needed

4. **Set up Clerk**
   - Add production URLs to Clerk dashboard
   - Update environment variables in Vercel

---

## 📸 Screenshots

> Add screenshots of your application here after deployment

### Homepage
![Homepage](./screenshots/homepage.png)

### Dashboard
![Dashboard](./screenshots/dashboard.png)

### Resume Analyzer
![Resume Analyzer](./screenshots/resume-analyzer.png)

---

## 🎯 Use Cases

- **Job Seekers**: Create compelling resumes and cover letters
- **Students**: Build professional profiles for internships
- **Freelancers**: Generate cold emails for client outreach
- **Career Changers**: Get AI-powered suggestions for skill development
- **Professionals**: Analyze and improve existing resumes

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Pratyaksh Codes**

- Passionate about AI + Full Stack Development
- 📍 India
- 🌐 [Portfolio](#) | [GitHub](#) | [LinkedIn](#)

---

## ⭐ Show Your Support

If you found this project helpful, please give it a **star** ⭐ on GitHub!

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Clerk](https://clerk.com/) - Authentication and User Management
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Google Gemini](https://deepmind.google/technologies/gemini/) - AI Language Model
- [ShadCN/UI](https://ui.shadcn.com/) - Beautiful UI Components
- [Framer Motion](https://www.framer.com/motion/) - Animation Library

---

<div align="center">
Made with ❤️ by Pratyaksh Codes
</div>
