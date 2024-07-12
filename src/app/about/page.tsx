import Image from "next/image";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

import { Footer } from "@/components/Footer";
import { IconButton } from "@/components/IconButton";
import { NavBar } from "@/components/NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="flex min-h-screen flex-col justify-between bg-light-surface-background dark:bg-dark-surface-background gap-4">
        <div className="flex flex-col md:flex-row gap-4 w-full md:px-28 py-8 md:py-24 items-start justify-between">
          <div className="w-full relative md:rounded-2xl bg-light-surface-primary dark:bg-dark-surface-primary">
            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <Link href={"/"}>
                <IconButton>
                  <IoArrowBack className="h-6 w-6" />
                </IconButton>
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/about-me.svg"
                alt="Project"
                width={400}
                height={160}
                className="md:rounded-t-2xl pt-8"
              />
            </div>
            <div className="flex flex-col pb-12 pt-6 px-6 md:p-12 gap-6">
              <div className="flex justify-between">
                <span className="font-kalam text-base text-light-secondary dark:text-dark-secondary font-normal">
                  Sobre mim
                </span>
              </div>
              <div>
                <p className="text-light-text-secondary dark:text-dark-text-secondary font-heebo text-lg font-normal">
                  Nome: David Emanuel Crisóstomo França
                  <br />
                  Cidade: Fortaleza - CE
                  <br />
                  Idade:{" "}
                  {new Date().getFullYear() -
                    new Date("1993-08-08").getFullYear()}
                  <br />
                  Cargo: Desenvolvedor Full-stack
                  <br />
                  <br />
                  Olá! Sou David França, um entusiasta da tecnologia. Sou um
                  programador front-end, tenho 30 anos, apaixonado por criar
                  experiências digitais incríveis. Sou casado com uma mulher
                  maravilhosa, e nossas vidas são cheias de aventura e
                  aprendizado.
                  <br />
                  <br />
                  Minha jornada no mundo da programação não tem um início bem
                  definido, porém eu iniciei minha jornada como desenvolvedor
                  web quando um supervisor me desafiou a criar um aplicativo
                  para celular. Na época eu sabia muito pouco sobre
                  desenvolvimento web e basicamente nada sobre desenvolvimento
                  mobile. No entanto, aceitei o desafio e me ofereci para
                  estudar para concluir a tarefa. Por causa desse desafio,
                  fiquei fascinado em como o código pode dar vida ao design e
                  tornar a web um lugar mais interativo e envolvente. Imerso no
                  mundo do desenvolvimento front-end ao longo dos anos, fui
                  dominando HTML, CSS e linguagens como JavaScript, para
                  construir interfaces intuitivas e visualmente atraentes.
                  <br />
                  <br />
                  Minha formação inclui ensino superior em análise e
                  desenvolvimento de sistemas e treinamento na Rockseat, onde
                  ganhei uma base sólida em web design e conceitos de
                  desenvolvimento. Desde então, tive a oportunidade de trabalhar
                  em projetos empolgantes, desde sites de pequenas empresas até
                  aplicativos da web complexos.
                  <br />
                  <br />
                  Além de codificar, também sou apaixonado por aprender. Estou
                  sempre em busca de novos desafios e formas de expandir minhas
                  habilidades. Fora do mundo da programação, sou um leitor ávido
                  e gosto de explorar novos lugares com minha esposa. Além
                  disso, sou uma pessoa religiosa e frequento regularmente a
                  igreja, onde também tenho a oportunidade de servir a
                  comunidade. Acredito que minha fé me guia tanto no trabalho
                  quanto nas interações diárias.
                  <br />
                  <br />
                  No futuro, meu objetivo é continuar aprimorando minhas
                  habilidades técnicas e explorar o desenvolvimento de
                  aplicativos móveis para fornecer uma experiência de usuário
                  mais rica. Acredito firmemente que a tecnologia pode mudar
                  positivamente a maneira como interagimos com o mundo e estou
                  ansioso para fazer minha parte nessa jornada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
