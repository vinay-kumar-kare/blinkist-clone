import { ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import MediaCards from ".";
import cover1 from "../../../../public/images/cover_image/1.png";

export default{
    title:'Organisms/Cardsplay',
    component: MediaCards
}

const Template:ComponentStory<typeof MediaCards> =(args)=> (
<BrowserRouter>
<MediaCards {...args}/>
</BrowserRouter>);

export const carding = Template.bind({});
carding.args={
    image: cover1,
    bookName:'Bring Your Home to Work',
    authorName:'Erica Keswin',
    progress:true,
};

export const cardingfalse = Template.bind({});
cardingfalse.args={
    image:cover1,
    bookName:'Bring Your Home to Work',
    authorName:'Erica Keswin',
    progress:false,
    librarybu:true,
};

export const cardingFinished = Template.bind({});
cardingFinished.args={
    image:cover1,
    bookName:'Bring Your Home to Work',
    authorName:'Erica Keswin',
    progress:true,
    finished:true,
    progressValues:31,
};

export const cardingReadAgain = Template.bind({});
cardingReadAgain.args={
    image:cover1,
    bookName:'Bring Your Home to Work',
    authorName:'Erica Keswin',
    progress:true,
    readAgain:true,
    progressValues:100,
};