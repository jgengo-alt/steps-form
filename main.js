let step = 1;

const updateProgress = (step) => {
  const progress = [...document.querySelectorAll('#progressbar li')];
  progress.forEach( (item, index) => {
    if (index < step)
      item.classList.add('active');
    else
      item.classList.remove('active');
  })
}

const nextStep = () => {
  const currentStep = document.querySelector(`[data-step="${step}"]`);
  step++;
  const nextStep = document.querySelector(`[data-step="${step}"]`);

  currentStep.classList.toggle('active');
  nextStep.classList.toggle('active');

  updateProgress(step);
  console.log(step);
};

const previousStep = () => {
  const currentStep = document.querySelector(`[data-step="${step}"]`);
  step--;
  const previousStep = document.querySelector(`[data-step="${step}"]`);

  currentStep.classList.toggle('active');
  previousStep.classList.toggle('active');

  updateProgress(step);
  console.log(step);
}

const toggle = (e) => {
  e.classList.toggle('active');
}