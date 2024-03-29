import Navbar from "@/components/Globals/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MarketingLayout;
