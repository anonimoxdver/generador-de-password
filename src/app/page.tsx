import { MainGeneratePassword } from "@/components/MainGeneratePassword";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-6 bg-gray-200 p-24">
      <h1 className="font-extrabold text-[30px]">Generate your password</h1>
      <MainGeneratePassword/>
    </main>
  );
}
