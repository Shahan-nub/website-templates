"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TemplateRenderer from "./TemplateRenderer";
import GradientTitle from "../ui/GradientTitle";

const TEMPLATE_MAP = {
  landing: {
    sections: [
      { type: "navbar" },
      { type: "hero", heading: "Build Your Startup Faster" },
      { type: "features", items: ["Fast", "Scalable", "Secure"] },
      { type: "pricing" },
      { type: "footer" },
    ],
  },

  dashboard: {
    sections: [
      { type: "sidebar" },
      { type: "stats" },
      { type: "charts" },
      { type: "table" },
    ],
  },

  portfolio: {
    sections: [
      { type: "navbar" },
      { type: "hero", heading: "Hi, I'm a Developer" },
      { type: "projects" },
      { type: "contact" },
      { type: "footer" },
    ],
  },

  blog: {
    sections: [
      { type: "navbar" },
      { type: "hero", heading: "Welcome to My Blog" },
      { type: "posts" },
      { type: "footer" },
    ],
  },

  ecommerce: {
    sections: [
      { type: "navbar" },
      { type: "hero", heading: "Shop the Best Products" },
      { type: "products" },
      { type: "cart" },
      { type: "footer" },
    ],
  },

  // 🔥 NEW ONES

  auth: {
    sections: [{ type: "auth_form", mode: "login" }],
  },

  profile: {
    sections: [
      { type: "navbar" },
      { type: "profile_card" },
      { type: "settings" },
    ],
  },

  menu: {
    sections: [{ type: "navbar" }, { type: "menu_list" }],
  },

  booking: {
    sections: [
      { type: "navbar" },
      { type: "booking_form" },
      { type: "availability" },
    ],
  },

  pricing: {
    sections: [{ type: "navbar" }, { type: "pricing" }, { type: "faq" }],
  },

  utility: {
    sections: [{ type: "navbar" }, { type: "tools_grid" }],
  },
};

function personalizeTemplate(type, prompt) {
  const base = TEMPLATE_MAP[type];

  if (!base) return null;

  const lower = prompt.toLowerCase();

  // Extract simple keywords
  let keyword = "Your Project";

  if (lower.includes("ai")) keyword = "AI Platform";
  else if (lower.includes("food")) keyword = "Food Service";
  else if (lower.includes("hotel")) keyword = "Hotel Booking";
  else if (lower.includes("developer")) keyword = "Developer Portfolio";
  else if (lower.includes("shop")) keyword = "Online Store";
  else if (lower.includes("blog")) keyword = "Blog Platform";

  // Clone template (important)
  const newTemplate = {
    ...base,
    sections: base.sections.map((sec) => {
      // PERSONALIZATION RULES

      if (sec.type === "hero") {
        return {
          ...sec,
          heading: `Welcome to ${keyword}`,
        };
      }

      if (sec.type === "features") {
        return {
          ...sec,
          items: [`Best ${keyword}`, `Smart ${keyword}`, `Modern ${keyword}`],
        };
      }

      if (sec.type === "auth_form") {
        return {
          ...sec,
          title: `Login to ${keyword}`,
        };
      }

      if (sec.type === "pricing") {
        return {
          ...sec,
          title: `${keyword} Pricing Plans`,
        };
      }

      if (sec.type === "booking_form") {
        return {
          ...sec,
          title: `Book your ${keyword}`,
        };
      }

      if (sec.type === "profile_card") {
        return {
          ...sec,
          name: `${keyword} User`,
        };
      }

      return sec;
    }),
  };

  return newTemplate;
}

export default function TemplateGenerator() {
  const [prompt, setPrompt] = useState("");
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: prompt }),
      });

      const data = await res.json();
      console.log(data);
      const generated = personalizeTemplate(data.type, prompt);
      console.log(generated);
      setTemplate(generated);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="w-full flex flex-col items-center px-6 md:px-16 py-12 gap-12">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center flex flex-col justify-center items-center"
      >
        <div className="w-max my-9 rounded-full bg-gradient-to-r from-[#1a1d43] to-transparent px-3 lg:px-7 py-1 lg:py-2">
          <GradientTitle text="Template Generator"></GradientTitle>
        </div>
        <p className="text-color-3 mt-3 text-lg">
          Describe your website and AI will generate the perfect template
          structure
        </p>
      </motion.div>

      {/* INPUT SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-2xl flex flex-col gap-4"
      >
        <textarea
          placeholder="Describe your template... (e.g., 'AI dashboard for analytics')"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-24 p-4 rounded-lg bg-gradient-to-r from-glass via-[#252b4e] to-glass border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 resize-none"
        />

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="px-8 py-3 bg-gradient-to-r from-color-1 via-color-2 to-color-1 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              Generating...
            </span>
          ) : (
            "Generate Template"
          )}
        </button>
      </motion.div>

      {/* OUTPUT */}
      {template && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl bg-gradient-to-br from-glass via-[#252b4e] to-glass p-8 rounded-lg border border-cyan-500/20"
        >
          <TemplateRenderer template={template} />
        </motion.div>
      )}
    </div>
  );
}
