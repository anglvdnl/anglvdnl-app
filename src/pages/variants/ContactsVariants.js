export const contactsVariants = {
    contacts: {
        hidden: {
            opacity: 0,
            height: 0
        },
        visible: {
            opacity: 1,
            height: '100vh',
            transition: {
                ease: 'easeInOut',
                duration: 0.8,
                delay: 0.3
            }
        }
    },
    input: {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: 0.4,
                delay: 1
            }
        }
    }
};

export const infoVariants = {
    info: {
        hidden: {
            opacity: 0,
            width: 0
        },
        visible: (obj) => ( {
            opacity: 1,
            width:
                obj.isDesktop && !obj.isMobile
                    ? 600
                    : obj.isDesktop && obj.isMobile
                        ? "100vw"
                        : 800,
            transition: {
                ease: "easeInOut",
                duration: 1,
                delay: 1.2
            }
        })
    },
    socials: {
        hidden: {
            opacity: 0,
            y: -100
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                ease: 'anticipate',
                delay: 2 + i * 0.1,
                duration: 1
            }
        })
    }
};