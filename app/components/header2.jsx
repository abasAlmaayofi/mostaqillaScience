"use client";
import { Button } from "@nextui-org/button";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import mostaqillaSciLogo from "../../public/mostaqillaSciLogo.png";
import { MdClose } from "react-icons/md";
import { link, useDisclosure } from "@nextui-org/react";
import SigninModal from "./signinModal";
import { usePathname } from "next/navigation";
import secureLocalStorage from "react-secure-storage";
import { supabase } from "../services/supabaseClient";

export default function Header2({
  handleClickFiles,
  handleClickAdvertise,
  admin = false,
}) {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pathname = usePathname();
  const [authenticated, setAuthenticated] = useState(false);
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      secureLocalStorage.removeItem("user");
      setAuthenticated(false);
    }
  }

  const handleClickScreen = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let auth = !!secureLocalStorage.getItem("user")?.aud;
    setAuthenticated(auth);
  }, [authenticated]);

  return (
    <>
      <div
        className={`relative w-scree flex justify-between items-center flex-row-reverse font-trika font-light text-xs tracking-wide `}
      >
        <div className="absolute md:left-0 -left-4  mt-4">
          <Image alt="logo" src={mostaqillaSciLogo} className="w-48 h-48" />
        </div>
        <div className="gap-6 text-white font-[5px] px-4 py-2 items-center md:flex hidden">
          <Link
            href="/"
            className={`leading-relaxed py-1  ${
              pathname == "/"
                ? "border-b border-[#0086d7] text-white"
                : "text-gray-600"
            }`}
          >
            الصفحة الرئيسية{" "}
          </Link>
          <Link
            href="/gpa"
            className={`leading-relaxed py-1  ${
              pathname == "/gpa"
                ? "border-b border-[#0086d7] text-white"
                : "text-gray-600"
            }`}
          >
            حساب المعدل التراكمي{" "}
          </Link>
          <Link
            href="/admin"
            className={`leading-relaxed py-1  ${
              pathname == "/admin"
                ? "border-b border-[#0086d7] text-white"
                : "text-gray-600"
            }`}
          >
            صفحة الإدارة{" "}
          </Link>

          <Link
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
            className={`leading-relaxed py-1  ${
              pathname == "contact"
                ? "border-b border-[#0086d7] text-white "
                : "text-gray-600"
            }`}
          >
            تواصل
          </Link>
          {authenticated ? (
            <Button
              variant="light"
              size="sm"
              className={`leading-relaxed py-1  border border-danger text-danger`}
              onClick={signOut}
            >
              تسجيل الخروج
            </Button>
          ) : (
            <Button
              variant="light"
              size="sm"
              className={`leading-relaxed py-1  border border-[#89caf3] text-[#89caf3]`}
              onClick={onOpen}
            >
              تسجيل
            </Button>
          )}
        </div>
        <div className="block md:hidden text-white pt-5 relative">
          <Button
            variant="light"
            className="text-white"
            onClick={() => setShowSidebar(true)}
            size="sm"
          >
            <HiMenuAlt3 size={30} />
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {showSidebar ? (
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: 1000 }}
            transition={{ type: "spring", stiffness: 40 }}
            className="fixed inset-0 left-[30%] bg-black/70 backdrop-blur-lg z-40"
          >
            <div className="text-white pt-2">
              <Button
                variant="light"
                size="sm"
                className="text-white"
                onClick={() => setShowSidebar(false)}
              >
                <MdClose size={35} />
              </Button>
            </div>
            <div className="flex flex-col font-trika gap-4 px-4 mt-2">
              {authenticated ? (
                <Button
                  variant="light"
                  size="sm"
                  href=""
                  className={`leading-relaxed py-1 my-4  border border-danger text-danger text-lg`}
                  onClick={signOut}
                >
                  تسجيل الخروج
                </Button>
              ) : (
                <Button
                  variant="light"
                  size="sm"
                  href=""
                  className={`leading-relaxed py-1 my-4  border border-[#0086d7] text-[#bfe5fd] text-lg`}
                  onClick={onOpen}
                >
                  تسجيل
                </Button>
              )}

              <Link
                href="/"
                className={`leading-relaxed py-1  text-right ${
                  pathname == "/"
                    ? "border-b border-[#0086d7] text-white"
                    : "text-gray-400"
                }`}
              >
                الصفحة الرئيسية{" "}
              </Link>
              <Link
                href="/gpa"
                className={`leading-relaxed py-1  text-right ${
                  pathname == "/gpa"
                    ? "border-b border-[#0086d7] text-white"
                    : "text-gray-400"
                }`}
              >
                حساب المعدل التراكمي{" "}
              </Link>
              <Link
                href="/admin"
                className={`leading-relaxed py-1 text-right ${
                  pathname == "/admin"
                    ? "border-b border-[#0086d7] text-white"
                    : "text-gray-600"
                }`}
              >
                صفحة الإدارة{" "}
              </Link>
              <Link
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                className={`leading-relaxed py-1 text-right  ${
                  pathname == "contact"
                    ? "border-b border-[#0086d7] text-white "
                    : "text-gray-400"
                }`}
              >
                تواصل
              </Link>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
      <SigninModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
