import HomeTemplate from "@/components/Layout/HomeTemplate";
import getAllSongsByCategory from "@/data/service/getAllSongsByCategory";


/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function CategoryBeat(props: any) {
    const beats = await getAllSongsByCategory(props.params.category);
    // console.log(beats);
    if(!beats) return <div>Your not beats, brow!</div>
    return (

        <HomeTemplate>
        <div className="overflow-x-auto">
          <h1 className='mb-4 uppercase'>Beats-{props.params.category}</h1>
          
          <table className="table table-xs">
            <thead>
              <tr>
                <th></th>
                <th>Artist Name</th>
                <th>Category</th>
                <th>Likes</th>
                <th>Dowloads</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

                {beats.map((beat: any) => (
                <tr key={beat.id}>
                    <th>{beat.id}</th>
                    <td>{beat.name}</td>
                    <td>{beat.category}</td>
                    <td>{beat.likes}</td>
                    <td>{beat.dowloads}</td>
                    <td>
                    <audio controls>
                      <source src={beat.url} type="audio/wav" />
                      Seu navegador não suporta o elemento de áudio.
                    </audio>
                    </td>
                </tr>
                ))}


            </tbody>

          </table>
        </div>
      </HomeTemplate>
    )
}