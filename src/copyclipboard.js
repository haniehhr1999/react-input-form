import { useRef } from "react";

export default function copyPassword() {
    const inputRef = useRef()
    // var copyText = document.getElementById("password");
    // copyText.select();
    inputRef.current.execCommand("copy");  
    
  }