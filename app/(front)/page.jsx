import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h2 className="text-5xl font-bold py-4 px-2">Welcome</h2>
      <Link
        href="/contacts"
        className="bg-green-700 text-white py-3 px-4 rounded-md"
      >
        View All contacts
      </Link>
      <div className="flex">
        <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center">
          1
        </div>
      </div>
    </section>
  );
}
