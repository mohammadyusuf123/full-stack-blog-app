"use client";

import { addUser } from "@/lib/actions";
import styles from "./adminUserForm.module.css";
import { useFormState ,useFormStatus} from "react-dom";

function AddingUser() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={styles.btn}>
      {pending ? "Adding..." : "Add"}
    
    </button>
  );
}


const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
    return (
        <form action={formAction} className={styles.container}>
        <h1>Add New User</h1>
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="email" placeholder="email" />
        <input type="password" name="password" placeholder="password" />
        <input type="text" name="img" placeholder="img" />
        <select name="isAdmin">
          <option value="false">Is Admin?</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <AddingUser/>
        {state?.error}
      </form>
    );
};

export default AdminUserForm;