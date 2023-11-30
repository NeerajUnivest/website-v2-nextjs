

export default function DownloadButton() {

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2">
                <a class="button">Download the app now</a>
                <p className="text-white text-xs not-italic font-medium leading-5">To avail all the free benefits</p>
            </div>

            <style>
                {`
                    .button {
                        display: inline-block;
                        text-decoration: none;
                        color: black;
                        font-weight: bold;
                        background-color: white;
                        padding: 10px 50px;
                        font-size: 18px;
                        border: 1px solid #EDEDED;

                        

                        -webkit-border-radius: 5px;
                        -moz-border-radius: 5px;
                        border-radius: 5px;
                        text-shadow: 0px -1px 0px #EDEDED;
                        -webkit-box-shadow: 0px 6px 0px #EDEDED, 0px 3px 15px #EDEDED, inset 0px 1px 0px #EDEDED, inset 0px 0px 3px #EDEDED;
                        -moz-box-shadow: 0px 6px 0px #EDEDED, 0px 3px 15px #EDEDED, inset 0px 1px 0px #EDEDED, inset 0px 0px 3px #EDEDED;
                        box-shadow: 0px 6px 0px #EDEDED, 0px 3px 15px #EDEDED, inset 0px 1px 0px #EDEDED, inset 0px 0px 3px #EDEDED;
                        -webkit-transition: all .1s ease-in-out;
                        -moz-transition: all .2s ease-in-out;
                        transition: all .2s ease-in-out;
                        -webkit-transform: rotateX(20deg);
                    }
                    
                    .button:hover {
                    }
                    
                    .button:active {
                    -webkit-box-shadow: 0px 2px 0px #EDEDED, 0px 1px 6px #EDEDED, inset 0px 1px 0px #EDEDED, inset 0px 0px 3px #EDEDED;
                    -moz-box-shadow: 0px 2px 0px #EDEDED, 0px 1px 6px #EDEDED, inset 0px 1px 0px #EDEDED, inset 0px 0px 3px #EDEDED;
                    box-shadow: 0px 2px 0px #EDEDED, 0px 1px 6px #EDEDED, inset 0px 1px 0px #EDEDED, inset 0px 0px 3px #EDEDED;
                        
                        -webkit-transform: translate(0, 4px) rotateX(20deg);  
                        -moz-transform: translate(0, 4px);  
                        transform: translate(0, 4px);  
                    }
                `
                }
            </style>
        </>
    )
} 