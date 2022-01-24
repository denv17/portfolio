// Functions
const onclickHamburguer = e => {
  const nav = document.querySelector('.js-nav')
  const hamburguer = document.querySelector('.js-hamburguer')

  if ( nav.classList.contains('active') ) {
    nav.classList.add('-top-[500px]')
    nav.classList.remove('top-0', 'active')
    hamburguer.querySelector(':first-child').classList.remove('rotate-45', 'translate-y-[0.63rem]')
    hamburguer.querySelector(':nth-child(2)').classList.remove('opacity-0')
    hamburguer.querySelector(':last-child').classList.remove('-rotate-45', '-translate-y-[0.63rem]')
  } else {
    nav.classList.remove('-top-[500px]')
    nav.classList.add('top-0', 'active')
    hamburguer.querySelector(':first-child').classList.add('rotate-45', 'translate-y-[0.63rem]')
    hamburguer.querySelector(':nth-child(2)').classList.add('opacity-0')
    hamburguer.querySelector(':last-child').classList.add('-rotate-45', '-translate-y-[0.63rem]')
  }
}

const onScroll = e => {
  const header = document.querySelector('.js-header')
  const nav = document.querySelector('.js-nav')
  const navItem = document.querySelectorAll('.js-nav-item')
  const socialItem = document.querySelectorAll('.js-social-item')
  const logo = document.querySelector('.js-logo')
  const hamburguerItem = document.querySelectorAll('.js-hamburguer div')

  console.log(navItem)

  const y = window.scrollY

  if ( y >= 150 ) {
    header.classList.add('bg-blue-100/80')
    nav.classList.add('bg-blue-100/80')
    navItem.forEach(e => e.classList.add('text-blue-300', 'md:text-blue-300'))
    socialItem.forEach(e => e.classList.add('fill-blue-300', 'md:fill-blue-300'))
    logo.classList.add('fill-blue-300')
    hamburguerItem.forEach(e => e.classList.add('bg-blue-300'))
  } else {
    header.classList.remove('bg-blue-100/80')
    nav.classList.remove('bg-blue-100/80')
    navItem.forEach(e => e.classList.remove('text-blue-300', 'md:text-blue-300'))
    socialItem.forEach(e => e.classList.remove('fill-blue-300', 'md:fill-blue-300'))
    logo.classList.remove('fill-blue-300')
    hamburguerItem.forEach(e => e.classList.remove('bg-blue-300'))
  }
}

// Init
const init = () => {
  const hamburguer = document.querySelector('.js-hamburguer')

  hamburguer.addEventListener( 'click', onclickHamburguer, false )

  window.addEventListener('scroll', onScroll, false)
}

export default init
