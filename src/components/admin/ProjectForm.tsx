"use client";

import { useState, KeyboardEvent } from "react";
import ImageUploader from "./ImageUploader";

interface ProjectFormData {
  title: string;
  location: string;
  scope: string;
  tags: string[];
  images: string[];
  featured: boolean;
}

interface ProjectFormProps {
  initialData?: ProjectFormData;
  onSubmit: (data: ProjectFormData) => Promise<void>;
  submitLabel: string;
  onCancel: () => void;
}

export default function ProjectForm({
  initialData,
  onSubmit,
  submitLabel,
  onCancel,
}: ProjectFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [location, setLocation] = useState(initialData?.location || "");
  const [scope, setScope] = useState(initialData?.scope || "");
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [tagInput, setTagInput] = useState("");
  const [images, setImages] = useState<string[]>(initialData?.images || []);
  const [featured, setFeatured] = useState(initialData?.featured || false);
  const [coverIndex, setCoverIndex] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function addTag(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const tag = tagInput.trim();
      if (tag && !tags.includes(tag)) {
        setTags([...tags, tag]);
      }
      setTagInput("");
    }
  }

  function removeTag(tag: string) {
    setTags(tags.filter((t) => t !== tag));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!title.trim()) { setError("Title is required"); return; }
    if (!location.trim()) { setError("Location is required"); return; }
    if (!scope.trim()) { setError("Description is required"); return; }

    setSaving(true);
    try {
      // Reorder images so cover is first
      const orderedImages = [...images];
      if (coverIndex > 0 && coverIndex < orderedImages.length) {
        const [cover] = orderedImages.splice(coverIndex, 1);
        orderedImages.unshift(cover);
      }

      await onSubmit({
        title: title.trim(),
        location: location.trim(),
        scope: scope.trim(),
        tags,
        images: orderedImages,
        featured,
      });
    } catch {
      setError("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="admin-error">{error}</div>}

      <div className="form-grid">
        {/* Title */}
        <div className="form-group">
          <label className="admin-label" htmlFor="pf-title">Headline / Title</label>
          <input
            id="pf-title"
            className="admin-input"
            placeholder="e.g. Saudi Investment Bank"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Location */}
        <div className="form-group">
          <label className="admin-label" htmlFor="pf-location">Location</label>
          <input
            id="pf-location"
            className="admin-input"
            placeholder="e.g. Riyadh"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="form-group full-width">
          <label className="admin-label" htmlFor="pf-scope">Short Description</label>
          <textarea
            id="pf-scope"
            className="admin-textarea"
            placeholder="Brief description of the project scope..."
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            required
          />
        </div>

        {/* Tags */}
        <div className="form-group full-width">
          <label className="admin-label">Keyword Tags</label>
          <div className="tags-input-wrap">
            {tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
                <button type="button" onClick={() => removeTag(tag)}>×</button>
              </span>
            ))}
            <input
              type="text"
              placeholder={tags.length === 0 ? "Type a tag and press Enter..." : "Add more..."}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={addTag}
            />
          </div>
        </div>

        {/* Featured Toggle */}
        <div className="form-group full-width">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              type="button"
              className={`toggle-switch ${featured ? "active" : ""}`}
              onClick={() => setFeatured(!featured)}
              aria-label="Toggle featured"
            />
            <span style={{ fontSize: "0.875rem", color: "#374151", fontWeight: 500 }}>
              Featured Project
            </span>
          </div>
        </div>

        {/* Image Upload */}
        <div className="form-group full-width">
          <label className="admin-label">Project Images</label>
          <ImageUploader
            images={images}
            onChange={setImages}
            coverIndex={coverIndex}
            onCoverChange={setCoverIndex}
          />
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "flex-end", marginTop: "1.5rem" }}>
        <button type="button" className="btn-admin-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-admin-primary" disabled={saving} style={{ width: "auto" }}>
          {saving ? <span className="spinner" /> : submitLabel}
        </button>
      </div>
    </form>
  );
}
