import logoImage from '../assets/logo.svg'

import {Plus} from 'phosphor-react'

export function Header() {
    return (
        <div className="w-full max-w-3x1 mx-auto flex items-center justify-between px-4">
        <img src={logoImage} alt="" className='w-30'/>

        <button
           type="button"
           className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:bg-violet-400 " >
             <Plus size={20} className='text-violet-500'/>
           Novo Habito
        </button>
    </div>
    )
}