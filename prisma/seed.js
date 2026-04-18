import "dotenv/config";
import prisma from "../src/lib/prisma.js";

async function main() {
  await prisma.template.createMany({
    data: [
      {
        title: "SaaS Landing Page",
        description: "Modern SaaS landing page",
        imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
        demoUrl: "https://example.com/demo/saas",
        category: "Landing Page",
        tags: ["saas", "startup"],
      },
      {
        title: "Portfolio Minimal",
        description: "Clean personal portfolio",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        demoUrl: "https://example.com/demo/portfolio",
        category: "Portfolio",
        tags: ["minimal", "developer"],
      },
      {
        title: "Admin Dashboard",
        description: "Analytics dashboard UI",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        demoUrl: "https://example.com/demo/dashboard",
        category: "Dashboard",
        tags: ["admin", "charts"],
      },
      {
        title: "E-Commerce Store",
        description: "Modern e-commerce shopping experience",
        imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
        demoUrl: "https://example.com/demo/ecommerce",
        category: "E-Commerce",
        tags: ["shop", "products", "cart"],
      },
      {
        title: "Blog Platform",
        description: "Blogging platform with rich editor",
        imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
        demoUrl: "https://example.com/demo/blog",
        category: "Blog",
        tags: ["content", "articles", "publishing"],
      },
      {
        title: "Social Network",
        description: "Social media feed and messaging",
        imageUrl: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3",
        demoUrl: "https://example.com/demo/social",
        category: "Social",
        tags: ["community", "messaging", "feed"],
      },
      {
        title: "Project Management Tool",
        description: "Task and project tracking system",
        imageUrl: "https://images.unsplash.com/photo-1540880033063-6a50e8b18302",
        demoUrl: "https://example.com/demo/project",
        category: "Productivity",
        tags: ["tasks", "collaboration", "management"],
      },
      {
        title: "Mobile App Showcase",
        description: "Beautiful mobile application portfolio",
        imageUrl: "https://images.unsplash.com/photo-1512941691920-25bda36dc643",
        demoUrl: "https://example.com/demo/mobile",
        category: "Showcase",
        tags: ["mobile", "app", "portfolio"],
      },
      
    ],
  });
}

main()
  .then(() => console.log("Seeded"))
  .catch((e) => console.error(e))
  .finally(() => process.exit());