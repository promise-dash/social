import AddPost from "@/components/AddPost";
import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";

export default function Home() {
  return (
<div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="home"/>
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu />
      </div>
    </div>
  );
}
