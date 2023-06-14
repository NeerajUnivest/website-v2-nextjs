import React, { useContext } from 'react';
import moment from 'moment';
import { ModalContext } from '../../contexts/StockPageModal';
import announcements from '../../assets/eventIcon/announcements.svg';
import dividends from '../../assets/eventIcon/dividends.svg';
import others from '../../assets/eventIcon/others.svg';
import results from '../../assets/eventIcon/results.svg';
import Image from 'next/image'


function EventCard(props) {
    const modal = useContext(ModalContext)

    const openModalHandler = (modalData) => {
        modal.setTitle('Events')
        modal.setModaldata(modalData)
        modal.setModal(true);
    }

    let image;
    if (props.data.category === 'announcements' || props.data.category === 'Announcements') {
        image = <Image src={announcements} alt="announcements" className='w-[24px] h-[24px]' />;
    } else if (props.data.category === 'dividends' || props.data.category === 'Dividends') {
        image = <Image src={dividends} alt="dividends" className='w-[24px] h-[24px]' />;
    } else if (props.data.category === 'results' || props.data.category === 'Results') {
        image = <Image src={results} alt="results" className='w-[24px] h-[24px]' />;
    } else {
        image = <Image src={others} alt="others" className='w-[24px] h-[24px]' />;
    }
    return (
        <div className='pt-2 font-Inter mx-0 my-3 text-[12px] border-[1px] border-[#E5E5E5] rounded-[8px] 
        shadow-[0_1px_2px_rgba(0,0,0,0.2)] relative'>
            <div className='mx-3 my-3 relative'>
                <div className='flex flex-row justify-between my-2'>
                    <div className='text-[12px] text-[#5C6269] font-medium'>{moment(props.data.timestamp).fromNow()}</div>
                    {/* <button className='w-[16px] h-[16px]'>
                        <Image src={shareTriangle} alt="share" />
                    </button> */}
                </div>
                <div className='flex flex-row justify-start my-2'>
                    {image}
                    <div className='text-[14px] text-[#232A31] ml-2 leading-[22px] font-medium'>{props.data.corpAction}</div>
                </div>
                <div className="w-full grid grid-cols-2 divide-x">
                    {props.data.ratio1 !== undefined && props.data.ratio1 !== 0 && props.data.ratio2 !== 0
                        ? <div className='text-[12px] text-[#000000] pl-2 leading-[20px] font-medium'>
                            Bonus ratio : <b>{props.data.ratio1 + ` : ` + props.data.ratio2}</b>
                        </div> :
                        props.data.amount !== undefined && props.data.amount !== 0 ?
                            <div className='text-[12px] text-[#000000] pl-2 leading-[20px] font-medium'>
                                Dividend : <b>₹{props.data.amount} / share</b>
                            </div> : <div></div>}

                    {props.data.exDate > 0 ? <div className='text-[12px] text-[#000000] pl-2 leading-[20px] font-medium text-right'>
                        Eff. date : <b>{moment(props.data.exDate).format('DD MMM YYYY')}</b>
                    </div> :
                        props.data.effectiveTimestamp > 0 && <div className='text-[12px] text-[#000000] pl-2 leading-[20px] font-medium text-right'>
                            Ex date : <b>{moment(props.data.effectiveTimestamp).format('DD MMM YYYY')}</b>
                        </div>}
                </div>
                <div className='text-[12px] w-9/12 text-[#5C6269] font-normal my-2 min-h-[15px]'>
                    {props.data.details?.length > 50 ? props.data.details.slice(0, 50) + '...' : props.data.details}
                </div>

                {props.data.details?.length > 50 && <div onClick={() => openModalHandler([{ details: props.data.details }])}
                    className='absolute bottom-0 right-0 text-[#00439D] text-[12px] leading-[20px] font-semibold font-Inter cursor-pointer'>
                    Read More</div>}
            </div>
        </div>
    )
}

export default EventCard