import {allBlogs} from "@/.contentlayer/generated";
import HomeCoverSection from "@/src/components/Home/HomeCoverSection";
export default function Home() {
  return (
   <main className={"mt-24"}>
        <HomeCoverSection blogs={allBlogs}/>
    </main>
  )
}
