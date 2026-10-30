const LandingPage = () => {
    return (
        <div className="w-full h-auto px-25 pt-40 pt-50 pb-10">
            <div className="w-full h-auto flex flex-col gap-20 items-center justify-between ">
                <div className="w-full flex flex-col gap-2 capitalize ">
                    <h1 className="only-for-heads">AI that remembers your chats.</h1>
                    <h1 className="only-for-heads" style={{ color: '#9D9E9E' }}>Built on a 4-Layer Memory</h1>
                    <h1 className="only-for-heads" style={{ color: '#9D9E9E' }}> Architecture.</h1>
                </div>
                <div className="w-full flex flex-col">
                   
                    <div className="w-full border-t border-zinc-100"></div>
                    <div className="w-full h-3"></div> 

                    <div className="w-full bg-yellow-400 flex justify-between items-center py-7 px-5">
                        <div className="text-black font-bold tracking-tighter text-2xl">Short-Term Memory</div>
                        <div className="text-black font-bold tracking-tighter text-2xl">Long-Term Memory</div>
                        <div className="text-black font-bold tracking-tighter text-2xl">Reference Memory</div>
                        <div className="text-black font-bold tracking-tighter text-2xl">Ordinary Memory</div>
                    </div>

                    
                    <div className="w-full h-3"></div>
                    <div className="w-full border-b border-zinc-100"></div>
                </div>
                <div className="w-full h-[900px] bg-zinc-900 rounded-xl">

                </div>
            </div>
        </div>
    )
}

export default LandingPage;