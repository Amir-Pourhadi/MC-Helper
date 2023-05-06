import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { AuthPage, HomePage, NotFoundPage } from "@/pages";

export default function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="discord" element={<AuthPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
