
const Question = () => {
    return (
        <div className="my-10">
        <h2 className="text-4xl text-center font-semibold text-orange-600 my-10 ">#FAQ</h2>
        <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  What is the purpose of this food donation website?
  </div>
  <div className="collapse-content"> 
    <p>This website aims to connect food donors with organizations and individuals in need to reduce food waste and combat hunger.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  How can I donate food through this website?
  </div>
  <div className="collapse-content"> 
    <p>To donate food, you can create an account, list the available food items, and choose a local organization or individual to donate to.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Can I donate non-perishable food items as well?
  </div>
  <div className="collapse-content"> 
    <p>Yes, you can donate both perishable and non-perishable food items. Please ensure that the food is within its expiration date and in good condition.</p>
  </div>
</div>
            
        </div>
    );
};

export default Question;