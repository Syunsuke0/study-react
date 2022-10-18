import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components//Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';
import { BgLightBlue } from 'src/hooks/BgLightBlue';

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd } = useInputArray();
  BgLightBlue();

  return (
    <div className={styles.container}>
      <Head>
        <title>About page</title>
      </Head>
      <Header />

      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? '非表示' : '表示'}</button>
      {isShow ? <h2>{count}</h2> : null}

      <hr />

      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ol>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>

      <Main page="about" />
      <Footer />
    </div>
  );
}
