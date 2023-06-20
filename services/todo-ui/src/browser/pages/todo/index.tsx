import { createRoot } from "react-dom/client";
import React from "react";
import { TodoPage } from "./TodoPage";

const container = document.createElement("div");
container.classList.add("application-container");
document.body.append(container);

createRoot(container).render(<TodoPage />);
