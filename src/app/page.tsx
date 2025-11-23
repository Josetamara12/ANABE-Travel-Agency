"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);

  // Cambiar imagen cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden select-none">
      {/* SLIDESHOW DE IMÁGENES */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`
            absolute top-0 left-0 w-full h-full transition-opacity duration-[1500ms]
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <Image
            src={img}
            alt={`slide-${index}`}
            fill
            className="object-cover"
          />
        </div>
      ))}

      {/* CAPA OSCURA SUAVE */}
      <div className="absolute inset-0 bg-black/30 z-20" />

      {/* CONTENIDO CENTRAL */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-2xl">
          Bienvenido a <span className="text-yellow-400">ANABÈ Travel</span>
        </h1>

        <p className="text-2xl max-w-3xl mt-6 text-gray-200 drop-shadow-lg leading-relaxed">
          Explora destinos increíbles, reserva experiencias únicas y gestiona
          tus viajes desde una plataforma diseñada para viajeros modernos.
        </p>

        <div className="mt-10">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-10 py-6 text-xl font-semibold bg-yellow-500 hover:bg-yellow-600 text-black shadow-xl hover:shadow-2xl transition-all rounded-xl"
            >
              Iniciar
            </Button>
          </Link>
        </div>
      </div>

      {/* GRADIENTE INFERIOR */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/40 to-transparent z-20" />
    </div>
  );
}
