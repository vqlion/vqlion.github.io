const wrapper = document.getElementById('wrapper')
const projects = document.getElementsByClassName('project')

const projectsWidth = wrapper.offsetWidth
const projectsHeight = wrapper.offsetHeight
const leftOffset = projectsWidth / 2
const topOffset = projectsHeight / 2

const projectsCount = projects.length
const radius = 250

window.onload = () => {
  console.log(leftOffset, topOffset)
  console.log(projects)

  let offsetCount = 0

  const generateCircle = (angleOffest) => {

    for (let i = 0; i < projectsCount; i++) {
      let project = projects[i]

      let angle = (2 * Math.PI * i) / projectsCount + angleOffest

      let xPosition = radius * Math.cos(angle) + leftOffset
      let yPosition = radius * Math.sin(angle) + topOffset

      project.style.top = `${yPosition}px`
      project.style.left = `${xPosition}px`
    }
  }

  const animateCircle = setInterval(() => {
    generateCircle(offsetCount)
    console.log(offsetCount)
    offsetCount += Math.PI / 512
  }, 20)
}
