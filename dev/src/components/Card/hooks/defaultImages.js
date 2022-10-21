import tvDefaultImg from '../../../assets/tvDefault.png'
import scenarioDefaultImg from '../../../assets/scenarioDefault.png'

const getDefaultImageByType = (currentType) => {
    return currentType == "location" ? scenarioDefaultImg : tvDefaultImg;
};

export default getDefaultImageByType;