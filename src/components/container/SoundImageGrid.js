import React from 'react';
import DynamicImageGrid from '../presentation/DynamicImageGrid';

// The presentation container component pattern is a little excessive in this case
// but it is used to demonstrate its use for the sake of a coding review, it is also
// a little excessive to use fetch to import json from a URL in this case, but it is
// used here for the sake of a coding review and can serve a future purpose of allowing
// pages to be specified from another service that might randomise the iamges a litte
const SoundImageGrid = () => {
    return (
        <DynamicImageGrid url='./sound-images.json'>
        </DynamicImageGrid>
    )
}

export default SoundImageGrid;