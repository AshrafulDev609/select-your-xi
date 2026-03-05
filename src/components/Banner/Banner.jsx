import bannerImg from "../../assets/banner-main.png";
import bannerBG from "../../assets/bg-shadow.png";
const Banner = ({ handleClaimCoin }) => {
    return (
        <div className={`banner flex items-center justify-center "w-ful md:w-[1300px] mx-auto bg-no-repeat bg-cover rounded-md mt-5`}>
            <div className="text-center space-y-2 py-10">
                <img className="mx-auto w-32" src={bannerImg} alt="" />
                <h2 className="text-2xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p>Beyond Boundaries Beyond Limits</p>
                <div className="border border-[#E7FE29] w-[190px] mx-auto rounded-full p-2">
                <button onClick={handleClaimCoin} className="btn bg-[#E7FE29] rounded-full border-0">Claim Your Free Credit</button>
                </div>
            </div>
        </div>
    )
}


export default Banner;