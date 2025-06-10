export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <section className="card">
            <div className="card-content">{children}</div>
        </section>
    )
}