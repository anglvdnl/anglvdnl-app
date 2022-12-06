export const mobileProjectVariants = {
    number: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (arr) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.6
            }
        })
    },
    title: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (arr) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.8
            }
        })
    },
    text: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (arr) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 1
            }
        })
    },
    img: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (arr) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.45
            }
        })
    },
    link: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (arr) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 1.2
            }
        })
    }
};

export const mobileSkillsVariants = {
    line: {
        hidden: {
            width: 0,
            top: 32
        },
        visible: {
            width: 400,
            transition: {
                ease: 'easeInOut',
                duration: 1,
                delay: 1.4
            }
        }
    },
    skills: {
        hidden: (i) => ({
            opacity: 0,
            x: i === 0 || i === 1 ? -50 : 50
        }),
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 1.6 + i * 0.2,
                ease: 'easeInOut',
                duration: 0.5
            }
        })
    }
};
