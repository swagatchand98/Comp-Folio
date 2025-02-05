import DisplayCard from "./displayCard"

const ContentSlider = () => {

    return <div className="grid grid-cols-2 grid-rows-2 gap-y-13 p-5">

        <DisplayCard compPreview={"card comp"} Title={"Card"} Description={"This is a Card Component with float effect on Hover"}/>
        <DisplayCard compPreview={"card comp"} Title={"Card"} Description={"This is a Card Component with float effect on Hover"}/>
        <DisplayCard compPreview={"card comp"} Title={"Card"} Description={"This is a Card Component with float effect on Hover"}/>
        <DisplayCard compPreview={"card comp"} Title={"Card"} Description={"This is a Card Component with float effect on Hover"}/>

    </div>
}

export default ContentSlider