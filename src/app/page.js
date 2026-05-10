
import Banner from "@/components/hompage/banner/Banner";
import Friends from "@/components/hompage/friendsSection/Friends";


export default function Home() {
  return (
    <>
      <div className="bg-[#F8FAFC]">
        <Banner></Banner>
        <Friends></Friends>
      </div>
    </>
  );
}
