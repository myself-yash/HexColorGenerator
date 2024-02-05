const heading = document.querySelector('h2')
const button = document.querySelector('button')

const randomColor = () => {
    const color = `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`
    heading.innerText = color
    document.querySelector('body').style.backgroundColor = color
    return color
}

button.addEventListener('click',randomColor)

randomColor()