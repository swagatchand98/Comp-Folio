const DisplayCard = ({compPreview, Title, Description}) => {

    return <div className="w-175 h-100 px-3 bg-[#130F0F] ">
        <div className="w-163 h-83 bg-[#2F2F2F]">
            {compPreview}
        </div>
        <div>
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