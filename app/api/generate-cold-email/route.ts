// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { auth } from "@clerk/nextjs/server"; // ✅ Import Clerk server-side auth

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// export async function POST(req: Request) {
//   try {
//     // 🔐 Check authentication
//     const { userId } = await auth();
//     if (!userId) {
//       return NextResponse.json(
//         { error: "Unauthorized access. Please sign in." },
//         { status: 401 }
//       );
//     }

//     // Continue your AI logic
//     const { name, role, company, skills } = await req.json();

//     const prompt = `
//       Write a professional cover letter for ${name}.
//       Role: ${role}
//       Company: ${company}
//       Skills: ${skills.join(", ")}.
//       Keep it concise, confident, and tailored to the job.
//     `;

//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
//     const result = await model.generateContent(prompt);
//     const letter = result.response.text();

//     return NextResponse.json({ letter });
//   } catch (error) {
//     console.error("Cover Letter Error:", error);
//     return NextResponse.json({ error: "Failed to generate cover letter" }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { auth } from "@clerk/nextjs/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized access. Please sign in." },
        { status: 401 }
      );
    }
    
    const { name, recipient, context } = await req.json();

    const prompt = `
    Write a short, professional cold email.
    Sender: ${name}
    Recipient/Company: ${recipient}
    Purpose: ${context}
    
    Tone: polite, confident, and concise.
    End with a short call to action.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const email = result.response.text();

    return NextResponse.json({ email });
  } catch (error) {
    console.error("Cold Email Error:", error);
    return NextResponse.json({ error: "Failed to generate email" }, { status: 500 });
  }
}


// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { prisma } from "@/lib/db";
// import { auth } from "@clerk/nextjs/server";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// export async function POST(req: Request) {
//   try {
//     const { userId } = await auth();
//     const { name, recipient, context } = await req.json();

//     if (!userId) {
//       return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
//     }

//     const prompt = `
//     Write a short, professional cold email.
//     Sender: ${name}
//     Recipient/Company: ${recipient}
//     Purpose: ${context}

//     Tone: polite, confident, and concise.
//     End with a short call to action.
//     `;

//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//     const result = await model.generateContent(prompt);
//     const email = result.response.text();

//     // ✅ Save to database
//     await prisma.coldEmail.create({
//       data: {
//         userId,
//         senderName: name,
//         recipient,
//         context,
//         generated: email,
//       },
//     });

//     return NextResponse.json({ email });
//   } catch (error) {
//     console.error("Cold Email Error:", error);
//     return NextResponse.json({ error: "Failed to generate email" }, { status: 500 });
//   }
// }
