import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

export default function HomeTemplate(props: any) {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-1 flex">
                <Menu />

                <main className="flex-1 p-8">{props.children}</main>
            </div>
            <Footer />
        </div>
    )
}