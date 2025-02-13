const DisplayCard = ({compPreview, Title, Description}) => {

    return <div className="h-60 md:h-100 px-3 bg-[#130F0F]   hover:border-1 hover:border-zinc-500 hover:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.1)] active:border-1 active:border-zinc-500 active:shadow-[0px_0px_20px_5px_rgba(255,255,255,0.2)]">
        <div className="flex justify-center items-center pt-5 cursor-pointer">
           <div className="w-screen h-40 md:h-80 bg-[#2F2F2F] flex justify-center items-center ">
               {compPreview}
           </div>
        </div>   
           <div className="flex justify-center items-center">
               <div>
                   {Title}
               </div>
               <div>
                   {Description}
               </div>
           </div>
    </div>
}

export default DisplayCard