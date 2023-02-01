import Head from "next/head";
import {
  AiFillLinkedin,
} from "react-icons/ai";
import { 
  FaTiktok,
  FaDev,
  FaReact,
  FaStickyNote,
} from 'react-icons/fa';
import { 
  TbBrandNextjs,
  TbBrandReactNative,
} from 'react-icons/tb';
import { 
  MdOutlineDoNotDisturb,
} from 'react-icons/md';

import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Maicon - Site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl"><FaDev/>OMPO</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="mailto:2326mpb@gmail.com?subject=Envie sua porposta, em breve lhe enviarei o orçamento"
                >
                  Faça seu orçamento
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Maicon Pereira Barbosa
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Dev FullStack foco em Front-end <br/><br/> ReactJS | NextJS | React Native
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Olá, sou um programador Full Stack. Com minhas habilidades, posso 
            ajudar sua empresa a criar soluções de alta qualidade, 
            com ótima aparência e desempenho. Conheça-me melhor no 
            LinkedIn e em meu TikTok, onde ensino programação.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="https://www.linkedin.com/in/dev-maicon/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin/>
            </a>
            <a href="https://www.tiktok.com/@o_m_p_o" target="_blank" rel="noopener noreferrer">
              <FaTiktok/>
            </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image alt="opa" src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Tipos de Serviços</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Criamos seu <span className="text-teal-500">Sites</span>,
            <span className="text-teal-500"> Landing Pages</span>
            , <span className="text-teal-500">E-Commerces</span> e 
            <span className="text-teal-500"> Apps</span>.
            Se você estiver interessado(a), veja qual das opções abaixo se encaixa melhor 
            em sua proposta. Depois de escolher, envie-nos um e-mail com os detalhes e 
            faremos seu orçamento gratuitamente.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Veja nossos Serviços.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <FaReact size={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                React JS
              </h3>
              <p className="py-2">
              O Reactjs é uma ferramenta de desenvolvimento para criar 
              Landing Pages e sites mais simples de forma rápida e eficaz.<br></br>
              </p>
              <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md"
                href="mailto:2326mpb@gmail.com?subject=Descreva detalhes do seu site em React JS, em breve lhe enviarei o orçamento">
                Quero em React JS!
              </a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <TbBrandNextjs size={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Next Js
              </h3>
              <p className="py-2">
                O Next JS é um framework do React JS, 
                porém ele é extremamente eficiente para criação de sites 
                escalaveis como E-Commerces e outros tipos de sites com multiplas interações. 
              </p>
              <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md"
                href="mailto:2326mpb@gmail.com?subject=Descreva detalhes do seu site em Next JS, em breve lhe enviarei o orçamento">
                Quero em Next JS!
              </a>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <TbBrandReactNative size={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">React Native</h3>
              <p className="py-2">
                Diferentemente do React JS o com React Native é possivel cria aplicativos completos tanto para iOS quanto para Android com o mesmo código.
              </p>
              <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md"
                href="mailto:2326mpb@gmail.com?subject=Descreva detalhes do seu App em React Native, em breve lhe enviarei o orçamento">
                Quero em React Native!
              </a>
              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
