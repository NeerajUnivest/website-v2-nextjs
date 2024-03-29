import { UserDetailProvider } from "@/contexts/UserDetailContext"
import Actions from "@/elements/Actions"
import { FaceBook } from "@/elements/FaceBook"
import { Mixpanel } from "@/elements/Mixpanel"
import { useContext } from "react"


export default function DownloadButton() {
    const userDetail = useContext(UserDetailProvider)

    return (
        <>
            <button className="font-Inter relative w-full text-black text-center buy-button pt-4 hover:animate-none"
                id={userDetail?.btn?.isProPage ? "ProDownloadButtonClick" : "EliteDownloadButtonClick"}
                onClick={() => {
                    Actions.downloadNow(userDetail?.btn?.isProPage);
                    FaceBook.track('CompleteRegistration')
                    Mixpanel.track('screener_clicked', {
                        'cta_clicked': 'download_app',
                        'page': userDetail?.btn?.page,
                    })
                }}>
                <div id={userDetail?.btn?.isProPage ? "ProDownloadButtonClick" : "EliteDownloadButtonClick"} className="absolute text-sm font-extrabold left-1/2 translate-y-1/3 -translate-x-1/2 whitespace-nowrap">Download the app now</div>
                <div id={userDetail?.btn?.isProPage ? "ProDownloadButtonClick" : "EliteDownloadButtonClick"} className="buttont">.</div>
                <div id={userDetail?.btn?.isProPage ? "ProDownloadButtonClick" : "EliteDownloadButtonClick"} className="buttonb">.</div>
            </button>

            <style>
                {`
                .buttont {
                    height: 36px;
                    width: 100%;
                    color:#fff;
                    border-bottom: 36px solid #fff;
                    border-left: 16px solid transparent;
                    border-right: 16px solid transparent;
                    }
                .buttonb {
                    height: 2px;
                    width: 100%;
                    color:#000;
                    border-top: 12px solid #EDEDED;
                    border-left: 4px solid transparent;
                    border-right: 4px solid transparent;
                    }

                @keyframes buy-bounce {
                    0%, 100% {
                        transform: translateY(-10%);
                        animation-timing-function: cubic-bezier(0.5,0,1,1);
                    }
                    50% {
                        transform: none;
                        animation-timing-function: cubic-bezier(0,0,0.2,1);
                    }
                }
                .buy-button {
                    animation: buy-bounce 1s infinite;
                }
                `
                }
            </style>
        </>
    )
} 