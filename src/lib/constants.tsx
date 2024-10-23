import {
	BirdIcon,
	BookOpen,
	Bot,
	CalendarDaysIcon,
	Frame,
	Map as MapIcon,
	Package2Icon,
	PackagePlusIcon,
	PieChart,
	Settings2,
	Users2Icon,
} from "lucide-react";

export const MENU_DATA = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "Shine Collab",
			logo: BirdIcon,
			plan: "Flamingos Cars",
		},
	],
	navMain: [
		{
			title: "Orçamentos",
			url: "#",
			icon: CalendarDaysIcon,
			isActive: true,
			items: [
				{
					title: "Agendamentos",
					url: "#",
				},
				{
					title: "Planos e Preços",
					url: "#",
				},
			],
		},
		{
			title: "Clientes",
			url: "#",
			icon: Users2Icon,
			items: [
				{
					title: "Lista de Clientes",
					url: "#",
				},
				{
					title: "Cadastro de Clientes",
					url: "#",
				},
			],
		},
		{
			title: "Produtos",
			url: "#",
			icon: PackagePlusIcon,
			items: [
				{
					title: "Compras",
					url: "#",
				},
				{
					title: "Vendas",
					url: "#",
				},
				{
					title: "Estoque",
					url: "#",
				},
			],
		},

		{
			title: "Financeiro",
			url: "#",
			icon: BookOpen,
			items: [
				{
					title: "Relatórios",
					url: "#",
				},
				{
					title: "Contas a Pagar",
					url: "#",
				},
				{
					title: "Contas a Receber",
					url: "#",
				},
				{
					title: "Balanço",
					url: "#",
				},
			],
		},
	],
	projects: [],
};
