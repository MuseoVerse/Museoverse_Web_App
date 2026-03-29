import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Overview from "./components/pages/Overview";
import VisitorAnalytics from "./components/pages/VisitorAnalytics";
import ExhibitsArtifacts from "./components/pages/ExhibitsArtifacts";
import StorytellingAR from "./components/pages/StorytellingAR";
import SocialFeed from "./components/pages/SocialFeed";
import VirtualTours from "./components/pages/VirtualTours";
import Campaigns from "./components/pages/Campaigns";
import Reports from "./components/pages/Reports";
import MuseumSettings from "./components/pages/MuseumSettings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Overview },
      { path: "analytics", Component: VisitorAnalytics },
      { path: "exhibits", Component: ExhibitsArtifacts },
      { path: "storytelling", Component: StorytellingAR },
      { path: "social", Component: SocialFeed },
      { path: "virtual-tours", Component: VirtualTours },
      { path: "campaigns", Component: Campaigns },
      { path: "reports", Component: Reports },
      { path: "settings", Component: MuseumSettings },
    ],
  },
]);
