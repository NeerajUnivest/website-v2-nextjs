import React, { useContext } from 'react';
import moment from 'moment';
import { UtilsContext } from '../../UtilsProvider/UtilsProvider';
// import shareArrow from '../../assets/icons/shareIcon.svg'
import Image from 'next/image'

function NewsCard(props) {
    //mixpanel
    const utils = useContext(UtilsContext)

    const handleShare = (link) => {
        eval("StockCallBackBridge").shareLink(link)
    }
    return (
        <div className='my-6 flex flex-row'>
            <a href={props.data.url} target="_blank"
            // onClick={() => {
            //     utils.sendData(
            //         'news_tile_clicked',
            //         {
            //             'page': 'stock_news_page',
            //             'fincode': props.name,
            //             'news id': props.data.id
            //         }
            //     )
            // }}
            >
                <div className='w-[300px] h-[220px] flex flex-col rounded-[8px] border-[1px] border-[#E5E5E5]'>
                    <div className='w-[298px] h-[140px]'>
                        <Image alt="news" src={props.data.imageUrl} className='w-full h-full rounded-t-[8px]' />
                    </div>
                    <div className='p-3 font-Inter'>
                        <div className='text-[#202020] text-[12px] font-medium leading-[20px]'>
                            {props.data.title?.length > 70 ? `${props.data.title?.slice(0, 70)} ...` : props.data.title}
                        </div>
                        <div className='flex flex-row text-[#202020] text-[10px] font-normal leading-[16px] mt-1'>
                            <div>{moment(props.data.publishedAt).format("DD MMM YYYY")} </div>
                            <div className='ml-auto'>{props.data.source}</div>
                        </div>
                    </div>
                </div>
            </a>
            <div className='relative w-full'>
                <div onClick={() => handleShare(props.data.url)}
                    className='absolute bottom-[10px] left-1'>
                    s
                    {/* <Image alt="share" src={shareArrow} className="h-6" /> */}
                </div>
            </div>
        </div>)
}

export default NewsCard;