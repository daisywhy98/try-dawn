export const runtime = "nodejs"; 

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


// 配置你的邮件服务（这里使用 Gmail）
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // 你的邮箱
        pass: process.env.EMAIL_PASS, // 应用专用密码
    },
});

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        // 发送邮件
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Welcome to Our Website! 🎉",
            text: "Hello! Thanks for signing up. We are excited to have you!",
            html: "<h1>Welcome! 🎉</h1><p>Thanks for signing up. We are excited to have you!</p>",
        });

        return NextResponse.json({ message: "Email sent successfully!" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
