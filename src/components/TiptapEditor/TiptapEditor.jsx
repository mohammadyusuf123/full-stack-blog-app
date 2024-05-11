'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from "./Toolbar"

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure()],
    content:'' ,
    editorProps:{
    
      attributes:{
        class:"rounded md border min-h-[250px] border-input  outline-none disabled:cursor-not-allowed disable:opacity-50"
      }
    
    },
  
  })

  return (
   <div>
    <Toolbar editor={editor}/>
  <EditorContent editor={editor} />
  </div>
  
  )
}

export default TiptapEditor