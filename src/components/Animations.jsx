

export const slideFromBottom = {
    initial: {y: 50, opacity: 0},
    whileInView: {y: 0, opacity: 1},
    transition: {duration: 2},
    viewport: {once: true}
}


export const slideFromLeft = {
    initial: {x: -50, opacity: 0},
    whileInView: {x: 0, opacity: 1},
    transition: {duration: 1},
    viewport: {once: true}
}