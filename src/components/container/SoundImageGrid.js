import React from 'react';
import DynamicImageGrid from '../presentation/DynamicImageGrid';

// The presentation container component pattern is a little excessive in this case
// but it is used to demonstrate its use, and simplifies the homepage code a little
const SoundImageGrid = () => {
    return (
        <DynamicImageGrid url='./sound-images.json'>
        </DynamicImageGrid>
    )
}

export default SoundImageGrid;