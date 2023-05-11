import Link from "next/link";
import Image from "next/image";

import ImageLogoPilot from '@/assets/images/logo-pilot.png';
import {PlusIcon} from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full items-center p-6 gap-8">
      <Link href="/">
        <div className="rounded-lg shadow-primary-950 hover:shadow-xl transition-shadow">
          <Image src={ImageLogoPilot} alt="logo" height={60} width={60} />
        </div>
      </Link>

      <hr className="w-full h-1" />

      <Link href="/cockpit/new" className="xt-button bg-primary-400 p-4 rounded-lg">
        <PlusIcon className="text-primary-50 h-6 w-6" />
      </Link>
    </div>
  )
}
