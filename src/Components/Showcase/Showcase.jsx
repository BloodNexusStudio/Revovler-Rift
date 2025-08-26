import image1 from "../../assets/brown_street.jpeg"
import image2 from "../../assets/img2.jpeg"
import image3 from "../../assets/img3.jpeg"
import image4 from "../../assets/img1.jpeg"
import image5 from "../../assets/img4.jpeg"
import image6 from "../../assets/shot2.1.png"
import image7 from "../../assets/shot2.png"
import image8 from "../../assets/newassets/9.png"
import image9 from "../../assets/newassets/2.png"
import image10 from "../../assets/newassets/6.png"
import weapon1 from "../../assets/newassets/colt 19111.png"
import weapon2 from "../../assets/newassets/ice pick 3.png"
import weapon3 from "../../assets/newassets/Mosin Nagant 3.png"
import weapon4 from "../../assets/newassets/p08 2.png"
import weapon5 from "../../assets/newassets/trench gun 3.png"
import weapon6 from "../../assets/newassets/WINCHESTER1.png"
import GunsShowcase from "./GunsShowcase"


const Showcase = () => {
    return(
        <div className="space-y-6 px-6 bg-black py-24">   
            {/* <div className="flex w-full justify-between items-center gap-4">
                <img src={image1} alt="image1"  className="flex-1 object-cover h-64 rounded-lg" />
                <img src={image2} alt="image2"  className="flex-1 object-cover h-64 rounded-lg"/>
                <img src={image3} alt="image3"  className="flex-1 object-cover h-64 rounded-lg"/>
            </div>
            <div className="flex w-full justify-between items-center gap-4">
                <img src={image4} alt="image1"  className="flex-1 object-cover h-64 rounded-lg"/>
                <img src={image5} alt="image2"  className="flex-1 object-cover h-64 rounded-lg"/>
              
            </div> */}
            <div className="flex w-full justify-between items-center gap-4">
                <img src={image6} alt="image1"  className="flex-1 object-cover h-64 rounded-lg"/>
                <img src={image7} alt="image2"  className="flex-1 object-cover h-64 rounded-lg"/>
                <img src={image8} alt="image3"  className="flex-1 object-cover h-64 rounded-lg" />
            </div>
            <div className="flex w-full justify-between items-center gap-4">
                <img src={image9} alt="image1"  className="flex-1 object-cover h-64 rounded-lg"/>
                <img src={image10} alt="image2"  className="flex-1 object-cover h-64 rounded-lg"/>
                {/* <img src={image8} alt="image3" /> */}
            </div>
           
            <GunsShowcase />

        </div>
    )
}

export default Showcase;