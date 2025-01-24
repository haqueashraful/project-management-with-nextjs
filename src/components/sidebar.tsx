import Image from "next/image";
import Link from "next/link";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { Projects } from "./projets";

export const Sidebar = () => {
    return (
        <aside className="h-full bg-neutral-100 p-4 w-full">
            <Link className="flex justify-center items-center gap-2" href="/">
                <Image src='/logo.svg' width={64} height={48} alt="Logo" />
                <h1 className="text-2xl font-semibold">Jira Clone</h1>
            </Link>

            <DottedSeparator className="my-4" />
            <WorkspaceSwitcher />
            <DottedSeparator className="my-4" />

            <Navigation />
            <DottedSeparator className="my-4" />

            <Projects />
        </aside>
    );
};
