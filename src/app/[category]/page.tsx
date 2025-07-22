// app/[category]/page.tsx
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import RenderCategorySection from "../../../src/Components/Cat/CatPage";
import { Metadata } from "next";

interface Article {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category: string;
}

interface CategoryData {
  articles: Article[];
}

interface Params {
  category: string;
}

export async function generateStaticParams() {
  const categories = ["business", "sports", "politics", "lifestyles", "technology"];
  return categories.map((category) => ({ category }));
}

// export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
//   const { category } = params;
//   return {
//     title: `${category.toUpperCase()} - News`,
//     description: `Latest news and articles in ${category}`,
//   };
// }

export default async function CategoryPage({ params }: { params: Params }) {
  const { category } = await params;
 console.log("category:",category);
  const filePath = path.join(process.cwd(),"src",  "data", `${category}.json`);


  
  let data: CategoryData;

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    data = JSON.parse(fileContent);
    console.log("articlesssssssssssssssssssssss:",data.articles)
    
  } catch (error) {
    console.error("Error reading file:", error);
    notFound();
  }

  return (
    <main className="pt-4">
      {data.articles && data.articles.length >= 6 ? (
        <RenderCategorySection articles={data} category={category} />
      ) : (
        <p className="text-center text-muted py-5">No articles found for this category.</p>
      )}
    </main>
  );
}
