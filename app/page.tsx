import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/cockpit" passHref>
        <button type="button" className="xt-button text-primary-200 bg-primary-400 px-4 py-2 rounded-lg hover:bg-primary-500">
          Go to cockpit
        </button>
      </Link>
    </main>
  )
}
