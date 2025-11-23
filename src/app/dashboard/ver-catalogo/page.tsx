"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface Destino {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

const destinosMock: Destino[] = [
  {
    id: 1,
    nombre: "Paris",
    descripcion: "La ciudad del amor y la luz.",
    imagen: "/images/destinos/paris.jpg",
    precio: 1200,
  },
  {
    id: 2,
    nombre: "Tokyo",
    descripcion: "Vive la cultura japonesa y la modernidad.",
    imagen: "/images/destinos/tokyo.jpg",
    precio: 1500,
  },
  {
    id: 3,
    nombre: "New York",
    descripcion: "La ciudad que nunca duerme.",
    imagen: "/images/destinos/ny.jpg",
    precio: 1000,
  },
  {
    id: 4,
    nombre: "Barcelona",
    descripcion: "Arte, playa y gastronomía en España.",
    imagen: "/images/destinos/barcelona.jpg",
    precio: 1100,
  },
];

function VerCatalogo() {
  const [destinos] = useState<Destino[]>(destinosMock);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Catálogo de Destinos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinos.map((destino) => (
          <div
            key={destino.id}
            className="relative rounded-xl shadow overflow-hidden hover:shadow-xl transition-shadow duration-300 h-80"
          >
            {/* Imagen de fondo */}
            <Image
              src={destino.imagen}
              alt={destino.nombre}
              fill
              className="object-cover"
            />

            {/* Overlay de textos */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
              <h2 className="text-xl font-semibold">{destino.nombre}</h2>
              <p className="mt-1 text-sm">{destino.descripcion}</p>
              <p className="mt-1 font-bold text-yellow-400">
                ${destino.precio}
              </p>
              <Button className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl shadow">
                Reservar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerCatalogo;
