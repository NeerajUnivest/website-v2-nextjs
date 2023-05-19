

export const useSmoothScrollToId = () => {
    const smoothScrollTo = (id) => {
        const element = document.getElementById(id);
        console.log(element?.getBoundingClientRect().top);

        window.scrollTo({
            top: element?.getBoundingClientRect().top + window.scrollY - 180,
            left: 0,
            behavior: 'smooth',
        });
    }
    return smoothScrollTo;
};