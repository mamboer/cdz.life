let homePageStyle: HTMLStyleElement | undefined

function updateRainbowEffect(navToHomepage: boolean) {
  if (navToHomepage) {
    if (homePageStyle)
      return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  }
  else {
    if (!homePageStyle)
      return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}

export default defineNuxtRouteMiddleware((to, from) => {
  if (typeof window === 'undefined')
    return
  
  updateRainbowEffect(to.path === '/');
})
