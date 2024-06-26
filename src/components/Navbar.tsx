import logo from "@/assets/careers-logo-2.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className=" shadow-md">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt="careers.in logo" />
          <span className="text-xl font-bold tracking-tight">Careers.in</span>
        </Link>

        <div className="flex gap-5">
          <Button asChild>
            <Link href="/jobs/new">Post a job</Link>
          </Button>

          <Button asChild>
            <Link href="/admin">Admin</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
