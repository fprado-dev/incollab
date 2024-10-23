"use client";

import { useUser, UserButton } from "@clerk/nextjs";

export default function Home() {
	const { user } = useUser();

	return (
		<div className="flex">
			<div className="flex gap-4 items-center p-4">
				<UserButton />
				<h1 className="text-sm font-normal font-sans">
					Welcome {user?.firstName}
				</h1>
			</div>
		</div>
	);
}
