import { GrFacebook } from "react-icons/gr";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export const socialMedia = [
  {
    label: "Facebook",
    url: "#",
    icon: GrFacebook,
  },
  {
    label: "Instagram",
    url: "#",
    icon: BsInstagram,
  },
  {
    label: "Twitter",
    url: "#",
    icon: BsTwitter,
  },
  {
    label: "Youtube",
    url: "#",
    icon: BsYoutube,
  },
];

export const headerItems = {
  nav: [
    {
      label: "Nedir?",
      url: "/nedir",
    },
    {
      label: "Nasıl Çalışır?",
      url: "/nasil-calisir",
    },
    {
      label: "Hakkımızda",
      url: "/hakkimizda",
    },
    {
      label: "İletişim",
      url: "/",
    },
    {
      label: "DNSN Kurumsal",
      url: "/dnsn-kurumsal",
    },
  ],
  auth: [
    {
      label: "Kayıt Ol",
      url: "/uyelik/kayit-ol",
      active: true,
    },
    {
      label: "Giriş Yap",
      url: "/uyelik/giris-yap",
    },
  ],
};

export const scrollItems = [
  {
    label: "Nasıl Çalışır",
    to: "#how-to-work",
  },
  {
    label: "Markalar",
    to: "#here",
  },
  {
    label: "Kurumsal Başvuru",
    to: "#kurumsal-basvuru",
  },
  {
    label: "Sıkça Sorulan Sorular",
    to: "#here",
  },
];
