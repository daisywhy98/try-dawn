"use client";

import { useState } from "react";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`服务器错误: ${res.status}`);
      }

      const data = await res.json();
      setScore(data.score);
      setPreview(data.imageUrl);
    } catch (err) {
      console.log(err);
      setError("上传失败");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <input type="file" accept="image/*" onChange={handleFileChange} className="p-2 border rounded-lg" />

      {preview && <img src={preview} alt="上传的图片" className="w-64 h-64 object-cover rounded-lg shadow-lg" />}

      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
        disabled={loading || !image}
      >
        {loading ? "分析中..." : "上传并分析"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
      {score !== null && <p className="text-lg font-semibold text-green-600">环保等级：{score} / 100</p>}
    </div>
  );
}
