class Slider {
  static #content = null //for slider__content
  static #left = null // кнопка перемотки назад
  static #right = null // кнопка вперед

  static #count = 1 //номер якої картинки є поточним
  static #max = null // скільки всього картинок( тут 5 шт)

  static init = () => {
    this.#content = document.querySelector(
      '.slider__content',
    )
    this.#left = document.querySelector(
      '.slider__button--left',
    )
    this.#right = document.querySelector(
      '.slider__button--right',
    )

    this.#max = this.#content.childElementCount

    console.log(
      this.#content,
      this.#left,
      this.#right,
      this.#max,
    )

    this.#left.onclick = () => this.#slide('left')
    this.#right.onclick = () => this.#slide('right')
  }

  static #slide = (side) => {
    const offsetWidth = this.#content.offsetWidth
    const scrollLeft = this.#content.scrollLeft
    const scrollWidth = this.#content.scrollWidth

    // my idea)))

    // //right
    // if (this.#count < this.#max && side === 'right') {
    //   this.#content.scrollBy({
    //     behavior: 'smooth',
    //     top: 0,
    //     left: offsetWidth,
    //   })
    //   this.#count++
    // }
    // //left
    // if (scrollLeft >= offsetWidth && side === 'left') {
    //   this.#content.scrollBy({
    //     behavior: 'smooth',
    //     top: 0,
    //     left: -offsetWidth,
    //   })
    //   this.#count--
    // }

    let scroll = 0
    // with #count and #max
    if (side === 'right') {
      if (this.#count === this.#max) {
        this.#count = 1
        scroll = 0
      } else {
        this.#count += 1
        scroll = offsetWidth * (this.#count - 1)
      }
    }

    if (side === 'left') {
      if (this.#count === 1) {
        this.#count = this.#max
        scroll = offsetWidth * (this.#count - 1)
      } else {
        this.#count -= 1
        scroll = offsetWidth * (this.#count - 1)
      }
    }

    //    with scrollLeft and scrollWidth, якщо немає #count

    // if (side === 'right') {

    //   if (
    //     this.scrollLeft ===
    //     this.scrollWidth - this.offsetWidth
    //   ) {
    //     this.#count = 1
    //     scroll = 0
    //   } else {
    //     this.#count += 1
    //     scroll = offsetWidth * (this.#count - 1)
    //   }
    // }

    // if (side === 'left') {

    //   if (scrollLeft === 0) {
    //     scroll = scrollWidth - offsetWidth
    //     this.#count = this.#max
    //   } else {
    //     this.#count -= 1
    //     scroll = offsetWidth * (this.#count - 1)
    //   }
    // }

    this.#content.scrollTo({
      behavior: 'smooth',
      top: 0,
      left: scroll,
    })
  }
}

Slider.init()

class Header {
  static #height = null // для висоти header
  static #wrapper = null // for   class="header__wrapper
  static #button = null // for   class="header__button"

  static #isOpen = false

  static init = () => {
    this.#height = document.querySelector(
      '.header__bottom',
    ).offsetHeight
    this.#wrapper = document.querySelector(
      '.header__wrapper',
    )
    this.#button = document.querySelector('.header__button')

    // console.log(this.#height, this.#wrapper, this.#button)

    this.#button.onclick = this.#toggle
  }

  static #toggle = () => {
    if (this.#isOpen) {
      this.#button.classList.replace(
        'header__button--close',
        'header__button--open',
      )
      this.#wrapper.style.height = 0
    } else {
      this.#button.classList.replace(
        'header__button--open',
        'header__button--close',
      )
      this.#wrapper.style.height = `${this.#height}px`
    }

    this.#isOpen = !this.#isOpen
  }
}

Header.init()
