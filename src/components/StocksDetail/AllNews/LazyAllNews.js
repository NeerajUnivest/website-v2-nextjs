
import LazyNewsCard from '../../elements/NewsCard/LazyNewsCard';

function LazyAllNews() {
    return (
        <div className='relative'>
            <div className='mx-4 my-2'>
                <LazyNewsCard />
                <LazyNewsCard />
                <LazyNewsCard />
                <LazyNewsCard />
                <LazyNewsCard />
            </div>
        </div>
    )
}

export default LazyAllNews