import PostCard from "./components/PostCard";

export default function Home() {
  return (
    <div className="flex mt-16 mx-10 md:w-full md:justify-center md:gap-x-96 md:mt-8 md:max-h-screen md:overflow-y-scroll overflow-x-hidden no-scrollbar">
      <div className="w-full md:max-w-md">
        <PostCard />
      </div>
      <div className="hidden md:block">future Component</div>
    </div>
  );
}
