"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { IoArrowForward, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import * as z from "zod";

import { useRefs } from "@/context";
import emailJs from "@emailjs/browser";
import { Input, Textarea } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./Button";
import { IconButton } from "./IconButton";

const schema = z.object({
  name: z.string().min(1, { message: "Nome obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  subject: z.string().min(1, { message: "Assunto obrigatório" }),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const { contactRef } = useRefs();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit((data) => {
    setLoading(true);
    emailJs
      .send("service_l30kmqr", "template_ap1zpca", {
        name: data.name,
        email: data.email,
        subject: data.subject,
      })
      .then(() => {
        setLoading(false);
        toast.success("Mensagem enviada com sucesso!");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Erro ao enviar mensagem");
      })
      .finally(() => {
        reset();
      });
  });

  const isError = (name: keyof FormData) => {
    return !!errors[name];
  };

  const inputStyle = (name: keyof FormData) => {
    return `${
      isError(name)
        ? "border-red-500 focus:border-red-500"
        : "border-transparent focus:border-light-secondary dark:focus:border-dark-secondary"
    } px-4 py-3 rounded-lg border-2 bg-light-surface-background dark:bg-dark-surface-background transition-colors ease-out duration-300 outline-none text-light-text-primary dark:text-dark-text-primary`;
  };

  useEffect(() => {
    emailJs.init({
      publicKey: "TPCBTlTWY4mSFatN-",
    });
  }, []);

  return (
    <section className="flex md:p-10 gap-32" ref={contactRef}>
      <Toaster />
      <div className="flex flex-col md:flex-row px-6 py-12 md:p-16 gap-12 md:gap-32 md:rounded-2xl bg-light-surface-primary dark:bg-dark-surface-primary w-full">
        <div className="flex flex-col gap-10 w-full md:w-2/5">
          <Image
            src="/me.png"
            alt="Contact"
            width={160}
            height={160}
            className="rounded-full aspect-square object-cover border-4 border-text-primary"
          />
          <div className="flex flex-col gap-2">
            <span className="font-kalam text-light-secondary dark:text-dark-secondary text-base font-normal">
              Contato
            </span>
            <span className="font-heebo text-2xl font-medium text-light-text-primary dark:text-dark-text-primary">
              Gostou do meu trabalho? Vamos trabalhar juntos
            </span>
            <span className="text-light-text-secondary dark:text-dark-text-secondary font-heebo text-base font-normal">
              Estou sempre pronto para bater um papo. Envie-me um e-mail para{" "}
              <a
                href="mailto:davidemanuel.cf@gmail.com"
                className="text-light-secondary dark:text-dark-secondary font-heebo underline"
              >
                davidemanuel.cf@gmail.com
              </a>{" "}
              ou me chame nas redes sociais.
            </span>
          </div>
          <div className="flex gap-4">
            <IconButton
              variant="surface"
              onClick={() => openLink("https://github.com/david-franca")}
            >
              <IoLogoGithub />
            </IconButton>
            <IconButton
              variant="surface"
              onClick={() =>
                openLink("https://www.instagram.com/davidecfranca/")
              }
            >
              <IoLogoInstagram />
            </IconButton>
          </div>
        </div>
        <div className=" w-full md:w-3/5">
          <form
            id="contact-form"
            action="POST"
            onSubmit={onSubmit}
            className="flex flex-col gap-8"
          >
            <Input
              {...register("name")}
              type="text"
              placeholder="Nome"
              className={inputStyle("name")}
            />
            <Input
              {...register("email")}
              type="email"
              placeholder="Email"
              className={inputStyle("email")}
            />
            <Textarea
              {...register("subject")}
              rows={10}
              placeholder="Assunto"
              className={inputStyle("subject")}
            />
            <Button
              type="submit"
              label="Me envie uma mensagem"
              icon={IoArrowForward}
              loading={loading}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
