import HomeTemplate from "@/components/Layout/HomeTemplate";

export default function Home() {
  return (
    <HomeTemplate>
      <h1 className="text-xl mb-5">History and Structure My-Beats</h1>
      <p className="mb-5">Welcome to <strong>My Beats</strong> , your go-to platform for discovering and sharing high-quality beats and music samples—completely free! Designed especially for DJs and music creators, our site is dedicated to supporting the free music community. Whether you're looking for fresh sounds to elevate your mix or want to contribute your own creations, My Beats is the 
        perfect place to connect with like-minded artists and foster creativity without limits. Dive in, explore, and start creating!</p>
      <ul className="tree">
          <li>Home</li>
          <li>My files
            <ul>
                <li>Categories
                  <ul>
                    <li>Beats Funk</li>
                    <li>Beats Rap</li>
                  </ul>
                </li>
            </ul>
          </li>
      </ul>
    </HomeTemplate>
  );
}
