"use client"

import { Trash2Icon } from "lucide-react";

type DeletePostButtonProps = {
  id: string,
  title: string
}

export function DeletePostButton({id, title}: DeletePostButtonProps) {
  function handleClick() {
    
  }

  return (
    <button className="text-red-500 cursor-pointer transition 
            hover:scale-120 hover:text-red-700"

      aria-label={`Apagar post: ${title}`}
      title={`Apagar post: ${title}`}
      onClick={handleClick}>

      <Trash2Icon />

    </button>
  )
}