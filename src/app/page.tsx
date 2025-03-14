"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import mermaid from "mermaid";
import { Button } from "@/components/ui/button";
import { Upload, FileText } from "lucide-react";
import { fetchGemini } from "@/utils/fetchGemini";
import { fetchTrends } from "@/utils/fetchTrends";
import { fetchGitHubRepo } from "@/utils/fetchGitHub";
import { fetchFTSO } from "@/utils/fetchFTSO";
import { fetchTwitterImages } from "@/utils/fetchTwitterImages";
import { metadataToMermaid } from "@/utils/mermaidParser";

export default function UMLGenerator() {
  const [userInput, setUserInput] = useState(""); // Text input
  const [uploadedFile, setUploadedFile] = useState(null); // PDF/TXT File
  const [uploadedImages, setUploadedImages] = useState([]); // Image Uploads
  const [twitterProfile, setTwitterProfile] = useState(""); // Twitter profile link
  const [umlCode, setUmlCode] = useState("");
  const [umlSvg, setUmlSvg] = useState("");

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
  }, []);

  // 📂 Handle File Upload (PDF/TXT)
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  // 🖼 Handle Image Upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedImages(files);
  };

  // 🔗 Handle Twitter Profile Input
  const handleTwitterInput = (event) => {
    setTwitterProfile(event.target.value);
  };

  // 📖 Extract text from PDF/TXT (Placeholder function, needs implementation)
  const extractTextFromFile = async (file) => {
    // TODO: Implement text extraction from PDF/TXT
    return ""; 
  };

  // 🚀 Process Input and Generate UML
  const generateUML = async () => {
    try {
      let extractedText = userInput;

      // 📖 Extract text from uploaded file (if any)
      if (uploadedFile) {
        extractedText += await extractTextFromFile(uploadedFile);
      }

      // 🖼 Fetch images from Twitter profile
      let twitterImages = [];
      if (twitterProfile) {
        twitterImages = await fetchTwitterImages(twitterProfile);
      }

      // 📡 Fetch Real-Time FTSO Data
      const ftsoData = await fetchFTSO("Fetch latest real-time data");

      // 🤖 Send everything to Gemini for analysis
      const metadata = await fetchGemini(extractedText, twitterImages, uploadedImages, ftsoData);

      // 📌 Convert metadata to UML
      const mermaidSyntax = metadataToMermaid(metadata);
      setUmlCode(mermaidSyntax);

      // 🎨 Render UML Diagram
      const svgCode = await mermaid.render("umlDiagram", mermaidSyntax);
      setUmlSvg(svgCode);
    } catch (error) {
      console.error("Error generating UML:", error);
    }
  };

  const handleExport = (format) => {
    console.log(`Exporting UML as ${format}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-6">
      <Head>
        <title>UML Generator</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">UML Diagram Generator</h1>

      {/* 📝 User Input & File Uploads */}
      <div className="flex flex-col gap-4 mb-4 w-full max-w-lg">
        <textarea
          className="p-2 text-black rounded-lg"
          placeholder="Type or paste your description here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        {/* 📂 Upload PDF/TXT */}
        <input type="file" accept=".pdf,.txt" onChange={handleFileUpload} />

        {/* 🖼 Upload Images */}
        <input type="file" accept="image/*" multiple onChange={handleImageUpload} />

        {/* 🔗 Twitter Profile Input */}
        <input
          type="text"
          className="p-2 text-black rounded-lg"
          placeholder="Paste Twitter Profile URL..."
          value={twitterProfile}
          onChange={handleTwitterInput}
        />

        {/* 🚀 Generate UML Button */}
        <Button onClick={generateUML} variant="primary">Generate UML</Button>
      </div>

      {/* 🏗 UML Diagram */}
      <div className="w-full max-w-4xl p-4 bg-gray-900 rounded-lg shadow-lg">
        {umlSvg ? (
          <div dangerouslySetInnerHTML={{ __html: umlSvg }} />
        ) : (
          <p className="text-gray-400">No UML Diagram Yet</p>
        )}
      </div>

      {/* 📤 Export Button */}
      <div className="mt-4 flex gap-4">
        <Button onClick={() => handleExport("pdf")} variant="primary">
          <FileText className="w-5 h-5 mr-2" /> Export PDF
        </Button>
      </div>
    </div>
  );
}
