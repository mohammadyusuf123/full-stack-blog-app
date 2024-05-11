"use client"

import { addPost } from "@/lib/actions";
import styles from "./adminPostForm.module.css";
import { useFormState,useFormStatus } from "react-dom";
import TiptapEditor from "../TiptapEditor/TiptapEditor";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={styles.btn}>
      {pending ? "Submitting..." : "Submit"}
    
    </button>
  );
}



const AdminPostForm = ({userId}) => {
  const [state, formAction] = useFormState(addPost,{
    userId:'',
    title:'',
    slug:''
    });

    const handleContent=(content)=>{
          console.log(content)
    }

    return (
      <>
        <form action={formAction }  className={styles.container}>
        <h1>Add New Post</h1>
        <input  type="hidden" name="userId" value={userId} />
        <input   type="text" name="title" placeholder="Title"  />
        <input  type="text" name="slug" placeholder="slug" />
        <input type="file" name="img" placeholder="img" required/>
        <textarea   type="text" name="desc" placeholder="desc" rows={10} />
        
       <Submit/>
        {state?.error}
      
      </form>

      </>
    );
};

export default AdminPostForm;