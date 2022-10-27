import Head from 'next/head';
import { Header } from 'src/components/Header';
import { Posts as PostsCompornent } from 'src/components/Posts';

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsCompornent />
    </div>
  );
};

export default Posts;
