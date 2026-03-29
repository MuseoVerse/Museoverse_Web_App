import { MessageCircle, Heart, Share2, Eye, TrendingUp, Flag, Star, Camera } from "lucide-react";

const kpis = [
  { label: "Total Posts", value: "6,312", icon: MessageCircle },
  { label: "Likes", value: "42.8K", icon: Heart },
  { label: "Comments", value: "12.1K", icon: MessageCircle },
  { label: "Shares", value: "3,420", icon: Share2 },
];

const sentiment = { positive: 72, neutral: 21, negative: 7 };

const topPosts = [
  { user: "Alice M.", text: "Discovered this stunning artifact at the Grand Egyptian Museum! The ancient craftsmanship is truly breathtaking.", likes: 1240, comments: 328, type: "Museum Only", hall: "10th Family Hall" },
  { user: "David K.", text: 'Just finished the "Pharaoh\'s Curse" AR experience. The way the hieroglyphs light up when you point the camera is mind-blowing!', likes: 956, comments: 212, type: "Public", hall: "Egypt Hall" },
  { user: "Sarah T.", text: "The AI storytelling for Tutankhamun's mask gave me chills. Hearing about the craftsmanship in that intimate way felt like time travel.", likes: 842, comments: 186, type: "Museum Only", hall: "Tutankhamun Galleries" },
  { user: "Marco R.", text: "Virtual tour of the Grand Hall from Rome — absolutely incredible detail. Almost felt like being there.", likes: 721, comments: 142, type: "Public", hall: "Virtual" },
];

const mostDiscussed = [
  { artifact: "Golden Mask of Tutankhamun", posts: 1840, sentiment: "Very Positive" },
  { artifact: "Colossal Ramesses II", posts: 920, sentiment: "Positive" },
  { artifact: "Khafre Enthroned", posts: 680, sentiment: "Positive" },
  { artifact: "Canopic Jars", posts: 420, sentiment: "Mixed" },
  { artifact: "Narmer Palette", posts: 310, sentiment: "Positive" },
];

const photographed = [
  { area: "Tutankhamun Galleries", photos: 4210 },
  { area: "Grand Hall Entrance", photos: 2840 },
  { area: "Colossal Statues Wing", photos: 1920 },
  { area: "Royal Sarcophagi Room", photos: 1340 },
  { area: "Funerary Objects Display", photos: 890 },
];

const trending = ["#GrandEgyptianMuseum", "#MuseoVerse", "#Tutankhamun", "#AncientEgypt", "#ARMuseum", "#PhantomCurse", "#GoldMask"];

const moderation = [
  { user: "User_8721", content: "Inappropriate comment on artifact post", status: "Flagged", date: "Mar 28" },
  { user: "User_3401", content: "Spam content about unrelated product", status: "Removed", date: "Mar 27" },
  { user: "User_5612", content: "Copyright concern on shared image", status: "Under Review", date: "Mar 26" },
];

const highlights = [
  { title: "Community Highlight of the Week", text: "Alice M.'s post about the 10th Family Hall artifact reached 1,240 likes — the most engaged post this month." },
  { title: "Posts That Drove Scans", text: "3 user posts about the Pharaoh's Curse AR experience drove a 28% increase in AR activations the following day." },
  { title: "Event Card Impact", text: 'The "Special Lecture: Ancient Egypt" event card generated 420 saves and 180 registrations from in-app social feed.' },
];

export default function SocialFeed() {
  return (
    <div className="space-y-6 max-w-[1400px]">
      <div>
        <h1 className="text-[#341701] text-[22px]">Social Feed Monitoring</h1>
        <p className="text-[#a89279] text-[13px] mt-0.5">How visitors talk about the Grand Egyptian Museum inside MuseoVerse</p>
      </div>

      {/* KPIs + Sentiment */}
      <div className="grid grid-cols-5 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="bg-white rounded-2xl p-4 border border-[#efe9df]">
            <k.icon className="w-5 h-5 text-[#c9a84c] mb-2" />
            <div className="text-[#341701] text-[20px]">{k.value}</div>
            <div className="text-[#76593a] text-[12px]">{k.label}</div>
          </div>
        ))}
        <div className="bg-white rounded-2xl p-4 border border-[#efe9df]">
          <div className="text-[#76593a] text-[12px] mb-2">Sentiment</div>
          <div className="flex gap-1 h-3 rounded-full overflow-hidden">
            <div className="bg-[#4ead6b] rounded-full" style={{ width: `${sentiment.positive}%` }} />
            <div className="bg-[#c9a84c] rounded-full" style={{ width: `${sentiment.neutral}%` }} />
            <div className="bg-[#c45c4a] rounded-full" style={{ width: `${sentiment.negative}%` }} />
          </div>
          <div className="flex justify-between mt-2 text-[11px] text-[#a89279]">
            <span>{sentiment.positive}% Positive</span>
            <span>{sentiment.neutral}% Neutral</span>
            <span>{sentiment.negative}% Negative</span>
          </div>
        </div>
      </div>

      {/* Top Posts + Trending */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Top User-Generated Posts</h2>
          <div className="space-y-3">
            {topPosts.map((p) => (
              <div key={p.user} className="p-4 bg-[#faf8f3] rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#e8e0d4] flex items-center justify-center text-[#76593a] text-[11px]">
                    {p.user.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-[#341701] text-[13px]">{p.user}</div>
                    <div className="text-[#a89279] text-[11px]">{p.hall} · {p.type}</div>
                  </div>
                </div>
                <p className="text-[#5a4633] text-[13px] mb-2">{p.text}</p>
                <div className="flex gap-4 text-[11px] text-[#a89279]">
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {p.likes.toLocaleString()}</span>
                  <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" /> {p.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
            <h2 className="text-[#341701] text-[15px] mb-3">Trending Tags</h2>
            <div className="flex flex-wrap gap-2">
              {trending.map((t) => (
                <span key={t} className="bg-[#faf5eb] text-[#76593a] text-[12px] px-3 py-1.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
            <h2 className="text-[#341701] text-[15px] mb-3 flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#c9a84c]" />
              Most Photographed
            </h2>
            <div className="space-y-2">
              {photographed.map((p) => (
                <div key={p.area} className="flex justify-between text-[12px]">
                  <span className="text-[#5a4633]">{p.area}</span>
                  <span className="text-[#a89279]">{p.photos.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Most Discussed + Highlights + Moderation */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4">Most Discussed Artifacts</h2>
          <div className="space-y-2.5">
            {mostDiscussed.map((m) => (
              <div key={m.artifact} className="flex justify-between items-center p-2 rounded-lg hover:bg-[#faf8f3]">
                <div>
                  <div className="text-[#341701] text-[13px]">{m.artifact}</div>
                  <div className="text-[#a89279] text-[11px]">{m.posts} posts</div>
                </div>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${m.sentiment === "Very Positive" ? "bg-[#e8f5ec] text-[#3a7d4f]" : m.sentiment === "Mixed" ? "bg-[#fef9ee] text-[#8b6e2f]" : "bg-[#f4fbf6] text-[#4ead6b]"}`}>
                  {m.sentiment}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4 flex items-center gap-2">
            <Star className="w-4 h-4 text-[#e9c349]" />
            Community Highlights
          </h2>
          <div className="space-y-3">
            {highlights.map((h) => (
              <div key={h.title} className="p-3 bg-[#faf8f3] rounded-xl">
                <div className="text-[#76593a] text-[11px] uppercase tracking-[1px] mb-1">{h.title}</div>
                <div className="text-[#5a4633] text-[12px]">{h.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-[#efe9df]">
          <h2 className="text-[#341701] text-[15px] mb-4 flex items-center gap-2">
            <Flag className="w-4 h-4 text-[#c45c4a]" />
            Moderation
          </h2>
          <div className="space-y-2.5">
            {moderation.map((m) => (
              <div key={m.user} className="p-3 bg-[#faf8f3] rounded-xl">
                <div className="flex justify-between items-start">
                  <div className="text-[#341701] text-[12px]">{m.user}</div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${m.status === "Removed" ? "bg-[#fde8e5] text-[#c45c4a]" : m.status === "Flagged" ? "bg-[#fef9ee] text-[#8b6e2f]" : "bg-[#f0ebe3] text-[#76593a]"}`}>
                    {m.status}
                  </span>
                </div>
                <div className="text-[#a89279] text-[11px] mt-0.5">{m.content}</div>
                <div className="text-[#a89279] text-[10px] mt-1">{m.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
