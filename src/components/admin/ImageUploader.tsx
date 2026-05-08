"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Upload, X, Star, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageUploaderProps {
  images: string[];
  onChange: (images: string[]) => void;
  coverIndex: number;
  onCoverChange: (index: number) => void;
}

const MAX_SIZE = 100 * 1024; // 100KB

export default function ImageUploader({
  images,
  onChange,
  coverIndex,
  onCoverChange,
}: ImageUploaderProps) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function uploadFiles(files: FileList | File[]) {
    setError("");
    const fileArray = Array.from(files);

    // Client-side validation
    const oversized = fileArray.filter((f) => f.size > MAX_SIZE);
    if (oversized.length > 0) {
      setError("Please select images up to 100KB each.");
      return;
    }

    const nonImage = fileArray.filter((f) => !f.type.startsWith("image/"));
    if (nonImage.length > 0) {
      setError("Please select only image files.");
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      fileArray.forEach((f) => formData.append("files", f));

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Upload failed");
        return;
      }

      onChange([...images, ...data.data]);
      if (data.warnings) {
        setError(data.warnings.join(", "));
      }
    } catch {
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) {
      uploadFiles(e.dataTransfer.files);
    }
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      uploadFiles(e.target.files);
    }
    if (fileRef.current) fileRef.current.value = "";
  }

  function removeImage(index: number) {
    const url = images[index];
    // Delete from blob if it's a blob URL
    if (url.includes("vercel-storage") || url.includes("blob.vercel")) {
      fetch("/api/upload/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
    }

    const newImages = images.filter((_, i) => i !== index);
    onChange(newImages);
    if (coverIndex === index) onCoverChange(0);
    else if (coverIndex > index) onCoverChange(coverIndex - 1);
  }

  function moveImage(from: number, to: number) {
    if (to < 0 || to >= images.length) return;
    const arr = [...images];
    const [item] = arr.splice(from, 1);
    arr.splice(to, 0, item);
    onChange(arr);
    if (coverIndex === from) onCoverChange(to);
    else if (coverIndex === to) onCoverChange(from);
  }

  return (
    <div>
      <div
        className={`upload-zone ${dragging ? "dragging" : ""}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileRef.current?.click()}
      >
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={handleFileChange}
        />
        <div className="upload-icon">
          <Upload size={32} />
        </div>
        <div className="upload-text">
          {uploading ? "Uploading..." : "Drop images here or click to browse"}
        </div>
        <div className="upload-hint">Max 100KB per image • JPG, PNG, WebP</div>
      </div>

      {error && (
        <div className="admin-error" style={{ marginTop: "0.75rem" }}>
          {error}
        </div>
      )}

      {images.length > 0 && (
        <div className="image-grid">
          {images.map((url, i) => (
            <div key={url + i} className={`image-grid-item ${i === coverIndex ? "cover" : ""}`}>
              <img src={url} alt={`Image ${i + 1}`} loading="lazy" />
              <div className="image-actions">
                {i !== coverIndex && (
                  <button
                    className="img-btn-cover"
                    onClick={() => onCoverChange(i)}
                    title="Set as cover"
                  >
                    <Star size={14} />
                  </button>
                )}
                {i > 0 && (
                  <button
                    className="img-btn-move"
                    onClick={() => moveImage(i, i - 1)}
                    title="Move left"
                  >
                    <ChevronLeft size={14} />
                  </button>
                )}
                {i < images.length - 1 && (
                  <button
                    className="img-btn-move"
                    onClick={() => moveImage(i, i + 1)}
                    title="Move right"
                  >
                    <ChevronRight size={14} />
                  </button>
                )}
                <button
                  className="img-btn-delete"
                  onClick={() => removeImage(i)}
                  title="Remove"
                >
                  <X size={14} />
                </button>
              </div>
              {i === coverIndex && <div className="cover-badge">Cover</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
