// Destructuring

const userSettings = {
    isVisible: true,
    isDisabled: true,
};

const {isVisible:isPageVisible, isDisabled, colorMode='light'} = userSettings
console.log(colorMode)
