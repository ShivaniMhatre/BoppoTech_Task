import React from 'react'
import '../../src/Styles/FirstPage.css'
import '../../src/Styles/responsive.css'
const FirstPage = () => {
    return (
        <div>
            <div id='screen'>
                <div id='first_nav'>
                    <div id='inner_nav'>
                        <div id='time'>
                            <h1>9:41</h1>
                        </div>
                        <div id='setting'>
                            <div>
                                <i class="fa-solid fa-signal fa-lg"></i>
                            </div>

                            <div>
                                <i class="fa-solid fa-wifi fa-lg"></i>
                            </div>

                            <div>
                                <i class="fa-solid fa-battery-full fa-lg"></i>
                            </div>
                        </div>
                    </div>
                    <p><i class="fa-solid fa-lock"></i> store.google.com</p>
                </div>
                <div id='second_nav'>
                    <div id='sec_inner_nav'>
                        <div id='bars'>
                            <i class="fa-solid fa-bars fa-2xl" style={{ color: '#eceff3' }}></i>
                        </div>
                        <div id='edit'>
                            <i class="fa-solid fa-wand-magic-sparkles fa-2xl" style={{ color: '#eceff3' }}></i>
                        </div>
                    </div>
                </div>
                <div id='third_nav'>
                    <div id="third_inner_nav">
                        <div className="nav"><span>Home</span></div>
                        <div className="nav"><span>Movies</span></div>
                        <div className="nav"><span>Web Series</span></div>
                        <div className="nav"><span>TV Shows</span></div>
                        <div className="nav"><span>Calender</span></div>
                    </div>
                </div>
                <div id='first_tab'>
                    <div id='movie_info'>
                        <div id='name'>
                            <p>Das ki Dhamki</p>
                        </div>
                        <div id='rating'>
                            <span>12 Nov 2022 </span>
                            <span> <i class="fa-solid fa-circle fa-2xs" style={{ color: '#ffffff' }}></i></span>
                            <span> 2h 11min </span>
                            <span> <i class="fa-solid fa-circle fa-2xs" style={{ color: '#ffffff' }}></i></span>
                            <span> <i class="fa-solid fa-star fa-xs" style={{ color: '#ffffff' }}></i></span>
                            <span> 0.0/10 (2.5k)</span>
                        </div>
                        <div id='action'>
                            <div className="action"><p>Action</p></div>
                            <div className="action"><p>Action</p></div>
                            <div className="action"><p>Action</p></div>
                        </div>
                        <div id='booking'>
                            <div id='watchlist'>
                                <i class="fa-regular fa-bookmark fa-2xl" style={{ color: '#ffffff' }}></i>
                                <p>Add To Watchlist</p>
                            </div>
                            <div id='ticket'>
                                <i class="fa-solid fa-ticket fa-2xl" style={{ color: '#ffffff' }}></i>
                                <p>Ticket</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div id='second_tab'>
                    <div id='notification'>
                        <p>Coming Soon</p>
                        <i class="fa-solid fa-arrow-right fa-2xl" style={{ color: '#ffffff' }}></i>
                    </div>
                    <div id='language'>
                        <div id="inner_lang">
                            <div className="language"><span>Hindi</span></div>
                            <div className="language"><span>Marathi</span></div>
                            <div className="language"><span>Tamil</span></div>
                            <div className="language"><span>Telagu</span></div>
                            <div className="language"><span>Bhojapuri</span></div>
                        </div>
                    </div>
                    <div id='movie_list'>
                        <div className="movie_list">
                            <div id='img'>
                                <img src="https://e0.pxfuel.com/wallpapers/443/886/desktop-wallpaper-sunset-dark-theme-minimal-nature-dark-minimalist-theme-sun.jpg" alt="" />
                            </div>
                            <div id='title'>
                                <div>
                                    <p>Rana</p>
                                    <p>(2022)</p>
                                </div>
                                <div id='rate'>
                                    <div className='rate'>
                                        <div style={{ width: '90%', height: "5vh", display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <i class="fa-solid fa-star fa-xl"></i>
                                            <p style={{ fontSize: '25px', color: 'gray' }}>0.0</p>
                                        </div>
                                        <p style={{ textAlign: 'center', fontSize: '20px', color: 'gray' }}>2000</p>
                                    </div>
                                    <div className='rate'>
                                        <i class="fa-solid fa-star fa-xl" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}></i>

                                        <p style={{ textAlign: 'center', fontSize: '20px', color: 'gray', paddingTop: '21px' }}>Your Rating</p>
                                    </div>
                                </div>
                            </div>
                            <div id='trailer'>
                                <div id='mx'><img src="https://i.pinimg.com/736x/05/45/d3/0545d396204a8fcb3120b388a5d0782f.jpg" /></div>
                                <div id='mid'>
                                    <p>Trailer</p>
                                </div>
                                <div id='last'>
                                    <i class="fa-regular fa-bookmark fa-2xl"></i>
                                </div>
                            </div>
                            <div className='coupon'>
                                <p>Watch/ticket <i class="fa-solid fa-ticket"></i></p>
                            </div>
                        </div>
                        <div className="movie_list">
                            <div id='img'>
                                <img src="https://e0.pxfuel.com/wallpapers/443/886/desktop-wallpaper-sunset-dark-theme-minimal-nature-dark-minimalist-theme-sun.jpg" alt="" />
                            </div>
                            <div id='title'>
                                <div>
                                    <p>Rana</p>
                                    <p>(2022)</p>
                                </div>
                                <div id='rate'>
                                    <div className='rate'>
                                        <div style={{ width: '90%', height: "5vh", display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <i class="fa-solid fa-star fa-xl"></i>
                                            <p style={{ fontSize: '25px', color: 'gray' }}>0.0</p>
                                        </div>
                                        <p style={{ textAlign: 'center', fontSize: '20px', color: 'gray' }}>2000</p>
                                    </div>
                                    <div className='rate'>
                                        <i class="fa-solid fa-star fa-xl" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}></i>

                                        <p style={{ textAlign: 'center', fontSize: '20px', color: 'gray', paddingTop: '21px' }}>Your Rating</p>
                                    </div>
                                </div>
                            </div>
                            <div id='trailer'>
                                <div id='mx'><img src="https://i.pinimg.com/736x/05/45/d3/0545d396204a8fcb3120b388a5d0782f.jpg" /></div>
                                <div id='mid'>
                                    <p>Trailer</p>
                                </div>
                                <div id='last'>
                                    <i class="fa-regular fa-bookmark fa-2xl"></i>
                                </div>
                            </div>
                            <div className='coupon'>
                                <p>Watch/ticket <i class="fa-solid fa-ticket"></i></p>
                            </div>
                        </div>
                        <div className="movie_list">
                            <div id='img'>
                                <img src="https://e0.pxfuel.com/wallpapers/443/886/desktop-wallpaper-sunset-dark-theme-minimal-nature-dark-minimalist-theme-sun.jpg" alt="" />
                            </div>
                            <div id='title'>
                                <div>
                                    <p>Rana</p>
                                    <p>(2022)</p>
                                </div>
                                <div id='rate'>
                                    <div className='rate'>
                                        <div style={{ width: '90%', height: "5vh", display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <i class="fa-solid fa-star fa-xl"></i>
                                            <p style={{ fontSize: '25px', color: 'gray' }}>0.0</p>
                                        </div>
                                        <p style={{ textAlign: 'center', fontSize: '20px', color: 'gray' }}>2000</p>
                                    </div>
                                    <div className='rate'>
                                        <i class="fa-solid fa-star fa-xl" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}></i>

                                        <p style={{ textAlign: 'center', fontSize: '20px', color: 'gray', paddingTop: '21px' }}>Your Rating</p>
                                    </div>
                                </div>
                            </div>
                            <div id='trailer'>
                                <div id='mx'><img src="https://i.pinimg.com/736x/05/45/d3/0545d396204a8fcb3120b388a5d0782f.jpg" /></div>
                                <div id='mid'>
                                    <p>Trailer</p>
                                </div>
                                <div id='last'>
                                    <i class="fa-regular fa-bookmark fa-2xl"></i>
                                </div>
                            </div>
                            <div className='coupon'>
                                <p>Watch/ticket <i class="fa-solid fa-ticket"></i></p>
                            </div>
                        </div>
                        <div className="movie_list">
                            <div id='img'>
                                <img src="https://e0.pxfuel.com/wallpapers/443/886/desktop-wallpaper-sunset-dark-theme-minimal-nature-dark-minimalist-theme-sun.jpg" alt="" />
                            </div>
                            <div id='title'>
                                <div>
                                    <p>Rana</p>
                                    <p>(2022)</p>
                                </div>
                                <div id='rate'>
                                    <div className='rate'>
                                        <div style={{ width: '90%', height: "5vh", display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                            <i class="fa-solid fa-star fa-xl"></i>
                                            <p style={{ fontSize: '25px', color: 'gray' }}>0.0</p>
                                        </div>
                                        <p style={{ textAlign: 'center', fontSize: '20px', color: 'gray' }}>2000</p>
                                    </div>
                                    <div className='rate'>
                                        <i class="fa-solid fa-star fa-xl" style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}></i>

                                        <p style={{ textAlign: 'center', fontSize: '20px', color: 'gray', paddingTop: '21px' }}>Your Rating</p>
                                    </div>
                                </div>
                            </div>
                            <div id='trailer'>
                                <div id='mx'><img src="https://i.pinimg.com/736x/05/45/d3/0545d396204a8fcb3120b388a5d0782f.jpg" /></div>
                                <div id='mid'>
                                    <p>Trailer</p>
                                </div>
                                <div id='last'>
                                    <i class="fa-regular fa-bookmark fa-2xl"></i>
                                </div>
                            </div>
                            <div className='coupon'>
                                <p>Watch/ticket <i class="fa-solid fa-ticket"></i></p>
                            </div>
                        </div>
                    </div>
                    <a class='prev' >&#10094;</a>
                    <a class='next' >&#10095;</a>

                </div>
            </div>
        </div>
    )
}

export default FirstPage