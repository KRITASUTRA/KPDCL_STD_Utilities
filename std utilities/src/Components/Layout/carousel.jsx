
// function CarouselToggle() {
//     return (
//         <div style={{ position: 'relative' }}>
//             <Carousel
//                 showArrows={false}
//                 showStatus={false}
//                 showIndicators={true}
//                 infiniteLoop={false}
//                 showThumbs={false}
//                 useKeyboardArrows={true}
//                 swipeable={true}
//                 autoPlay={false}
//                 dynamicHeight={true}
//                 autoFocus={false}
//                 className="max-w-sm min-w-280 mx-auto overflow-hidden sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl"
//             >
//                 <div className="min-w-280 sm:flex-shrink-0 pb-6">
//                     <TimeTable1 />
//                 </div>
//                 <div className="min-w-280 sm:flex-shrink-0 pb-6">
//                     <TimeTable2 />
//                 </div>
//                 <div className="min-w-280 sm:flex-shrink-0 pb-6">
//                     <TimeTable3 />
//                 </div>
//                 <div className="min-w-280 sm:flex-shrink-0 pb-6">
//                     <TimeTable4 />
//                 </div>
//             </Carousel>
//         </div>
//     );
// }

// export default CarouselToggle;

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TimeTable1 from './mainTimeTable/timeslot1';
import TimeTable2 from './mainTimeTable/timeslot2';
import TimeTable3 from './mainTimeTable/timeslot3';
import TimeTable4 from './mainTimeTable/timeslot4';
import React, { useState } from "react";

function CarouselToggle() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className="flex justify-center mb-4">
                <button
                    className={`mr-2 px-4 py-1 focus:outline-none ${
                        activeTab === 0 ? 'bg-gray-800 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => handleTabClick(0)}
                >
                12 o'clock midnight - 6AM
                </button>
                <button
                    className={`mr-2 px-4 py-2 focus:outline-none ${
                        activeTab === 1 ? 'bg-gray-800 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => handleTabClick(1)}
                >
                    6AM - 12 o'clock noon
                </button>
                <button
                    className={`mr-2 px-4 py-2 focus:outline-none ${
                        activeTab === 2 ? 'bg-gray-800 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => handleTabClick(2)}
                >
                12 o'clock noon - 6PM
                </button>
                <button
                    className={`px-4 py-2 focus:outline-none ${
                        activeTab === 3 ? 'bg-gray-800 text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => handleTabClick(3)}
                >
                    6PM - 12 o'clock midnight
                </button>
            </div>

            <Carousel
                
                selectedItem={activeTab}
                onChange={handleTabClick}
            >
                <div className="min-w-280 sm:flex-shrink-0 pb-6">
                    <TimeTable1 />
                </div>
                <div className="min-w-280 sm:flex-shrink-0 pb-6">
                    <TimeTable2 />
                </div>
                <div className="min-w-280 sm:flex-shrink-0 pb-6">
                    <TimeTable3 />
                </div>
                <div className="min-w-280 sm:flex-shrink-0 pb-6">
                    <TimeTable4 />
                </div>
            </Carousel>
        </div>
    );
}

export default CarouselToggle;
