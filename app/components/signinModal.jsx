"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Chip,
} from "@nextui-org/react";
import { useState } from "react";
import { HiMail } from "react-icons/hi";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { supabase } from "../services/supabaseClient";
import secureLocalStorage from "react-secure-storage";
import { redirect, useRouter } from "next/navigation";

export default function SigninModal({ isOpen, onOpenChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [err, setErr] = useState(false);
  const { push } = useRouter();

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (!error) {
      secureLocalStorage.setItem("user", {
        aud: data?.user?.aud,
        id: data?.user?.id,
      });
      push("/admin");
    } else {
      setErr(true);
    }
    console.log(error);
    console.log(data);
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={true}
        placement="center"
        isKeyboardDismissDisabled={true}
        className="font-trika"
      >
        <ModalContent className="font-mono">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-end pr-12 font-trika">
                تسجيل الدخول{" "}
              </ModalHeader>
              <ModalBody className="px-4 py-4 m-0">
                <Chip
                  color="warning"
                  variant="bordered"
                  className="ml-auto mb-2 font-sans text-[12px]"
                >
                  فقط يسمح لأعضاء القائمة بتسجيل الدخول
                </Chip>

                <label
                  htmlFor="email"
                  className="text-right text-[12px] font-trika"
                >
                  بريد إلكتروني
                </label>
                <Input
                  isRequired
                  dir="rtl"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  //   label="Email"
                  //   placeholder="you@example.com"
                  className="text-[12px] font-sans font-bold"
                  labelPlacement="outside"
                  startContent={
                    <HiMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                />
                <label
                  htmlFor="password"
                  className="text-right text-[12px] font-trika"
                >
                  كلمة السر
                </label>
                <Input
                  isRequired
                  dir="rtl"
                  aria-labelledby="password"
                  onChange={(e) => setPassword(e.target.value)}
                  //   label="كلمة السر"
                  //   labelPlacement="inside"
                  variant="bordered"
                  //   placeholder="ادخل رقمك السري"
                  className="text-[12px] font-sans font-bold"
                  startContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <IoEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                />
                {err ? (
                  <Chip
                    variant="flat"
                    color="danger"
                    className="ml-auto text-xs font-mono"
                  >
                    {" "}
                    خطأ في إدخال البيانات، أعد المحاولة
                  </Chip>
                ) : (
                  ""
                )}
              </ModalBody>
              <ModalFooter className="font-trika">
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  onClick={() => setErr(false)}
                >
                  أغلق
                </Button>
                <Button color="primary" onClick={signInWithEmail}>
                  دخول
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
