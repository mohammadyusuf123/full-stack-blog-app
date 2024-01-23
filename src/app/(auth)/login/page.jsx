import LoginForm from '@/components/LoginForm/LoginForm';
import styles from './Login.module.css';
import { handleGithubLogin } from '@/lib/actions';

const Login = () => {
    return (
        <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
    );
};

export default Login;