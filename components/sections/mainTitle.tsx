import Image from 'next/image'
import {
    useEffect,
    useState,
    MutableRefObject,
    useRef,
    useCallback,
} from 'react'
import Loader from '../atoms/loaderBar'
import PauseVideo from '../icons/pauseVideo'
import PlayVideo from '../icons/playVideo'
import Volume from '../icons/volume'
import VolumeMute from '../icons/volumeMute'
import Links from '../layout/Links'

function useStateCallback<T>(
    initialState: T
): [T, (state: T, cb?: (state: T) => void) => void] {
    const [state, setState] = useState(initialState)
    const cbRef = useRef<((state: T) => void) | undefined>(undefined) // init mutable ref container for callbacks

    const setStateCallback = useCallback(
        (state: T, cb?: (state: T) => void) => {
            cbRef.current = cb // store current, passed callback in ref
            setState(state)
        },
        []
    ) // keep object reference stable, exactly like `useState`

    useEffect(() => {
        // cb.current is `undefined` on initial render,
        // so we only invoke callback on state *updates*
        if (cbRef.current) {
            cbRef.current(state)
            cbRef.current = undefined // reset callback after execution
        }
    }, [state])

    return [state, setStateCallback]
}

const isSafari = () => {
    const ua = navigator.userAgent.toLowerCase()
    return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0
}

export default function MainTitle() {
    const options = [
        {
            title: 'Lead Humanities Charge To Colonize The Moon ',
            time: '5500ms',
        },
        {
            title: 'Conquer New Frontiers',
            time: '3000ms',
        },
        {
            title: 'Massive Earning Potential',
            time: '3500ms',
        },
    ]

    const [activeNavTab, setActiveNavTab] = useStateCallback(0)
    const [isPlayingVideo, setIsPlayingVideo] = useState(false)
    const [hideVideoMobile, setHideVideoMobile] = useState(true)
    const [isWaiting, setIsWaiting] = useStateCallback(false)
    const [mutedVideo, setMutedVideo] = useState(true)
    const [currentLoaderNum, setCurrentLoaderNum] = useState(99)
    const volumeRef = useRef() as any
    const videoParentRef = useRef() as any

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const changeUnderlineAwait = async () => {
        let currentTab = 0
        while (true) {
            let timeout = 0
            switch (currentTab) {
                case 3:
                    timeout = 0
                    break
                case 2:
                    timeout = 3500
                    break
                case 0:
                    timeout = 5500
                    break
                case 1:
                    timeout = 3000
                    break
                default:
                    timeout = 0
                    break
            }
            await new Promise((r) => setTimeout(r, timeout))
            currentTab = currentTab < 2 ? currentTab + 1 : 0
            await new Promise((resolve) => setActiveNavTab(currentTab, resolve))
        }
    }

    useEffect(() => {
        changeUnderlineAwait()
    }, [])

    // toggleVolume updates the video's volume
    const toggleVolume = () => {
        videoParentRef.current.children[0].muted =
            !videoParentRef.current.children[0].muted
        setMutedVideo(!mutedVideo)
    }

    const togglePlay = () => {
        if (videoParentRef.current?.children[0].paused) {
            videoParentRef.current?.children[0].play()
            setHideVideoMobile(!hideVideoMobile)
        } else {
            videoParentRef.current?.children[0].pause()
            setIsPlayingVideo(false)
            setHideVideoMobile(!hideVideoMobile)
        }
    }
    const videoRef = useRef() as MutableRefObject<HTMLVideoElement>

    const onVideoLoad = () => {
        setCurrentLoaderNum(100)
        // videoRef.current.play()
        setIsPlayingVideo(true)

        videoRef.current.onwaiting = async () => {
            await new Promise((resolve) => setIsWaiting(true, resolve))
        }

        videoRef.current.onplaying = async () => {
            await new Promise((resolve) => setIsWaiting(false, resolve))
        }
    }
    useEffect(() => {
        if (videoRef.current != null) {
            videoRef.current.addEventListener('canplaythrough', onVideoLoad)
        }
        return () => {
            videoRef?.current?.removeEventListener(
                'canplaythrough',
                onVideoLoad
            )
        }
    }, [])

    useEffect(() => {
        // check if user agent is safari and we have the ref to the container <div />
        if (isSafari() && videoParentRef.current) {
            // obtain reference to the video element
            const player = videoParentRef.current.children[0]

            // if the reference to video player has been obtained
            if (player) {
                // set the video attributes using javascript as per the
                // webkit Policy
                player.controls = false
                player.playsinline = true
                player.muted = true
                player.setAttribute('muted', '') // leave no stones unturned :)
                // player.autoplay = true;

                // // Let's wait for an event loop tick and be async.
                // setTimeout(() => {
                //   // player.play() might return a promise but it's not guaranteed crossbrowser.
                //   const promise = player.play();
                //   // let's play safe to ensure that if we do have a promise
                //   if (promise.then) {
                //     promise
                //       .then(() => { })
                //       .catch(() => {
                //         // if promise fails, hide the video and fallback to <img> tag
                //         console.log("the video doesn't work")
                //       });
                //   }
                // }, 0);
            }
        }

        videoParentRef.current.children[0].onwaiting = async () => {
            await new Promise((resolve) => setIsWaiting(true, resolve))
        }

        videoParentRef.current.children[0].onplaying = async () => {
            await new Promise((resolve) => setIsWaiting(false, resolve))
        }
    }, [])

    return (
        <>
            <div
                id="mainScreen"
                className="h-screen grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-4 z-10 lg:px-8 items-center relative"
            >
                <div
                    className={`-translate-y-1/2 -translate-x-1/2 absolute top-1/2 z-10 left-1/2 ${
                        !isWaiting ? 'hidden' : 'hidden md:block '
                    }`}
                >
                    <img
                        src="/images/waiting.svg"
                        width={100}
                        height={100}
                        alt=""
                        className="animate-spinner"
                    />
                </div>
                <div
                    className={` hidden flex-col items-center lg:col-span-12 md:col-span-8 col-span-4 z-10 ${
                        isPlayingVideo ? 'hidden' : 'md:flex'
                    }`}
                >
                    <div className="">
                        <Image
                            src="/images/logoMainScreen.svg"
                            alt=""
                            width={426}
                            height={281}
                        />
                    </div>
                    <div className="w-[426px] mt-[80px]">
                        <Loader progress={currentLoaderNum} animate />
                    </div>
                </div>
                <div className="md:hidden flex flex-col items-center col-span-4 z-10 ">
                    <div className="text-xs-xl font-prompt uppercase tracking-02em mb-11">
                        Play 2 earn game
                    </div>

                    <div
                        className={`relative min-h-[160px] ${
                            !hideVideoMobile ? 'block' : 'hidden'
                        }`}
                    >
                        <div ref={videoParentRef}>
                            <video
                                preload="metadata"
                                loop
                                muted
                                playsInline
                                poster="/images/mainScreen.webp"
                            >
                                <source
                                    src="https://moonearth-landing.vercel.app/video/video.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                        <div
                            className={`-translate-y-1/2 -translate-x-1/2 absolute top-1/2 z-10 left-1/2 ${
                                !isWaiting ? 'hidden' : 'block md:hidden'
                            }`}
                        >
                            <img
                                src="/images/waiting.svg"
                                width={70}
                                height={70}
                                alt=""
                                className="animate-spinner"
                            />
                        </div>
                    </div>
                    <div
                        className={`min-h-[160px] ${
                            !hideVideoMobile ? 'hidden' : 'block'
                        }`}
                    >
                        <Image
                            src="/images/logoMobile.svg"
                            alt=""
                            width={195}
                            height={128}
                        />
                    </div>
                    <div className="mt-[3.25rem] flex space-x-4">
                        <div
                            className="cursor-pointer transition-all fill-transparent hover:opacity-70"
                            onClick={togglePlay}
                        >
                            {hideVideoMobile ? <PlayVideo /> : <PauseVideo />}
                        </div>
                        <div
                            className="cursor-pointer transition-all fill-transparent hover:opacity-70"
                            onClick={toggleVolume}
                        >
                            {!mutedVideo ? <VolumeMute /> : <Volume />}
                        </div>
                    </div>
                    {/* <div className="opacity-70 font-prompt mt-4" onClick={toggleVolume}>
            Sound:{mutedVideo ? " off" : " on"}
          </div> */}
                    {/* </div> */}
                </div>
                <div className="absolute right-8 z-10 lg:block hidden">
                    <Links isFooter={false} />
                </div>
                {isPlayingVideo ? (
                    <div className="absolute bottom-24 items-center justify-center w-full lg:flex hidden flex-col">
                        <div
                            className="w-max cursor-pointer transition-all hover:text-black fill-transparent hover:fill-white  "
                            ref={volumeRef}
                            onClick={() => {
                                setMutedVideo((prev) => !prev)
                            }}
                        >
                            {mutedVideo ? (
                                <Volume width={40} height={40} />
                            ) : (
                                <VolumeMute width={40} height={40} />
                            )}
                        </div>
                    </div>
                ) : null}
                <div className="lg:flex hidden flex-col absolute bottom-0 items-center justify-center w-full mb-6">
                    <div className="flex xl:w-auto w-[80%] ">
                        {options.map((item, index) => (
                            <div key={index} className="">
                                <div
                                    className={`${
                                        index === 0
                                            ? 'pr-4'
                                            : index == 1
                                            ? 'px-4'
                                            : 'pl-4'
                                    }
              ${index === activeNavTab ? 'text-white' : 'text-white/40'} 
              uppercase tracking-02em text-xs-xl font-prompt`}
                                >
                                    {item.title}
                                </div>
                                <div
                                    key={`line__${index}`}
                                    className={` relative mt-3 h-[2px] ${
                                        (index === 0 || index === 1) &&
                                        index !== activeNavTab &&
                                        index < activeNavTab
                                            ? 'bg-white'
                                            : ''
                                    } w-full`}
                                >
                                    <div
                                        style={{ '--time': item.time } as any}
                                        className={`${
                                            activeNavTab === index
                                                ? 'fill-action-mobile'
                                                : ''
                                        }
                   w-full absolute z-10 my-auto top-0 bottom-0`}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:hidden block absolute bottom-0 items-center justify-center w-full min-h-640:mb-20 mb-[7.5rem] px-4">
                    <div className="mb-3 text-thin-l font-prompt uppercase tracking-02em">
                        {options[activeNavTab].title}
                    </div>
                    <div className="flex justify-between w-full gap-x-2">
                        {options.map((item, index) => {
                            return (
                                <div
                                    key={`line__${index}`}
                                    className={`relative h-[2px] ${
                                        (index === 0 || index === 1) &&
                                        index !== activeNavTab &&
                                        index < activeNavTab
                                            ? 'bg-white'
                                            : 'bg-line-gray'
                                    } w-full`}
                                >
                                    <div
                                        style={{ '--time': item.time } as any}
                                        className={`${
                                            activeNavTab === index
                                                ? 'fill-action-mobile'
                                                : ''
                                        }
                    absolute z-10 my-auto top-0 bottom-0`}
                                    ></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {typeof window !== 'undefined' && window.innerWidth >= 768 ? (
                <video
                    preload="metadata"
                    ref={videoRef}
                    poster="/images/mainScreen.webp"
                    autoPlay={true}
                    muted={mutedVideo}
                    loop={true}
                    className={
                        'mainVideo z-0 w-full h-screen absolute top-0 left-0 hidden md:block pointer-events-none'
                    }
                >
                    <source
                        src="https://moonearth-landing.vercel.app/video/video.mp4"
                        type="video/mp4"
                    />
                </video>
            ) : null}
            <img
                className={`md:hidden  z-0 w-full absolute top-0 left-0 ${
                    hideVideoMobile ? 'block' : 'hidden'
                } `}
                src="/images/mobileMain.webp"
                alt=""
            />
        </>
    )
}
