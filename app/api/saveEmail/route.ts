import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "emails.json"); // 存储邮箱的 JSON 文件路径

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 读取已有数据（如果文件不存在则初始化为空数组）
    let emails = [];
    try {
      const data = await fs.readFile(filePath, "utf-8");
      emails = JSON.parse(data);
    } catch (err) {
      console.log("Creating new emails.json file...");
    }

    // 添加新邮箱
    emails.push(email);

    // 保存到 JSON 文件
    await fs.writeFile(filePath, JSON.stringify(emails, null, 2));

    return NextResponse.json({ message: "Email saved successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save email" }, { status: 500 });
  }
}
