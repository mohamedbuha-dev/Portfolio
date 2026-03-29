import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { MihraqCaseStudy } from "./pages/MihraqCaseStudy";
import { AlmazaCaseStudy } from "./pages/AlmazaCaseStudy";
import { FocusCaseStudy } from "./pages/FocusCaseStudy";
import { VanLinkCaseStudy } from "./pages/VanLinkCaseStudy";
import { GameMateCaseStudy } from "./pages/GameMateCaseStudy";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Projects },
      { path: "projects", Component: Projects },
      { path: "projects/mihraq", Component: MihraqCaseStudy },
      { path: "projects/almaza", Component: AlmazaCaseStudy },
      { path: "projects/focus", Component: FocusCaseStudy },
      { path: "projects/vanlink", Component: VanLinkCaseStudy },
      { path: "projects/gamemate", Component: GameMateCaseStudy },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);