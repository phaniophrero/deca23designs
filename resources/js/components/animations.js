export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        // y: 300,
        transition: {
            duration: 0.6
        }
    }
};
export const pageAnimationDown = {
    hidden: {
        opacity: 0,
        y: -300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        // y: 300,
        transition: {
            duration: 0.6
        }
    }
};

export const pageAnimationLeft = {
    hidden: {
        opacity: 0,
        x: -300
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        // y: 300,
        transition: {
            duration: 0.6
        }
    }
};
