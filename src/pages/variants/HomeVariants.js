export const homeVariants = {
    imageVariants: {
        hidden: (isTablet) => ({
            scale: 0.5,
            translateX: isTablet ? '-50%' : '-40%',
            translateY: '-30%'
        }),
        visible: (isTablet) => ({
            scale: 1,
            translateX: isTablet ? '-50%' : '-40%',
            translateY: '-30%',
            transition: {
                ease: 'easeInOut',
                duration: 0.7,
                delay: 0.6
            }
        })
    },
    dLogoVariants: {
        hidden: {
            opacity: 0,
            x: -30,
            y: -30,
            translateX: '-50%',
            translateY: '-50%'
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.4,
                delay: 1.1
            }
        }
    },
    aLogoVariants: {
        hidden: {
            opacity: 0,
            x: 30,
            y: 30,
            translateX: '-50%',
            translateY: '-50%'
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.4,
                delay: 1.1
            }
        }
    },
    bigCircleVariants: {
        hidden: {
        },
        visible: {
            rotate: 360,
            transition: {
                rotate: {
                    delay: 0,
                    duration: 6,
                    ease: 'linear',
                    repeat: Infinity
                }
            }
        }
    },
    smallCircleVariants: {
        hidden: {
        },
        visible: {
            rotate: 360,
            transition: {
                rotate: {
                    delay: 0,
                    duration: 3,
                    ease: 'linear',
                    repeat: Infinity
                }
            }
        }
    },
    whoIAmSpheres: {
        hidden: {
            opacity: 0,
            x: -200
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.8
            }
        }
    },
    whoIAmText: {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.6
            }
        }
    },
    whoIAmArrow: {
        hidden: {
            width: 20,
            height: 14
        },
        visible: {
            width: 95,
            height: 14,
            transition: {
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.6
            }
        }
    }
};