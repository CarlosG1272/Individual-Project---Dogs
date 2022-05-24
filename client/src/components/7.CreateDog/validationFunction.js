export const validationsForm = (form)=>{
    let errors = {};

    let hmin = parseFloat(form.height_min);
    let hmax = parseFloat(form.height_max);
    let wmin = parseFloat(form.weight_min);
    let wmax = parseFloat(form.weight_max);
    let lmin = parseFloat(form.min_life); 
    let lmax = parseFloat(form.max_life)


    if(!form.name.trim()) {
      errors.name = "Name is required"
    } else if (form.name.length <= 3){
      errors.name = "Name must be more to 3 letters"
    }

    if(!hmin) {
      errors.height_min = "Height min is required"
      // Estoy trabajando en pulgadas y libras 
      // MAX: 75 pulgadas o 200 cm
    } else if(hmin <= 0 || hmin > 75){
      errors.height_min = "Height min cannot be less than 0 or greater than 75 inches"
    } 

    if(!hmax) {
      errors.height_max = "Height max is required"
    } else if (hmax <= 0 || hmax > 75){
      errors.height_max = "Height max cannot be less than 0 or greater than 75 inches"
    } else if(hmax < hmin) {
      errors.height_max = "Height max cannot be less than min height"
    }

    // trabajaré el peso en libras
    // MAX: 200 libras --> 90kg aprox
    if(!wmin) {
      errors.weight_min = "Weight min is required"
    } else if (wmin <= 0 || wmin > 200){
      errors.weight_min = "Weight min cannot be less than 0 or greater than 200 punds"
    } 
    if(!wmax) {
      errors.weight_max = "Weight max is required"
    } else if (wmax <= 0 || wmax > 200){
      errors.weight_max = "Weight max cannot be less than 0 or greater than 200 punds"
    } else if(wmin > wmax) {
      errors.weight_max = "Weight max cannot be less than min height"
    }


    if(!lmin) {
      errors.min_life = "Min life span is required"
    } else if (lmin <= 0 || lmin > 20){
      errors.min_life = "Min life cannot be less than 0 or greater than 20 years"
    } 

    if(!lmax) {
      errors.max_life = "Max life  is required"
    } else if (lmax <= 0 || lmax > 20){
      errors.max_life = "Max life cannot be less than 0 or greater than 20 years"
    } else if(lmin > lmax) {
      errors.max_life = "Max life cannot be less than min height"
    }

    if(form.temperaments === 0) {
      errors.temperaments = "At the very least, there must be a temperament"
    }
    return errors
  }