import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    // 解析 FormData
    const formData = await req.formData();
    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json({ error: "请上传图片" }, { status: 400 });
    }

    // **保存图片**
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), "public/uploads", file.name);
    await writeFile(filePath, buffer);

    // **调用 AI API (示例)**
    const envScore = Math.floor(Math.random() * 100); // 模拟 AI 计算环保分数

    // **一定要返回 JSON！**
    return NextResponse.json({ score: envScore, imageUrl: `/uploads/${file.name}` });
  } catch (error) {
    console.error("API 处理失败:", error);
    return NextResponse.json({ error: "服务器错误，请稍后再试" }, { status: 500 });
  }
}
