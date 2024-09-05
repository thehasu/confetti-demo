const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
  e.preventDefault();

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  var defaults = {
    spread: 200,
    ticks: 150,
    gravity: 0.1,
    decay: 0.94,
    startVelocity: 3,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
  };

  createRipple(e);

  confetti({
    ...defaults,
    particleCount: 8,
    scalar: 1.2,
    gravity: 0.12,
    shapes: ['star'],
    zIndex: 9999,
    origin: { x: x, y: y },
  });

  confetti({
    ...defaults,
    particleCount: 6,
    scalar: 0.75,
    gravity: 0.5,
    shapes: ['star'],
    zIndex: 9999,
    origin: { x: x, y: y },
  });

  confetti({
    ...defaults,
    particleCount: 4,
    scalar: 0.5,
    gravity: 0.25,
    shapes: ['star'],
    zIndex: 9999,
    origin: { x: x, y: y },
  });
});

function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(20, 20);
  const radius = diameter / 2;

  // Set the ripple's size and position
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add('ripple');

  // Append the ripple to the button
  button.appendChild(circle);

  // Remove the ripple after the animation is complete
  setTimeout(() => {
    circle.remove();
  }, 600); // Duration should match the animation time
}
