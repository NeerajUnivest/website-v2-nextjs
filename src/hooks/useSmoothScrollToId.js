

export const useSmoothScrollToId = () => {
    const smoothScrollTo = (id) => {
        const element = document.getElementById(id);

        window.scrollTo({
            top: element?.getBoundingClientRect().top + window.scrollY - 120,
            left: 0,
            behavior: 'smooth',
        });
    }
    return smoothScrollTo;
};