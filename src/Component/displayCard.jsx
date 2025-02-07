const DisplayCard = ({compPreview, Title, Description}) => {

    return <div className="w-full h-100 px-3 bg-[#130F0F]">
        <div className="flex justify-center items-center pt-5">
           <div className="w-170 h-80 bg-[#2F2F2F] flex justify-center items-center">
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