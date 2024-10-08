import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p className="text-white-1">LEFT SIDEBar</p> {children}
        <p className="text-white-1">right sidebar</p>
      </main>
    </div>
  );
}
