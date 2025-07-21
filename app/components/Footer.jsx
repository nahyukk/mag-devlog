"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/page.module.css";
import Image from "next/image";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const htmlElement = document.documentElement;
    const isDark = htmlElement.classList.contains("dark");

    setIsDarkMode(isDark);

    const observer = new MutationObserver(() => {
      setIsDarkMode(htmlElement.classList.contains("dark"));
    });

    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const copyIcon = isDarkMode ? "/icons/copy-icon.svg" : "/icons/copy-white-icon.svg";
  const emailIcon = isDarkMode ? "/icons/email-white-icon.svg" : "/icons/email-icon.svg";
  const githubIcon = isDarkMode ? "/icons/github-white-icon.svg" : "/icons/github-icon.svg";

  const email = "knahyuk@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1000);
    } catch (err) {
      console.error("클립보드 복사 실패:", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className={styles.footerContainer}>
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            ref={modalRef}
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <p style={{ fontWeight: "bold", marginBottom: "2px" }}>
              Contact Me!
            </p>
            <div className={styles.modalEmail}>
              <p>{email}</p>
              <button className={styles.copyButton} onClick={copyToClipboard}>
                <Image src={copyIcon} alt="Copy Icon" width={20} height={20} />
              </button>
              {copySuccess && (
                <span className={styles.copySuccess}>복사됨!</span>
              )}
            </div>
          </div>
        </div>
      )}
      <div className={styles.footerLinks}>
        <Link href="https://github.com/nahyukk" target="_blank">
          <Image src={githubIcon} alt="GitHub Icon" width={30} height={30} />
        </Link>
        <button
          className={styles.emailButton}
          onClick={() => setIsModalOpen(true)}
        >
          <Image src={emailIcon} alt="Email Icon" width={30} height={30} />
        </button>
      </div>
      <div className={styles.footerText}>
        <p>Copyright © 2025 NahyunKim</p>
        <p>Mag.dev</p>
      </div>
    </div>
  );
};

export default Footer;
