import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Toast.Provider swipeDirection="right">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setOpen={setOpen} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* Global Toast */}
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-md shadow-lg"
      >
        <Toast.Title>Message Sent ✅</Toast.Title>
        <Toast.Description>
          Thank you! I’ll get back to you soon.
        </Toast.Description>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 right-0 p-6 w-80 max-w-full" />
    </Toast.Provider>
  );
}

export default App;