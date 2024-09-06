import MainHeader from "@/components/main-header";

export default function ArchiveLayout({children,archive, latest}){
    return(
        <div>
            <h1>News Archive</h1>
            <section id="archive-filter">
                {archive}
            </section>
            <section id="archive-latest">
                {latest}
            </section>
        </div>
    )
}