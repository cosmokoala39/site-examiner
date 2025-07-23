import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import RenderCategorySection from "../../../src/Components/Cat/CatPage";

interface Article {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category: string;
}

interface Params {
  category: string;
}

export async function generateStaticParams() {
  const categories = ["business", "sports", "politics", "health", "technology"];
  return categories.map((category) => ({ category }));
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { category } =await params;
  const filePath = path.join(process.cwd(), "src", "data", `${category}.json`);

  let data: Article[] = [];

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    data = JSON.parse(fileContent); // Your JSON is an array, so parse directly into Article[]
    // console.log("Loaded articles:", data);
  } catch (error) {
    console.error("Error reading file:", error);
    notFound();
  }

  return ( 
    <div className="container">
    <main className="pt-4">
      {data.length >= 6 ? (
        <RenderCategorySection articles={data} category={category} />
      ) : (
        <p className="text-center text-muted py-5">No articles found for this category.</p>
      )}
    </main>
    </div>
  );
}
