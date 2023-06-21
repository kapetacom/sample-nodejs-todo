import { createRoot } from "react-dom/client";
import React from "react";
import { WebPage } from "./WebPage";

const container = document.createElement("div");
container.classList.add("application-container");
document.body.append(container);

createRoot(container).render(<WebPage />);
