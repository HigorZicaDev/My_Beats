import {
    IconHome2,
    IconUserHexagon,
    IconMusic,
    IconFolder
} from '@tabler/icons-react'
import MenuItem from './MenuItem';
import getAllCategories from '@/data/service/getAllCategories';

export default async function Menu() {

    const categories = await getAllCategories();

    return (
        <aside className="w-80 bg-zinc-900 p-6 border-r border-zinc-800">
            <nav className="flex flex-col gap-2">
            <ul className="menu menu-xs rounded-lg w-full max-w-xs bg-zinc-900">
                    <li className="hover:bg-black">
                        <MenuItem texto="Início" href="/" icone={IconHome2} />
                    </li>
                    <li>
                        <details open>
                        <summary>
                            <MenuItem texto="Beats" href="#" icone={IconFolder} />
                        </summary>
                        <ul>
                            <li>
                                <details open>
                                    <summary>
                                    <MenuItem texto="Categories" href="#" icone={IconFolder} />
                                    
                                    </summary>
                                    <ul>
                                    {categories.map((category: string) => (
                                        <li key={category}>
                                            <MenuItem 
                                                texto={`Beat ${category}`}  // Template literal para o texto
                                                href={`/beats/${category}`}  // Template literal para a URL
                                                icone={IconMusic} 
                                            />
                                        </li>

                                    ))}
                                    
                                    </ul>
                                </details>
                            </li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                        <summary>
                            <MenuItem texto="Vocals" href="#" icone={IconFolder} />
                        </summary>
                        <ul>
                            <li>
                                <details>
                                    <summary>
                                    <MenuItem texto="Categories" href="#" icone={IconFolder} />
                                    
                                    </summary>
                                    <ul>
                                        <li>
                                            <MenuItem 
                                                texto={`Vocal Cappella`}  // Template literal para o texto
                                                href={`/vocals/cappella`}  // Template literal para a URL
                                                icone={IconMusic} 
                                            />
                                        </li>                                    
                                    </ul>
                                </details>
                            </li>
                        </ul>
                        </details>
                    </li>
                    <li>
                        <MenuItem texto="Admin" href="/me" icone={IconUserHexagon} />
                    </li>
                </ul>

            </nav>
        </aside>
    )
}