export const aboutMeVariants = {
    hrVariants: {
        hidden: (isMatch) => ({
            width: isMatch(150, 150, 50, 50)
        }),
        visible: (isMatch) => ({
            width: isMatch(300, 300, 250, 150),
            transition: {
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.7
            }
        })
    },
    dotLineVariants: {
        hidden: {
            height: 0,
            top: 0,
            right: 9
        },
        visible: (isMatch) => ({
            height: isMatch(348, 250, 250, 250),
            right: 9,
            transition: {
                ease: 'easeInOut',
                duration: 1,
                delay: 0.8
            }
        })
    },
    infoSectionVariants: {
        hidden: {
            height: 0
        },
        visible: (IsMobile1010) => ({
            height: IsMobile1010 ? '100%' : '100vh',
            transition: !IsMobile1010 && {
                ease: 'easeInOut',
                duration: 1,
                delay: 0.4
            }
        })
    }
};