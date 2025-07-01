"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  CalendarClock,
  Command,
  Contact,
  Eye,
  Frame,
  GalleryVerticalEnd,
  HandHeart,
  ImagePlay,
  Map,
  Package,
  PieChart,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "jose12dev",
    email: "j.tamara1208@hotmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Inicio",
      url: "/inicio",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Panel de control",
          url: "/dashboard/panel-de-control",
        }
      ],
    },
    {
      title: "Libro",
      url: "/libro",
      icon: BookOpen,
      items: [
        {
          title: "Ver Catalogo",
          url: "/dashboard/ver-catalogo",
        },
        {
          title: "Reservar Libro",
          url: "/dashboard/reservar-libro",
        }
      ],
    },
    {
      title: "Paquetes",
      url: "/paquetes",
      icon: Package,
      items: [
        {
          title: "Destinos Populares",
          url: "/dashboard/destinos-populares",
        },
        {
          title: "Promociones",
          url: "/dashboard/promociones",
        }
      ],
    },
    {
      title: "Servicios",
      url: "/servicios",
      icon: HandHeart,
      items: [
        {
          title: "Guias Turisticos",
          url: "/dashboard/guias-turisticos",
        },
        {
          title: "Transporte",
          url: "/dashboard/transporte",
        },
        {
          title: "Alojamiento",
          url: "/dashboard/alojamiento",
        }
      ],
    }
  ],

  navMain2: [
    {
      title: "Multimedia",
      url: "/multimedia",
      icon: ImagePlay,
      items: [
        {
          title: "Galeria",
          url: "/dashboard/galeria",
        },
        {
          title: "Videos",
          url: "/dashboard/videos",
        }
      ],
    },
    {
      title: "Revisar",
      url: "/revisar",
      icon: Eye,
      items: [
        {
          title: "Opiniones",
          url: "/dashboard/opiniones",
        },
        {
          title: "Valoraciones",
          url: "/dashboard/valoraciones",
        }
      ],
    },
    {
      title: "Contacto",
      url: "/contacto",
      icon: Contact,
      items: [
        {
          title: "Formulario",
          url: "/dashboard/formulario",
        },
        {
          title: "Oficinas",
          url: "/dashboard/oficinas",
        }
      ],
    },
  ],

  especiales: [
    {
      name: "Campañas de Temporada",
      url: "/dashboard/campanas-de-temporada",
      icon: CalendarClock,
    },
    {
      name: "Viajes Corporativos",
      url: "/dashboard/viajes-corporativos",
      icon: PieChart,
    },
    {
      name: "Tours Personalizados",
      url: "/dashboard/tours-personalizados",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain label="Explorar" items={data.navMain} />
        <NavMain label="Experiencias" items={data.navMain2} />
        <NavProjects especiales={data.especiales} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

