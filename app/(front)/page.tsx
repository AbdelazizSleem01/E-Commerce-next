import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Image
        src="/images/logo.jpg"
        alt="ZOOZA E-commerce App"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-6xl font-bold">
        Welcome to
        <a
          href="https://nextjs.org"
          className="text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          ZOOZ
        </a>
      </h1>
    </div>
  );
}
