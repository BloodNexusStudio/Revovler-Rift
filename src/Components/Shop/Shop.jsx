import bgImage from '../../assets/Texturelabs_Grunge_353M.jpg';

function Shop(){
    return(
        <section className="bg-black  h-screen w-screen bg-cover bg-fixed h-screen flex flex-col items-center justify-center text-center"
         style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="font-semibold font-custom text-[#F5F5F5] px-60 text-3xl md:text-4xl lg:text-5xl space-y-2">
                
                <p>Shop will open soon</p>
                <br />
                {/* <p>till then</p> */}
                <br />
                {/* <p>You can head over to the Top right and Wishlist the game   </p> */}

                {/* <p>
                    Heads up, Deputies!
                </p>
                <p>
                    The Revolver Rift teaser needs a bit more time.
                </p>
                <p>
                    We’ve switched to Unreal Engine 5.6 to bring you maximum quality.
                </p>
                <p>
                    Better late than lame. 
                </p> */}
            </div>
        </section>
    )
}

export default Shop;