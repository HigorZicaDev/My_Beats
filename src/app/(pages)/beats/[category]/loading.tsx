import HomeTemplate from "@/components/Layout/HomeTemplate";

export default function LoadingPage() {
    return (
        <HomeTemplate>
            <span className="loading loading-spinner loading-lg"></span>
        </HomeTemplate>
    )
}