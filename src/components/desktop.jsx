import Head from 'next/head'
import useSWR from 'swr'
import styles from '@/styles/Desktop.module.css'

export const Desktop = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/tracks", fetcher);
  return (
    <>
      <Head>
        <title>Daril Insan Kamil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.left}>
          <div className={styles.namebox}>
            <p className={styles.nick}>Daril</p>
            <p>insan kamil</p>
          </div>
          <a className={styles.linkSong} href={data?.songUrl}>
            <div className={styles.musicbox}>
              <img
                className={styles.imgalbum}
                src={data?.albumImageUrl}
                width={60}
                height={60}
              />
              <div>
                <p className={styles.curr}>CURRENT PLAYING</p>
                <p className={styles.titlemusic}>{data?.title}</p>
                <p className={styles.artistmusic}>{data?.artist}</p>
              </div>
            </div>
          </a>
          <div className={styles.projectbox}>
            <p className={styles.txt2}>Project</p>
            <img
              src="./arrow.svg"
              alt="arrow-icon"
              className={styles.iconarrow}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.picbox}>
            <img src="./minaa.png" alt="minaaa" className={styles.pic} />
          </div>
          <div className={styles.jobbox}>GAKTAU JADI APA</div>
          <div className={styles.quotbox}>
            <img src="./ewniah.svg" alt="ewniah" />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="https://gitlab.com/Darill" className={styles.linksosmed}>
          <img src="./gitlab.svg" alt="gitlab" className={styles.iconsosmed} />
        </a>
        <a href="https://github.com/DarilInsanKamil">
          <img src="./github.svg" alt="github" className={styles.iconsosmed} />
        </a>
        <a href="https://twitter.com/Mwuehehee">
          <img
            src="./twiiter.svg"
            alt="twiiter"
            className={styles.iconsosmed}
          />
        </a>
      </footer>
    </>
  );
};
