import React, { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found • Instagram";
  }, []);

  return (
    <div className="bg-gray-background">
      <div className="mx-auth max-w-screen-lg">
        <p className="text-center text-2xl">Page Not Found</p>
      </div>
    </div>
  );
}
