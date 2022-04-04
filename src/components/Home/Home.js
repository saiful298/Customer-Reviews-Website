import React from 'react';

const Home = () => {
    return (
        <section>
            <section className='first-part'>
                <div>
                    <h1 className='headline'>MISSILE GUN STORE</h1>
                    <h2> An international Marketplace</h2>
                    <h5 className='description'>Poseidon missile, U.S. submarine-launched ballistic missile introduced
                        in 1971 to replace the Polaris missile. The two-stage Poseidon had about
                        the same range as its predecessor (2,800 miles [4,500 km]), but it could
                        carry up to 14 independently targetable nuclear warheads and deliver them
                        with twice the accuracy. The multiple warheads effectively quadrupled the
                        arsenal of each submarine, while the greater accuracy allowed each warhead
                        to be reduced to a blast effect, or yield, of 50 kilotons.</h5>
                    <h1 className='btn'>learn more</h1>
                </div>
                <div>
                    <a href="https://ibb.co/87zfwBg"><img src="https://i.ibb.co/FDsy1W4/kashtan.jpg" alt="kashtan" border="0" /></a>
                </div>
            </section>
            <div>
                <hr /><h1 className='review'>Customer Reviews</h1><hr />
            </div>
        </section>

    );
};

export default Home;