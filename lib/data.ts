
import athlete from '../assets/images/sports/athlete.svg'
import badminton from '../assets/images/sports/badminton.svg'
import basketball from '../assets/images/sports/basketball.svg'
import football from '../assets/images/sports/football.svg'
import gymnast from '../assets/images/sports/gymnast.svg'
import handball from '../assets/images/sports/handball.svg'
import judo from '../assets/images/sports/judo.svg'
import olympics from '../assets/images/sports/olympics.svg'
import tableTenis from '../assets/images/sports/table-tenis.svg'
import volleyball from '../assets/images/sports/volleyball.svg'
import weightlifting from '../assets/images/sports/weightlifting.svg'
import wrestling from '../assets/images/sports/wrestling.svg'

// No time to implement DB so I will had code the results everyday
import athletics from './results/athletics'
import basketballResults from './results/basketballResults'
import footballResults from './results/footballResults'
import gymResults from './results/gymResults '
import handballResults from './results/handballResults'
import tableTenisResults from './results/tableTenisResults'
import volleyResults from './results/volleyResults'

const sports = [
    {
        name: "Athlétisme",
        en: "Athletics",
        slug: "athletics",
        image: athlete,
        results: athletics
    },
    {
        name: "Basketball",
        en: "Basketball",
        slug: "basketball",
        image: basketball,
        results: basketballResults
    },
    {
        name: "Football",
        en: "Football",
        slug: "football",
        image: football,
        results: footballResults
    },
    {
        name: "Gymnastique",
        en: "Gymnastics",
        slug: "gymnastics",
        image: gymnast,
        results: gymResults
    },
    {
        name: "Handball",
        en: "Handball",
        slug: "handball",
        image: handball,
        results: handballResults
    },
    {
        name: "Judo",
        en: "Judo",
        slug: "judo",
        image: judo,
        // results: athletics
    },
    {
        name: "Luttes",
        en: "Wrestling",
        slug: "wrestling",
        image: wrestling,
        // results: athletics
    },
    {
        name: "Tennis de table",
        en: "Table Tennis",
        slug: "table-tenis",
        image: tableTenis,
        results: tableTenisResults
    },
    {
        name: "Sports paralympiques",
        en: "Paralympic sports",
        slug: "paralympic-sports",
        image: olympics,
        // results: athletics
    },
    {
        name: "Volleyball",
        en: "Volleyball",
        slug: "volleyball",
        image: volleyball,
        results: volleyResults
    },
    {
        name: "Badminton",
        en: "Badminton",
        slug: "badminton",
        image: badminton,
        // results: athletics
    },
    {
        name: "Bras de fer",
        en: "Arm wrestling",
        slug: "arm-wrestling",
        image: weightlifting,
        // results: athletics
    },
]

export {
    sports
}