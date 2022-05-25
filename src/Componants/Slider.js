import React from 'react';

const Slider = () => {
    return (
        <>
            <div className="carousel h-80 w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/7Grt3h1/slider-1.png" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/Q6ryLmt/slider-2.png" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/h1YpNTH/slider-3.png" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/f2sHcJj/slider-4.png" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </>
    );
};

export default Slider;