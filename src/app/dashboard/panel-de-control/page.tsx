"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Reserva {
  id: number;
  destino: string;
  fecha: string;
  estado: string;
}

const mockReservas: Reserva[] = [
  { id: 1, destino: "Paris", fecha: "2025-12-10", estado: "Confirmada" },
  { id: 2, destino: "Tokyo", fecha: "2026-01-05", estado: "Pendiente" },
  { id: 3, destino: "New York", fecha: "2026-02-20", estado: "Cancelada" },
];

function PanelDeControl() {
  const [reservas, setReservas] = useState<Reserva[]>(mockReservas);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Panel de Control</h1>

      {/* Estadísticas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-xl font-semibold">Reservas Totales</h2>
          <p className="text-3xl font-bold mt-2">{reservas.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-xl font-semibold">Destinos Favoritos</h2>
          <p className="text-3xl font-bold mt-2">5</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-xl font-semibold">Viajes Completados</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>
      </div>

      {/* Accesos rápidos */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl shadow">
          Nueva Reserva
        </Button>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow">
          Ver Destinos
        </Button>
        <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow">
          Perfil de Usuario
        </Button>
      </div>

      {/* Tabla de últimas reservas */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <h2 className="text-2xl font-semibold p-6 border-b">
          Últimas Reservas
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Destino
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                Estado
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reservas.map((reserva) => (
              <tr key={reserva.id}>
                <td className="px-6 py-4">{reserva.id}</td>
                <td className="px-6 py-4">{reserva.destino}</td>
                <td className="px-6 py-4">{reserva.fecha}</td>
                <td
                  className={`px-6 py-4 font-semibold ${
                    reserva.estado === "Confirmada"
                      ? "text-green-600"
                      : reserva.estado === "Pendiente"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {reserva.estado}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PanelDeControl;
