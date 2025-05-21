//by default next js passes the params names, when we create folder name with @ symbol
export default function ArchiveLayout({archive, latest}){
    return <div>
        <h1>News Archive</h1>
        <section id="archive-filter">
            {archive}
        </section>
        <section id="archive-latest">
            {latest}
        </section>
    </div>
}