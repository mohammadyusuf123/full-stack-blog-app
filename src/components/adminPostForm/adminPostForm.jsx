"use client"

import { addPost } from "@/lib/actions";
import styles from "./adminPostForm.module.css";
import { useFormState,useFormStatus } from "react-dom";
import TiptapEditor from "../TiptapEditor/TiptapEditor";


const AdminPostForm = ({userId}) => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(addPost,undefined);


    return (
      <>
        <form action={formAction} onReset={pending} className={styles.container}>
        <h1>Add New Post</h1>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="file" name="img" placeholder="img" />
        {/* <textarea type="text" name="desc" placeholder="desc" rows={10} /> */}
        <TiptapEditor/>
        <button>Add</button>
        {state?.error}
      
      </form>

      </>
    );
};

export default AdminPostForm;