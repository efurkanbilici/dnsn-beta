import styles from "@/styles/Home.module.css";
import Section from "@/components/section";
import Link from "next/link";
import HomeAnimation from "@/components/homeAnimation";

export default function Home() {
  return (
    <Section className={styles.intro}>
      <div className={styles.box}>
        <div className={styles.card}>
          <div>
            <h1>Ücretsiz ürün denemenin en keyifli yolu.</h1>
            <p>
              Biz sana ücretsiz gönderelim, sen de bize ne düşündüğünü söyle!
            </p>
          </div>
          <Link href="/" className="primary-btn">
            HADİ DNSN!
          </Link>
        </div>
      </div>
      <div className={styles.animation}>
        <HomeAnimation />
      </div>
    </Section>
  );
}
