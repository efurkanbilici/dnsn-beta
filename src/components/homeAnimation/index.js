import styles from "./styles.module.css";
import Image from "next/image";

export default function HomeAnimation() {
  const GetImage = ({ w, h, name, pos = "", isMain = false, animation }) => {
    let imagesPath = "/images/home-animation";
    let content = (
      <Image
        src={`${imagesPath}/${name}`}
        alt="icon"
        width={w}
        height={h}
        className={isMain ? "py-6" : animation}
      />
    );

    return (
      <>
        {!isMain && <span className={`absolute ${pos}`}>{content}</span>}
        {isMain && <>{content}</>}
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className="relative px-12 intro-animation">
        <GetImage name="people.svg" w={256} h={324} isMain />
        <GetImage
          name="euro-dynamic-color.png"
          w={55}
          h={55}
          pos="-top-2 right-6 rotate-[10deg]"
          animation={styles.swing}
        />
        <GetImage
          name="dollar-dynamic-color.png"
          w={60}
          h={60}
          pos="-top-8 -right-2"
          animation={styles.swing}
        />
        <GetImage
          name="gift-dynamic-color.png"
          w={80}
          h={80}
          pos="bottom-20 -right-16"
          animation={`${styles.hanging} ${styles.slow}`}
        />
        <GetImage
          name="gift-dynamic-premium.png"
          w={80}
          h={80}
          pos="bottom-14 -right-10"
          animation={`${styles.hanging} ${styles.slow} ${styles.delayed}`}
        />
        <GetImage
          name="mobile-dynamic-color.png"
          w={70}
          h={70}
          pos="bottom-[45%] -left-4"
          animation={styles.hanging}
        />
        <GetImage
          name="mobile-dynamic-premium.png"
          w={70}
          h={70}
          pos="bottom-[50%] -left-10"
          animation={styles.hanging + " " + styles.delayed}
        />
        <GetImage
          name="notify-heart-dynamic-color.png"
          w={70}
          h={70}
          pos="left-5 top-2 -rotate-[17deg]"
          animation={styles.hanging}
        />
        <GetImage
          name="thumb-down-dynamic-color.png"
          w={60}
          h={60}
          pos="-left-14 -bottom-4"
          animation={styles.swing}
        />
        <GetImage
          name="thumb-up-dynamic-color.png"
          w={60}
          h={60}
          pos="-left-5 bottom-6"
          animation={styles.swing}
        />
        <GetImage
          name="takeaway-cup-dynamic-color.png"
          w={80}
          h={80}
          pos="top-[110px] -right-16"
          animation={styles.swing}
        />
      </div>
    </div>
  );
}
