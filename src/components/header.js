import { headerItems, scrollItems } from "@/data";
import SocialMedia from "@/components/socialMedia";

import Link from "next/link";
import Image from "next/image";

import { FaRegUser } from "react-icons/fa";

export default function Header() {
  return (
    <header id="header">
      <div className="top">
        <div className="container">
          <span className="slogan">DNSN Burada her şey ücretsiz!</span>
          <SocialMedia />
        </div>
      </div>
      <div className="middle">
        <div className="container">
          <Link href="/" id="logo">
            <Image src="/logo.png" width={55} height={55} alt="logo" priority />
            <span translate="no">DNSN</span>
          </Link>
          <ul className="navigation">
            {headerItems?.nav.map(({ label, url }, index) => (
              <li key={index}>
                <Link href={url}>{label.toLocaleUpperCase("tr-TR")}</Link>
              </li>
            ))}
            <div className="divider" />
            <div className="auth-tab">
              <div className="link">
                <FaRegUser />
                <span className="text-[14px] font-semibold leading-6">
                  Giriş Yap
                </span>
              </div>

              <div className="dropdown">
                <div>
                  {headerItems?.auth.map(({ label, url, active }, index) => (
                    <Link
                      href={url}
                      key={index}
                      className={active ? "active" : ""}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="bot">
        <ul>
          {scrollItems.map(({ label, to }, index) => (
            <Link href={to} key={index}>
              {label.toLocaleUpperCase("tr-TR")}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
}
