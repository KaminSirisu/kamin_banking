import SideBar from "@/components/SideBar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const loggedIn = { firstName: 'Kamin', lastName: 'Sirisu'};
    return (
      <main className="flex w-full h-screen font-inter">
        <SideBar user={loggedIn}/>
        {children}
      </main>
    );
  }