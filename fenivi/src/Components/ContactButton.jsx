import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function ContactButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === "/contact";

  return (
    <div >
      
    </div>
  );
}
