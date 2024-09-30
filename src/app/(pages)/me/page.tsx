import HomeTemplate from "@/components/Layout/HomeTemplate";
import profile from "@/assets/profile.jpg";
import Image from "next/image";

export default function Me() {
    return (
        <HomeTemplate>
            <div className="flex gap-4">
                <div className="avatar">
                    <div className="w-56 h-56 rounded relative">
                        <Image src={profile} fill alt="Image Profile" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-lg p-3">Higor Zica</p>
                    <p className="text-lg p-3">Montpellier - FR</p>
                    <p className="text-lg p-3">Brésilien</p>
                </div>
            </div>
            <div className="mt-3">
                <p>Développeur Web - Creator</p>
            </div>

        </HomeTemplate>
    )
}