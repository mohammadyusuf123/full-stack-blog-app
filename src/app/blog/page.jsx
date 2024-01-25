import PostCard from '@/components/PostCard/PostCard';
import styles from './Blog.module.css';
import { getPosts } from '@/lib/data';
// FETCH DATA WITH AN API

const Blog = async() => {
 

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();
    return (
        <div className={styles.container}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    );
};

export default Blog;