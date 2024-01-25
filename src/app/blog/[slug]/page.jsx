import Image from 'next/image';
import styles from './SinglePost.module.css';
import { Suspense } from 'react';
import PostUser from '@/components/PostUser/PostUser';


// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getData(Number(slug));

  return {
    title: post.title,
    description: post.desc,
  };
};


const DynamicBlog = async({params}) => {

  const { slug } = params;

  // FETCH DATA WITH AN API
  const post = await getData(slug);

  console.log(post)

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);


    return (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <Image src={'/img1.jpg'} alt="" fill className={styles.img} />
          </div>
       
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )}
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Reactions</span>
              <span className={styles.detailValue}>
               01.20.2014
              </span>
            </div>
          </div>
          <div className={styles.content}>{post.body}</div>
        </div>
      </div>
    );
};

export default DynamicBlog;