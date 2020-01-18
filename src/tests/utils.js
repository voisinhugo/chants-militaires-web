import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

export const renderPage = component => render(<Router>{component}</Router>);
