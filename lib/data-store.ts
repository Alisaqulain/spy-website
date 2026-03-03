import path from "path";
import fs from "fs";
import type { Testimonial } from "./testimonials-data";
import type { BlogPost } from "./blog-data";
import { testimonials as defaultTestimonials } from "./testimonials-data";
import { blogPosts as defaultBlogPosts } from "./blog-data";

const DATA_DIR = path.join(process.cwd(), "data");
const TESTIMONIALS_FILE = path.join(DATA_DIR, "testimonials.json");
const BLOG_FILE = path.join(DATA_DIR, "blog.json");
const TESTIMONIALS_PAGE_FILE = path.join(DATA_DIR, "testimonials-page.json");

export interface TestimonialsPageConfig {
  videoSectionTitle: string;
  videoSectionSubtitle: string;
}

const defaultTestimonialsPageConfig: TestimonialsPageConfig = {
  videoSectionTitle: "Video Testimonials",
  videoSectionSubtitle: "Watch client stories and insights. More videos on our Instagram.",
};

function readJsonFile<T>(filePath: string, fallback: T): T {
  try {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(raw) as T;
    }
  } catch {
    // use fallback
  }
  return fallback;
}

function writeJsonFile(filePath: string, data: unknown): void {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("data-store write error:", err);
    throw new Error("Failed to save data");
  }
}

export function getTestimonials(): Testimonial[] {
  return readJsonFile<Testimonial[]>(TESTIMONIALS_FILE, defaultTestimonials);
}

export function getBlogPosts(): BlogPost[] {
  return readJsonFile<BlogPost[]>(BLOG_FILE, defaultBlogPosts);
}

export function saveTestimonials(items: Testimonial[]): void {
  writeJsonFile(TESTIMONIALS_FILE, items);
}

export function saveBlogPosts(posts: BlogPost[]): void {
  writeJsonFile(BLOG_FILE, posts);
}

export function getNextTestimonialId(): number {
  const list = getTestimonials();
  const max = list.length ? Math.max(...list.map((t) => t.id)) : 0;
  return max + 1;
}

export function getTestimonialsPageConfig(): TestimonialsPageConfig {
  return readJsonFile<TestimonialsPageConfig>(TESTIMONIALS_PAGE_FILE, defaultTestimonialsPageConfig);
}

export function saveTestimonialsPageConfig(config: TestimonialsPageConfig): void {
  writeJsonFile(TESTIMONIALS_PAGE_FILE, config);
}
