import styles from "./SocialMedia.module.css";

import { socialMedia } from "@/data";
import Link from "next/link";

export default function SocialMedia({ type = "icons" }) {
  return (
    <>
      {type === "icons" && (
        <ul className={styles.list}>
          {socialMedia &&
            socialMedia.map((i, index) => (
              <li key={index}>
                <Link href={i.url} title={i.label}>
                  <i.icon />
                </Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
}
