export const projectVariants = {
    number: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (obj) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 1 - (obj.number > 1 ? 0.8 : 0) - (obj.isNavbarBreakpoint ? 0.4 : 0)
            }
        })
    },
    title: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (obj) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 1.2 - (obj.number > 1 ? 0.8 : 0) - (obj.isNavbarBreakpoint ? 0.4 : 0)
            }
        })
    },
    text: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (obj) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 1.4 - (obj.number > 1 ? 0.8 : 0) - (obj.isNavbarBreakpoint ? 0.4 : 0)
            }
        })
    },
    img: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (obj) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 1.4 - (obj.number > 1 ? 0.8 : 0) - (obj.isNavbarBreakpoint ? 0.4 : 0)
            }
        })
    },
    link: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (obj) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 1.8 - (obj.number > 1 ? 0.8 : 0) - (obj.isNavbarBreakpoint ? 0.4 : 0)
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
        visible: (obj) => ({
            width: obj.isTablet ? 300 : 400,
            transition: {
                ease: 'easeInOut',
                duration: 0.8,
                delay: 1.4 - (obj.number > 1 ? 0.8 : 0) - (obj.isNavbarBreakpoint ? 0.4 : 0)
            }
        })
    },
    skills: {
        hidden: {
            opacity: 0,
            y: -20
        },
        visible: (obj) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 1.6 - (obj.number > 1 ? 0.8 : 0) - (obj.isNavbarBreakpoint ? 0.4 : 0) + obj.index * 0.15,
                ease: 'easeOut',
                duration: 0.4
            }
        })
    }
};
