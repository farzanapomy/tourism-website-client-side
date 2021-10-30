import React from 'react';
import './Feature.css'

const Feature = ({ feature }) => {
    const { name, description } = feature;

    return (
        <>
            <div className='card-style'>
                <div class="card">
                    <div class="view overlay">
                        <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo9.jpg" alt="" />
                        <a>
                            <div class="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div class="card-share ">

                        <div class="social-reveal mt-4">
                            <a type="button" class="btn-floating btn-fb mt-0 mx-1" ><i class="fab fa-facebook-f">
                            </i></a>

                            <a type="button" class="btn-floating btn-tw mt-0 mx-1"><i class="fab fa-twitter">
                            </i></a>

                            <a type="button" class="btn-floating btn-gplus mt-0 mx-1"><i class="fab fa-google-plus-g">
                            </i></a>
                            <a class="btn-floating btn-action share-toggle indigo ml-auto mr-4 float-right"><i class="fas fa-share-alt">
                            </i></a>
                        </div>


                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{name}</h4>
                        <p class="card-text">{description}</p>
                        <button class="btn btn-primary">Read more</button>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Feature;