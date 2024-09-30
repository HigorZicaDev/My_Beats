import HomeTemplate from "@/components/Layout/HomeTemplate";

export default function Me(props: any) {
    return (
        <HomeTemplate>
            <div className="flex gap-4">
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src="https://avatars.githubusercontent.com/u/165382509?v=4" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-lg">Higor Zica</p>
                    <p className="text-lg">Montpellier - FR</p>
                    <p className="text-lg">Brésilien</p>
                </div>
            </div>
            <div className="mt-3">
                <p>Développeur Web - Creator</p>
            </div>

        </HomeTemplate>
    )
}