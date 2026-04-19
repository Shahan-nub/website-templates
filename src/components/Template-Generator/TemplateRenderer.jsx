export default function TemplateRenderer({ template }) {
  return (
    <div className="flex flex-col gap-6 text-white">

      {template.sections.map((sec, i) => {

        // 🔝 NAVBAR
        if (sec.type === "navbar") {
          return (
            <div key={i} className="flex justify-between items-center border-b border-cyan-500/30 pb-4">
              <h2 className="font-bold text-lg text-color-1">{sec.title || "Logo"}</h2>
              <div className="flex gap-6 text-sm text-color-3">
                <span className="hover:text-color-1 transition-colors">Home</span>
                <span className="hover:text-color-1 transition-colors">About</span>
                <span className="hover:text-color-1 transition-colors">Contact</span>
              </div>
            </div>
          );
        }

        // 🎯 HERO
        if (sec.type === "hero") {
          return (
            <div key={i} className="text-center py-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">{sec.heading}</h1>
              <p className="text-color-3 mt-3">
                {sec.subheading || "Build something amazing today"}
              </p>
            </div>
          );
        }

        // ⚡ FEATURES
        if (sec.type === "features") {
          return (
            <div key={i} className="grid grid-cols-2 gap-4">
              {sec.items.map((f, j) => (
                <div key={j} className="bg-gradient-to-br from-glass via-[#1a1f3a] to-glass p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-colors">
                  <p className="text-color-3 font-medium">{f}</p>
                </div>
              ))}
            </div>
          );
        }

        // 💰 PRICING
        if (sec.type === "pricing") {
          const plans = sec.plans || [
            { name: "Basic", price: "$9" },
            { name: "Pro", price: "$29" },
          ];

          return (
            <div key={i} className="flex gap-4 justify-center flex-wrap">
              {plans.map((p, j) => (
                <div key={j} className="bg-gradient-to-br from-glass to-[#252b4e] p-6 rounded-lg w-40 text-center border border-cyan-500/20 hover:border-cyan-500/50 transition-colors">
                  <h3 className="text-color-1 font-bold">{p.name}</h3>
                  <p className="text-2xl font-bold text-cyan-400 mt-2">{p.price}</p>
                </div>
              ))}
            </div>
          );
        }

        // 📊 STATS
        if (sec.type === "stats") {
          const stats = sec.data || [
            { label: "Users", value: "1K+" },
            { label: "Revenue", value: "$10K" },
          ];

          return (
            <div key={i} className="flex gap-6 justify-center flex-wrap">
              {stats.map((s, j) => (
                <div key={j} className="text-center bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 px-6">
                  <h3 className="text-2xl font-bold text-cyan-400">{s.value}</h3>
                  <p className="text-color-3 text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          );
        }

        // 📈 CHARTS
        if (sec.type === "charts") {
          return (
            <div key={i} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-6 rounded-lg border border-cyan-500/20 text-center text-color-3">
              📈 Chart Placeholder
            </div>
          );
        }

        // 📂 SIDEBAR
        if (sec.type === "sidebar") {
          return (
            <div key={i} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 text-color-3">
              Sidebar: Dashboard / Analytics / Settings
            </div>
          );
        }

        // 📋 TABLE
        if (sec.type === "table") {
          return (
            <div key={i} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 text-color-3">
              Table Data Placeholder
            </div>
          );
        }

        // 💼 PROJECTS
        if (sec.type === "projects") {
          const projects = sec.items || ["Project 1", "Project 2"];

          return (
            <div key={i} className="grid grid-cols-2 gap-4">
              {projects.map((p, j) => (
                <div key={j} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-colors text-color-3 font-medium">
                  {p}
                </div>
              ))}
            </div>
          );
        }

        // 📞 CONTACT
        if (sec.type === "contact") {
          return (
            <div key={i} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 text-color-3">
              Contact Form (Name, Email, Message)
            </div>
          );
        }

        // 🛒 PRODUCTS
        if (sec.type === "products") {
          const products = sec.items || ["Item 1", "Item 2"];

          return (
            <div key={i} className="grid grid-cols-2 gap-4">
              {products.map((p, j) => (
                <div key={j} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-colors text-color-3 font-medium">
                  {p}
                </div>
              ))}
            </div>
          );
        }

        // 🔐 AUTH
        if (sec.type === "auth_form") {
          return (
            <div key={i} className="bg-gradient-to-br from-glass to-[#252b4e] p-6 rounded-lg max-w-sm mx-auto border border-cyan-500/20">
              <h2 className="text-center mb-4 text-color-1 font-bold">{sec.title || "Login"}</h2>
              <input className="w-full mb-3 p-2 bg-[#1a1f3a] border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500" placeholder="Email" />
              <input className="w-full mb-4 p-2 bg-[#1a1f3a] border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500" placeholder="Password" />
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-2 rounded-lg text-white font-bold hover:from-cyan-600 hover:to-blue-600 transition-all">Submit</button>
            </div>
          );
        }

        // 👤 PROFILE
        if (sec.type === "profile_card") {
          return (
            <div key={i} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-6 rounded-lg text-center border border-cyan-500/20">
              <h2 className="text-color-1 font-bold text-lg">{sec.name || "User Name"}</h2>
              <p className="text-color-3 mt-2">user@email.com</p>
            </div>
          );
        }

        // ⚙️ SETTINGS
        if (sec.type === "settings") {
          return (
            <div key={i} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 text-color-3">
              Settings Panel
            </div>
          );
        }

        // 📋 MENU
        if (sec.type === "menu_list") {
          const items = sec.items || ["Pizza", "Burger"];

          return (
            <ul key={i} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 text-color-3 space-y-2">
              {items.map((item, j) => (
                <li key={j} className="hover:text-color-1 transition-colors">• {item}</li>
              ))}
            </ul>
          );
        }

        // 📅 BOOKING
        if (sec.type === "booking_form") {
          return (
            <div key={i} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 text-color-3">
              Booking Form (Date, Time, Submit)
            </div>
          );
        }

        // 🟢 AVAILABILITY
        if (sec.type === "availability") {
          return (
            <div key={i} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 text-color-3">
              Availability Calendar
            </div>
          );
        }

        // ❓ FAQ
        if (sec.type === "faq") {
          return (
            <div key={i} className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 text-color-3">
              FAQ Section
            </div>
          );
        }

        // 🧰 UTILITY
        if (sec.type === "tools_grid") {
          return (
            <div key={i} className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 text-color-3">Tool 1</div>
              <div className="bg-gradient-to-br from-glass to-[#1a1f3a] p-4 rounded-lg border border-cyan-500/20 text-color-3">Tool 2</div>
            </div>
          );
        }

        // 📌 FOOTER
        if (sec.type === "footer") {
          return (
            <div key={i} className="text-center text-color-3 text-sm mt-6 pt-4 border-t border-cyan-500/20">
              © 2026 Your Company
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}