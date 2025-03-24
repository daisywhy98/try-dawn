'use client';
import React from 'react';
import { useState } from 'react';


export default function UploadPhoto() {
    const [image, setImage] = useState<string | null>(null);
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
        console.log(file);
      }
      openaiTry();
    };
    const openaiTry=async ()=>{
      console.log("try");
      try{
        const res = await fetch("/api/vision", {
          method: "POST",
          
        });
      }catch{

      }
    }


    return (
      <div className="flex flex-col items-center gap-4 p-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="p-2 border rounded-lg cursor-pointer"
        />
        {image && (
          <img
            src={image}
            alt="Uploaded"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        )}
      </div>
    );
  }
  
