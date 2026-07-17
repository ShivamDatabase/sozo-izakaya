import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Menu from "@/components/Menu/Menu";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingButtons from "@/components/ui/FloatingButtons";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function MenuPage() {
  const items = await prisma.menuItem.findMany();

  return (
    <>
      <ScrollProgress />
      <FloatingButtons />
      <Navbar />
      <main style={{ paddingTop: "80px", background: "var(--bg-dark)", minHeight: "100vh" }}>
        <Menu initialItems={items} />
      </main>
      <Footer />
    </>
  );
}
