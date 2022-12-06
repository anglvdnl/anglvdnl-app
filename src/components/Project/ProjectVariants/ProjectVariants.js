export const projectVariants = {
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
                delay: 1 - (arr[1] > 1 ? 0.8 : 0) - (arr[0] ? 0.4 : 0)
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
                delay: 1.2 - (arr[1] > 1 ? 0.8 : 0) - (arr[0] ? 0.4 : 0)
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
                delay: 1.4 - (arr[1] > 1 ? 0.8 : 0) - (arr[0] ? 0.4 : 0)
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
                delay: 1.4 - (arr[1] > 1 ? 0.8 : 0) - (arr[0] ? 0.4 : 0)
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
                delay: 1.8 - (arr[1] > 1 ? 0.8 : 0) - (arr[0] ? 0.4 : 0)
            }
        })
    }
};

export const skillsVariants = {
    line: {
        hidden: {
            width: 0,
            top: 32
        },
        visible: (arr) => ({
            width: 400,
            transition: {
                ease: 'easeInOut',
                duration: 0.8,
                delay: 1.4 - (arr[1] > 1 ? 0.8 : 0) - (arr[0] ? 0.4 : 0)
            }
        })
    },
    skills: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (arr) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.6 - (arr[1] > 1 ? 0.8 : 0) - (arr[3] ? 0.4 : 0) + arr[0] * 0.15,
                ease: 'easeOut',
                duration: 0.4
            }
        })
    }
};
