import { Button } from 'flowbite-react';

export default function CallToAction() {
    return (
        <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
            <div className="flex-1 justify-center flex flex-col">
                <h2 className='text-2xl'>
                    Want to Play a Game
                </h2>
                <p className='text-gray-500 my-2'>
                    Checkout this cool Snake game, built using Javascript              </p>
                <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
                    <a href="https://snake-game-ritesh.vercel.app/" target='_blank' rel='noopener noreferrer'>
                        Play
                    </a>
                </Button>
            </div>
            <div className="p-7 flex-1">
                <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </div>
    )
}