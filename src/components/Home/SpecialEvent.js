import React from 'react';

function SpecialEvent() {
  return (
    <section class="countdown">
    <div class="container">
        <div class="countdown-wrapper">
            <div class="row">
                <div class="col-sm-6 col-md-6 col-xl-4">
                    <div class="offer-text">
                        <h4>Next Event</h4>
                        <h3>Dilight & Discount</h3>
                        <h5>01 Jan 2021 | Prime Service</h5>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-xl-2">
                    <a href="#" class="see-offer">See Offer</a>
                </div>
                <div class="col-sm-12 col-md-12 col-xl-6">
                    <div class="offer-countdown">
                        <div id="timer">
                            <div id="days"></div>
                            <div id="hours"></div>
                            <div id="minutes"></div>
                            <div id="seconds"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default SpecialEvent;
