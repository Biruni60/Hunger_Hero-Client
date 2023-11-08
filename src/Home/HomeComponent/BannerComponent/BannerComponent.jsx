import PropTypes from "prop-types"

const BannerComponent = ({food}) => {
    return (
        <div className="w-full">
            <img className="w-full h-[30vh]" src={food.image} alt="" />
        </div>
    );
};
BannerComponent.propTypes={
    food:PropTypes.object
}
export default BannerComponent;