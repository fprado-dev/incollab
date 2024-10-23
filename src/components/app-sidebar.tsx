"use client";

import type * as React from "react";
import { MENU_DATA } from "@/lib/constants";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { user } = useUser();
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={MENU_DATA.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={MENU_DATA.navMain} />
				<NavProjects projects={MENU_DATA.projects} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser
					user={{
						name: user?.firstName ?? "",
						email: user?.emailAddresses[0].emailAddress ?? "",
						avatar: user?.imageUrl ?? "",
					}}
				/>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
