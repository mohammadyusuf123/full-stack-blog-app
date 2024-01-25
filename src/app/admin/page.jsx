import { auth } from '@/lib/auth';
import styles from './admin.module.css';
import { Suspense } from 'react';
import AdminPost from '@/components/adminPost/adminPost';
import AdminPostForm from '@/components/adminPostForm/adminPostForm';
import AdminUser from '@/components/adminUser/adminUser';
import AdminUserForm from '@/components/adminUserForm/adminUserForm';

const page = async() => {
    const session = await auth();
    return (
        <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminPost />
            </Suspense>
          </div>
          <div className={styles.col}>
            <AdminPostForm userId = {session.user.id} />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Suspense fallback={<div>Loading...</div>}>
              <AdminUser />
            </Suspense>
          </div>
          <div className={styles.col}>
            <AdminUserForm />
          </div>
        </div>
      </div>
    );
};

export default page;