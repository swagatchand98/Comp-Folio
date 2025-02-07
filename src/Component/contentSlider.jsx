import DisplayCard from "./displayCard"

const ContentSlider = () => {

    return <div className="grid grid-cols-2 grid-rows-2 gap-x-10 pt-5 px-5 bg-radial from-stone-950 from-75% to-black h-screen w-390">

        <DisplayCard compPreview={"card comp"} Title={"Card"} Description={"This is a Card Component with float effect on Hover"}/>
        <DisplayCard compPreview={"card comp"} Title={"Card"} Description={"This is a Card Component with float effect on Hover"}/>
        <DisplayCard compPreview={"card comp"} Title={"Card"} Description={"This is a Card Component with float effect on Hover"}/>
        <DisplayCard compPreview={"card comp"} Title={"Card"} Description={"This is a Card Component with float effect on Hover"}/>

    </div>
}

export default ContentSlider