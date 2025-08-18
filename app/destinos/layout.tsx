import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/header/Navbar";


export default function DestinoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar /> 
      {children}
      <Footer />
    </div>
  );
}
